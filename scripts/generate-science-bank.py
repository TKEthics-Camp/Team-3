#!/usr/bin/env python3
"""Generate the 12 x 100 standard science bank from the curated concept model."""

from __future__ import annotations

import copy
import json
import math
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MODEL_PATH = ROOT / "data" / "hard-science.json"
OUTPUT_PATH = ROOT / "data" / "science.json"


def bi(zh: str, en: str) -> dict[str, str]:
    return {"zh": zh, "en": en}


def text(value, language: str) -> str:
    if isinstance(value, dict):
        return str(value.get(language) or value.get("en") or value.get("zh") or "")
    return str(value)


def rotate(options: list[dict], answer: int, shift: int):
    shift %= len(options)
    return options[shift:] + options[:shift], (answer - shift) % len(options)


def place_answer(options: list[dict], answer: int, target: int):
    """Rotate without changing content so the correct choice lands at target."""
    return rotate(options, answer, answer - target)


def make_question(
    level: int,
    concept_index: int,
    task_index: int,
    knowledge,
    question_zh: str,
    question_en: str,
    options: list[dict],
    answer: int,
):
    target = ((concept_index - 1) * 10 + task_index - 1 + level) % 4
    options, answer = place_answer(copy.deepcopy(options), answer, target)
    return {
        "id": f"s{level:02d}_{concept_index:02d}_{task_index:02d}",
        "type": "mc",
        "question": bi(question_zh, question_en),
        "options": options,
        "answer": answer,
        "difficulty": min(5, 1 + math.ceil(level / 3)),
        "knowledge": copy.deepcopy(knowledge),
    }


def additional_questions(level: int, concept_index: int, group: list[dict]):
    knowledge = group[0]["knowledge"]
    kzh, ken = text(knowledge, "zh"), text(knowledge, "en")
    claim = copy.deepcopy(group[0]["options"][group[0]["answer"]])
    observation = copy.deepcopy(group[2]["options"][group[2]["answer"]])
    prediction = copy.deepcopy(group[4]["options"][group[4]["answer"]])

    generic = {
        "fair": bi("只改变要研究的因素，其他条件保持相同", "Change only the factor being tested and keep other conditions the same"),
        "unfair": bi("同时改变多个因素，之后只测量一次", "Change several factors at once and then measure only once"),
        "select": bi("只保留符合原先猜想的数据", "Keep only the data that agree with the original guess"),
        "methods": bi("实验组和对照组使用不同的测量方法", "Use different measurement methods for the test and comparison groups"),
        "repeat": bi("重复测量并比较各次结果", "Repeat the measurements and compare the results"),
        "one": bi("只做一次测量并把结果当作永远正确", "Make one measurement and treat it as universally true"),
        "revise": bi("检查过程、重复试验，并根据全部证据修改解释", "Check the procedure, repeat the test, and revise the explanation using all evidence"),
        "discard": bi("删除不符合预测的数据", "Delete data that do not match the prediction"),
        "ignore": bi("忽略结果并继续坚持原来的说法", "Ignore the result and keep the original claim unchanged"),
        "unrelated": bi("用一个无关故事替代测量证据", "Replace measured evidence with an unrelated story"),
    }

    if level <= 3:
        prompts = [
            (f"学习“{kzh}”时，哪项观察最有用？", f"When learning about {ken}, which observation is most useful?"),
            (f"要公平比较“{kzh}”，应该怎么做？", f"How can a comparison about {ken} be made fair?"),
            (f"怎样让“{kzh}”的测量结果更可靠？", f"How can measurements about {ken} be made more reliable?"),
            (f"如果“{kzh}”的结果和猜想不同，下一步应该做什么？", f"If a result about {ken} differs from the prediction, what should be done next?"),
            (f"关于“{kzh}”，哪项是可以用观察检验的预测？", f"Which prediction about {ken} can be checked by observation?"),
        ]
    elif level <= 6:
        prompts = [
            (f"研究“{kzh}”时，哪项证据与结论最直接相关？", f"Which evidence is most directly relevant to a conclusion about {ken}?"),
            (f"设计“{kzh}”实验时，怎样控制变量最合理？", f"What is the best way to control variables in an investigation of {ken}?"),
            (f"哪项做法最能提高“{kzh}”测量的可靠性？", f"Which practice most improves the reliability of measurements about {ken}?"),
            (f"若“{kzh}”数据与预测不符，研究者应如何处理？", f"How should researchers respond when data about {ken} conflict with a prediction?"),
            (f"哪项是根据“{kzh}”已有规律作出的可检验预测？", f"Which is a testable prediction based on the known pattern in {ken}?"),
        ]
    elif level <= 9:
        prompts = [
            (f"评估“{kzh}”相关主张时，哪项证据具有最高相关性？", f"Which evidence is most relevant when evaluating a claim about {ken}?"),
            (f"关于“{kzh}”的对照实验中，哪项变量控制策略最有效？", f"Which variable-control strategy is strongest in a controlled study of {ken}?"),
            (f"哪项改进最能降低“{kzh}”实验中的随机误差？", f"Which improvement most reduces random error in an experiment about {ken}?"),
            (f"当“{kzh}”结果与模型预测矛盾时，最科学的处理是什么？", f"What is the most scientific response when results about {ken} conflict with a model?"),
            (f"哪项预测既符合“{kzh}”模型又可以被反驳？", f"Which prediction follows from the model of {ken} and is also falsifiable?"),
        ]
    else:
        prompts = [
            (f"检验“{kzh}”机制性解释时，哪项证据与因果主张最直接相关？", f"Which evidence is most directly relevant to a causal account of {ken}?"),
            (f"研究“{kzh}”时，哪种设计最能排除混杂变量？", f"Which design best limits confounding variables in a study of {ken}?"),
            (f"哪项措施最能提高“{kzh}”结果的可重复性？", f"Which measure most improves reproducibility of findings about {ken}?"),
            (f"“{kzh}”数据违背模型预测时，哪种处理最符合证伪原则？", f"When data about {ken} violate a model prediction, which response best follows falsification principles?"),
            (f"下列哪项是由“{kzh}”模型导出的、具有经验风险的预测？", f"Which is an empirically risky prediction derived from the model of {ken}?"),
        ]

    specifications = [
        ([observation, generic["unrelated"], generic["select"], generic["one"]], 0),
        ([generic["fair"], generic["unfair"], generic["select"], generic["methods"]], 0),
        ([generic["repeat"], generic["one"], generic["select"], generic["methods"]], 0),
        ([generic["revise"], generic["discard"], generic["ignore"], generic["unrelated"]], 0),
        ([prediction, generic["one"], generic["unrelated"], generic["ignore"]], 0),
    ]

    output = []
    for offset, ((question_zh, question_en), (options, answer)) in enumerate(zip(prompts, specifications), 6):
        output.append(make_question(level, concept_index, offset, knowledge, question_zh, question_en, options, answer))
    return output


