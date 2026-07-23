#!/usr/bin/env python3
"""Build the standalone 25 x 50 hard-mode English question bank."""

from __future__ import annotations

import copy
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "english.json"
OUTPUT = ROOT / "data" / "hard-english.json"


THEMES = [
    ("school garden", "校园花园"),
    ("community library", "社区图书馆"),
    ("wildlife shelter", "野生动物救助站"),
    ("weather station", "气象站"),
    ("recycling program", "回收计划"),
    ("river survey", "河流调查"),
    ("local history project", "地方史项目"),
    ("urban farming trial", "城市农业试验"),
    ("renewable-energy exhibit", "可再生能源展览"),
    ("public-health campaign", "公共健康行动"),
    ("biodiversity study", "生物多样性研究"),
    ("archaeological field report", "考古田野报告"),
    ("digital-privacy inquiry", "数字隐私调查"),
    ("water-policy debate", "水资源政策辩论"),
    ("climate-adaptation plan", "气候适应方案"),
    ("behavioral-economics experiment", "行为经济学实验"),
    ("linguistic-change archive", "语言演变档案"),
    ("medical-ethics review", "医学伦理审查"),
    ("constitutional-law seminar", "宪法学研讨会"),
    ("artificial-intelligence audit", "人工智能审计"),
    ("macroeconomic forecast", "宏观经济预测"),
    ("epistemology colloquium", "认识论专题讨论"),
    ("comparative-literature symposium", "比较文学研讨会"),
    ("quantum-information proposal", "量子信息研究提案"),
    ("interdisciplinary policy critique", "跨学科政策批评"),
]


def bi(zh: str, en: str) -> dict[str, str]:
    return {"zh": zh, "en": en}


def rotate_options(options, answer: int, shift: int):
    shift %= len(options)
    rotated = options[shift:] + options[:shift]
    return rotated, (answer - shift) % len(options)


