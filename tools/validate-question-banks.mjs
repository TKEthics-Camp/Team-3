import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sources = ['math', 'english', 'science'].flatMap(subject => [
  { file: `${subject}.json`, subject, mode: 'normal' },
  { file: `hard-${subject}.json`, subject, mode: 'hard' },
]);

const fail = (file, message) => {
  throw new Error(`${file}: ${message}`);
};

const isLocalizedText = value =>
  (typeof value === 'string' && value.length > 0) ||
  (value &&
    typeof value === 'object' &&
    typeof value.zh === 'string' &&
    value.zh.length > 0 &&
    typeof value.en === 'string' &&
    value.en.length > 0);

function validateQuestion(file, question, questionIds) {
  if (!question || typeof question !== 'object') fail(file, 'question must be an object');
  if (typeof question.id !== 'string' || !question.id) fail(file, 'question id is required');
  if (questionIds.has(question.id)) fail(file, `duplicate question id ${question.id}`);
  questionIds.add(question.id);
  if (!isLocalizedText(question.question)) fail(file, `${question.id} has invalid question text`);
  if (typeof question.answer !== 'number' || !Number.isFinite(question.answer)) {
    fail(file, `${question.id} has an invalid answer`);
  }
  if (question.type === 'number') return;
  if (!Array.isArray(question.options) || question.options.length < 2) {
    fail(file, `${question.id} must provide at least two options`);
  }
  if (
    !Number.isInteger(question.answer) ||
    question.answer < 0 ||
    question.answer >= question.options.length
  ) {
    fail(file, `${question.id} answer is outside its options`);
  }
  if (!question.options.every(isLocalizedText)) fail(file, `${question.id} has invalid option text`);
  if (question.type === 'reading' && !isLocalizedText(question.passage)) {
    fail(file, `${question.id} requires a passage`);
  }
}

async function validateBank(source) {
  const filePath = path.join(root, 'data', source.file);
  const bank = JSON.parse(await readFile(filePath, 'utf8'));
  const allowedKeys = new Set(['schemaVersion', 'subject', 'mode', 'levels']);
  const extraKeys = Object.keys(bank).filter(key => !allowedKeys.has(key));
  if (extraKeys.length) fail(source.file, `unexpected top-level keys: ${extraKeys.join(', ')}`);
  if (bank.schemaVersion !== 1) fail(source.file, 'schemaVersion must be 1');
  if (bank.subject !== source.subject) fail(source.file, `subject must be ${source.subject}`);
  if (bank.mode !== source.mode) fail(source.file, `mode must be ${source.mode}`);
  if (!Array.isArray(bank.levels) || !bank.levels.length) fail(source.file, 'levels are required');

  const levelIds = new Set();
  const questionIds = new Set();
  for (const level of bank.levels) {
    if (typeof level?.id !== 'string' || !level.id) fail(source.file, 'level id is required');
    if (levelIds.has(level.id)) fail(source.file, `duplicate level id ${level.id}`);
    levelIds.add(level.id);
    if (!isLocalizedText(level.name)) fail(source.file, `level ${level.id} has an invalid name`);
    if (!Array.isArray(level.questions) || !level.questions.length) {
      fail(source.file, `level ${level.id} has no questions`);
    }
    level.questions.forEach(question => validateQuestion(source.file, question, questionIds));
  }

  return {
    file: source.file,
    levels: bank.levels.length,
    questions: questionIds.size,
  };
}

const results = await Promise.all(sources.map(validateBank));
for (const result of results) {
  console.log(`${result.file}: ${result.levels} levels, ${result.questions} questions`);
}
console.log(`Validated ${results.length} runtime question banks.`);
