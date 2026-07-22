#!/usr/bin/env python3
"""Generate the normal English bank: 25 Lexile levels, 100 unique questions each."""

import json
import random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "english.json"

TOPICS = [
    ("home", "家庭", "household"), ("school", "学校", "classroom"),
    ("playground", "游乐场", "playground"), ("garden", "花园", "garden"),
    ("weather", "天气", "weather"), ("journey", "旅行", "travel"),
    ("health", "健康", "health"), ("community", "社区", "community"),
    ("technology", "科技", "technical"), ("ecology", "生态", "ecological"),
    ("history", "历史", "historical"), ("geography", "地理", "geographic"),
    ("biology", "生物", "biological"), ("astronomy", "天文", "astronomical"),
    ("economics", "经济", "economic"), ("literature", "文学", "literary"),
    ("psychology", "心理学", "psychological"), ("sociology", "社会学", "sociological"),
    ("ethics", "伦理学", "ethical"), ("politics", "政治学", "political"),
    ("archaeology", "考古学", "archaeological"), ("law", "法学", "legal"),
    ("epistemology", "认识论", "epistemological"),
    ("phenomenology", "现象学", "phenomenological"),
    ("historiography", "史学理论", "historiographical"),
]

CONCEPT_BANDS = [
    [("routine", "日常安排", "daily habit"), ("helper", "帮手", "assistant"),
     ("place", "地点", "location"), ("rule", "规则", "guideline"),
     ("task", "任务", "job"), ("story", "故事", "tale"),
     ("choice", "选择", "selection"), ("group", "小组", "team"),
     ("tool", "工具", "instrument"), ("signal", "信号", "sign"),
     ("change", "变化", "shift"), ("problem", "问题", "difficulty"),
     ("answer", "答案", "response"), ("plan", "计划", "scheme"),
     ("path", "路径", "route"), ("event", "事件", "occasion"),
     ("detail", "细节", "particular"), ("result", "结果", "outcome"),
     ("reason", "原因", "cause"), ("example", "例子", "instance")],
    [("pattern", "模式", "arrangement"), ("process", "过程", "procedure"),
     ("resource", "资源", "asset"), ("method", "方法", "approach"),
     ("feature", "特征", "characteristic"), ("factor", "因素", "element"),
     ("effect", "影响", "impact"), ("purpose", "目的", "aim"),
     ("context", "背景", "setting"), ("structure", "结构", "framework"),
     ("principle", "原则", "rule"), ("evidence", "证据", "proof"),
     ("perspective", "视角", "viewpoint"), ("strategy", "策略", "tactic"),
     ("response", "反应", "reaction"), ("sequence", "顺序", "order"),
     ("contrast", "对比", "difference"), ("connection", "联系", "link"),
     ("interpretation", "解释", "reading"), ("consequence", "后果", "result")],
    [("hypothesis", "假设", "proposition"), ("mechanism", "机制", "process"),
     ("variable", "变量", "factor"), ("criterion", "标准", "benchmark"),
     ("inference", "推论", "deduction"), ("correlation", "相关性", "association"),
     ("phenomenon", "现象", "occurrence"), ("methodology", "方法论", "procedure"),
     ("constraint", "限制条件", "restriction"), ("distribution", "分布", "allocation"),
     ("configuration", "构型", "arrangement"), ("transformation", "转化", "conversion"),
     ("classification", "分类", "categorization"), ("implication", "含义", "consequence"),
     ("approximation", "近似值", "estimate"), ("interaction", "相互作用", "interplay"),
     ("interpretive lens", "解释视角", "analytical viewpoint"),
     ("conceptual model", "概念模型", "theoretical representation"),
     ("causal account", "因果解释", "causal explanation"),
     ("empirical claim", "实证主张", "evidence-based assertion")],
    [("paradigm", "范式", "conceptual model"), ("contingency", "偶然条件", "conditional circumstance"),
     ("dichotomy", "二分法", "two-part division"), ("heuristic", "启发式方法", "practical shortcut"),
     ("ontology", "本体论", "theory of existence"), ("premise", "前提", "assumption"),
     ("proposition", "命题", "assertion"), ("rationale", "理论依据", "justification"),
     ("trajectory", "发展轨迹", "course of development"), ("discourse", "话语体系", "structured discussion"),
     ("dialectic", "辩证关系", "reasoned opposition"), ("plurality", "多元性", "multiplicity"),
     ("salience", "显著性", "prominence"), ("coherence", "连贯性", "consistency"),
     ("ambiguity", "歧义", "uncertainty of meaning"), ("reciprocity", "互惠性", "mutual exchange"),
     ("legitimacy", "正当性", "justified authority"), ("causality", "因果性", "causal relation"),
     ("normative claim", "规范性主张", "value-based assertion"),
     ("analytical synthesis", "分析性综合", "integrated analysis")],
    [("epistemic warrant", "认识论依据", "justification for knowledge"),
     ("hermeneutic circle", "诠释学循环", "recursive interpretive process"),
     ("ontological commitment", "本体论承诺", "assumption about existence"),
     ("discursive formation", "话语构型", "system of organized discourse"),
     ("teleological account", "目的论解释", "purpose-based explanation"),
     ("counterfactual dependence", "反事实依赖", "dependence under an unreal condition"),
     ("conceptual indeterminacy", "概念不确定性", "uncertainty in a concept"),
     ("methodological pluralism", "方法论多元主义", "use of multiple methods"),
     ("normative framework", "规范性框架", "system of evaluative rules"),
     ("dialectical tension", "辩证张力", "opposition that drives change"),
     ("interpretive contingency", "解释的偶然性", "context-dependent interpretation"),
     ("institutional mediation", "制度中介", "influence exerted through institutions"),
     ("semantic underdetermination", "语义不充分决定", "insufficiently fixed meaning"),
     ("historical specificity", "历史特殊性", "distinctiveness of a historical context"),
     ("analytical commensurability", "分析可通约性", "capacity for common comparison"),
     ("epistemological rupture", "认识论断裂", "break in a system of knowledge"),
     ("phenomenological reduction", "现象学还原", "suspension of ordinary assumptions"),
     ("genealogical critique", "谱系学批判", "critique through historical descent"),
     ("metatheoretical synthesis", "元理论综合", "integration across theories"),
     ("historiographical revision", "史学修正", "reinterpretation of historical writing")],
]