def lexical_questions(level: int, theme_en: str, theme_zh: str):
    band = min(4, (level - 1) // 5)
    banks = [
        [
            ("infer", "reach a conclusion from evidence", "根据证据作出推断", "guess without reading", "不阅读就猜测"),
            ("concise", "brief but complete", "简洁而完整的", "needlessly repetitive", "不必要地重复的"),
            ("resilient", "able to recover after difficulty", "能从困难中恢复的", "certain to collapse", "必然崩溃的"),
            ("deliberate", "carefully considered", "经过慎重考虑的", "entirely accidental", "完全偶然的"),
            ("plausible", "seemingly reasonable or probable", "看似合理或可能的", "logically impossible", "逻辑上不可能的"),
            ("retain", "continue to keep or possess", "继续保留或拥有", "discard immediately", "立刻丢弃"),
            ("contrast", "identify meaningful differences", "识别重要差异", "declare two things identical", "宣称两者完全相同"),
            ("subsequent", "occurring later in time", "随后发生的", "occurring beforehand", "事先发生的"),
            ("precise", "exact and carefully defined", "精确且界定清楚的", "vague and approximate", "模糊而近似的"),
            ("justify", "give sound reasons for", "为某事提供充分理由", "avoid every explanation", "回避一切解释"),
        ],
        [
            ("corroborate", "confirm with additional evidence", "用额外证据证实", "conceal permanently", "永久隐瞒"),
            ("nuanced", "showing subtle distinctions", "体现细微差别的", "lacking every distinction", "毫无区别的"),
            ("tentative", "not yet fully settled", "尚未完全确定的", "beyond all revision", "绝不容修改的"),
            ("coherent", "logically connected and consistent", "逻辑连贯且一致的", "randomly disconnected", "随机且不连贯的"),
            ("constrain", "limit the range of possibilities", "限制可能性的范围", "guarantee unlimited growth", "保证无限增长"),
            ("ambivalent", "having conflicting feelings", "怀有矛盾感受的", "completely indifferent", "完全漠不关心的"),
            ("cumulative", "increasing through successive additions", "通过连续累加而增加的", "shrinking in one isolated step", "在单一步骤中缩小的"),
            ("discriminate", "recognize a meaningful difference", "辨认有意义的差别", "confuse every category", "混淆所有类别"),
            ("implicit", "suggested without being directly stated", "未直接说明但有所暗示的", "announced in explicit detail", "以明确细节宣布的"),
            ("validate", "check that something is well founded", "检验某事是否依据充分", "accept without examination", "不经审查就接受"),
        ],
        [
            ("equivocal", "open to more than one interpretation", "可有多种解释的", "perfectly unambiguous", "完全明确无歧义的"),
            ("salient", "especially noticeable or relevant", "尤其显著或相关的", "wholly irrelevant", "完全无关的"),
            ("reconcile", "make apparently conflicting accounts compatible", "使看似冲突的说法相容", "intensify a contradiction", "加剧矛盾"),
            ("empirical", "based on observation or experiment", "基于观察或实验的", "supported only by fantasy", "仅由幻想支持的"),
            ("contingent", "dependent on particular conditions", "取决于特定条件的", "necessary in every possible case", "在所有情况下都必然的"),
            ("anomaly", "an observation that departs from a pattern", "偏离常见模式的观察", "the most typical case", "最典型的情况"),
            ("delineate", "describe boundaries or details precisely", "精确描述边界或细节", "leave entirely undefined", "完全不作界定"),
            ("orthogonal", "independent or unrelated in the relevant respect", "在相关方面彼此独立的", "perfectly dependent", "完全依赖的"),
            ("robust", "remaining reliable under changed assumptions", "在假设变化后仍可靠的", "valid under one fragile condition only", "只在一个脆弱条件下有效的"),
            ("synthesize", "combine parts into a coherent whole", "把各部分综合成连贯整体", "separate every related idea", "拆散所有相关观点"),
        ],
        [
            ("attenuate", "reduce the force or severity of", "减弱力量或严重程度", "amplify without limit", "无限放大"),
            ("disparate", "fundamentally different in kind", "在性质上根本不同的", "identical in every respect", "在所有方面都相同的"),
            ("extrapolate", "extend a conclusion beyond observed data", "把结论外推到观察数据之外", "erase the original sample", "删除原始样本"),
            ("parsimonious", "using no more assumptions than necessary", "不采用多余假设的", "needlessly elaborate", "不必要地复杂的"),
            ("incommensurable", "not measurable by a common standard", "无法用共同标准衡量的", "directly interchangeable", "可直接互换的"),
            ("abductive", "reasoning to the best available explanation", "推断当前最佳解释的", "deducing without any premise", "没有前提就演绎的"),
            ("diachronic", "concerned with change across time", "关注随时间变化的", "limited to one timeless instant", "局限于无时间变化的一刻"),
            ("endogenous", "arising from within a system", "源于系统内部的", "imposed entirely from outside", "完全由外部施加的"),
            ("heuristic", "useful for discovery without guaranteeing proof", "有助于发现但不保证证明的", "a conclusive formal proof", "结论性的形式证明"),
            ("underdetermine", "leave multiple explanations compatible with evidence", "使多个解释都与证据相容", "prove exactly one explanation", "只证明一个解释"),
        ],
        [
            ("perspicacious", "possessing acute insight", "具有敏锐洞察力的", "incapable of noticing implications", "无法察觉含义的"),
            ("apodictic", "expressed as necessarily true", "被表述为必然真实的", "openly hesitant", "公然犹豫的"),
            ("hermeneutic", "concerned with interpretation", "与阐释有关的", "restricted to arithmetic", "仅限算术的"),
            ("recondite", "difficult and little known", "深奥且鲜为人知的", "immediately obvious", "一目了然的"),
            ("procrustean", "forcing varied things into one rigid pattern", "把多样事物强塞进僵化模式的", "adaptable to meaningful differences", "能适应重要差异的"),
            ("antinomian", "opposed to established rules or norms", "反对既定规则或规范的", "strictly conformist", "严格遵从规范的"),
            ("ineluctable", "impossible to avoid", "不可避免的", "easily preventable", "很容易避免的"),
            ("metonymic", "using an associated term to represent something", "用相关事物指代本体的", "devoid of figurative relation", "不存在任何比喻关系的"),
            ("supererogatory", "beyond what duty requires", "超出职责要求的", "minimally obligatory", "最低限度义务所要求的"),
            ("teleological", "explaining something by its purpose or end", "依据目的或终点加以解释的", "rejecting every reference to purpose", "拒绝一切目的性解释的"),
        ],
    ]
    questions = []
    for index, (word, definition_en, definition_zh, opposite_en, opposite_zh) in enumerate(banks[band], 1):
        if index % 2:
            prompt_en = f"In a rigorous discussion of the {theme_en}, which definition best captures “{word}”?"
            prompt_zh = f"在严谨讨论“{theme_zh}”时，“{word}”最准确的含义是什么？"
            kind = "meaning"
        else:
            prompt_en = f"Which phrase could replace “{word}” in a formal analysis of the {theme_en} without changing the meaning?"
            prompt_zh = f"在对“{theme_zh}”的正式分析中，哪个短语可替换“{word}”而不改变含义？"
            kind = "synonym"
        raw = [
            bi(definition_zh, definition_en),
            bi(opposite_zh, opposite_en),
            bi("仅仅因为流行而被接受", "accepted merely because it is popular"),
            bi("与证据完全无关", "unrelated to the available evidence"),
        ]
        options, answer = rotate_options(raw, 0, level + index)
        questions.append({
            "id": f"he{level:02d}_v{index:02d}",
            "type": kind,
            "question": bi(prompt_zh, prompt_en),
            "options": options,
            "answer": answer,
            "difficulty": level + 5,
            "knowledge": "高阶学术词汇",
        })
    return questions


def grammar_questions(level: int, theme_en: str, theme_zh: str):
    band = min(4, (level - 1) // 5)
    banks = [
        [
            (f"Although the {theme_en} ___ behind schedule, its volunteers completed every essential task.", ["was", "were", "be", "being"], 0, "主谓一致"),
            (f"By the time the {theme_en} opened, the organizers ___ the safety checklist twice.", ["had reviewed", "review", "will review", "are reviewing"], 0, "过去完成时"),
            (f"If the {theme_en} receives more support, it ___ its weekend program.", ["will expand", "expanded", "would have expanded", "expanding"], 0, "条件句"),
            (f"The report about the {theme_en} was clearer ___ the team added a labeled diagram.", ["after", "unless", "despite", "whereas"], 0, "逻辑连接"),
            (f"Neither the director nor the assistants ___ willing to publish unchecked figures.", ["were", "was", "is", "has"], 0, "就近一致"),
        ],
        [
            (f"The evidence from the {theme_en}, ___ was collected over six months, challenged the first prediction.", ["which", "who", "where", "what"], 0, "非限制性定语从句"),
            (f"Researchers avoided ___ a causal claim before examining alternative explanations.", ["making", "to have made", "make", "made"], 0, "动名词"),
            (f"The {theme_en} is believed ___ public understanding of the issue.", ["to have improved", "improving", "improve", "had improved"], 0, "被动不定式"),
            (f"Only after the raw data were released ___ the reviewers identify the calculation error.", ["could", "they could", "can", "they can"], 0, "倒装"),
            (f"The committee requested that every claim ___ by a traceable source.", ["be supported", "is supported", "was supporting", "supports"], 0, "虚拟语气"),
        ],
        [
            (f"Had the {theme_en} excluded the anomalous sample, its conclusion ___ less credible.", ["would have been", "will be", "was", "has been"], 0, "省略if的虚拟倒装"),
            (f"Not until two independent teams replicated the result ___ it as reliable.", ["did the journal describe", "the journal described", "had the journal describing", "the journal does describe"], 0, "否定前置倒装"),
            (f"The author speaks as though the disputed assumption ___ conclusively established.", ["had been", "has", "will be", "being"], 0, "as though虚拟语气"),
            (f"So consequential ___ the omitted evidence that the panel reopened the entire inquiry.", ["was", "were", "did", "had"], 0, "结果倒装"),
            (f"The {theme_en}, together with two follow-up analyses, ___ grounds for cautious optimism.", ["provides", "provide", "have provided", "were providing"], 0, "插入成分与一致"),
        ],
        [
            (f"Were the premises of the {theme_en} less contentious, the inference ___ considerably stronger.", ["would be", "will have been", "was", "is being"], 0, "混合虚拟条件"),
            (f"Scarcely ___ the reviewers reconciled the two datasets when a third contradiction emerged.", ["had", "have", "did", "were"], 0, "scarcely倒装"),
            (f"What the {theme_en} fails to establish ___ whether the observed association is causal.", ["is", "are", "have been", "being"], 0, "名词性从句作主语"),
            (f"The recommendation is defensible, provided that its limitations ___ explicitly acknowledged.", ["are", "have", "being", "to be"], 0, "条件连接与被动"),
            (f"No account of the {theme_en} is complete without ___ how institutional incentives shaped the evidence.", ["considering", "having consider", "to considered", "consider"], 0, "介词后动名词"),
        ],
        [
            (f"However persuasive the {theme_en} may appear, it cannot warrant conclusions that the evidence itself does not ___.", ["substantiate", "substantiates", "substantiated", "substantiating"], 0, "让步结构"),
            (f"It is imperative that the assumptions underlying the {theme_en} ___ independently falsifiable.", ["remain", "remains", "remained", "remaining"], 0, "正式虚拟语气"),
            (f"Had it not been for a discrepancy in the metadata, the methodological flaw might never ___.", ["have been detected", "be detecting", "have detected", "been detect"], 0, "情态完成式被动"),
            (f"The analyst's conclusion, far from ___ the controversy, exposed a deeper epistemic conflict.", ["resolving", "to resolve", "resolved", "having resolve"], 0, "复合介词结构"),
            (f"Rarely does a single {theme_en} yield evidence so unequivocal that competing explanations can be ruled out ___.", ["categorically", "categorical", "category", "categorize"], 0, "词性与倒装"),
        ],
    ]
    result = []
    for index, (question, options, answer, knowledge) in enumerate(banks[band], 1):
        zh_prompt = f"围绕“{theme_zh}”的高阶语法题：请选择使英文句子语法和逻辑都正确的选项。\n{question}"
        opts = [bi(option, option) for option in options]
        opts, answer = rotate_options(opts, answer, level + index)
        result.append({
            "id": f"he{level:02d}_g{index:02d}",
            "type": "grammar",
            "question": bi(zh_prompt, question),
            "options": opts,
            "answer": answer,
            "difficulty": level + 5,
            "knowledge": knowledge,
        })
    return result


def reading_questions(level: int, theme_en: str, theme_zh: str):
    sophistication = [
        ("carefully recorded", "被仔细记录"),
        ("independently verified", "经过独立核验"),
        ("methodologically constrained", "受到方法限制"),
        ("open to competing interpretations", "存在相互竞争的解释"),
        ("epistemically provisional", "在认识论上仍属暂定"),
    ][min(4, (level - 1) // 5)]
    adj_en, adj_zh = sophistication
    items = [
        (
            f"Initial results from the {theme_en} were {adj_en}. The team therefore described its conclusion as provisional and invited independent replication.",
            f"关于“{theme_zh}”的初步结果{adj_zh}。因此团队称结论为暂定结论，并邀请独立重复验证。",
            "Why did the team call its conclusion provisional?",
            "团队为什么称结论为暂定结论？",
            [
                ("Because further independent testing was still needed.", "因为仍需要进一步的独立检验。"),
                ("Because the team had collected no observations at all.", "因为团队完全没有收集观察数据。"),
                ("Because replication always makes evidence weaker.", "因为重复验证总会削弱证据。"),
                ("Because provisional claims cannot be investigated.", "因为暂定主张无法被研究。"),
            ],
            "证据强度",
        ),
        (
            f"A newspaper praised the {theme_en} after interviewing two enthusiastic participants. A later survey of the full group produced a much less favorable result.",
            f"某报纸在采访两名热情参与者后赞扬了“{theme_zh}”。随后对全体参与者的调查却得出了不那么积极的结果。",
            "Which weakness most directly affected the newspaper's claim?",
            "哪项缺陷最直接影响了报纸的主张？",
            [
                ("Its sample was small and probably unrepresentative.", "样本很小，而且可能不具代表性。"),
                ("It used too many independent sources.", "它使用了过多独立来源。"),
                ("It distinguished correlation from causation.", "它区分了相关与因果。"),
                ("It reported the later survey first.", "它先报道了后续调查。"),
            ],
            "样本偏差",
        ),
        (
            f"Participation in the {theme_en} rose during the same month that transit fares fell. The report noted the association but did not claim that either change caused the other.",
            f"参与“{theme_zh}”的人数上升，与公共交通票价下降发生在同一个月。报告指出了这种关联，但没有声称任何一方导致另一方。",
            "What principle is the report applying?",
            "报告运用了什么原则？",
            [
                ("Correlation alone does not establish causation.", "仅有相关性不能确立因果关系。"),
                ("Events occurring together must share one cause.", "同时发生的事件必然共享同一原因。"),
                ("Numerical evidence is always causal evidence.", "数字证据永远都是因果证据。"),
                ("A cautious report should omit every association.", "谨慎的报告应省略一切关联。"),
            ],
            "相关与因果",
        ),
        (
            f"The {theme_en} met its short-term target, yet the evaluation warned that the improvement might disappear once temporary funding ended.",
            f"“{theme_zh}”实现了短期目标，但评估警告说，临时资金结束后，这种改善可能消失。",
            "Which inference is best supported?",
            "哪项推断最有依据？",
            [
                ("Short-term success does not guarantee long-term durability.", "短期成功不能保证长期持续。"),
                ("Temporary funding always causes programs to fail immediately.", "临时资金必然导致项目立刻失败。"),
                ("The target was never actually reached.", "该目标实际上从未实现。"),
                ("Long-term evaluation is irrelevant to policy.", "长期评估与政策无关。"),
            ],
            "合理推断",
        ),
        (
            f"Critics of the {theme_en} cited its cost. Supporters replied with evidence of its benefits, but neither side compared those benefits with less expensive alternatives.",
            f"“{theme_zh}”的批评者指出其成本，支持者则以收益证据回应，但双方都没有将这些收益与成本更低的替代方案比较。",
            "What information is missing from the debate?",
            "这场辩论缺少什么信息？",
            [
                ("A comparison of cost-effectiveness across alternatives.", "不同替代方案成本效益的比较。"),
                ("Proof that every benefit can be measured perfectly.", "所有收益都能被完美衡量的证明。"),
                ("A list of arguments unrelated to cost.", "与成本无关的论点列表。"),
                ("Evidence that cheaper options are always superior.", "更便宜的选择永远更好的证据。"),
            ],
            "成本效益",
        ),
        (
            f"An evaluation of the {theme_en} excluded three unusually negative observations without stating a rule for exclusion. Including them substantially changed the average.",
            f"对“{theme_zh}”的评估排除了三个异常负面的观察值，却没有说明排除规则。将它们纳入后，平均值发生了显著变化。",
            "Why is the exclusion method questionable?",
            "这种排除方法为什么值得质疑？",
            [
                ("The rule may have been chosen to favor a desired result.", "排除规则可能是为了得到想要的结果而选择的。"),
                ("Unusual observations must never be examined.", "异常观察值绝不能被审查。"),
                ("Averages cannot change when data are added.", "加入数据后平均值不可能变化。"),
                ("Negative observations are not numerical data.", "负面观察不是数字数据。"),
            ],
            "选择性报告",
        ),
        (
            f"The authors of the {theme_en} disclosed that its sponsor helped design the study but had no role in analyzing the final data.",
            f"“{theme_zh}”的作者披露，资助方协助设计了研究，但没有参与最终数据分析。",
            "How should a careful reader use this disclosure?",
            "谨慎的读者应如何利用这项披露？",
            [
                ("Consider a possible conflict while still assessing the methods and evidence.", "考虑潜在利益冲突，同时仍评估方法和证据。"),
                ("Reject the findings automatically without reading them.", "无需阅读就自动否定研究结果。"),
                ("Assume sponsorship can never influence study design.", "假设资助绝不会影响研究设计。"),
                ("Treat disclosure itself as proof of misconduct.", "把披露本身当作不当行为的证明。"),
            ],
            "利益冲突",
        ),
        (
            f"Two models of the {theme_en} fit past observations equally well. Only one, however, correctly predicted what happened after conditions changed.",
            f"关于“{theme_zh}”的两个模型同样符合过去的观察结果，但只有一个准确预测了条件变化后的情况。",
            "What gave one model stronger support?",
            "是什么使其中一个模型获得了更强的支持？",
            [
                ("It made a successful prediction about new conditions.", "它成功预测了新条件下的结果。"),
                ("It used more complicated language.", "它使用了更复杂的语言。"),
                ("It was proposed earlier than the other model.", "它比另一个模型提出得更早。"),
                ("It explained only observations already known.", "它只解释了已知观察结果。"),
            ],
            "模型预测",
        ),
        (
            f"The summary of the {theme_en} reported a 40 percent increase, while the appendix showed a rise from five cases to seven in a very small population.",
            f"“{theme_zh}”的摘要声称增长了40%，而附录显示，在一个很小的总体中，数量只是从5例增加到7例。",
            "Why might the percentage be misleading without context?",
            "为什么缺少语境时，这个百分比可能产生误导？",
            [
                ("A large relative change can reflect a small absolute change.", "较大的相对变化可能只对应很小的绝对变化。"),
                ("Percentages cannot describe changes in cases.", "百分比不能描述案例数量变化。"),
                ("An increase from five to seven is a decrease.", "从5增加到7属于下降。"),
                ("Small populations always produce exact predictions.", "小总体总能产生精确预测。"),
            ],
            "相对与绝对变化",
        ),
        (
            f"A review of the {theme_en} quoted one sentence from a long report as if it were the author's conclusion. The surrounding paragraph actually presented that sentence as an objection to be answered.",
            f"对“{theme_zh}”的评论从长篇报告中摘出一句话，当作作者的结论。实际上，该句所在段落把它作为需要回应的反对意见。",
            "What error did the review make?",
            "该评论犯了什么错误？",
            [
                ("It removed a quotation from the context that determined its function.", "它把引文从决定其作用的语境中剥离了。"),
                ("It supplied too much surrounding context.", "它提供了过多上下文。"),
                ("It distinguished the author's view from an objection.", "它区分了作者观点与反对意见。"),
                ("It refused to quote any part of the report.", "它拒绝引用报告的任何内容。"),
            ],
            "语境与引用",
        ),
    ]
    result = []
    for index, (passage_en, passage_zh, question_en, question_zh, raw_options, knowledge) in enumerate(items, 1):
        options = [bi(zh, en) for en, zh in raw_options]
        options, answer = rotate_options(options, 0, level * 2 + index)
        result.append({
            "id": f"he{level:02d}_r{index:02d}",
            "type": "reading",
            "passage": bi(passage_zh, passage_en),
            "question": bi(question_zh, question_en),
            "options": options,
            "answer": answer,
            "difficulty": level + 5,
            "knowledge": knowledge,
        })
    return result


def strengthen_base_question(source_question: dict, level: int, ordinal: int):
    question = copy.deepcopy(source_question)
    question["id"] = f"he{level:02d}_b{ordinal:02d}"
    question["difficulty"] = level + 5
    question["hardMode"] = True
    kind = question.get("type")
    original = question.get("question", {})
    if kind == "meaning":
        en = original.get("en", "")
        quoted = en.split("“", 1)[-1].split("”", 1)[0] if "“" in en else en
        question["question"] = bi(
            f"结合正式语境判断：“{quoted}”最准确的含义是哪一项？",
            f"In formal context, which definition most precisely captures “{quoted}”?",
        )
    elif kind == "synonym":
        en = original.get("en", "")
        quoted = en.split("“", 1)[-1].split("”", 1)[0] if "“" in en else en
        question["question"] = bi(
            f"选择在正式写作中与“{quoted}”含义最接近的词。",
            f"Choose the word closest in meaning to “{quoted}” in formal writing.",
        )
    elif kind == "grammar":
        question["question"]["zh"] = "选择使句子在语法和逻辑上都最严谨的选项：\n" + original.get("en", "")
    elif kind == "reading":
        question["question"]["zh"] = "阅读英文短文并选择证据支持最充分的答案：\n" + original.get("en", "")
    if isinstance(question.get("options"), list):
        options, answer = rotate_options(question["options"], int(question["answer"]), level + ordinal)
        question["options"] = options
        question["answer"] = answer
    return question


def main():
    source = json.loads(SOURCE.read_text(encoding="utf-8"))
    source_levels = {int(item["id"]): item for item in source["levels"]}
    levels = []
    for level in range(1, 26):
        # Hard mode looks several steps ahead; at the top end the generated
        # grammar and evidence-analysis passages continue the progression.
        donor_level = min(25, level + 3)
        donor = source_levels[donor_level]
        unique_source = []
        seen = set()
        for source_question in donor["questions"]:
            key = json.dumps([
                source_question.get("type"),
                source_question.get("question"),
                source_question.get("passage"),
            ], ensure_ascii=False, sort_keys=True)
            if key not in seen:
                seen.add(key)
                unique_source.append(source_question)
        base = [strengthen_base_question(q, level, i) for i, q in enumerate(unique_source, 1)]
        theme_en, theme_zh = THEMES[level - 1]
        questions = base + lexical_questions(level, theme_en, theme_zh) + grammar_questions(level, theme_en, theme_zh) + reading_questions(level, theme_en, theme_zh)
        assert len(questions) == 50
        levels.append({
            "id": str(level),
            "name": bi(f"蓝思 {level * 100}L · 困难", f"Lexile {level * 100}L · HARD"),
            "questions": questions,
        })
    payload = {
        "subject": "english",
        "mode": "hard",
        "version": 1,
        "levels": levels,
    }
    OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