def normalize_model_question(level: int, concept_index: int, task_index: int, source: dict):
    question = copy.deepcopy(source)
    question["id"] = f"s{level:02d}_{concept_index:02d}_{task_index:02d}"
    question["difficulty"] = min(5, 1 + math.ceil(level / 3))
    question.pop("hardMode", None)
    target = ((concept_index - 1) * 10 + task_index - 1 + level) % 4
    options, answer = place_answer(question["options"], int(question["answer"]), target)
    question["options"] = options
    question["answer"] = answer
    return question


def main():
    model = json.loads(MODEL_PATH.read_text(encoding="utf-8"))
    levels = []
    for expected_level, source_level in enumerate(model["levels"], 1):
        questions = source_level["questions"]
        if len(questions) != 50:
            raise ValueError(f"Level {expected_level}: expected 50 model questions")
        groups = [questions[index:index + 5] for index in range(0, 50, 5)]
        output_questions = []
        for concept_index, group in enumerate(groups, 1):
            if len(group) != 5:
                raise ValueError(f"Level {expected_level}, concept {concept_index}: incomplete model")
            output_questions.extend(
                normalize_model_question(expected_level, concept_index, task_index, source)
                for task_index, source in enumerate(group, 1)
            )
            output_questions.extend(additional_questions(expected_level, concept_index, group))
        if len(output_questions) != 100:
            raise ValueError(f"Level {expected_level}: generated {len(output_questions)} questions")
        levels.append({
            "id": str(expected_level),
            "name": copy.deepcopy(source_level["name"]),
            "questions": output_questions,
        })

    payload = {
        "schemaVersion": 1,
        "subject": "science",
        "mode": "normal",
        "levels": levels,
    }
    OUTPUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