GRAMMAR_STEMS = [
    ("is", "are", "was", "be"), ("has", "have", "having", "had been"),
    ("works", "work", "working", "worked"), ("was", "were", "be", "being"),
    ("will", "would", "has", "had"), ("can", "could have", "is", "did"),
]

def loc(value_en, value_zh):
    return {"zh": value_zh, "en": value_en}

def rotate(items, answer, seed):
    rng = random.Random(seed)
    tagged = [(x, i == answer) for i, x in enumerate(items)]
    rng.shuffle(tagged)
    return [x for x, _ in tagged], next(i for i, (_, ok) in enumerate(tagged) if ok)

def vocab_questions(level, topic_en, topic_zh, adjective):
    band = min((level - 1) // 5, 4)
    concepts = CONCEPT_BANDS[band]
    result = []
    for i, (noun, noun_zh, synonym) in enumerate(concepts):
        term = f"{adjective} {noun}"
        correct_en = f"the {noun} associated with {topic_en}"
        correct_zh = f"与{topic_zh}有关的{noun_zh}"
        distractors = []
        for jump in (3, 7, 11):
            other = concepts[(i + jump) % len(concepts)]
            distractors.append(loc(f"the {other[0]} associated with {topic_en}", f"与{topic_zh}有关的{other[1]}"))
        opts, ans = rotate([loc(correct_en, correct_zh)] + distractors, 0, level * 1000 + i)
        result.append({
            "type": "meaning",
            "question": loc(f'What does “{term}” mean in this context?', f'“{term}”在此语境中是什么意思？'),
            "options": opts, "answer": ans, "knowledge": "vocabulary-in-context"
        })

        syn_term = f"{adjective} {synonym}"
        distractor_syns = [concepts[(i + j) % 20][2] for j in (4, 8, 12)]
        syn_opts, syn_ans = rotate(
            [loc(syn_term, f"{topic_zh}{synonym}")] + [loc(f"{adjective} {x}", f"{topic_zh}{x}") for x in distractor_syns],
            0, level * 2000 + i)
        result.append({
            "type": "synonym",
            "question": loc(f'Which phrase is closest in meaning to “{term}”?', f'哪个短语与“{term}”含义最接近？'),
            "options": syn_opts, "answer": syn_ans, "knowledge": "synonyms-in-context"
        })
    return result

def grammar_questions(level, topic_en, topic_zh, adjective):
    band = min((level - 1) // 5, 4)
    out = []
    for i in range(30):
        subject = ["The student", "Each observer", "The research team", "A careful reader", "The committee"][band]
        focus = CONCEPT_BANDS[band][i % 20][0]
        variant = i % 6
        if band == 0:
            templates = [
                (f"{subject} ___ the {adjective} {focus} every morning.", ["checks", "check", "checking", "checked"], 0, "subject-verb agreement"),
                (f"There ___ one {adjective} {focus} in the story.", ["is", "are", "were", "be"], 0, "there-be"),
                (f"Yesterday, {subject.lower()} ___ the {adjective} {focus}.", ["noticed", "notice", "notices", "noticing"], 0, "simple past"),
                (f"The {adjective} {focus} is ___ than the old one.", ["clearer", "clearest", "clearly", "clear"], 0, "comparative"),
                (f"{subject} can ___ this {adjective} {focus}.", ["explain", "explains", "explained", "explaining"], 0, "modal verb"),
                (f"The notes ___ beside the {adjective} {focus}.", ["are", "is", "was", "be"], 0, "plural agreement"),
            ]
        elif band == 1:
            templates = [
                (f"By noon, {subject.lower()} ___ the {adjective} {focus} twice.", ["had reviewed", "reviews", "is reviewing", "will review"], 0, "past perfect"),
                (f"If the {adjective} {focus} changes, the team ___ its plan.", ["will revise", "revised", "had revised", "revising"], 0, "first conditional"),
                (f"The {adjective} {focus} ___ by several observers last week.", ["was recorded", "recorded", "has recording", "is record"], 0, "passive voice"),
                (f"Neither the guide nor the students ___ the {adjective} {focus}.", ["ignore", "ignores", "ignoring", "has ignored"], 0, "agreement"),
                (f"{subject} asked whether the {adjective} {focus} ___ reliable.", ["was", "is being", "has", "be"], 0, "reported question"),
                (f"The {adjective} {focus}, which appeared suddenly, ___ further study.", ["requires", "require", "requiring", "have required"], 0, "relative clause"),
            ]
        elif band == 2:
            templates = [
                (f"Had the {adjective} {focus} been measured earlier, the conclusion ___ different.", ["might have been", "will be", "is", "has been"], 0, "third conditional"),
                (f"The analyst recommended that the {adjective} {focus} ___ independently.", ["be tested", "is tested", "was testing", "has test"], 0, "subjunctive"),
                (f"Not until the data were compared ___ the {adjective} {focus} become clear.", ["did", "was", "has", "would"], 0, "inversion"),
                (f"The {adjective} {focus} is believed ___ several later decisions.", ["to have influenced", "influencing", "has influence", "to influencing"], 0, "perfect infinitive"),
                (f"What the report omits ___ how the {adjective} {focus} was defined.", ["is", "are", "have", "being"], 0, "nominal clause"),
                (f"Having examined the {adjective} {focus}, the researchers ___ their initial claim.", ["qualified", "qualifying", "had qualify", "were qualification"], 0, "participle clause"),
            ]
        elif band == 3:
            templates = [
                (f"Were the {adjective} {focus} less ambiguous, the argument ___ easier to defend.", ["would be", "will be", "was", "has been"], 0, "inverted conditional"),
                (f"Scarcely ___ the {adjective} {focus} been articulated when objections emerged.", ["had", "has", "was", "did"], 0, "negative inversion"),
                (f"The extent to which the {adjective} {focus} can be generalized ___ contested.", ["remains", "remain", "remaining", "have remained"], 0, "complex agreement"),
                (f"The scholar writes as though the {adjective} {focus} ___ self-evident.", ["were", "is", "has", "being"], 0, "irrealis mood"),
                (f"Only by contextualizing the {adjective} {focus} ___ its limitations be recognized.", ["can", "it can", "can it", "could it has"], 0, "inversion after only"),
                (f"The {adjective} {focus}, far from being conclusive, ___ a provisional reading.", ["constitutes", "constitute", "constituting", "have constituted"], 0, "parenthetical agreement"),
            ]
        else:
            templates = [
                (f"However compelling the {adjective} {focus} may appear, it ___ epistemically defeasible.", ["remains", "remain", "remaining", "have remained"], 0, "concessive clause"),
                (f"Had it not been for the {adjective} {focus}, the thesis ___ its apparent coherence.", ["would have lost", "will lose", "had lose", "loses"], 0, "counterfactual conditional"),
                (f"So thoroughly ___ the author problematize the {adjective} {focus} that no premise escapes scrutiny.", ["does", "is", "has", "was"], 0, "degree inversion"),
                (f"The {adjective} {focus} is not so much rejected as ___ within a different ontology.", ["reinscribed", "reinscribing", "reinscribes", "has reinscribe"], 0, "parallel passive construction"),
                (f"Whether the {adjective} {focus} warrants revision depends on what one ___ as evidence.", ["accepts", "accept", "accepting", "has accept"], 0, "embedded interrogative"),
                (f"Rarely, if ever, ___ a {adjective} {focus} remain neutral across rival paradigms.", ["does", "is", "has", "was"], 0, "restrictive-adverb inversion"),
            ]
        stem, choices, answer, knowledge = templates[variant]
        opts, ans = rotate([loc(x, x) for x in choices], answer, level * 3000 + i)
        out.append({
            "type": "grammar",
            "question": loc(stem, f"选择正确选项完成句子（{topic_zh}语境）：{stem}"),
            "options": opts, "answer": ans, "knowledge": knowledge
        })
    return out

def reading_questions(level, topic_en, topic_zh, adjective):
    band = min((level - 1) // 5, 4)
    out = []
    connectors = ["First", "Afterward", "Meanwhile", "Therefore", "Finally"]
    zh_connectors = ["首先", "之后", "与此同时", "因此", "最后"]
    for i in range(30):
        focus, focus_zh, _ = CONCEPT_BANDS[band][i % 20]
        action = ["recorded", "compared", "questioned", "revised", "contextualized"][band]
        outcome = ["a useful answer", "a clearer pattern", "a qualified conclusion", "a contested interpretation", "a provisional synthesis"][band]
        outcome_zh = ["一个有用的答案", "一个更清晰的模式", "一个有限定条件的结论", "一种有争议的解释", "一种暂定的综合判断"][band]
        sentence_count = band + 2
        en_sentences = [
            f"During {topic_en} study {i + 1}, a reader {action} the {adjective} {focus}.",
            f"The reader checked two sources before accepting {outcome}.",
            f"{connectors[(i + 1) % 5]}, a conflicting detail prompted another comparison.",
            f"The revised account distinguished evidence from assumption.",
            f"Its conclusion remained open to later correction.",
            f"This caution made the final interpretation more defensible without making it absolute.",
        ][:sentence_count]
        zh_sentences = [
            f"在第{i + 1}项{topic_zh}研究中，一位读者对{adjective} {focus_zh}进行了分析。",
            f"读者在接受{outcome_zh}之前核对了两个来源。",
            f"{zh_connectors[(i + 1) % 5]}，一个相互矛盾的细节促使读者再次比较。",
            "修订后的论述区分了证据与假设。",
            "其结论仍允许日后修正。",
            "这种谨慎使最终解释更可辩护，但并未把它当作绝对真理。",
        ][:sentence_count]
        q_en = f"What did the reader do before accepting the outcome in {topic_en} study {i + 1}?"
        q_zh = f"在第{i + 1}项{topic_zh}研究中，读者在接受结果前做了什么？"
        choices = [
            loc("Checked two sources", "核对了两个来源"),
            loc("Ignored every source", "忽略了所有来源"),
            loc("Changed the topic immediately", "立即改变了主题"),
            loc("Accepted the first claim without review", "未经审查便接受了第一个主张"),
        ]
        opts, ans = rotate(choices, 0, level * 4000 + i)
        out.append({
            "type": "reading", "passage": loc(" ".join(en_sentences), "".join(zh_sentences)),
            "question": loc(q_en, q_zh), "options": opts, "answer": ans,
            "knowledge": "reading-comprehension"
        })
    return out

def generate():
    levels = []
    for level, (topic_en, topic_zh, adjective) in enumerate(TOPICS, 1):
        questions = []
        questions.extend(vocab_questions(level, topic_en, topic_zh, adjective))  # 40
        questions.extend(grammar_questions(level, topic_en, topic_zh, adjective))  # 30
        questions.extend(reading_questions(level, topic_en, topic_zh, adjective))  # 30
        assert len(questions) == 100
        for n, q in enumerate(questions, 1):
            q["id"] = f"e{level}_{n:03d}"
            q["difficulty"] = level
        levels.append({
            "id": str(level),
            "name": loc(f"Lexile {level * 100}L", f"蓝思 {level * 100}L"),
            "questions": questions,
        })
    OUT.write_text(json.dumps({"subject": "english", "levels": levels}, ensure_ascii=False, indent=2) + "\n")

if __name__ == "__main__":
    generate()
