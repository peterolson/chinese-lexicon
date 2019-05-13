if (typeof require !== "undefined") {
    ({
        etymologies,
        addEtymology,
        semsem,
        semphon,
        phonsem,
        icon,
        meaningComponent,
        soundComponent,
        simplifiedComponent,
        iconComponent,
        unknownComponent,
        shiftMeaning,
        obsoleteMeaning,
        obsoleteSound,
        alsoMeaning,
        soundLoan,
        simplifyMerge,
        cursive,
        shorthand,
        simp,
        simplified,
        unknownComonentNote,
        radicals,
        radicalNote,
        O
    } = require("./etymologyCommands"));
}

icon(O, "characterless component", "Placeholder for components that are unknown objects or for which a character does not exist.");
icon("覀", "[character component]", "覀 is a character component that does not have any meaning on its own. Represents two hands grabbing a waist in the character 要.")
semsem("好", "女", "子", 3, "good; to like, love", "It is good (好) for a woman (女) and her child (子) to be together.");
icon("女", "woman; female", "Pictograph of a woman. Depicts a stick-figure with breasts sitting or squatting down.", "obs");
icon("子", "son; child", "Pictograph of a small child with its two arms outstretched.", "bs");
addEtymology("是", "is; to be", "Origin unclear.", [unknownComponent("旦", [0, 5]), soundComponent("龰", [5])]);
icon("止", "(foot); stop", `Pictograph of a foot. ` + shiftMeaning("stop"), "os");
semphon("的", "白", "勺", 5, "(bright white); [grammatical particle]", obsoleteMeaning("bright white"), true)
icon("白", "white", `Origin unclear. Used in ancient texts to mean "white" and "hundred" (百).`, "o");
icon("勺", "spoon; ladle", "Pictograph of a ladle.", "o");
icon("我", "I; me", "Pictograph of a weapon or farming tool with a forked blade and long handle. The meaning \"I; me\" is a phonetic loan.", "os", [iconComponent("戈", [1, 2, 4])]);
icon("戈", "dagger-axe", "Pictograph of a weapon with a long shaft and horizontal blade.", "obs");
icon("了", "[grammatical particle]", "Pictograph of a young child, similar to 子 but without arms. Relation to meaning uncertain. Sometimes explained as a derivation from 子 by cutting off the arms, depicting something being cut short or finished.", "s");
icon("不", "no; not", "Pictograph of sepals of a flower. The meaning \"no\" is a phonetic loan.", "os");
icon("一", "one", "A single horizontal stroke, representing the number one.");
icon("二", "two", "Two horizontal strokes, representing the number two.");
icon("三", "three", "Three horizontal strokes, representing the number three.");
semphon("你", "亻", "尔", 2, "you", "", true, true)
icon("人", "person", "Pictograph of the side view of a person.", "obs");
icon("爾", "you (archaic)", `Origin unclear. Used in ancient texts to mean "you".`, "bs");
simp("尔", "爾");
semphon("百", "一", "白", 1, "one hundred");
icon("才", "talent; just", `Pictograph of a small plant starting to emerge from the ground. ` + shiftMeaning("talent", "to sprout"), "obs");
icon("土", "earth; dirt", "Pictograph of a lump of clay on a pottery wheel.", "obs");
icon("士", "soldier; scholar", "Pictograph of the head of an axe. Likely used to represent a military officer.", "bs");
addEtymology("在", "be at; exist", "Origin unclear.", [soundComponent("才", [0, 3], ""), unknownComponent("士", [3], "The modern form of this component looks like 土, but originally it was written as 士.")], "bs");
icon("言", "speech", "Pictograph of a tongue sticking out of a mouth. In old scripts written the same as 舌 but with an extra line.", "obs", [iconComponent(O, [0, 2], "Depicts sound coming out of the mouth."), iconComponent("舌", [2])]);
icon("舌", "tongue", "Pictograph of a tongue sticking out of a mouth, with a splatter of spit at the end.", "os", [iconComponent(O, [0, 3], "Depicts a tongue."), iconComponent("口", [3])]);
icon("口", "mouth", "Pictograph of a mouth.", "ob");
icon("行", "walk; travel", "Pictograph of a street intersection.", "bs");
icon("文", "writing; language", "Pictograph of a man with writing (possibly a tattoo) on his chest. In later scripts the writing was abbreviated to a dot or omitted altogether.", "obs");
semsem("辵", "彳", "龰", 3, "walk; move", "This character very rarely appears by itself. It is generally used as a component in other characters written as 辶.");
semphon("這", "辶", "言", 7, "this", obsoleteMeaning("to meet"), true, false, true)
addEtymology("这", "this", simplified("這") + obsoleteMeaning("to meet"), [meaningComponent("辶", [4]), simplifiedComponent("文", [0, 4], "Simplified from the 言 component in the traditional character 這. Used since 文 has fewer strokes while having a similar meaning and sound as 言.")]);
icon("有", "have; hold", "Pictograph of a hand holding meat", "bs", [iconComponent("又", [0, 2]), iconComponent("⺼", [2], "Deceptively similar to the character for moon (月).")]);
icon("又", "(hand); again", "Pictograph of a hand. " + obsoleteMeaning("right hand"), "ob");
icon("肉", "meat", "Pictograph of a piece of meat.", "s");
icon("月", "moon", "Pictograph of the moon.", "obs");
icon("也", "also", "Origin unclear. Variously explained as a pictograph of a snake, a vulva, a funnel, a crying child, or an ideograph depicting a pause in speech.", "bs");
semphon("他", "亻", "也", 2, "he; it", "", true);
semphon("她", "女", "也", 3, "she", "", true);
icon("門", "door; gate", "Pictograph of a gate.", "obs");
simp("门", "門");
semphon("們", "亻", "門", 2, "[plural marker]");
semphon("们", "亻", "门", 2, "[plural marker]");
icon("竹", "bamboo", "Pictograph of bamboo stalks.", "s");
icon("个", "[measure word]", "Pictograph of one stalk of bamboo. Same as one half of the character for bamboo (竹).", "s");
icon("囗", "wall; surrounding", "Pictograph of a wall surrounding an area. Component form of 围 (traditional 圍).");
icon("韋", "leather", "Pictograph of two feet walking around city walls. " + obsoleteMeaning("to surround"), "os");
simp("韦", "韋");
semphon("围", "囗", "韦", [[0, 2, -1], [2, -1]], "surround");
semphon("圍", "囗", "韋", [[0, 2, -1], [2, -1]], "surround");
icon("古", "ancient; old", "Origin unclear. Possibly a pictograph of a shield.", "obs");
semphon("固", "囗", "古", [[0, 2, -1], [2, -1]], "sturdy; firm");
semphon("個", "亻", "固", 2, "[measure word]");
icon("來", "come", "Pictograph of wheat. " + soundLoan("come", "wheat", "麥"), "obs");
simp("来", "來");
addEtymology("麥", "wheat", `The top component 來 is a pictograph of wheat. It is unclear why the foot component (夂) was added to the character for "wheat".`, [soundComponent("來", [0, 8], "Also serves as an iconic component."), unknownComponent("夂", [8])]);
simp("麦", "麥", [[0, 4], [4]]);
icon("要", "want; will", "Pictograph of two hands grabbing a woman's waist. " + soundLoan("want", "waist", "腰"), "bs", [iconComponent("覀", [0, 6], "Represents two hands grabbing a waist."), iconComponent("女", [6])])
semphon("腰", "⺼", "要", 4, "waist");
semphon("就", "京", "尤", 8, "at once; accomplish", shiftMeaning("high place", "achieve"));
icon("京", "(high place); capital city", "Pictograph of a tall building. Similar to 高. " + shiftMeaning("capital city", "high place"), "obs");
icon("高", "tall", "Pictograph of a tall building. Similar to 京.", "obs");
icon("尤", "especially; outstanding", "Pictograph of a hand with a wart on it. " + soundLoan("especially", "wart", "疣"), "o");
semphon("疣", "疒", "尤", 5, "wart");
icon("疒", "sickness", "Pictograph of a stretcher for sick people.", "s");
semphon("到", "至", "刂", 6, "arrive");
icon("至", "arrive", "Pictograph of an arrow hitting its target.", "obs");
icon("刀", "knife", "Pictograph of a knife.", "os");
icon("兒", "child", "Pictograph of a child with an opening in the top of its head. Represents the soft spot (fontanel) at the top of young infant heads.", "obs");
simp("儿", "兒");
icon("兄", "elder brother", "Pictograph of a mouth on top of a person, representing an older brother giving orders.", "obs", [iconComponent("口", [0, 3]), iconComponent("人", [3])]);
icon("兌", "exchange", "Pictograph of words coming out of the mouth of a person, representing negotiation of an exchange.", "obs", [iconComponent("八", [0, 2], "Represents words coming out of the mouth."), iconComponent("口", [2, 5]), iconComponent("人", [5])]);
simp("兑", "兌");
icon("八", "eight; (separate)", "Pictograph of two lines facing away from each other. " + soundLoan("eight", "separate", "别"), "b");
semphon("说", "讠", "兑", 2, "speak; say");
semphon("說", "言", "兌", 7, "speak; say");
icon("力", "strength; power", "Pictograph of a plow, representing strength", "bs");
addEtymology("另", "besides; different; separate", "Origin unclear. Possibly derived from the left side of 別, which has a related meaning.", [unknownComponent("口", [0, 3]), unknownComponent("力", [3])]);
icon("冎", "bone", "Pictograph of bones.", "s");
semsem("咼", "冎", "口", 6, "jaw");
icon("骨", "bone", "Pictograph of a bone (冎) with muscle (⺼) attached to it.", "s", [iconComponent("冎", [0, 5]), iconComponent("⺼", [5])]);
icon("別", "different; separate; don't", "Pictograph depicting cutting meat off of a bone.", "s", [iconComponent("冎", [0, 5], "Here written similar to 另."), iconComponent("刂", [5])]);
simp("别", "別");
icon("水", "water", "Pictograph of a river.", "s");
icon("艸", "grass", "Pictograph of blades of grass.", "s");
icon("棗", "date tree", "Pictograph of a date tree.", "s");
simp("枣", "棗");
icon("日", "sun; day", "Pictograph of the sun.", "obs");
icon("十", "ten", "A single vertical line, representing one set of ten. Analagous to the archaic characters 廿 (twenty) and 卅 (thirty).", "obs");
icon("廿", "twenty", "Two vertical lines, representing two sets of ten.", "obs")
icon("卅", "thirty", "Three vertical lines, representing three sets of ten.", "obs")
semphon("早", "日", "棗", 4, "early; morning", "The form of the original phonetic component 棗 was abbreviated to look like 十.");
semphon("草", "艹", "早", 3, "grass");
icon("木", "wood; tree", "Pictograph of a tree.", "obs");
icon("手", "hand", "Pictograph of a hand with five fingers.", "bs");
icon("王", "king", "Pictograph of an axe head, used as a symbol of the king's military authority.", "obs");
icon("今", "today", "Pictograph of sounds coming out of the mouth. " + soundLoan("today", "moan", "吟"), "obs");
semphon("吟", "口", "今", 3, "chant; recite; moan");
semphon("金", "王", "今", [[0, 2, 5, 7], [2, 5, 7]], "metal; gold", "王 is used here because it originally was a pictograph of an axe head, which is made from metal.", false, false, true, "b");
icon("心", "heart", "Pictograph of a heart.", "bs");
icon("虫", "bug; insect; worm", "Pictograph of a worm.", "s");
icon("目", "eye", "Pictograph of an eye.", "obs");
icon("魚", "fish", "Pictograph of a fish.", "obs");
simp("鱼", "魚");
icon("山", "mountain", "Pictograph of a mountain.", "obs");
icon("火", "fire", "Pictograph of fire.", "os");
icon("犬", "dog", "Pictograph of a dog.", "obs");
icon("石", "stone; rock", "Pictograph of a stone chime.", "o");
icon("足", "foot; leg", "Pictograph of a foot attached to a leg.", "os", [iconComponent(O, [0, 3], "Depicts a leg."), iconComponent("龰", [3])]);
icon("糸", "silk; thread", "Pictograph of twisted silk threads.", "obs");
icon("能", "can; able", "Pictograph of a bear holding meat in its mouth. " + shiftMeaning("ability; power", "bear"), "os", [iconComponent(O, [0, 2], "Depicts the head of the bear."), iconComponent("⺼", [2, 6]), iconComponent(O, [6], "Depicts the four legs and tail of the bear.")]);
icon("熊", "bear", "Pictograph of a bear holding meat in its mouth. Based on 能, with four dots added at the bottom to differentiate it, representing four legs.", "s", [iconComponent("能", [0, 10], "Here used as a pictograph of a bear."), iconComponent("灬", [10], "Here used to represent four legs.")]);
icon("四", "four", "In ancient texts the character 亖 (four horizontal strokes) was used. The origin of the current form is unclear.");
icon("亖", "four", "Four horizontal strokes, representing the number four.");
icon("五", "five", "Origin unclear. Originally an X between two lines.", "b");
icon("六", "six", "Originally a pictograph of a tent or building. Unrelated to modern meaning.", "b");
icon("七", "seven", "Originally resembled a cross, depicting the meaning \"to cut\", since 七 sounds like 切 (qiē; to cut).", "b");
semphon("切", "刀", "七", 2, "to cut", "", false, false, true);
icon("九", "nine", "Origin unclear. There are varied explanations of what 九 is meant to represent, including a hook, an elbow, and a hand reaching out to grab something.", "obs");
icon("囧", "window", "Originally a pictograph of a window. Nowadays sometimes used as a sad-face emoticon.", "bs");
icon("明", "bright; clear", "The character was originally a pictograph of the moon (月) shining through a window (囧). Traditionally (but incorrectly) explained that the sun (日) and moon (月) together are bright (明).", "obs", [iconComponent("囧", [0, 4], "The modern form looks similar to 日 (sun)."), iconComponent("月", [4])]);
icon("天", "sky; day", "Pictograph of a line above a person, representing the sky.", "ob", [iconComponent(O, [0, 1], "Depicts the sky."), iconComponent("大", [1], "Here used as a pictograph of a person.")])
icon("几", "small table; (simp.) how much", "Pictograph of a small table. " + simplifyMerge("几", "幾", "how much"), "s");
semsem("幾", "𢆶", "戍", 6, "how much; how many");
icon("𢆶", "small, insignificant", "Pictograph of two threads. Double of 幺.", "b");
icon("戍", "garrison", "Pictograph of a person (人) with a weapon (戈).", "s", [iconComponent("人", [1, 3]), iconComponent("戈", [0, 1, 3])]);
icon("馬", "horse", "Pictograph of a horse.", "obs");
simp("马", "馬");
semphon("吗", "口", "马", 3, "[question particle]");
semphon("嗎", "口", "馬", 3, "[question particle]");
semphon("妈", "女", "马", 3, "mother");
semphon("媽", "女", "馬", 3, "mother");
icon("貝", "shell", "Pictograph of a cowrie shell. In ancient China such shells were used as currency.", "b");
simp("贝", "貝");
icon("朋", "friend", `Pictograph of two strings of objects mounted together. Originally meant "pair", later the meaning shifted to "friend". The modern form is visually similar to 月 (moon) but the meaning is not related.`, "bs")
icon("友", "friend", "Pictograph of two hands togther to convey the meaning \"friend\".", "bs", [iconComponent("又", [0, 2], "Also serves as a phonetic component."), iconComponent("又", [2], "Also serves as a phonetic component.")]);
icon("沒", "drown; not have", `Pictograph of a hand reaching in the water to grab something. Later the meaning shifted to "drown". This meaning is only used when the character is pronouned "mò". When pronounced "méi" (which is much more common), it means "not have". This meaning is a phonetic loan, unrelated to the original meaning.`, "s", [iconComponent("氵", [0, 3]), iconComponent(O, [3, 5], "Depicts an object beneath the surface of the water."), iconComponent("又", [5])]);
simp("没", "沒");
icon("田", "field", "Pictograph of a field.");
semsem("男", "田", "力", 5, "male", "Traditionally males (男) were the people who plowed (力) the fields (田).");
icon("乍", "mow; abruptly", "Pictograph of a tool for cutting grass.", "bs")
semphon("昨", "日", "乍", 4, "yesterday");
icon("亥", "12th earthly branch", "Pictograph of roots.", "b");
semphon("孩", "子", "亥", 3, "child");
icon("大", "big", `Pictograph of a person with outstretched arms, representing the meaning "big".`, "ob");
icon("小", "small", "Pictograph of three small dots, representing grains of sand or rice, to convey the meaning \"small\".", "ob");
icon("匕", "spoon; ladle", "Pictograph of a ladle.", "bs");
icon("艮", "blunt", "Origin unclear. Originally written with 目 over 匕.", "s", [unknownComponent("目", [0, 4]), unknownComponent("匕", [4])]);
semphon("很", "彳", "艮", 3, "very");
icon("太", "very; extremely", `Addition of a dot to 大 (dà; big) to mean "very" or "extremely".`, "", [iconComponent("大", [0, 3])]);
icon("卩", "person", "Variant component form of 人. Depicts a person kneeling.", "o");
icon("巴", "to cling to", "Pictograph of a person grabbing something with their hand.", "os");
icon("邑", "area; city", "Pictograph of a person (卩) outside a city wall (囗). Appears as a component in the right side of characters as ⻏.", "os", [iconComponent("囗", [0, 3]), iconComponent("卩", [3], "The modern form of this component looks like 巴.")])
icon("冉", "gradually; drooping (branches or hair)", "Pictograph of two strands of something drooping.", "bs")
semphon("那", "⻏", "冄", 4, "that", obsoleteMeaning("name of a city"), true, false, true);
semphon("哪", "口", "那", 3, "which");
semsem("里", "田", "土", 4, "village; (simp.) inside", "A village (里) is an area of land (土) where people have fields (田). " + simplifyMerge("里", "裡", "inside"));
icon("衣", "clothes", "Pictograph of a coat.", "obs");
semphon("裡", "衤", "里", 5, "inside");
addEtymology("裏", "inside", "Variant form of 裡.", [soundComponent("里", [2, 9]), meaningComponent("衣", [0, 2, 9])]);
icon("宀", "roof", "Pictograph of a roof.", "o");
icon("豕", "hog", "Pictograph of a hog.", "obs");
semphon("家", "宀", "豕", 3, "house; family", "", true, false, false, "obs");
icon("聿", "writing utensil", "Pictograph of a hand holding a writing utensil.", "bs", [iconComponent("又", [0, 3]), iconComponent(O, [3], "Depicts a writing utensil.")]);
icon("者", "-er; [one that...]", "Origin unclear.")
semphon("書", "聿", "者", 5, "book; writing", "", true);
simp("书", "書", [[0, 1, 2], [1, 2]]);
icon("本", "root; foundation", "Addition of a horizontal line toward the bottom of 木 (tree) to represent the roots of the tree.", "s", [iconComponent("木", [0, 4]), iconComponent(O, [4], "Depicts roots.")]);
icon("旡", "choke", "Pictograph of a person with their mouth facing backwards.", "o", [iconComponent("口", [0, 2]), iconComponent("卩", [2])]);
addEtymology("愛", "love", "", [soundComponent("旡", [0, 6], obsoleteSound("愛", "旡")), meaningComponent("心", [6, 10]), unknownComponent("夂", [10])], "s");
addEtymology("爱", "love", "Simplified form of 愛.", [soundComponent("旡", [0, 6], obsoleteSound("愛", "旡")), meaningComponent("友", [6])]);
icon("真", "true", "Origin unclear.", "os", [unknownComponent("匕", [0, 2]), unknownComponent("貝", [2, 7, 8])]);
icon("去", "go; leave", "Origin unclear. The 口 component is variously explained as (1) an opening to a building or cave that the person is departing from, or (2) an anus, i.e. the orifice through which things leave a person.", "os", [iconComponent("大", [0, 3], "Here used as a pictograph of a person."), iconComponent("口", [3], "Here used as a pictograph of some sort of opening.")])
semsem("相", "木", "目", 4, "each other", "Represents an eye (目) observing a tree (木). " + shiftMeaning("compare; mutual; each other", "observe"));
semphon("想", "心", "相", 9, "think; desire", "", false, false, true);
semsem("看", "手", "目", 4, "look; watch", "Depicts putting a hand (手) over the eyes (目) and looking (看) into the distance.");
icon("矢", "arrow", "Pictograph of an arrow.", "obs")
semphon("知", "口", "矢", 5, "know", "The mouth component (口) represents the oral transmission of knowledge.", false, false, true);
icon("首", "head; first", "Pictograph of a head (hair above an eye).", "obs", [iconComponent(O, [0, 4], "Depicts hair."), iconComponent("目", [4])]);
semphon("道", "辶", "首", 9, "way; path", "", false, false, true);
icon("此", "this", `Depicts a person (人) stopping (止), meaning "here".`, "obs", [iconComponent("止", [0, 4]), iconComponent("人", [4])]);
semsem("些", "此", "二", 6, "some; a few");
icon("隹", "bird", "Pictograph of a short-tailed bird.", "obs");
semphon("誰", "言", "隹", 7, "who");
semphon("谁", "讠", "隹", 2, "who");
icon("合", "together; join", "Pictograph of two mouths facing each other.", "obs", [iconComponent("口", [0, 3]), iconComponent("口", [3])]);
icon("會", "will; able; meeting", "Origin unclear. Possibly related to 合 (together).", "bs");
simp("会", "會");
icon("回", "return; turn around", `Originally a spiral, conveying the meaning "to turn around".`, "b");
semphon("問", "口", "門", 8, "ask", "", false, false, true);
semphon("问", "口", "门", 3, "ask", "", false, false, true);
icon("頁", "leaf; page; (head)", `Pictograph of a head (首) on top of a person (卩). Means "head" when pronounced xié. Has unrelated meaning "leaf" when pronounced yè, due to this character being adopted as a shorthand form of 葉.`, "obs", [iconComponent("首", [0, 7]), iconComponent("卩", [7])]);
simp("页", "頁", [[0, 4], [4]]);
icon("世", "world; era; generation", `Three copies of 十 (ten) to make 30, similar to the archaic character 卅 (30). Conveys the meaning "30-year generation", also symbolizing a branching family tree.`, "bs");
semphon("枼", "木", "世", 5, "flat piece of wood", "", false, false, true);
semphon("葉", "艹", "枼", 4, "leaf");
semphon("題", "頁", "是", 9, "topic; problem", obsoleteMeaning("forehead"), true, false, true);
simp("题", "題");
semsem("什", "亻", "十", 2, "what", obsoleteMeaning("group of ten soldiers"));
icon("幺", "(thread); tiny; one", "Pictograph of a single twisted thread.", "b");
icon("林", "woods; forest", "Combination of two trees (木).", "", [iconComponent("木", [0, 4]), iconComponent("木", [4])]);
icon("森", "forest", "Combination of three trees (木).", "", [iconComponent("木", [0, 4]), iconComponent("木", [4, 8]), iconComponent("木", [8])]);
icon("𣏟", "hemp", "Pictograph of hemp leaves. Visually similar to 林 but not related.");
icon("广", "roof; (simp.) wide", "Variant form of 宀 (roof). " + simplifyMerge("广", "廣", "wide"));
semphon("廣", "广", "黃", 3, "wide; broad");
icon("黃", "yellow", `Pictograph of a person with a person with a large belly, representing someone deformed. Based on the original meaning "physically impaired". Later meaning shifted to "yellow; sallow", a skin color associated with illness. `, "ob")
simp("黄", "黃");
icon("光", "light; ray", "Pictograph of fire on top of a person.", "os", [iconComponent("火", [0, 4]), iconComponent("卩", [4])]);
icon("麻", "hemp; flax; sesame", "", "", [unknownComponent("广", [0, 3]), iconComponent("𣏟", [3])]);
icon("么", "tiny; one; (simp.) [particle]", "Variant form of 幺. " + simplifyMerge("么", "麼", "[particle]"));
semphon("麼", "幺", "麻", 11, "[particle]", "", false, false, true);
semphon("麽", "么", "麻", 11, "[particle]", "Variant form of 麼.", false, false, true);
icon("刃", "knife edge", "Pictograph of a knife. Similar to 刀 (knife), with an added dot.");
semphon("忍", "心", "刃", 3, "endure; suffer", "", false, false, true);
semphon("認", "言", "忍", 7, "recognize; accept");
semphon("认", "讠", "人", 2, "recognize; accept");
icon("象", "elephant; shape; appearance", "Pictograph of an elephant.", "bs");
icon("為", "for; to; as; to act as; to do", `Pictograph of a hand guiding an elephant to do work (in ancient China elephants were tamed to do work). Based on the meaning "to work; to do".`, "bs", [iconComponent("又", [0, 4]), iconComponent("象", [4])]);
icon("爲", "for; to; as; to act as; to do", "Variant form of 為.")
simp("为", "為", [[0, 1], [1]]);
icon("多", "much; many", `Pictograph of two identical objects to convey the meaning "many". Not related to 夕 (dusk).`, "obs");
icon("夕", "dusk; evening", `Pictograph of the moon. Used to express "evening" or "night".`, "obs")
semsem("隻", "隹", "又", 8, "[measure word]", "Used as a measure word for birds, and some other animals and objects.")
icon("只", "only; but; (simp.) [measure word]", "Origin unclear. " + simplifyMerge("只", "隻", "[measure word]"));
icon("音", "sound; voice", `Pictograph of sound (represented with one or two horizontal lines) coming from a tongue (舌). In seal script, identical to 言 (speech) except with a dot or line added to the middle of the 口 (mouth) component.`, "s", [iconComponent("舌", [2]), iconComponent(O, [0, 2], "Depicts sound coming from the tongue.")]);
icon("戠", "sword; gather", "Pictograph of some sort of military-purpose object. The modern form of the left component looks like 音 but it is unclear whether or not it is actually related.", "ob", [unknownComponent("音", [0, 9]), iconComponent("戈", [9])]);
semphon("識", "言", "戠", 7, "know; perceive");
semphon("识", "讠", "只", 2, "know; perceive");
semphon("作", "亻", "乍", 2, "work; writing");
icon("卜", "to divine", "Pictograph of a crack on a bone. In ancient China such cracks were used for divination.");
semphon("攴", "又", "卜", 2, "hit; tap", "", false, false, true);
semphon("故", "攵", "古", 5, "happening; instance; reason", "", false, false, true);
addEtymology("做", "make; do", "Originally was written the same as 作 (work). The 夂 (foot; movement) component was added later to distinguish the characters. The middle component 乍 was corrupted to look like 古, which caused later writers to reanalyze 做 as a compound of 亻and 故.", [meaningComponent("作", [0, 7], "Also serves as a phonetic component. In the modern form, 乍 is corrupted to look like 古."), meaningComponent("夂", [7])], "s");
phonsem("怎", "作", "心", 5, "how");
icon("羊", "sheep; goat", "Pictograph of the horns on a sheep.", "obs");
semphon("样", "木", "羊", 4, "way; shape; manner");
phonsem("都", "者", "⻏", 8, "all; large city, capital", `Based on the meaning "large city, capital", which is the meaning when pronounced "dū". When pronounced "dōu", it has the unrelated meaning "all", etymologically related to 多 (many).`, true);
icon("可", "be willing; allow", `The right component is a pictograph of an axe handle, now written as 柯 (kē). 口 (mouth) was added later to indicate that the character is only "mouthed", i.e. only used for its phonetic value.`, "b", [meaningComponent("口", [1, 4]), iconComponent(O, [0, 1, 4], "Depicts an axe handle.")]);
semphon("柯", "木", "可", 4, "axe handle; stalk");
icon("見", "see", "Pictograph of a person (卩) using their eye (目) to see (見).", "obs", [iconComponent("目", [0, 5]), iconComponent("卩", [5])]);
simp("见", "見", [[0, 2], [2]]);
icon("炎", "flame; inflammation", "Combination of two fires (火).", "", [iconComponent("火", [0, 4]), iconComponent("火", [4])]);
icon("黑", "dark; black; illegal", "Pictograph of a person whose face has been tattooed. In ancient China criminals were punished by having their faces permanently marked. Later writers reanalyzed the character as a chimney being blackened by fire, so the bottom component was changed to look like 炎 (flame).", "obs");
semsem("占", "卜", "口", 2, "observe; divine; seize", "In ancient China fortune-tellers made cracks (卜) and holes (口) in turtle shells for the purpose of divination.");
semphon("點", "黑", "占", 12, "dot; point; choose", "", true);
addEtymology("点", "dot; point; choose", simplified("點"), [soundComponent("占", [0, 5], obsoleteSound("点", "占")), simplifiedComponent("灬", [5], "Simplified from the 黑 (black) component in the traditional character 點.")]);
icon("袁", "long robe", "The meaning of the part of the character above 衣 (clothes) is unclear.", "", [unknownComponent(O, [0, 5], unknownComonentNote()), iconComponent("衣", [5])]);
semphon("睘", "目", "袁", 5, "gaze in terror");
phonsem("還", "睘", "辶", 13, "still; return", "", true);
addEtymology("还", "still; return", simplified("還"), [simplifiedComponent("不", [0, 4], shorthand("睘", "還")), meaningComponent("辶", [4])]);
icon("以", "use; by means of", "Origin unclear. The right component is 人 (person).", "obs", [unknownComponent(O, [0, 2], unknownComonentNote()), iconComponent("人", [2])]);
icon("米", "rice", "Pictograph of grains of rice.", "o");
icon("气", "gas; air; weather", "Pictograph of air.", "s");
icon("食", "eat; food", "Pictograph of food being spooned into the mouth. Not related to 良.", "obs", [iconComponent("口", [0, 3]), iconComponent("匕", [7])]);
icon("良", "good; fine", "Pictograph of a hallway, now written as 廊. " + obsoleteMeaning("hallway"), "obs");
semphon("廊", "广", "郎", 3, "corridor; porch");
phonsem("郎", "良", "⻏", 6, "husband; youth", "Originally a place name for what is now Shandong province. Unrelated to current meaning.")
semphon("餼", "飠", "氣", 8, "gift of grain");
semphon("饩", "饣", "气", 3, "gift of grain");
phonsem("氣", "气", "米", 4, "gas; air; weather", "The 米 (rice) component was added because this character was often used as a variant of 餼 (gift of grain).");
icon("乞", "beg; request", "Originally a variant of 气. The current meaning is a phonetic loan.");
semphon("吃", "口", "乞", 3, "eat");
icon("夬", "decisive", "Origin unclear. Possibly a pictograph of a hand separating something.", "s");
semphon("快", "忄", "夬", 3, "fast; happy");
icon("寸", "inch; thumb; (hand)", "Pictograph of a hand with a line marking a spot on the wrist. In traditional Chinese medicine this spot on the wrist where the pulse can be taken is called the 寸口. ", "s");
icon("對", "correct; pair; match", "Origin unclear. Appears to be a hand using some sort of tool, possibly a rake or a hoe.", "obs", [unknownComponent(O, [0, 11], "Possibly a rake or hoe."), iconComponent("寸", [11], "Used here to represent a hand.")]);
icon("对", "correct; pair; match", simplified("對") + "Origin unclear. Appears to be a hand using some sort of tool, possibly a rake or a hoe.", "對:obs", [simplifiedComponent("又", [0, 2], "Shorthand for the left component of 對, possibly depicting a rake or hoe."), iconComponent("寸", [2], "Used here to represent a hand.")]);
semphon("答", "⺮", "合", 6, "answer; agree", "The significance of the ⺮ (bamboo) component is unclear.", true);
semphon("荅", "艹", "合", 3, "answer; agree", "Variant of 答. The significance of the 艹 (grass) component is unclear.", true);
icon("巾", "cloth; towel", "Pictograph of a cloth hanging downwards.", "b");
icon("冃", "hat", "Represents a hat. Top component form of 冒.")
icon("冒", "hat", "Pictograph of a hat over an eye. Old way of writing 帽 (hat).", "bs", [iconComponent("冃", [0, 4]), iconComponent("目", [4])]);
semsem("帽", "巾", "冒", 3, "hat");
icon("免", "exempt; avoid", "Pictograph of a person with a hat, now written as 冕. The current meaning is a phonetic loan.", "b")
semphon("冕", "冃", "免", 4, "crown; ceremonial headwear");
semphon("晚", "日", "免", 4, "night; evening", "", true);
icon("上", "up", `Originally a small line or dot above a longer line, indicating "up". The vertical line was added to distinguish the character from 二 (two).`, "ob");
icon("下", "down", `Originally a small line or dot below a longer line, indicating "down". The vertical line was added to distinguish the character from 二 (two).`, "ob");
icon("尸", "corpse", "Pictograph of a bent-over human.", "obs");
semphon("尼", "尸", "匕", 3, "near; nun");
let mouthedNote = `口 (mouth) indicates that the character is only "mouthed", i.e. only used for its phonetic value.`;
semphon("呢", "口", "尼", 3, "[particle]", mouthedNote);
icon("玉", "jade; gem", `Pictograph of a ritual object made out of several pieces of jade joined together by a string. A dot was later added to 玉 to distinguish it from 王 (king).`, "ob");
addEtymology("現", "appear; now", "", [unknownComponent("𤣩", [0, 4]), soundComponent("見", [4], "Also serves as a meaning component.")]);
simp("现", "現");
phonsem("寺", "止", "寸", 3, "temple", `Based on the original meaning of "to grasp". The current meaning "temple" is a phonetic loan. The original meaning is now represented by the character 持 (to hold).`, true, false, "bs");
semphon("持", "扌", "寺", 3, "hold; grasp");
semphon("時", "日", "寺", 4, "time");
addEtymology("时", "time", simplified("時"), [meaningComponent("日", [0, 4]), simplifiedComponent("寸", [4], "Shorthand for the 寺 component in the traditional character 時.")]);
icon("厂", "cliff; (simp.) factory", "Pictograph of a cliff or similarly shaped object. " + simplifyMerge("厂", "廠", "factory") + " In simplified characters the 广 component is often written as 厂.");
semphon("廠", "广", "敞", 3, "factory; depot");
phonsem("敞", "尚", "攵", 8, "open; spacious");
icon("冂", "hall; platform", "Pictograph of a large room or platform. Original form of 堂.")
icon("尚", "value; esteem", "Pictograph of a large room or platform.", "b", [iconComponent("冂", [0, 5]), unknownComponent("口", [5], "Likely added just to make the character look more even (with less awkward space).")]);
icon("堂", "hall; large room", "Pictograph large room or platform rising from the ground.", "bs", [iconComponent("尚", [0, 8], "Pictograph of a large room or platform."), iconComponent("土", [8])]);
icon("矦", "archery target", "Pictograph of an arrow (矢) hitting a target (厂).", "obs", [iconComponent("厂", [0, 4], "Here used to represent a target."), iconComponent("矢", [4])]);
semphon("候", "亻", "矦", 3, "wait; inquire; watch", "", false, false, false, "s");
icon("反", "against; oppose", `Pictograph of a hand (又) climbing a cliff (厂). Based on original meaning "pull", later extended to "turn around", "oppose".`, "b", [iconComponent("厂", [0, 2]), iconComponent("又", [2])]);
semphon("飯", "飠", "反", 8, "food; rice");
semphon("饭", "饣", "反", 3, "food; rice");
icon("出", "go out; exit", `Pictograph of a foot (止) going out of an enclosure.`, "obs", [iconComponent("止", [0, 3]), iconComponent(O, [3], "Depicts an enclosure.")]);
icon("再", "again", `Origin unclear. Possibly contains 二 (two) as a component, to convey the meaning "second time; again".`, "obs", [meaningComponent("二", [4])]);
icon("㝵", "obtain; get", `Original form of 得. Depicts a hand (寸) grabbing a shell (貝), used as currency in ancient China, to convey the meaning "get".`, "obs", [iconComponent("貝", [0, 5]), iconComponent("寸", [5], "Here used to depict a hand.")]);
icon("得", "obtain; get; [particle]", `Originally written as 㝵. Depicts a hand (寸) grabbing a shell (貝), used as currency in ancient China, to convey the meaning "get". The 彳 (movement) component was added later.`, "bs", [meaningComponent("彳", [0, 3]), iconComponent("貝", [3, 8]), iconComponent("寸", [8], "Here used to depict a hand.")]);
let shiDescription = `The characters 史 (history), 吏 (government official), 使 (cause; use; instruct), and 事 (matter; work; affair) are all etymologically related and all derive from the same ancient character, depicting a hand (又) holding some object. 
There are various theories about theories about what this object is, including a writing utensil, a container for official documents, a flag, or a hunting tool.
These four characters were originally all written the same, but later marks were added to distinguish them.`;
let shiObject = `Unkown object. Possibly a writing utensil, a container for official documents, a flag, or a hunting tool.`;
icon("史", "history", shiDescription, "obs", [unknownComponent(O, [0, 4], shiObject), iconComponent("又", [4], "Depicts a hand.")]);
icon("吏", "government official", shiDescription, "obs", [unknownComponent(O, [0, 5], shiObject), iconComponent("又", [5], "Depicts a hand.")]);
icon("使", "cause; use; instruct", shiDescription, "obs", [meaningComponent("亻", [0, 2]), unknownComponent(O, [2, 7], shiObject), iconComponent("又", [7], "Depicts a hand.")]);
icon("事", "matter; work; affair", shiDescription, "obs", [unknownComponent(O, [0, 4, 7], shiObject), iconComponent("又", [4, 7], "Depicts a hand.")]);
phonsem("您", "你", "心", 7, "you", "", false, true);
icon("𡈼", "stand upright", "Pictograph of a person standing upright.", "o");
icon("廴", "long stride", "Depicts a long stride. ", "s");
phonsem("廷", "𡈼", "廴", 4, "palace courtyard");
semphon("挺", "扌", "廷", 3, "erect; stick out");
icon("直", "straight", "Pictograph of a straight line coming from the eye, depicting somone looking straight at something. An additional stroke was added at the bottom for unkown reasons.", "obs", [iconComponent(O, [0, 2], "Depicts a straight line"), iconComponent("目", [2, 7]), unknownComponent(O, [7], unknownComonentNote())]);
addEtymology("德", "virtue; morality", "Depicts walking (彳) through life with a straight (直) heart (心) to represent the meaning \"virtue\".", [meaningComponent("彳", [0, 3]), meaningComponent("直", [3, 11]), meaningComponent("心", [11])], "bs");
icon("耳", "ear", "Pictograph of an ear.", "obs");
addEtymology("聽", "hear; listen", "Phonosemantic compound. 耳 (ear) represents the meaning and 𡈼 (tǐng) and 德 represent the sound. This character is unusual because it has multiple sound components.", [meaningComponent("耳", [0, 6]), soundComponent("𡈼", [6, 10]), soundComponent("德", [10], "The left 彳 (walk) component of 德 is omitted here. " + obsoleteSound("聽", "德"))]);
icon("丁", "robust", `Pictograph of a nail, which is now written as 釘.`, "obs");
semphon("釘", "金", "丁", 8, "nail");
simp("钉", "釘", [[0, 5], [5]]);
semphon("廳", "广", "聽", 3, "hall; large room");
semphon("厅", "广", "丁", 2, "hall; large room", simplified("廳"));
icon("斤", "axe", "Pictograph of an axe.", "ob");
semphon("听", "口", "厅", 3, "hear; lister", simplified("聽") + " The right side looks like 斤 (axe) but is actually a corruption of 厅.");
semphon("話", "言", "舌", 7, "language; talk");
simp("话", "話", [[0, 2], [2]]);
icon("雨", "rain", "Pictograph of rain falling from a cloud.", "obs");
icon("而", "and; but; yet", "Originally a pictograph of a beard, now written as 耏. The current use as a conjunction is a phonetic loan.", "ob");
icon("彡", "hair", "Pictograph of strands of hair.")
addEtymology("耏", "beard", "Phonosemantic compound. 而 represents the sound and 彡 (hair) represents the meaning.");
addEtymology("需", "require; need", `Originally was a pictograph of a person standing under the rain (雨), representing the meaning "to get wet", now written as 濡.
The current meaning is a phonetic loan. The person component was later replaced with the phonetic component 而.`, [iconComponent("雨", [0, 8]), soundComponent("而", [8], obsoleteSound("需", "而"))], "bs")
addEtymology("濡", "beard", "Phonosemantic compound. 氵 (water) represents the meaning and 需 represents the sound.");
icon("豆", "bean; (bowl)", "Pictograph of a stemmed bowl. Current meaning is a phonetic loan.", "obs");
icon("丰", "abundant; fertile", "Pictograph of a growing plant.", "bs");
icon("壴", "drum", "Pictograph of a drum with some sort of decoration on top.", "obs", [iconComponent(O, [0, 2], "Depicts a decoration on top of the drum."), iconComponent("豆", [2], "Depicts the bowl-shaped base of the drum.")]);
icon("豐", "abundant; fertile", "Pictograph of a pot floruishing with plants.", "bs", [iconComponent("丰", [1, 5]), iconComponent("丰", [5, 9]), iconComponent("豆", [9], "Here used to represent a pot.")]);
addEtymology("封", "close; seal")
phonsem("封", "丰", "寸", 6, "seal; close", "", false, false, "b");
phonsem("邦", "丰", "⻏", 4, "nation; state");
phonsem("帛", "白", "巾", 5, "silk");
phonsem("幫", "封", "帛", 9, "help; support", obsoleteMeaning("upper part of a shoe"));
phonsem("帮", "邦", "巾", 6, "help; support", simplified("幫") + " " + obsoleteMeaning("upper part of a shoe"));
icon("亡", "die; flee", "Pictograph of the tip of a knife blade.", "bs");
semphon("忙", "忄", "亡", 3, "busy");
semsem("戔", "戈", "戈", 4, "narrow; small", `Combination of two weapons (戈), based on the original meaning "destroy", now written as 殘.`);
simp("戋", "戔", [[0, 1], [1]]);
icon("歹", "bad; evil", "Origin unclear. Possibly represents remnants from a carcass.", "o");
semphon("殘", "歹", "戔", 4, "destroy; injure");
simp("残", "殘");
semphon("錢", "金", "戔", 8, "money");
simp("钱", "錢", [[0, 5], [5]]);
icon("䧹", "eagle", "Pictograph of an eagle perched on a branch. Original form of 鷹.", "o", [iconComponent("爿", [0, 5], "Depicts a branch."), iconComponent("隹", [5])]);
icon("片", "slice; thin piece", "Pictograph of a slice of a tree, taken from the right half of 木 (tree).");
icon("爿", "piece of wood", "Mirror image of 片 (slice; thin piece). Pictograph of a slice of a tree, taken from the left half of 木 (tree).")
icon("鳥", "bird", "Pictograph of a bird.", "obs");
simp("鸟", "鳥");
phonsem("鷹", "䧹", "鳥", 13, "eagle; hawk; falcon", "", false, true);
phonsem("鹰", "䧹", "鸟", 13, "eagle; hawk; falcon", simplified("鷹"), false, true);
phonsem("應", "䧹", "心", 13, "should; must; agree");
simp("应", "應", [[6], [0, 6]]);
semphon("該", "言", "亥", 7, "should; ought; probably");
simp("该", "該", [[0, 2], [2]]);
icon("垂", "hang down; droop", "Pictograph of drooping branches.", "os");
semphon("睡", "目", "垂", 5, "sleep");
semphon("跟", "足", "艮", 7, "follow; together with; heel");
semphon("吧", "口", "巴", 3, "[suggestion particle]");
icon("己", "self", "Origin unclear.");
icon("已", "already; finish", "Origin unclear.");
icon("自", "(nose); self; from; since", "Pictograph of a nose. Original form of 鼻 (nose). In China, when people point to themselves, they typically point to their nose.", "obs");
icon("走", "walk; go", "Pictograph of a person swaying their arms while walking.", "bs", [iconComponent(O, [0, 3], "Depicts a person swaying their arms."), meaningComponent("龰", [3])]);
semphon("起", "走", "己", 7, "rise; get up");
icon("㐅", "five", "Archaic variant of 五 (five).");
let 學_msg = `Originally composed of the numbers five (㐅) and six (六), representing study of arithmetic. 
Later two hands (又) were added on the left and right side of the character, possibly depicting counting with fingers or hands-on teaching.
Finally a child (子) was added to the bottom, depicting a child being educated.
The bottom part of 六 (six) was reanalyzed as 宀 (roof) and interpreted as a building for learning.`;
icon("學", "learn; study", 學_msg, "obs", [iconComponent("㐅", [4, 6]), iconComponent("六", [6, 8]), iconComponent("又", [0, 4]), iconComponent("又", [8, 11]), iconComponent("宀", [11, 13]), iconComponent("子", [13])]);
icon("学", "learn; study", simplified("學") + " " + 學_msg, "學:obs", [simplifiedComponent(O, [0, 3], "Shorthand form of the 㐅 (five), 六 (six), and 又 (hand) components in the top part of the traditional character 學."), iconComponent("宀", [3, 5]), iconComponent("子", [5])]);
phonsem("覺", "學", "見", 13, "think; perceive; sleep", "Only the top part of 學 is used, which prevents the character from being too crowded.");
phonsem("觉", "学", "见", 5, "think; perceive; sleep", simplified("學") + " Only the top part of 学 is used, which prevents the character from being too crowded.");
icon("襄", "help; assist", "Origin unclear.", "b");
semphon("讓", "言", "襄", 7, "let; permit");
semphon("让", "讠", "上", 2, "let; permit", simplified("讓"));
icon("戶", "door", "Pictograph of a door, taken from the left half of 門.", "os");
phonsem("所", "戶", "斤", 4, "place; that which", "The contribution of 斤 (axe) to the meaning is unclear.", true);
semsem("等", "⺮", "寺", 6, "class; rank; wait", "Higher-class people in ancient China who worked in temples (寺) wrote on bamboo (⺮) strips.");
semphon("談", "言", "炎", 7, "chat; discuss", "", true);
semphon("谈", "讠", "炎", 2, "chat; discuss", simplified("談"), true);
icon("禾", "grain", "Pictograph of grain.", "ob");
phonsem("和", "禾", "口", 5, "and; together; harmony", mouthedNote);
icon("工", "work; craft", "Pictograph of a carpenter's tool.", "ob");
icon("弓", "bow (archery)", "Pictograph of a curved bow.", "bs");
icon("發", "send out; to issue", `Depicts a person standing on their two feet, pulling back a bowstring, about to shoot an arrow. Conveys the meaning "shoot; send out".`, "os", [iconComponent("止", [0, 2], "Left foot. Mirror image of 止."), iconComponent("止", [2, 5], "Right foot."), iconComponent("弓", [5, 8]), iconComponent(O, [8, 10], "Depicts a bowstring being pulled back."), iconComponent("又", [10])]);
icon("髮", "hair", "Originally a combination of 首 (head) and 犬 (dog), both of which are hairy. Later the 首 (head) component was changed to 髟 (hairy).", "bs", [meaningComponent("髟", [0, 10]), meaningComponent("犬", [10])]);
icon("发", "send out; hair", "Simplified form of both 發 (send out; to issue) and 髮 (hair). Derived from 犬 (dog), the bottom component of 髮.");
icon("生", "be born; life", "Pictograph of a sprout emerging from the ground.", "obs");
icon("网", "net", "Pictograph of a net.", "o");
semphon("罔", "网", "亡", 5, "net");
semphon("網", "糹", "罔", 6, "net", "", false, true);
phonsem("頭", "豆", "頁", 7, "head");
addEtymology("头", "head", "Phonosemantic compound. 頁 represents the meaning and 豆 represents the sound. " + cursive("头", "頭"), [simplifiedComponent("豆", [0, 2]), simplifiedComponent("頁", [2])], "頭:tc");
icon("買", "buy", "Pictograph of money (貝) coming out of a netted bag (网).", "obs", [iconComponent("网", [0, 5]), iconComponent("貝", [5], "Shells were used as currency in ancient China.")]);
simp("买", "買", [[0, 1], [1]], {}, { "貝": "头" }, true);
semphon("賣", "出", "買", 3, "sell", "", false, true, false, "s");
semphon("卖", "出", "买", 2, "sell", simplified("賣"), false, true, false, "賣:s");
semphon("讀", "言", "賣", 7, "read", "", true);
semphon("读", "讠", "卖", 2, "read", simplified("讀"), true);
phonsem("過", "咼", "辶", 9, "go over; cross");
simp("过", "過", [[3], [0, 3]], {}, { 咼: "寸" }, true);
icon("旦", "dawn; morning", "Pictograph of the sun rising above the horizon.", "", [iconComponent("日", [0, 4]), iconComponent(O, [4], "Depicts the horizon.")]);
semphon("但", "亻", "旦", 2, "but; only");
icon("間", "between; space; gap", "Depicts sunlight (日) shining through the gap in a door (門).", "", [iconComponent("門", [0, 8]), iconComponent("日", [8])]);
simp("间", "間", [[0, 3], [3]], { 門: "门" });
semphon("簡", "⺮", "間", 6, "simple", obsoleteMeaning("bamboo strips for writing"));
simp("简", "簡", [[0, 6], [6]], { 間: "间" });
icon("井", "water well", "Pictograph of a well.", "o");
semphon("青", "生", "井", 4, "color of nature; green; blue");
semphon("情", "忄", "青", 3, "feeling; situation");
semphon("請", "言", "青", 7, "ask; invite; please");
simp("请", "請", [[0, 2], [2]], { 言: "讠" });
semphon("找", "扌", "戈", 3, "find; look for", "", true);
icon("正", "straight; correct", `Pictograph of a foot (止) heading toward a city. Based on the original meaning "go on a military campaign", now written as 征. The meaning later shifted to "power", "rule" (政), and "correct" (正).`, "ob", [iconComponent(O, [0, 1], "Depicts a city."), iconComponent("止", [1])]);
semphon("征", "彳", "正", 3, "journey; campaign; attack", "Originally written as 正.");
phonsem("政", "正", "攵", 5, "government; politics");
icon("从", "from; follow", "Pictograph of one person following another.", "s");
icon("從", "from; follow", "Originally a pictograph of one person following another (从).  Later the 彳 and 止 components were added to indicate movement.", "b", [iconComponent("彳", [0, 3]), iconComponent("从", [3, 7], "Depicts one person following another."), iconComponent("止", [7])]);
icon("它", "it", "Pictograph of a snake, now written as 蛇. The current use as a pronoun is a phonetic loan.", "ob");
semphon("蛇", "虫", "它", 6, "snake", "Originally written as 它.");
icon("同", "same; together", "Pictograph of a bucket or tube, now written as 筒. " + mouthedNote, "obs", [iconComponent(O, [0, 3], "Depicts a bucket or tube. This meaning is now represented by 筒."), meaningComponent("口", [3])]);
semphon("筒", "⺮", "同", 6, "tube; cylinder", "Originally written as 同.");
phonsem("意", "音", "心", 9, "idea; thought; wish");
icon("巠", "loom", "Pictograph of a loom.", "b");
icon("經", "pass through; undergo; classics", "Pictograph of a loom for weaving. In a loom threads have to pass through each other.", "bs", [meaningComponent("糹", [0, 6]), iconComponent("巠", [6], "Depicts a loom.")]);
simp("经", "經", [[0, 3], [3]], { 糹: "纟" });
icon("丙", "3rd heavenly stem", "Origin unclear. Variously explained as a table or pedestal, or a fish tail.", "obs");
icon("兩", "two", "Combination of two 丙 characters. The significance of 丙 is unclear.");
simp("两", "兩");
icon("車", "chariot; car; vehicle", "Pictograph of a chariot.", "obs");
simp("车", "車", null, {}, {}, true);
icon("年", "year", "Pictograph of a person (卩) harvesting grain (禾). The harvest season is a yearly event. The components are not obvious in the modern form.", "obs", [iconComponent("禾", [0, 2, 4, 5]), iconComponent("卩", [2, 4, 5])]);
icon("牛", "cow", "Pictograph of the head of a cow.", "ob");
semsem("件", "亻", "牛", 2, "item", "The correspondence between the components 亻(person) 牛 (cow) and the character 件 (item) is unclear.");
icon("東", "east", `Pictograph of a basket or a bag. The current meaning "east" is a phonetic loan.`, "obs");
simp("东", "東", null, {}, {}, true);
icon("重", "heavy; repeat", "Pictograph of a person (亻) carrying a heavy basket (東).", "bs", [iconComponent("亻", [0, 1, 6, 7]), iconComponent("東", [1, 6, 7], "Here used to depict a basket.")]);
icon("取", "take; get", "Pictograph of a hand (又) grabbing an ear (耳). In ancient China, the ears of opponents in battle were cut off and collected as tokens of victory.", "ob", [iconComponent("耳", [0, 6]), iconComponent("又", [6])]);
semphon("最", "冃", "取", 4, "most; -est", "冃 is used here since a hat is placed at the highest part of the head.", true);
icon("后", "empress; (simp.) after, behind", "后 (empress) and its mirror image 司 (take charge) were originally used interchangeably. The origin of both characters is unclear. " + simplifyMerge("后", "後", "after, behind"));
icon("司", "take charge; manage", "司 (take charge) and its mirror image 后 (empress) were originally used interchangeably. The origin of both characters is unclear.");
addEtymology("後", "after; behind", "Phonosemantic compound. 幺 represents the sound, and 彳 (walk) and 夂 (foot) are used together to depict following behind someone.", [meaningComponent("彳", [0, 3]), soundComponent("幺", [3, 6]), meaningComponent("夂", [6])]);
icon("告", "tell; say", "Pictograph of a tongue extending from an open mouth. Graphically similar to 舌 (tongue).", "os", [iconComponent(O, [0, 4], "Depicts a tongue extending from an open mouth."), iconComponent("口", [4])]);
icon("屰", "contrary; oppose", "Pictograph of an upside-down person. Original form of 逆.", "obs");
semsem("逆", "屰", "辶", 6, "contrary; oppose; go against", "Originally written as 屰, a pictograph of an upside-down person. The 辶 (walk) component was added later.", "b");
addEtymology("斥", "blame; reprimand", "Originally written as 㡿. Composed of 广 (roof) and 屰 (contrary; oppose). The purpose of the 广 component is unclear.", [unknownComponent("广", [0, 2]), meaningComponent("屰", [2], "Shorthand form of 屰 (contrary; oppose).")], "s");
addEtymology("㡿", "blame; reprimand", "Archaic variant of 斥. Composed of 广 (roof) and 屰 (contrary; oppose).", [], "斥:s")
semphon("訴", "言", "斥", 7, "tell; accuse; complain", "", true, true);
simp("诉", "訴", [[0, 2], [2]], { 言: "讠" });
semsem("信", "亻", "言", 2, "trust; letter; information", "Conveys trusting (信) what a person (人) says (言).");
semphon("給", "糹", "合", 6, "give; for; provide", "The 糸 (silk) component is used because silk is a precious material often given as a gift.", true);
simp("给", "給", [[0, 3], [3]], { 糹: "纟" });
icon("午", "noon; 7th earthly branch", "Pictograph of a pestle used for pounding rice, now written as 杵. The current meaning \"noon\" is a phonetic loan.", "obs");
semphon("杵", "木", "午", 4, "pestle; poke", "Originally written as 午, a pictograph of a pestle used for pounding rice.");
semphon("許", "言", "午", 7, "allow; perhaps");
simp("许", "許", [[0, 2], [2]], { 言: "讠" });
icon("舟", "boat", "Pictograph of a boat.", "obs");
icon("前", "forward; before", "Depicts a boat (舟) moving (止) forward (前).", "obs", [iconComponent("止", [0, 3]), iconComponent("舟", [3])]);
icon("面", "face; side; surface; (simp.) noodles", "Pictograph of the outline of a face, with an eye (目) in the middle. " + simplifyMerge("面", "麵", "noodles"), "os", [iconComponent(O, [0, 4, 8], "Depicts the outline of a face."), iconComponent("目", [4, 8])]);
semphon("麵", "麥", "面", 11, "noodles");
icon("久", "long time", "Origin unclear");
semphon("待", "彳", "寺", 3, "wait; stay", "", true);
semphon("著", "艹", "者", 3, "[progress particle]; touch, wear; show");
simp("着", "著", [[0, 3], [3]]);
icon("主", "owner; master; main", "Pictograph of a torch, now written as 炷. The current meaning is a phonetic loan.", "os");
semphon("炷", "火", "主", 4, "wick for oil lamp; burn; incense stick", "Originally written as 主, a pictograph of a torch.");
semphon("住", "亻", "主", 2, "live; stay");
icon("方", "square; direction; side", "Origin unclear. Variously explained as a pictograph of a square tool, a part of a knife, or a raft.", "obs");
semphon("房", "戶", "方", 4, "room; house");
addEtymology("將", "will; use; take", `Depicts a hand (寸) taking a piece of meat (肉), conveying the meaning "take". 爿 (qiáng) is a sound component.`, [soundComponent("爿", [0, 4]), iconComponent("肉", [4, 8]), iconComponent("寸", [8], "Used here to depict a hand.")]);
simp("将", "將", [[0, 3], [3, 6], [6]], { 爿: "丬" });
icon("欠", "yawn; lack; owe", "Pictograph of a person opening their mouth to yawn.", "os", [iconComponent(O, [0, 2], "Depicts an open mouth."), iconComponent("人", [2])]);
addEtymology("次", "time; next; second", "", [meaningComponent("二", [0, 2]), unknownComponent("欠", [2])]);
icon("父", "father", "Pictograph of a hand holding something. There are various theories about what the object being held is, including a hatchet (now written as 斧), or a rod.", "bs");
phonsem("斧", "父", "斤", 4, "hatchet");
phonsem("布", "父", "巾", 2, "cloth; declare", "In the modern form it is not obvious that the top component is 父.", false, false, "b");
icon("爻", "intertwined cross shape; diagram for divination", "Pictograph of two X shapes.");
addEtymology("希", "hope", `Composed of 爻 (intertwined cross shape) and 巾 (cloth). Conveys a rare type of stitched cloth, corresponding to the original meaning "sparse; rare". The meaning later shifted to "hope".`, [iconComponent("爻", [0, 4]), meaningComponent("巾", [4])]);
addEtymology("望", "hope; expect; gaze", "Pictograph of a person standing up (𡈼) and gazing at the moon (月). 亡 is a sound component that was added later.", [soundComponent("亡", [0, 3]), iconComponent("月", [3, 7]), iconComponent("𡈼", [7])], "os");
semphon("機", "木", "幾", 4, "machine; opportunity");
simp("机", "機", [[0, 4], [4]], { 幾: "几" });
icon("昔", "former times; ancient", "Pictograph of the sun (日) having passed through many cycles of rising and setting.", "b", [iconComponent(O, [0, 4], "Depicts cycles of rising and setting."), iconComponent("日", [4])]);
semphon("錯", "金", "昔", 8, "mistake; wrong; complex", `The character is based on the original meaning "grind stone", which later shifted to "mix", "be in disorder", and "wrong".`, true);
simp("错", "錯", [[0, 5], [5]], { 金: "钅" });
icon("堇", "clay", "Pictograph of a person over a fire with their mouth open upwards. The original meaning of this character is unclear.", "bs", [iconComponent("口", [0, 4], "Depicts a mouth open upwards."), iconComponent("人", [4, 10], "Stick figure of a person."), iconComponent("火", [10])]);
semphon("漢", "氵", "堇", 3, "Han river; Chinese", "", true);
semphon("僅", "亻", "堇", 2, "only");
phonsem("難", "堇", "隹", 11, "difficult", obsoleteMeaning("type of bird"), true);
simp("汉", "漢", [[0, 3], [3]], {}, { 堇: "又" }, true);
simp("仅", "僅", [[0, 2], [2]], {}, { 堇: "又" }, true);
simp("难", "難", [[2], [0, 2]], {}, { 堇: "又" }, true);
icon("必", "certainly; must", "Pictograph of a weapon, now written as 柲. The current meaning is a phonetic loan.", "b");
addEtymology("柲", "bamboo weapon handle", `Phonosemantic compound. 木 represents the meaning and 必 represents the sound. Originally written as 必, a pictograph of a weapon.`);
icon("須", "must", "Pictograph of a person with a bearded face. The current meaning is a phonetic loan.", "ob", [iconComponent("彡", [0, 3]), iconComponent("頁", [3], "Depicts a head.")]);
icon("鬚", "beard", "Originally written as 須, a pictograph of a person with a bearded face. The 髟 component (hairy) was added later.", "", [meaningComponent("髟", [0, 10]), soundComponent("須", [10])]);
simp("须", "須", [[0, 3], [3]], { 頁: "页" }, {}, false, "鬚", "beard");
icon("角", "horn; corner; angle", "Pictograph of a horn.", "obs");
semphon("确", "石", "角", 5, "solid; firm; real; true");
semphon("定", "宀", "正", 3, "stable; fixed; determine", "", true);
phonsem("如", "女", "口", 3, "if; as", mouthedNote, true);
icon("果", "fruit", "Pictograph of fruit growing on a tree.", "obs", [iconComponent(O, [0, 4], "Depicts fruit. Unrelated to the visually similar character 田 (field)."), iconComponent("木", [4])]);
icon("舁", "lift; raise", "Pictograph of four hands working together to lift something.", "bs", [iconComponent("又", [0, 3, 5, 6]), iconComponent("又", [3, 6]), iconComponent("又", [6, 8]), iconComponent("又", [6, 7, 8])]);
addEtymology("興", "rise; flourish; excitement", "Depicts four hands (舁) working together (同) to raise something.", [meaningComponent("舁", [0, 4, 10]), meaningComponent("同", [4, 10])], "bs");
simp("兴", "興", [[0, 1, 2], [1, 2]], {}, { 舁: "舁", 同: "同" }, true);
icon("非", "not", "Pictograph of two wings facing opposite directions.", "s");
phonsem("裳", "尚", "衣", 8, "lower garment", "Originally used interchangeably with 常.");
phonsem("常", "尚", "巾", 8, "often; ordinary", `Based on the original meaning, "lower garment", now written as 裳. The current meaning is a phonetic loan.`);
semsem("喜", "壴", "口", 9, "Depicts merriment from beating on a drum (壴) and singing with the mouth (口).");
icon("雚", "stork; heron", "Pictograph of a stork", "obs", [iconComponent("隹", [9])]);
phonsem("歡", "雚", "欠", 18, "joyous; happy", "欠 (yawn) is a pictograph of a person with an open mouth. Likely used here to represent a person joyfully laughing.");
simp("欢", "歡", [[2], [0, 2]], {}, { 雚: "又" });
semphon("法", "氵", "去", 3, "law; method; way", "The water (氵) component is used to represent the way water follows a defined path e.g. in rivers.");
icon("或", "maybe; or", "Originally a pictograph of a weapon. The current meaning is a phonetic loan.", "ob", [iconComponent("戈", [0, 1, 4]), meaningComponent("口", [1, 4], mouthedNote)]);
semphon("國", "囗", "或", [[0, 2, 10], [2, 10]], "country");
simp("国", "國", [[0, 2, 7], [2, 7]], {}, { 或: "玉" });
icon("中", "middle; center", `A line passing through the middle of a box, representing the meaning "middle".`);
phonsem("床", "广", "木", 3, "bed");
icon("母", "mother", `Pictograph of a woman kneeling, with two dots representing the two nipples that mothers use to feed their young.`, "obs");
icon("每", "each; every", "Pictograph of a woman (母) with a hairpin in her hair. In ancient China, women of marriagable age wore a hairpin. Based on the original meaning \"young woman\" The current meaning is a phonetic loan.", "ob", [iconComponent(O, [0, 2], "Depicts a hairpin."), iconComponent("母", [2])]);
icon("央", "beg; finish; middle", "Pictograph of a person (大) with a cangue (torture device for punishing criminals) around his neck. People wearing such devices were not able to reach their mouth with their own hands, and were forced to beg for food.", "os", [iconComponent(O, [0, 2], "Depicts a cangue (torture device for punishing criminals worn around the neck)."), iconComponent("大", [2], "Here used as a pictograph of a person")]);
semphon("英", "艹", "央", 3, "blossom; outstanding; hero");
phonsem("吾", "五", "口", 4, "(archaic) I; me");
semphon("語", "言", "吾", 7, "language; speech");
simp("语", "語", [[0, 2], [2]], { 言: "讠" });
icon("丩", "entangle; gather", "Pictograph of two ropes entangled together, now written as 糾.", "os");
semphon("糾", "糹", "丩", 6, "entangle; gather", "Originally written as 丩, a pictograph of two ropes entangled together.");
simp("纠", "糾", [[0, 3], [3]], { 糹: "纟" });
semphon("叫", "口", "丩", 3, "call; shout");
phonsem("句", "丩", "口", 2, "sentence; phrase");
semphon("夠", "多", "句", 6, "enough");
phonsem("够", "句", "多", 5, "enough");
icon("用", "use", `Originally a pictograph of a bucket with a handle on the right side. The current meaning "use" is a phonetic loan.`, "bs");
icon("元", "first; primary; currency unit", `Pictograph of a person with two lines added at the head area, representing the meaning the meaning "head" or "first".`, "ob");
semphon("完", "宀", "元", 3, "complete; finish", "The 宀 component is used because putting on a roof completes the process of constructing a building.");
icon("戊", "fifth Heavenly stem; battle-axe", "Pictograph of an axe. Similar to 戈, 戉, and 戌.", "obs");
phonsem("成", "丁", "戊", [[2, 3], [0, 2, 3]], "complete; succeed", `The 戊 (axe) component is used to represent defending a city. Based on the original meaning "city", now written as 城. The meaning later shifted to "build", "accomplish", and "complete".`, true);
semphon("城", "土", "成", 3, "city; city walls");
icon("入", "enter; go in", "Origin unclear. Variously explained a a pictograph of an entrance to a tent, or an arrow pointing forward.", "ob");
addEtymology("全", "complete; whole", "Origin unclear.", [unknownComponent("入", [0, 2]), unknownComponent("玉", [2])]);
semphon("把", "扌", "巴", 3, "hold; take; handle");
semphon("打", "扌", "丁", 3, "beat; hit", "", true);
phonsem("當", "尚", "田", 8, "be; act as; face; during", "The contribution of the 田 (field) component to the meaning is unclear.");
simp("当", "當", [[3], [0, 3]], {}, { 尚: "尚", 田: "田" }, true);
icon("廾", "two hands", "Pictograph of two hands.", "o");
icon("開", "open", "Pictograph of two hands opening the bolt on a door.", "s", [iconComponent("門", [0, 8]), iconComponent(O, [8, 9], "Depicts a bolt on a door."), iconComponent("廾", [9])]);
simp("开", "開", [[0, 0], [0, 1], [1]]);
icon("申", "extend; state; explain", "Pictograph of a lightning bolt. The current meaning is a phonetic loan.", "obs");
icon("电", "electricity; lightning", "Originally a variant form of 申, a pictograph of a lightning bolt. The traditional form 電 adds the 雨 (rain) component.", "申:obs");
semsem("電", "雨", "电", 8, "electricity, lightning", "Depicts lightning (电) during a rainstorm (雨).");
phonsem("台", "以", "口", 2, "platform; station; (simp.) table; counter", mouthedNote + " " + simplifyMerge("台", "檯", "table; counter"), true);
semphon("室", "宀", "至", 3, "room");
semsem("臺", "高", "室", 6, "platform; station", "Only part of the 高 (tall) component is used, preventing the character from being too crowded.");
semphon("檯", "木", "臺", 4, "table; counter");
semphon("始", "女", "台", 3, "start; begin", "The 女 (woman) component is used because life begins inside a woman.", true);
phonsem("更", "丙", "攴", [[0, 5], [5]], "change; even more", "", true, false, "s");
icon("冰", "ice", "Pictograph of ice cubes (冫) next to a river of water (水).", "b", [iconComponent("冫", [0, 2], "Depicts ice cubes."), meaningComponent("水", [2])]);
semphon("決", "氵", "夬", 3, "decide; determine", `Based on the original meaning "burst open". The meaning later shifted to "clear", "cut off", "decide" and "judge".`, true, true);
simp("决", "決", [[0, 2], [2]], {}, { 氵: "冫" });
semphon("星", "日", "生", 4, "star; celestial object");
icon("其", "its; their; that", "Pictograph of a basket, now written as 箕. The current meaning is a phonetic loan.", "s");
semphon("箕", "⺮", "其", 6, "winnow basket", "Originally written as 其, a pictograph of a basket.");
phonsem("期", "其", "月", 8, "period of time");
icon("比", "compare", `Pictograph of two people side-by-side, conveying the meaning "to put together", "match", or "compare".`, "bs", [iconComponent("人", [0, 2]), iconComponent("人", [2])]);
icon("离", "mythical beast; (simp.) leave; depart; away from", "Pictograph of a legendary mountain demon with horns and a tail beween its legs, now written as 魑. The traditional character 離 (leave; depart; away from) was simplified to 离 by deleting the 隹 (bird) component.", "s");
phonsem("離", "离", "隹", 10, "leave; depart; away from", "The 隹 (bird) component alludes to a bird flying away.");
icon("鬼", "ghost; demon", "Pictograph of a human-like being with an unnatural head and a tail.", "obs", [iconComponent(O, [0, 5], "Depicts the head of a ghost/demon."), iconComponent("人", [5, 7]), iconComponent(O, [7], "Depicts a tail.")]);
semphon("魑", "鬼", "离", 9, "mountain demon");
icon("長", "long; grow; elder", "Pictograph of a person with long hair.", "obs");
simp("长", "長", null, {}, {}, true);
icon("丱", "two tufts of hair; young", "Pictograph of a child's hairstyle with two tufts.");
icon("𢇇", "weave threads", "Depicts weaving threads (𢆶) through a weaving shuttle (丱).");
semphon("關", "門", "𢇇", 8, "shut; turn off; involve");
simp("关", "關", [[0, 0], [0]], {}, { "𢇇": "关" }, true);
semphon("聯", "耳", "𢇇", 6, "connect; join; unite", "Depicts earrings joined to the ear.", true);
simp("联", "聯", [[0, 6], [6]], {}, { "𢇇": "关" });
semsem("肰", "⺼", "犬", 4, "dog meat", "Depicts the meat (⺼) of a dog (犬).");
phonsem("然", "肰", "灬", 8, "correct; so; thus", `Based on the original meaning "ignite; burn", now written as 燃. The current meaning is a phonetic loan.`);
semphon("燃", "火", "然", 4, "ignite; burn");
icon("壬", "ninth Heavenly stem", "Origin unclear.", "obs");
semphon("任", "亻", "壬", 2, "assign; appoint; responsibility", "", false);
semphon("何", "亻", "可", 2, "what; how; why");
icon("西", "west", "Origin unclear. Variously explained as a bag or bird's nest.", "ob");
icon("鹵", "salt", "Pictograph of a bag of salt.", "bs");
simp("卤", "鹵");
icon("戌", "11th earthly branch", "Pictograph of an axe. Similar to 戈 and 戊.", "obs");
addEtymology("咸", "all; together; (simp.) salty", `Depicts a massacre with a weapon (戌), based on the original meaning "slaughter; terminate". The meaning later shifted to "finish", "complete", and "all". ` + simplifyMerge("咸", "鹹", "salty"), [meaningComponent("戌", [0, 3, 6]), unknownComponent("口", [3, 6], "Likely used to distinguish this character from 戌.")], "obs");
semphon("鹹", "鹵", "咸", 11, "salty");
phonsem("感", "咸", "心", 9, "feel; touch; emotion", "", true);
icon("射", "shoot", "Depicts a hand pulling back a bowstring with an arrow to shoot.", "bs", [iconComponent(O, [0, 7], "Depicts a bow and arrow. Originally unrelated to 身 (body), but later written the same."), iconComponent("寸", [7], "Depicts a hand.")]);
icon("身", "body", `Pictograph of a person with an protruding midsection. The protruding midsection is variously explained as (1) representing the main part of a person's body, or (2) as representing a pregnant woman that has a body inside her body.`, "bs");
semphon("謝", "言", "射", 7, "thanks");
simp("谢", "謝", [[0, 2], [2]], { 言: "讠" });
icon("失", "lose", "Pictograph of something falling out of the hand.", "s", [iconComponent("手", [0, 3, 4]), iconComponent(O, [3, 4], "Depicts an object falling out of the hand.")]);
icon("妻", "wife", "Pictograph of a hand grabbing a woman's hair. In ancient China, women of marriagable age wore hairpins (compare with 每).", "bs", [iconComponent(O, [0, 1, 4, 5], "Depicts a hairpin."), iconComponent("又", [1, 4], "Depicts a hand grabbing the woman's hair."), iconComponent("女", [5])]);
icon("辛", "hard; laborious; suffering", "Pictograph of a chisel-like tool used to tattoo the face of criminals as punishment (see 黑).", "bs");
semsem("妾", "辛", "女", 5, "concubine", `Depicts a woman (女) with a damaged reputation (辛 is a pictograph of a tool used to tattoo the face of criminals as punishment).`);
semphon("接", "扌", "妾", 3, "recieve; meet; connect");
icon("且", "moreover", `Originally a pictograph of a sacrificial altar. The current meaning "moreover" is a phonetic loan.`, "ob");
phonsem("助", "且", "力", 5, "help", "", true);
semphon("種", "禾", "重", 5, "seed; grow; type");
semphon("种", "禾", "中", 5, "seed; grow; type", simplified("種"));
icon("分", "separate; divide", `Depicts a knife ( 刀 ) being used to cut two things apart (八).`, "", [iconComponent("八", [0, 2], "Depicts two things being separated."), iconComponent("刀", [2])]);
semphon("童", "辛", "重", [[0, 5, 7, 8, 9, 10], [4]], "child", `Based on the original meaning "young servant boy". The meaning later shifted to "child".`);
semphon("鐘", "金", "童", 8, "clock; bell");
semphon("钟", "钅", "中", 5, "clock; bell", simplified("鐘"));
icon("冓", "meet; confluence", "Pictograph of two fish facing each other.", "bs");
semphon("講", "言", "冓", 7, "speak; explain", "", true);
semphon("讲", "讠", "井", 2, "speak; explain", simplified("講"));
icon("泉", "spring of water", "Pictograph of water flowing out of a spring.", "os", [iconComponent(O, [0, 5], "Depicts a spring. Unrelated to 白 (white)."), iconComponent("水", [5])]);
semsem("原", "厂", "泉", 2, "original; source; former", `Depicts a spring (泉) originating (原) from a cliff (厂).`);
semphon("源", "氵", "原", 3, "source; origin", "", false, true);
phonsem("愿", "原", "心", 10, "sincere; (simp.) hope; wish", simplifyMerge("愿", "願", "hope; wish"));
phonsem("願", "原", "頁", 10, "hope; wish", "The 頁 (head) component is used because wishes originate from the brain.");
icon("先", "first; early", `Depicts a person (人) stepping forward (止) leading the way.`, "ob", [iconComponent("止", [0, 4]), iconComponent("人", [4])]);
icon("老", "old", "Pictograph of an old person with long hair bent over and leaning on a cane.", "obs", [iconComponent(O, [0, 2], "Depicts long hair."), iconComponent(O, [2, 4], "Depicts an old man bent over."), iconComponent(O, [4], "Depicts a cane.")]);
semsem("名", "夕", "口", 3, "name; fame", `Traditionally explained as identifying youself at night (夕) by saying (口) your name (名) because is too dark for others to see you.`);
semphon("字", "宀", "子", 3, "letter; symbol; word", `The 宀 (roof) component is based on the original meaning "raise; nurture". The menaing later shifted to "educate", "word", and "writing".`);
icon("少", "less; few", `Pictograph of four small dots, representing grains of sand or rice, to convey the meaning "less". Similar to 小.`, "obs");
icon("系", "system; link; connection", "Pictograph of a hand (又) holding a group of threads (糸) that are connected together (系).", "bs", [iconComponent("又", [0, 1]), iconComponent("糸", [1])]);
semphon("係", "亻", "系", 2, "connect; tie; bind");
icon("服", "clothes; take; eat; obey; serve", "Pictograph of a person being served a plate.", "bs", [iconComponent(O, [0, 4], "Depicts a plate."), iconComponent("卩", [4, 6]), iconComponent("又", [6])]);
icon("卯", "mortise; 4th earthly branch", "Origin unclear. Variously explained as a mortise (a slot cut into a piece of wood), and knives used for sacrificing animals.", "obs");
phonsem("留", "卯", "田", 5, "stay; keep", "", true);
icon("坐", "sit", "Pictograph of two people (人) sitting on the ground (土).", "s", [iconComponent("人", [0, 2]), iconComponent("人", [2, 4]), iconComponent("土", [4]),]);
icon("因", "because; reason", "Pictograph of clothing surrounding (囗) a person (人), now written as 裀. The current meaning is a phonetic loan.", "bs", [iconComponent("囗", [0, 2, 5], "Depicts clothing surrounding a person."), iconComponent("大", [2, 5], "Depicts a person.")]);
addEtymology("裀", "undergarment; mat", `Phonosemantic compound. 衤 represents the meaning and 因 represents the sound. Originally written as 因, a pictograph of clothing surrounding a person.`);
semphon("律", "彳", "聿", 3, "law");
icon("示", "(spiritual); show; reveal", `Origin unclear. Most likely depicts some object of spiritual significance. Most often explained as an altar or a memorial tablet.`, "os");
phonsem("視", "礻", "見", 4, "look at; inspect");
simp("视", "視", [[4], [0, 4]], { 見: "见" });
icon("𠂤", "heap; pile; buttocks", "Pictograph of buttocks.", "ob");
icon("帀", "circle; surround; everywhere", "Origin unclear.");
addEtymology("師", "teacher; master; expert", "Origin unclear.", [unknownComponent("𠂤", [0, 6]), unknownComponent("帀", [6])]);
simp("师", "師", [[0, 2], [2]], {}, { "𠂤": "刂" });
addEtymology("帥", "handsome; smart; commander", `Originally a pictograph of two hands pulling a rod, based on the original meaning "lead; command". The meaning later shifted to "handsome". The purpose of the 巾 (cloth) is unclear. It possibly represents a special cloth worn by commanders.`, [iconComponent(O, [0, 6], "Depicts something being pulled by two hands. Unrelated to the 𠂤 (heap; pile; buttocks) component even though it looks identical in the modern form."), unknownComponent("巾", [6], "Possibly represents a special cloth worn by a commander.")], "bs");
simp("帅", "帥", [[0, 2], [2]], {}, { [O]: "刂" });
semphon("景", "日", "京", 4, "bright; scenery");
phonsem("影", "景", "彡", 12, "shadow; image; picture", "The 彡 component depicts lines of shadow.");
phonsem("進", "隹", "辶", 8, "go forward; advance", "", true);
phonsem("进", "井", "辶", 4, "go forward; advance", simplified("進"));
icon("立", "stand; establish", `Pictograph of a person standing on the ground.`, "obs");
semphon("站", "立", "占", 5, "station; stop; stand");
semphon("爸", "父", "巴", 4, "dad; father");
icon("殳", "spear", "Pictograph of a hand holding a spear.", "obs", [iconComponent(O, [0, 2], "Depicts a spear."), iconComponent("又", [2], "Depicts a hand.")]);
addEtymology("殹", "(archaic) [particle]", "Original meaning unclear.", [unknownComponent(O, [0, 7], "Seems to depict an arrow in a container."), unknownComponent("殳", [7])]);
icon("酉", "10th earthly branch", "Pictograph of a container for wine.", "obs");
semphon("酒", "氵", "酉", 3, "alcoholic drink", "The 酉 component is a pictograph of a container for wine, so it also serves as a meaning component.", false, true);
phonsem("醫", "殹", "酉", 11, "medicine", "The 酉 component is a pictograph of a container for wine, which is sometimes used for medicinal purposes.");
simp("医", "醫", [[0, 0], [0]]);
icon("舄", "shoe, slipper", `Pictograph of a bird with its two wings opened. Based on the original meaning "magpie", now written as 鵲. The current meaning "shoe" is a phonetic loan.`, "bs");
phonsem("鵲", "昔", "鳥", 8, "magpie", "Originally written as 舄.");
simp("鹊", "鵲", [[8], [0, 8]], { 鳥: "鸟" });
semphon("寫", "宀", "舄", 3, "write", "The contribution of the 宀 (roof) component to the meaning is unclear. Perhaps used since writing is typically done indoors.");
simp("写", "寫", [[0, 2], [2]], { 宀: "冖" }, { 舄: "与" }, true);
icon("牙", "tooth", "Pictograph of teeth.", "bs");
semphon("與", "舁", "牙", [[0, 4, 7], [4, 7]], "and; together; take part", "", true);
simp("与", "與", [[0, 0], [0]]);
icon("云", "cloud", "Pictograph of clouds.", "o");
semphon("雲", "雨", "云", 8, "cloud", "", false, true);
phonsem("動", "重", "力", 9, "move");
simp("动", "動", [[4], [0, 4]], {}, { 重: "云" });
icon("囟", "top of skull; fontanel", "Pictograph of the top part of the skull.", "s");
icon("川", "river", "Pictograph of a river.", "obs");
addEtymology("腦", "brain; mind; head", "The brain is part of the body (⺼) composed of a system of pathways (巛) located inside of the skull (囟).", [meaningComponent("⺼", [0, 4]), iconComponent("巛", [4, 7], "Here used to represent the system of neural pathways in the brain, similar to a system of rivers."), iconComponent("囟", [7])]);
simp("脑", "腦", [[0, 4], [4, 4], [4]]);
icon("曰", "speak; say", "Pictograph of a line, representing speech, coming out of a mouth (口).", "o", [iconComponent("口", [0, 2, 3]), iconComponent(O, [2, 3], "Represents a line of speech coming out of the mouth.")]);
icon("丐", "beggar", "Origin unclear. Possibly depicts a beggar holding his hand out.", "bs");
icon("匃", "beggar", "Variant form of 丐. Origin unclear. Possibly depicts a beggar holding his hand out.", "丐:bs");
semphon("曷", "曰", "匃", 4, "why; how; what", "", true);
semphon("喝", "口", "曷", 3, "drink");
icon("各", "each; every", `Pictograph of a foot (夂) entering an opening, (口), the opposite of 出 (exit). Based on the original meaning "enter", unrelated to the current meaning "each", which is a phonetic loan.`, "ob", [iconComponent("夂", [0, 3]), iconComponent("口", [3])]);
semphon("客", "宀", "各", 3, "guest; customer");
addEtymology("票", "ticket; ballot", "Origin unclear.", [unknownComponent("覀", [0, 6]), unknownComponent("示", [6])]);
semphon("漂", "氵", "票", 3, "float; drift; elegant");
phonsem("亮", "京", "人", 7, "bright; clear; reveal", "Depicts a person (人) in a high place (京).", true, true, "s");
icon("阜", "mound; abundant", "Origin unclear. Possibly represents stepping stones on a mountain.", "s");
semphon("院", "阝", "完", 2, "courtyard; institution");
icon("弟", "younger brother", `Pictograph of a rope wrapped around a weapon. Relation to current meaning "younger brother" unclear.`, "bs", [iconComponent("戈", [0, 2, 5], "Depicts a weapon."), iconComponent(O, [2, 5], "Depicts a rope.")]);
semphon("第", "⺮", "弟", 6, "order; rank");
icon("步", "step", "Picrograph of one foot in front of another, depicting footsteps.", "obs", [iconComponent("止", [0, 4]), iconComponent("止", [4])]);
icon("戉", "battle-axe", "Pictograph of a battle-axe, similar to 戈, 戊, and 戌. Now written as 鉞.", "obs");
semphon("鉞", "金", "戉", 8, "battle-axe", "Originally written as 戉.", false, true);
simp("钺", "鉞", [[0, 5], [5]], { 金: "钅" });
semphon("歲", "步", "戉", [[0, 4, 6, 10], [4, 6, 10]], "years (of age)");
simp("岁", "歲", [[0, 3], [3]], {}, { 步: "山", 戉: "夕" }, true);
semphon("塊", "土", "鬼", 3, "lump; chunk; piece");
simp("块", "塊", [[0, 3], [3]], { 鬼: "夬" });
semphon("地", "土", "也", 3, "earth; ground; [particle]", "", true);
semphon("姐", "女", "且", 3, "older sister");
icon("丮", "catch", "Pictograph of a person with both hands outstretched.", "b");
icon("埶", "skill; art", "Pictograph of a person making a craft with both hands.", "ob", [iconComponent(O, [0, 8], "Depicts some sort of craft."), iconComponent("丮", [8], "Depicts a person holding out both hands.")]);
phonsem("熱", "埶", "灬", 11, "hot", "", true);
icon("㚔", "shackles; handcuffs", "Pictograph of shackles.", "o");
icon("執", "execute; grasp", "Pictograph of a person with hands (丮) bound by shackles (㚔).", "ob", [iconComponent("㚔", [0, 8]), iconComponent("丮", [8], "Depicts a person with two hands outstretched.")]);
simp("执", "執", [[0, 3], [3]], {}, { 㚔: "扌" });
simp("热", "熱", [[6], [0, 6]], {}, { 埶: "执" });
icon("飛", "fly", `Pictograph of a flying bird.`, "bs");
simp("飞", "飛");
addEtymology("親", "parent; relative; intimate", "Phonosemantic compound. 見 represents the meaning and 辛 represents the sound. The 木 (wood) component was added later for unknown reasons, possibly to match the character 新.", [soundComponent("辛", [0, 7]), unknownComponent("木", [5, 9]), meaningComponent("見", [9])]);
simp("亲", "親", [[0, 7], [5, 9], [9, 9]]);
addEtymology("新", "new", `Phonosemantic compound. 斤 represents the meaning and 辛 represents the sound. The 木 (wood) component was added later. Based on the original meaning "firewood", now written as 薪. The current meaning "new" is a phonetic loan.`, [soundComponent("辛", [0, 7], "Also used as a meaning component. Hard work (辛) with an axe (斤) is required to produce firewood."), iconComponent("木", [5, 9]), meaningComponent("斤", [9])]);
semphon("薪", "艹", "新", 3, "fuel; firewood; salary", "Originally written as 新.");
icon("令", "order; command", "Depicts a person (卩) receiving commands from a mouth (口) above them. Originally 令 and 命 were variations of the same character.", "obs", [iconComponent("口", [0, 3]), iconComponent("卩", [3])]);
semphon("命", "口", "令", [[3, 6], [0, 3, 6]], "life; fate; order, command", "Originally 令 and 命 were variations of the same character.", false, true);
semphon("冷", "冫", "令", 2, "cold");
icon("爭", "strive for; vie for; fight; argue", `Pictograph of multiple hands grabbing at the same object.`, "bs", [iconComponent("又", [0, 4]), iconComponent("又", [4, 7]), iconComponent(O, [7], "Depicts the object that the two hands are striving for.")]);
simp("争", "爭", [[0, 2], [2, 5], [5]]);
addEtymology("靜", "calm; still", "Both 青 and 爭 are sound components.", [soundComponent("青", [0, 8]), soundComponent("爭", [8])]);
simp("静", "靜", [[0, 8], [8]], { 爭: "争" });
icon("公", "public; just", `Originally a pictograph of a vessel for holding liquid. The original meaning is now written as 瓮, with the 瓦 (pottery) component added at the bottom. The current meaning "public" is a phonetic loan.`, "bs");
icon("瓦", "roof tile; (pottery)", "Pictograph of a tool for making pottery.", "s");
phonsem("瓮", "公", "瓦", 4, "pottery container; urn", "Originally written as 公.");
phonsem("外", "月", "卜", 3, "outside", "卜 here is used iconically as an arrow pointing to the outside.", true, false, "b");
icon("羽", "feather", "Pictograph of feathers.", "os");
icon("彗", "broom", "Pictograph of a broom.", "os");
semphon("雪", "雨", "彗", 8, "snow", "", true);
addEtymology("習", "practice; study; habit", "Origin unclear.", [unknownComponent("羽", [0, 6]), unknownComponent("白", [6])]);
simp("习", "習", [[0, 3], [3, 3]]);
icon("串", "string together; skewer", "Pictograph of two objects on a skewer or strung together.", "b");
icon("毌", "pierce through, string together", "Original form of 貫. Pictograph of a string being pierced through something, similar to 串.", "os");
phonsem("貫", "毌", "貝", 4, "pierce through, string together; string of coins", "Originally written as 毌, a pictograph of a string being pierced through something. The 貝 component was added later, conveying a string of shells used as money.", false, true);
simp("贯", "貫", [[4], [0, 4]], { 貝: "贝" });
icon("交", "intersect; cross; hand over; make friends", `Pictograph of a person standing with crossed legs, conveying the meaning "to cross".`, "bs");
semphon("校", "木", "交", 4, "school; compare");
semsem("思", "囟", "心", 5, "think; consider", "Thought is associated with the head (囟) and heart (心). The modern form of the top component looks like 田 (field), but 田 is unrelated.", "s");
semphon("店", "广", "占", 3, "store; shop", "", true);
addEtymology("商", "merchant; commerce", "Origin unclear.", [unknownComponent("辛", [0, 4]), unknownComponent("丙", [4, 8]), unknownComponent("口", [8])], "b");
semphon("杯", "木", "不", 4, "cup; glass", "", true);
icon("昜", "open; expand; bright; glorious", `Pictograph of rays of light coming from the sun. Based on the original meaning "sunshine", now written as 暘. The meaning later shifted to "bright" and "expansive".`, "obs", [iconComponent("日", [0, 4]), iconComponent(O, [4], "Depicts rays of sunshine.")]);
addEtymology("暘", "sunshine; rising sun", "Phonosemantic compound. 日 represents the meaning and 昜 represents the sound. Originally written as 昜.");
semphon("場", "土", "昜", 3, "open space; open floor", "", false, true);
simp("场", "場", [[0, 3], [3]], {}, {}, true);
semphon("鼻", "自", "畀", 6, "nose", "Originally written as 自, a pictograph of a nose. The sound component 畀 was added later.");
icon("畀", "give; confer", "Originally a pictograph of an arrow with a large arrowhead. Unrelated to the current meaning \"give; confer\", which is a phonetic loan.", "bs");
addEtymology("邊", "side; edge", "Phonosemantic compound with two sound components and two meaning components. 辶 and 方 represent the meaning, while 自 and 丙 represent the sound.",
    [soundComponent("自", [0, 6], "自 was the original form of 鼻 (bí; nose)."), soundComponent("丙", [6, 11]), meaningComponent("方", [11, 15]), meaningComponent("辶", [15])]);
simp("边", "邊", [[0, 0], [0, 0], [0, 2], [2]], {}, { 方: "力" });
semphon("狗", "犭", "句", 3, "dog", "", true);
icon("毛", "fur; hair; feather", "Pictograph of a feather.", "b");
semsem("表", "毛", "衣", [[0, 4], [3]], "exterior; surface; show; form; (simp) wristwatch", "Depicts clothes (衣) made from fur (毛), typically the outermost layer of clothing. " + simplifyMerge("表", "錶", "wristwatch"));
semphon("錶", "金", "表", 8, "wristwatch");
icon("隼", "falcon", "Pictograph of a falcon.", "s", [iconComponent("隹", [0, 8]), iconComponent(O, [8], "Likely depicts the tail of a falcon.")]);
semphon("準", "氵", "隼", 3, "standard; accurate", "The 氵 (water) component is used because level tools that ensure flatness take advantage of water having a flat surface.");
simp("准", "準", [[0, 2], [2]], {}, { "氵": "冫", "隼": "隹" });
icon("玨", "gems mounted together", "Duplication of the 玉 (jade) character.", "", [iconComponent("𤣩", [0, 4]), iconComponent("𤣩", [4])]);
semsem("豊", "玨", "壴", [[0, 6], [5]], "ceremonial vessel", "Depicts a decoration (玨) and a drum (壴) used for ceremonial purposes. Original form of 禮 (gift; ceremony).", "os");
semphon("禮", "礻", "豊", 4, "gift; ceremony", "Originally written as 豊.", false, true);
icon("乚", "[simplified component]", "Component used in simplified characters.");
simp("礼", "禮", [[0, 4], [4]], {}, { 豊: "乚" });
semphon("體", "骨", "豊", 10, "body; form", "", true);
semsem("体", "亻", "本", 2, "body; form", "Simplified form of 體. The foundation (本) of a person (亻) is their body (体).");
icon("備", "prepare; equip", "Pictograph of a container for holding arrows, which helped in preparation for battle. The 亻 (person) component was added later.", "ob", [meaningComponent("亻", [0, 2]), iconComponent(O, [2, 6], "Depicts two arrows."), iconComponent(O, [6], "Depicts a container for holding arrows.")]);
simp("备", "備", [[0, 0], [0, 3], [3]]);
icon("畏", "fear", "Pictograph of a ghost wielding a stick, which is a fearful sight to behold.", "obs", [iconComponent("鬼", [0, 6, 7]), iconComponent("卜", [6, 7], "Depicts a stick.")]);
semphon("喂", "口", "畏", 3, "feed; hey; hello");
icon("㫃", "flag", "Pictograph of a flag.", "bs");
icon("旅", "trip; travel", "Pictograph of soldiers marching beneath a flag. The original meaning was \"army brigade\", but later shifted to \"travel\".", "bs", [iconComponent("㫃", [0, 6], "Depicts a flag"), iconComponent("人", [6, 8]), iconComponent("人", [8])]);
addEtymology("官", "governmental; official", "Depicts a knowledgeable person (師) under a roof (宀).", [meaningComponent("宀", [0, 3]), meaningComponent("師", [3], "𠂤 is used here as an abbreviation of 師.")]);
semphon("館", "飠", "官", 8, "building; shop");
simp("馆", "館", [[0, 3], [3]], { 飠: "饣" });
icon("烏", "crow", "Pictograph of a crow. Similar to 鳥.", "bs");
simp("乌", "烏");
icon("於", "in; from; by", "Originally a variant form of 烏 (crow). The current use as a function word is a phonetic loan.", "bs");
icon("于", "in; from; by", "Pictograph of a musical wind instrument. The current meaning is a phonetic loan. In traditional characters 於 is typically used instead of 于.", "bs");
semsem("實", "宀", "貫", 3, "real; true; fruit", `貫 is a pictograph of a string of money. Based on the original meaning "thrive; plentiful". The meaning later shifted to "real", "true", and "fruit".`);
simp("实", "實", [[0, 3], [3]], {}, { 貫: "头" });
icon("鼎", "ancient cooking pot", "Pictograph of an ancient cooking pot with two handles and three or four legs.", "obs");
icon("員", "person; employee; member", `Depicts the round opening (口) of a cooking pot (鼎). Based on the original meaning "round", now written as 圓. The current meaning is a phonetic loan.`, "obs", [iconComponent("口", [0, 3], "Depicts the round opening of a cooking pot."), iconComponent("鼎", [3], "貝 is used here as an abbreviation of 鼎, a cooking pot.")]);
semphon("圓", "囗", "員", [[0, 2, 12], [2, 12]], "round; circle", "Originally written as 員.");
simp("员", "員", [[0, 3], [3]], { 鼎: "贝" });
simp("圆", "圓", [[0, 2, 9], [2, 9]], { 員: "员" });
icon("永", "long; forever; eternal", "Pictograph of a long river with a tributary.", "bs");
phonsem("遠", "袁", "辶", 10, "far; distant");
phonsem("远", "元", "辶", 4, "far; distant", simplified("遠"));
icon("北", "north", `Pictograph of two people standing back-to-back. Based on the original meaning "back", now written as 背. The current meaning "north" is a phonetic loan.`, "o", [iconComponent("人", [0, 3], "Depicts a person facing left."), iconComponent("人", [3], "Depicts a person facing right.")]);
phonsem("背", "北", "⺼", 5, "back", "Originally written as 北, a pictograph of two people standing back-to-back.", false, true);
semphon("路", "足", "各", 7, "road; street; path", "", true);
semphon("眼", "目", "艮", 5, "eye");
semphon("睛", "目", "青", 5, "eye; eyeball");
icon("保", "protect; defend", "Pictograph of a person carrying a child on their back.", "obs", [iconComponent("亻", [0, 2]), iconComponent("子", [2, 7]), unknownComponent(O, [7], "The purpose of these two strokes is unclear. Possibly represents two hands carrying the child.")]);
phonsem("堡", "保", "土", 9, "fortress; castle", "", false, true);
semphon("玩", "𤣩", "元", 4, "play; have fun");
icon("夭", "die prematurely; tender; gentle", "Pictograph of a person walking. Connection to meaning unclear.", "os");
semphon("笑", "⺮", "夭", 6, "smile; laugh", `The connection between 竹 (bamboo) and 笑 (laugh) is unclear.`);
icon("奴", "slave", "Depicts a hand behind a woman slave's back forcing her to work.", "s", [iconComponent("女", [0, 3], "Depicts a woman slave. Also serves as a phonetic component."), iconComponent("又", [3], "Depicts a hand forcing a slave to do work.")]);
phonsem("努", "奴", "力", 5, "exert; strive", "", false, true);
icon("卓", "outstanding", "Pictograph of a person standing erect with something above the head. The significance of the object above the head is unclear.", "bs");
phonsem("桌", "卓", "木", [[0, 8], [6]], "table");
icon("虎", "tiger", "Pictograph of a tiger.", "obs", [iconComponent("虍", [0, 6], "Depicts the head of a tiger."), iconComponent(O, [6], "Depicts the body of a tiger.")]);
icon("弋", "shoot", "Pictograph of a post for tethering animals, now written as 杙. The current meaning is a phonetic loan.", "bs");
addEtymology("杙", "post for tethering animals", "Phonosemantic compound. 木 represents the meaning and 弋 represents the sound. Originally written as 弋.");
semphon("式", "工", "弋", [[1, 4], [0, 1, 4]], "type; style; form; pattern", "", true);
semphon("試", "言", "式", 7, "test; try");
simp("试", "試", [[0, 2], [2]], { "言": "讠" });
semphon("處", "夂", "虎", [[6, 9], [0, 6, 9]], "reside; live; place; location");
simp("处", "處", [[0, 3], [3]], {}, { 虎: "卜" });
semphon("理", "𤣩", "里", 4, "texture; essence; truth; reason; logic; handle");
semsem("幸", "夭", "屰", 3, "fortune; lucky", "Fortune (幸) is the opposite (屰) of misfortune (夭).", "s");
semsem("軍", "冖", "車", 2, "army; military");
simp("军", "軍", [[0, 2], [2]], { 車: "车" });
phonsem("運", "軍", "辶", 9, "move; transport");
phonsem("运", "云", "辶", 4, "move; transport", simplified("運"));
icon("色", "color", `Depicts a kneeling person (卩) being held down by a knife (刀). Based on the original meaning "restrain", now written as 抑. The current meaning "color" is a phonetic loan.`, "s", [iconComponent("刀", [0, 2, 3, 4]), iconComponent("卩", [2, 3, 4])]);
icon("爪", "(hand); claw; paw; foot", `Pictograph of an animal paw. Usually means "hand" when used as a component in other characters.`, "bs");
icon("印", "print; stamp; engrave", `Pictograph of a kneeling person (卩) being held down by a hand (爪). Based on the original meaning "restrain", now written as 抑. The meaning later shifted to "push down", "stamp", and "print".`, "bs", [iconComponent("爪", [0, 3]), iconComponent("卩", [3])]);
semphon("抑", "扌", "印", 3, "restrain; keep down", "Originally written as 印 or 色.");
icon("采", "pick; pluck; gather; color", "Pictograph of a hand (爪) picking fruit from a tree (木).", "obs", [iconComponent("爪", [0, 4]), iconComponent("木", [4])]);
semphon("菜", "艹", "采", 3, "vegetable; food; dish; cuisine");
icon("報", "announce; report; recompense", `Pictograph of a kneeling person (卩) being forced by a hand (又) into shackles (㚔). Based on the original meaning "punish". The meaning later shifted to "revenge", "recompense", "report", and "announce".`, "b",
    [iconComponent("㚔", [0, 8]), iconComponent("卩", [8, 10]), iconComponent("又", [10])]);
simp("报", "報", [[0, 3], [3, 5], [5]], {}, { "㚔": "扌" });
semphon("張", "弓", "長", 3, "open; spread; sheet");
simp("张", "張", [[0, 3], [3]], { 長: "长" });
semsem("肖", "小", "月", 3, "resemble; similar", "Depicts the moon (月) getting smaller (小) and disappearing as part of the lunar cycle. Based on the original meaning \"decrease; disappear\", now written as 消. The meaning later shifted to \"resemble; similar\".");
semphon("消", "氵", "肖", 3, "disappear; vanish");
icon("息", "breath; news; interest", "Pictograph of air going into the nose (自). The lines representing breath were later reanalyzed as 心 (heart).", "os", [iconComponent("自", [0, 6], "自 was the original form of 鼻 (bí; nose)."), iconComponent("心", [6], "Used here to represent lines of breath.")]);
icon("干", "shield; concern; (simp.) dry; tree trunk; do", "Pictograph of a shild. " + simplifyMerge("干", "乾", "dry") + " " + simplifyMerge("干", "幹", "tree trunk; do"), "obs");
icon("倝", "dawn", "Pictograph of rays of light shining from the horizon early in the morning (早).", "bs", [meaningComponent("早", [2, 8]), iconComponent(O, [0, 2, 8], "Depicts rays of light on the horizon.")]);
icon("乙", "2nd heavenly stem", "Origin unclear.");
addEtymology("乾", "dry", "倝 is used to represent the sound. The purpose of the 乙 component is unclear.", [soundComponent("倝", [0, 10]), unknownComponent("乙", [10])]);
addEtymology("幹", "do; tree trunk", "Both 倝 and 干 serve as sound components.", [soundComponent("倝", [0, 10]), soundComponent("干", [10])]);
semphon("租", "禾", "且", 5, "hire; rent; lease", `Based on the original meaning "land tax". The meaning later shifted to "rent" and "hire".`, true);
icon("樂", "happy; music", "Pictograph of an ancient wooden stringed musical instrument.", "bs", [iconComponent("幺", [5, 8], "Depicts a string."), iconComponent("白", [0, 5], "The modern form looks like 白 (white), but here it is likely just a variant of 幺 (string)."), iconComponent("幺", [8, 11], "Depicts a string."), iconComponent("木", [11], "Depicts the wooden base of a musical instrument.")]);
simp("乐", "樂", [[0, 1], [1, 1], [1, 2], [1]], {}, {}, true);
semphon("阿", "阝", "可", 2, "[syllable used before kinship terms]", `Based on the original meaning "big mountain". The current meaning is a phonetic loan.`, true);
semphon("啊", "口", "阿", 3, "ah; oh; [particle]");
phonsem("放", "方", "攵", 4, "put; place; let go");
semsem("孝", "耂", "子", 4, "filial piety; obedience", "Filial piety (孝) is the respect that the young (子) must have for their elders (老).");
phonsem("教", "孝", "攵", 7, "teach; religion");
semsem("苗", "艹", "田", 3, "sprout", "Sprouts are plants (艹) that rise from the field (田).");
icon("豸", "beast; insect", "Pictograph of some sort of beast or insect.", "os");
semphon("貓", "豸", "苗", 7, "cat");
semphon("猫", "犭", "苗", 3, "cat", simplified("貓"));
semphon("零", "雨", "令", 8, "zero; extra; remainder", `Based on the original meaning "to fall (of rain/snow)". The meaning later shifted to "scattered", "fragment", "fraction", "remainder", and "zero".`);
icon("右", "right", "Pictograph of a right hand. The 口 (mouth) component was added later to distinguish the character from 又.", "bs", [iconComponent("又", [0, 2], "Depicts a right hand. Also serves as a phonetic component."), meaningComponent("口", [2], "Added to distinguish the character from 又.")]);
icon("左", "left", `Pictograph of a left hand. The 工 (work) component was added later to represent the meaning "help; assist", now written as 佐.`, "bs", [iconComponent("𠂇", [0, 2]), meaningComponent("工", [2])]);
icon("𠂇", "left hand", "Original form of 左 (left).", "左:b");
semphon("佐", "亻", "左", 2, "help; assist");
addEtymology("隋", "Sui dynasty", "Origin unclear.", [meaningComponent("阝", [0, 2]), soundComponent("左", [2, 7], obsoleteSound("隋", "左")), unknownComponent("⺼", [7])]);
phonsem("迶", "有", "辶", 6, "walk");
phonsem("隨", "隋", "辶", [[0, 11], [11]], "follow; comply; according to...");
simp("陏", "隋", [[0, 2], [2, 2], [2]]);
simp("随", "隨", [[8], [0, 8]], {}, { 隋: "陏" });
semsem("便", "亻", "更", 2, "convenient; defecate", "When uncomfortable, a person (亻) will change (更) to a more convenient (便) position.");
icon("之", "[particle]", "Pictograph of a foot, phonetically and visually similar to 止, which also a pictograph of a foot.", "obs");
icon("帶", "band; belt; carry; bring", "Pictograph of a belt clasp.", "os");
simp("带", "帶");
icon("送", "deliver; carry; present", "Depicts walking (辶) while carrying a present in both hands.", "s", [meaningComponent("辶", [6]), iconComponent(O, [0, 3], "Depicts some object being carried."), iconComponent("廾", [3, 6])]);
semsem("加", "力", "口", 2, "add; plus", "Depicts making noises with the mouth (口) while exerting strength (力). Based on the original meaning \"exert strength\". The meaning later shifted to \"raise; increase; add\"");
icon("參", "Three Stars constellation; join; participate", "Depicts three stars joined together; in Chinese astronomy 參 is a constellation of three stars. 彡 is a sound component.", "bs", [iconComponent(O, [0, 8], "Depicts three stars joined together"), soundComponent("彡", [8])]);
simp("参", "參", [[0, 5], [5]]);
addEtymology("解", "divide; separate; explain", "Depicts separating (解) the horns (角) from a cow (牛) using a knife (刀).", [iconComponent("角", [0, 7]), iconComponent("刀", [7, 9]), iconComponent("牛", [9])]);
icon("余", "extra; remaining", `Pictograph of a small shelter. Based on the original meaning "residence", now written as 舍. The current meaning is a phonetic loan.`, "obs");
phonsem("舍", "余", "口", 5, "residence; give up; abandon", mouthedNote, true, false);
semphon("茶", "艹", "余", 3, "tea", "", true);
semsem("丈", "十", "又", [[0, 2], [1]], "length unit (~3 meters); husband; man", "Depicts 10 (十) hand-lengths (又): 丈 is a traditional Chinese unit of length equivalent to about 3 meters.", "s");
icon("夫", "man; husband", `Pictograph of a man. The top horizontal stroke is traditionally explained as a hairpin which was only worn by adults.`, "o", [iconComponent(O, [0, 1], "Depicts a hairpin."), iconComponent("大", [1], "Pictograph of a person standing up.")]);
semsem("安", "宀", "女", 3, "safe; calm; peaceful; content", `Variously explained as (1) a woman is what makes a home feel peaceful, or (2) a woman feels safe under the shelter of a roof.`);
semphon("奇", "大", "可", 3, "wonderful; strange; surprising; unusual", "", true);
semphon("椅", "木", "奇", 4, "chair");
icon("丂", "breath", "Wavy line depicting breath.", "b");
semphon("号", "口", "丂", 3, "roar; cry; number", simplified("號"), false, true);
phonsem("號", "号", "虎", 5, "roar; cry; number", "", false, true);
semphon("記", "言", "己", 7, "record; remember; note");
simp("记", "記", [[0, 2], [2]], { 言: "讠" });
icon("辡", "dispute; argue; discuss", "Old variant form of 辯. Duplicate of 辛 (laborious; suffering) - possibly used because disputes are often unpleasant.");
semphon("辯", "言", "辡", [[7, 14], [0, 7, 14]], "dispute; argue; discuss", "", false, true);
simp("辩", "辯", [[7, 9], [0, 7, 9]], { 言: "讠" });
semphon("辦", "力", "辡", [[7, 9], [0, 7, 9]], "do; manage; deal with");
simp("办", "辦", [[0, 2], [2]]);
semsem("吉", "士", "口", 3, "lucky; auspicious", `Based on the original meaning "authority" or "respect" given to scholars (士). The meaning later shifted to "lucky".`);
semphon("結", "糹", "吉", 6, "knot; tie; bind; sturdy; produce");
simp("结", "結", [[0, 3], [3]], { 糹: "纟" });
icon("束", "bind; bunch", `Pictograph of a bag tied at both ends.`, "bs");
icon("穴", "cave; hole", "Pictograph of an opening to a cave.", "s");
semsem("穿", "穴", "牙", 5, "wear; dress; pierce; pass through", `Based on the meaning "to pierce through". Meaning later extended to "to thread", "to string together", and "to wear".`);
semphon("特", "牛", "寺", 4, "special; unique", "", true);
icon("勿", "do not", `Depicts a knife (刀) cutting things apart, based on the original meaning "to cut apart", now written as 刎.`, "bs", [iconComponent("刀", [1, 3]), iconComponent(O, [0, 1, 3], "Depicts the object being cut apart.")]);
phonsem("刎", "勿", "刂", 4, "cut across (throat)", "", true);
semphon("物", "牛", "勿", 4, "thing; object", `Based on the original meaning "variety", depicting the variety of colors on a cow. Later the meaning shifted to "things".`);
semsem("位", "亻", "立", 2, "position; location", "Depicts a person (亻) standing (立) in a specific location.");
icon("革", "animal hide; leather", "Pictograph of animal hide laying flat.", "bs");
icon("無", "not have; none", `Originally a pictograph of a person (大) dancing with ornamental leather hides (革) hanging from his arms, conveying the meaning "dance". Later, two feet (舛) were added to the bottom of the character to form 舞 (dance), and 無 was borrowed for its sound to represent the meaning "not".`, "bs",
    [iconComponent("大", [0, 3], "Depicts a person."), iconComponent("革", [3, 5, 7, 10], "Depicts ornamental leather hanging from a person's arm."), iconComponent("革", [5, 8, 10], "Depicts ornamental leather hanging from a person's arm.")]);
icon("舛", "(two feet); mistaken; contradictory", "Pictograph of two feet facing opposite directions.", "s", [iconComponent("夂", [0, 3], "Depicts a foot facing the left."), iconComponent("止", [3], "Depicts a foot facing the right.")]);
phonsem("舞", "無", "舛", 8, "dance");
simp("无", "無", [[0, 2], [1, 3], [1, 2, 3]], {}, {}, true);
icon("皮", "skin; leather", "Pictograph of a hand (又) peeling off the skin from an animal.", "bs", [iconComponent(O, [0, 3], "Depicts an animal with its skin being peeled off."), iconComponent("又", [3])]);
semphon("被", "衤", "皮", 5, "quilt; [passive particle]");
icon("矛", "spear; lance; pike", "Pictograph of a spear.", "bs");
addEtymology("務", "affair; business; matter", "Phonosemantic compount. 矛 represents the sound, while 攵 and 力 both represent the meaning.", [soundComponent("矛", [0, 5], obsoleteSound("務", "矛")), meaningComponent("攵", [5, 9]), meaningComponent("力", [9])]);
simp("务", "務", [[0, 0], [0, 3], [3]]);
icon("囪", "window; chimney", "Pictograph of a window.", "s");
icon("囱", "window; chimney", "Variant form of 囪, which is a pictograph of a window.", "囪:s");
phonsem("悤", "囱", "心", 7, "hurried; hasty");
semphon("總", "糹", "悤", 6, "always; assemble; gather", `Based on the meaning "put together", since thread (糹) is used to put things together.`);
simp("总", "總", [[0, 1], [1]]);
addEtymology("䜌", "chaotic", "Phonosemantic compound. Two threads (糸 + 糸) represent the meaning and 言 represents the sound.");
phonsem("變", "䜌", "夂", 19, "change; become different", "", true);
simp("变", "變", [[6], [0, 6]]);
semsem("拿", "合", "手", 6, "hold; take", "Depicts bringing the hands (手) together (合) to hold (拿) something.");
icon("皀", "seed; kernel; grain", "Pictograph of a food vessel for holding grain.", "obs");
icon("鄉", "countryside; native place; hometown", `Pictograph of two people facing each other, kneeling down to share a meal. Based on the original meaning "feast" or "offer food", now written as 饗. The meaning later shifted to "hometown".`, "bs",
    [iconComponent("卩", [0, 3], "Depicts a kneeling person facing right."), iconComponent("皀", [3, 9], "Pictograph of a food vessel for holding grain."), iconComponent("卩", [9], "Depicts a kneeling person facing left.")]);
phonsem("饗", "鄉", "食", 11, "offer food and drinks; entertain", "Originally written as 鄉.");
simp("乡", "鄉", [[0, 3], [3, 3], [3, 3]]);
phonsem("飨", "乡", "食", 3, "offer food and drinks; entertain", simplified("饗"));
icon("向", "towards; facing; direction", `Depicts a mouth (口) in a closed space (宀) making an echo sound. Based on the original meaning "echo; sound", now written as 響. The current meaning is a phonetic loan.`, "s", [iconComponent("宀", [0, 3]), iconComponent("口", [3])]);
phonsem("響", "鄉", "音", 11, "echo; sound; noise", "Originally written as 向.");
semphon("响", "口", "向", 3, "echo; sound; noise", "Originally written as 向. " + simplified("響"));
icon("包", "cover; wrap; hold", `Pictograph of an unborn baby contained inside its mother.`, "os");
semphon("跑", "足", "包", 7, "run");
addEtymology("甬", "path with walls on both sides", "Originally depicted a bell. The current meaning is a phonetic loan.", [iconComponent(O, [0, 2], "Depicts a bell."), soundComponent("用", [2])], "b");
phonsem("通", "甬", "辶", 7, "go through; connect");
icon("求", "seek; request; beseech", `Pictograph of a crawling insect. The current meaning "seek" or "beg" is a phonetic loan.`, "s");
semphon("球", "𤣩", "求", 4, "ball; sphere");
semphon("提", "扌", "是", 3, "carry; lift; raise; mention", "", true);
icon("具", "tool; device; equipment", `Depicts two hands (廾) handling a cooking pot (鼎).`, "bs", [iconComponent("鼎", [0, 6]), iconComponent("廾", [5])]);
semsem("算", "⺮", "具", 6, "calculate; count; regard as", "Depicts an abacus, a tool (具) made from bamboo (⺮) for performing calculations.");
semphon("病", "疒", "丙", 5, "sick; ill");
addEtymology("頻", "frequency", "Origin unclear. 步 (step) is possibly a meaning component alluding to frequent steps.", [unknownComponent("步", [0, 7]), unknownComponent("頁", [7])]);
simp("频", "頻", [[0, 7], [7]], { 頁: "页" });
icon("平", "flat; level; calm", "Origin unclear.", "b");
semphon("蘋", "艹", "頻", 4, "apple");
semphon("苹", "艹", "平", 3, "apple", simplified("蘋"));
semphon("考", "耂", "丂", 4, "check; test; examine", `Based on the original meaning "elderly father". The meaning later shifted to "examine" and "test".`);
phonsem("慮", "虍", "思", 6, "think over; consider", "", true);
simp("虑", "慮", [[6], [0, 6]], {}, { "思": "心" });
semphon("像", "亻", "象", 2, "resemble; look like");
phonsem("岡", "网", "山", 5, "ridge; mound");
simp("冈", "岡", [[4, 4], [0, 4]]);
phonsem("剛", "岡", "刂", 8, "hard; firm; just; exactly");
simp("刚", "剛", [[4], [0, 4]], { "岡": "冈" });
addEtymology("昆", "elder brother", "Origin unclear.", [unknownComponent("日", [0, 4]), unknownComponent("比", [4])]);
semphon("混", "氵", "昆", 3, "mix; muddle; confused");
icon("疋", "foot", "Pictograph of a foot.", "足:os");
semsem("延", "疋", "廴", 4, "prolong; delay");
phonsem("蛋", "延", "虫", 5, "egg", "", true);
phonsem("清", "氵", "青", 3, "clear; quiet; pure");
semphon("楚", "林", "疋", 8, "distinct; clear", `Based on the original meaning "bush". The meaning later shifted to "distinct" and "clear".`, true);
icon("死", "die; death", "Depicts the carcass (歹) of a person (人).", "b", [iconComponent("歹", [0, 4]), iconComponent("人", [4])]);
addEtymology("斿", "tassel; decoration on lower edge of flag", "Depicts a child (子) holding a flag (㫃).", [meaningComponent("㫃", [0, 6]), meaningComponent("子", [6])]);
semphon("游", "氵", "斿", 3, "travel; walk; tour");
addEtymology("哥", "older brother", "Duplicate of 可, which has a similar sound.", [soundComponent("可", [0, 5]), soundComponent("可", [5])]);
icon("介", "introduce; lie between", "Pictograph of a person between two lines.", "os", [iconComponent("人", [0, 2]), iconComponent(O, [2], "Depicts two things the person is standing between.")]);
semphon("界", "田", "介", 5, "boundary; limit; world");
icon("共", "common; share; together", `Pictograph of two hands sharing an object.`, "bs", [iconComponent(O, [0, 3], "Depicts an object being shared by two hands."), iconComponent("廾", [3])]);
icon("咅", "spit out; poh (spitting onomatopoeia)", "Depicts spit coming out of a mouth (口).", "", [iconComponent(O, [0, 5], "Depicts spit."), iconComponent("口", [5], "mouth")]);
phonsem("部", "咅", "⻏", 8, "department; division; part");
addEtymology("受", "receive; accept", "Depicts something being passed from one hand to another hand. Originally the middle component was the phonetic 舟 (boat), but it was later abbreviated.",
    [iconComponent("又", [0, 4]), soundComponent("舟", [4, 6]), iconComponent("又", [6])], "bs");
semphon("活", "氵", "舌", 3, "live; alive; work", "", true);
addEtymology("䖒", "ancient bean-shaped earthenware", "Phonosemantic compound. 虍 (hū; tiger) represents the sound and 豆 (bean) represents the meaning.");
phonsem("戲", "䖒", "戈", 13, "play; trick; drama");
simp("戏", "戲", [[2], [0, 2]], {}, { "䖒": "又" });
icon("皿", "dish; vessel", "Pictograph of a container for holding food.", "obs");
icon("盍", "why not", `Pictograph of a lid (去) on top of a container (皿). Based on the original meaning "lid", now written as 蓋. The current meaning is a phonetic loan.`, "s", [iconComponent("去", [0, 5], "Here used to graphically represent a lid with a handle. Unrelated to the verb \"go\"."), iconComponent("皿", [5])]);
semphon("蓋", "艹", "盍", 4, "lid; top; cover");
simp("盖", "蓋", [[0, 3], [3]]);
icon("害", "harm", `Pictograph of a lid over a container. Based on the original meaning "lid", now written as 蓋. The current meaning is a phonetic loan.`, "bs");
semphon("怕", "忄", "白", 3, "fear; be afraid");
semphon("標", "木", "票", 4, "mark; sign; label");
simp("标", "標", [[0, 4], [4]], {}, { "票": "示" });
semphon("根", "木", "艮", 4, "root; basis");
icon("單", "single; list; form", `Pictograph of a hunting or military trap constructed from two rocks and a net. The current meaning "single" is a phonetic loan.`, "obs");
simp("单", "單");
phonsem("近", "斤", "辶", 4, "near; close");
icon("声", "sound; voice", "Remmant of the character 磬 (chime stones). Pictograph of a musical stone chime. Simplified form of 聲.", "磬:ob");
icon("殸", "chime stones; musical stone", "Variant form of 磬. Pictograph of a hand striking a musical stone chime with a stick.", "磬:ob", [iconComponent("声", [0, 7], "Depicts a hanging stone chime."), iconComponent("殳", [7], "Depicts a hand holding a stick.")])
icon("磬", "chime stones; musical stone", "Pictograph of a hand striking a musical stone chime with a stick.", "obs", [iconComponent("声", [0, 7], "Depicts a hanging stone chime."), iconComponent("殳", [7, 11], "Depicts a hand holding a stick."), meaningComponent("石", [11])]);
phonsem("聲", "殸", "耳", 11, "sound; voice", "", true, true);
icon("班", "team; class; squad; shift", `Depicts a knife (刂) cutting a gem into two halves (玨), based on the original meaning "to divide". The meaning later shifted to "division", "group", and "team".`, "", [iconComponent("玨", [0, 4, 6]), iconComponent("刂", [4, 6])]);
icon("攸", "distant; far", "Origin unclear. Seems to originally depict a person (亻) being beaten (攵).", "bs", [iconComponent("亻", [0, 2]), unknownComponent(O, [2, 3], "Significance unclear."), iconComponent("攵", [3])]);
phonsem("條", "攸", "木", 7, "item; long thin thing");
simp("条", "條", [[3], [0, 3]], {}, { 攸: "夂" });
semphon("登", "舛", "豆", 5, "climb up; ascend; enter", "Depicts climbing up with two feet (舛).", true);
semphon("證", "言", "登", 7, "proof; demonstrate");
semphon("证", "讠", "正", 2, "proof; demonstrate", simplified("證"));
icon("兆", "omen; foretell", "Pictograph of cracks in a shell used in ancient China for fortune-telling.", "os");
semphon("跳", "足", "兆", 7, "jump");
phonsem("召", "刀", "口", 2, "call together; summon; convene");
semphon("昭", "日", "召", 4, "bright; clear");
phonsem("照", "昭", "灬", 9, "shine; reflect", "", false, true);
semphon("約", "糹", "勺", 6, "make appointment; invite; approximately", `Based on the original meaning "to bind". The meaning later shifted to "restrain", "keep under control", "appointment", and "approximately".`, true);
simp("约", "約", [[0, 3], [3]], { 糹: "纟" });
semphon("藥", "艹", "樂", 4, "medicine", "", true);
semphon("药", "艹", "约", 3, "medicine", simplified("藥"));
semsem("休", "亻", "木", 2, "rest", "Depicts a person (亻) leaning on a tree (木) to rest (休).");
semphon("除", "阝", "余", 2, "remove; exclude; except");
semphon("千", "一", "亻", [[1, 2], [0, 1, 2]], "thousand");
icon("万", "ten thousand", "Origin unclear. Simplified form of 萬.");
icon("萬", "ten thousand", "Originally a pictograph of a scorpion. The current meaning is a phonetic loan.", "bs")
icon("卬", "lofty; high", "Origin unclear. Depicts a person standing (人) and a person kneeling (卩).", "s", [iconComponent("人", [0, 2], "Depicts a person standing upright."), iconComponent("卩", [2], "Depicts a person kneeling.")]);
phonsem("迎", "卬", "辶", 4, "welcome; meet");
semphon("管", "⺮", "官", 6, "manage; take care of; care about", `Originally a musical instrument made of bamboo. The meaning "to manage" is a phonetic loan.`);
semphon("紅", "糹", "工", 6, "red");
simp("红", "紅", [[0, 3], [3]], { 糹: "纟" });
icon("周", "Zhou dynasty; circle; cycle (simp.) week", `Originally a pictograph of engraved jade, now written as 琱. ${mouthedNote} ${simplifyMerge("周", "週", "week")}`, "obs");
phonsem("週", "周", "辶", 8, "week");
addEtymology("琱", "engrave jade", `Phonosemantic compound. 𤣩 represents the meaning and 周 represents the sound.`);
icon("巽", "obey", "Depicts two people kneeling (卩) together in obedience.", "", [iconComponent("卩", [0, 3], "Depicts a person kneeling."), iconComponent("卩", [3, 6], "Depicts a person kneeling."), meaningComponent("共", [6])]);
phonsem("選", "巽", "辶", 12, "choose");
phonsem("选", "先", "辶", 6, "choose", simplified("選"));
icon("曼", "long; vast; handsome", "Depicts a hand (又) covering (冃) the eye (目) to gaze far away into the distance.", "bs", [iconComponent("冃", [0, 4]), iconComponent("目", [4, 9]), iconComponent("又", [9])]);
semphon("慢", "忄", "曼", 3, "slow");
icon("睪", "spy on", "Depicts using the eye (目) to subdue (㚔) someone.", "s", [meaningComponent("目", [0, 5]), meaningComponent("㚔", [5])]);
semphon("擇", "扌", "睪", 3, "select; choose", "", true);
simp("择", "擇", [[0, 3], [3]], {}, {}, true);
semphon("洗", "氵", "先", 3, "wash; bathe", "", true);
semphon("計", "言", "十", 7, "calculate; count", "", true);
simp("计", "計", [[0, 2], [2]], { 言: "讠" });
semphon("注", "氵", "主", 3, "pour into; concentrate; pay attentention; (simp.) register", simplifyMerge("注", "註", "register; comment"));
semphon("註", "言", "主", 7, "register; comment");
semphon("董", "艹", "重", 3, "supervise; direct");
semphon("懂", "忄", "董", 3, "understand");
icon("畫", "draw; picture; painting", "Pictograph of a hand holding a writing utensil (聿) and drawing something.", "obs", [iconComponent("聿", [0, 5]), iconComponent(O, [5], "Depicts a picture being drawn.")]);
simp("画", "畫", [[0, 1], [1]], {}, {}, true);
phonsem("劃", "畫", "刂", 12, "cut; slash; draw line");
phonsem("划", "戈", "刂", 4, "row; paddle; calculate; (simp.) cut; slash; draw line", simplifyMerge("划", "劃", "cut; slash; draw line"), true);
icon("詹", "verbose; talk too much", "Origin unclear.", "", [unknownComponent(O, [0, 6]), meaningComponent("言", [6])]);
semphon("擔", "扌", "詹", 3, "carry; bear; take responsibility");
semphon("担", "扌", "旦", 3, "carry; bear; take responsibility", simplified("擔"));
icon("旨", "delicious; decree", "Depicts a spoon (匕) going into the mouth (口), conveying the original meaning \"delicious\".", "obs", [iconComponent("匕", [0, 2]), iconComponent("口", [2])]);
semphon("指", "扌", "旨", 3, "finger; point");
icon("化", "change; transform", `Pictograph of a right-side up person and an upside-down person, depicting the meaning "turn around" or "transform".`, "ob", [iconComponent("亻", [0, 2]), iconComponent("匕", [2], "Used here to depict an upside-down person.")]);
semphon("花", "艹", "化", 3, "flower");
icon("華", "magnificent; flourishing; China", `Pictograph of a flower. Originally used to mean "flower", now written as 花. The meaning later shifted to "blossoming", "flourishing" and "magnificent". The 艹 (grass) component was added in Seal script.`, "bs", [meaningComponent("艹", [0, 4]), iconComponent(O, [4], "Pictograph of a flower.")]);
addEtymology("华", "magnificent; flourishing; China", simplified("華") + " 化 is used here to represent the sound. The bottom component is a remnant from the traditional character 華.", [soundComponent("化", [0, 4]), simplifiedComponent("華", [4], "Remnant from the bottom of the traditional character 華.")]);
semphon("查", "木", "且", 4, "check; investigate; look up; hawthorn tree", `Based on the original meaning "hawthorn tree". The meaning "check; look up" is a phonetic loan.`, true);
semphon("空", "穴", "工", 5, "empty; air; sky; space");
semphon("職", "耳", "戠", 6, "office; duty");
semphon("职", "耳", "只", 6, "office; duty", simplified("職"));
phonsem("歌", "哥", "欠", 10, "song");
icon("並", "also; furthermore; simultaneously, join", "Depits two people standing (立) side-by-side.", "bs", [iconComponent("立", [0, 1, 2, 4, 5, 6, 7]), iconComponent("立", [1, 3, 4, 5, 6])]);
simp("并", "並", [[0, 1, 2, 5], [1, 4, 5]]);
icon("業", "business; industry; occupation; job", "Origin unclear.", "bs");
simp("业", "業");
semsem("呈", "口", "王", 3, "present to a superior; petition", "Depicts speaking (口) to an authority (王).");
semphon("聖", "耳", "呈", 6, "sage; saint; sacred");
simp("圣", "聖", [[0, 2], [2]], {}, { 耳: "又", 呈: "土" });
semphon("怪", "忄", "圣", 3, "strange; odd; bewildering", "", true);
icon("婁", "Lou (surname)", "Origin unclear.", "", [unknownComponent(O, [0, 8]), unknownComponent("女", [8])]);
simp("娄", "婁", [[0, 6], [6]], {}, { [O]: "米" });
phonsem("數", "婁", "攵", 11, "number; count", "", true);
simp("数", "數", [[9], [0, 9]], { 婁: "娄" });
semphon("性", "忄", "生", 3, "nature; character; sex");
semsem("利", "禾", "刂", 5, "benefit; profit; advantage", `Depicts harvesting grain (禾) with a blade (刂). Harvest was the main source of profit in agricultural societies.`);
icon("乃", "thus; so; be", "Origin unclear.", "ob");
semphon("奶", "女", "乃", 3, "milk; breast");
icon("褱", "carry in the bosom; wrap; conceal", "Depicts holding someone crying into your chest, with the eye (目) and water (水) components located at chest-level inside the clothing (衣) component.", "b",
    [iconComponent("衣", [0, 2, 12]), iconComponent("目", [2, 7]), iconComponent("水", [7, 12], "Depicts tears coming out of the eyes.")]);
semphon("壞", "土", "褱", 3, "bad; spoiled; broken");
simp("坏", "壞", [[0, 3], [3]], {}, { 褱: "不" });
addEtymology("蒦", "[phonetic component]", "Origin unclear.", [unknownComponent("艹", [0, 3]), unknownComponent("隻", [3])]);
semphon("護", "言", "蒦", 7, "protect");
simp("户", "戶");
semphon("护", "扌", "户", 3, "protect", simplified("護"));
semsem("建", "聿", "廴", 6, "establish; set up; build", "Depicts the process of setting something up. The 聿 component here is used to depict a hand holding up a wooden post, rather than a writing utensil.");
icon("未", "not yet; not", `Similar to 木, with extra branches added. Based on the original meaning "tree trunk", now written as 枚. The current meaning is a phonetic loan.`, "b");
semsem("枚", "木", "攵", 4, "trunk; whip; piece; [measure word]", "Depicts a hand (攵) holding a piece of wood (木).");
icon("末", "end; tip; final", "Similar to 木, with an extra line at the top. Depicts the tip of a tree.", "s");
semphon("妹", "女", "未", 3, "younger sister");
semphon("似", "亻", "以", 2, "resemble; appear; similar", "", true);
icon("乎", "[archaic particle]", `Depicts air flowing from breath. Based on the original meaning "exhale", now written as 呼. The current meaning is a phonetic loan.`, "b", [iconComponent(O, [0, 3], "Depicts air coming out of the mouth."), meaningComponent("丂", [3])]);
semphon("呼", "口", "乎", 3, "call out; breathe out; shout");
addEtymology("旁", "beside; side", "方 (fāng; square; side) is both a meaning and a sound component. The meaning of the top part of the character is unclear.", [unknownComponent(O, [0, 6], "Meaning unclear."), soundComponent("方", [6], "Also serves as a meaning component.")]);
semphon("輕", "車", "巠", 7, "light; easy; reckless");
simp("轻", "輕", [[0, 4], [4]], { 車: "车" });
let sheepNote = `In ancient China sheep (羊) were associated with goodness and fortune, which is why 羊 is a component in characters like 美 (beautiful), 祥 (auspicious), 善 (benevolent), and 義 (justice).`;
icon("美", "beautiful", "Pictograph of a person with ornamental headwar resembling sheep horns. ", "obs",
    [iconComponent("羊", [0, 6], "Depicts ornamental headwear resembling sheep horns."), iconComponent("大", [6], "Used here as a pictograph of a person.")]);
semphon("義", "羊", "我", 6, "justice; righteousness; meaning", sheepNote);
addEtymology("善", "good; virtuous; benevolent", "Composed of two 言 (speech) components and 羊 (sheep). " + sheepNote, [meaningComponent("羊", [0, 6]), soundComponent("言", [6, 7, 8], obsoleteSound("言", "善")), soundComponent("言", [7], obsoleteSound("言", "善"))], "bs");
semphon("祥", "礻", "羊", 4, "auspicious", sheepNote, false, true);
simp("义", "義", [[0, 1], [1]], {}, {}, true);
semphon("議", "言", "義", 7, "comment; discuss; suggest");
simp("议", "議", [[0, 2], [2]], { 言: "讠", "義": "义" });
semsem("即", "皀", "卩", 5, "namely; be the same as; prompt", `Depicts a kneeling person (卩) approaching a vessel of food (皀). Based on the original meaning "come to eat", which later shifted to "approach", "be near", and "be the same".`);
semphon("節", "⺮", "即", 6, "bamboo joint; festival; holiday");
simp("节", "節", [[0, 3], [3]], {}, { "⺮": "艹", "即": "卩" });
semsem("灰", "又", "火", 2, `ash; gray`, `After a fire (火) burns down, the left over ash (灰) can be touched with the hands (又).`);
semphon("恢", "忄", "灰", 3, "restore; recover");
icon("复", "return; repeat; restore", `Pictograph of a foot going toward a house, representing the meaning "to return home".`, "s", [iconComponent(O, [0, 6]), iconComponent("夂", [6])]);
semphon("復", "彳", "复", 3, "return; repeat; restore", "Originally written as 复.", false, true);
semphon("複", "衤", "复", 5, "double; repeat; duplicate");
icon("襾", "cover", "Pictograph of a cover.", "s");
semphon("覆", "襾", "復", 6, "cover; overflow");
addEtymology("㒼", "sealed; blocked", "Origin unclear. The top part may depict a cap or seal, and 兩 is possibly a phonetic component.", [iconComponent(O, [0, 3], "May depict a cap or seal."), soundComponent("兩", [3], "May be an outdated sound component.")]);
semphon("滿", "氵", "㒼", 3, "fill; full; satistied");
simp("满", "滿");
icon("鳳", "phoenix", "Pictograph of a mythical Chinese bird, similar to a phoenix. The bottom part of the character was later adapted to look similar to 鳥 (bird).", "obs", [iconComponent(O, [0, 3], "Depicts the head and back of a phoenix."), iconComponent("鳥", [3])]);
simp("凤", "鳳", [[0, 2], [2]], {}, { 鳥: "又" });
icon("風", "wind", "Originally written the same as 鳳 (phoenix) because the two characters sounded the same. Later the bottom part of the character was adapted to depict a gust of wind instead of a bird.", "os", [soundComponent("鳳", [0, 2], "Only a remnant of this character is used."), iconComponent(O, [2], "Depicts a gust of wind.")]);
simp("风", "風", [[0, 2], [2]], { 鳳: "凤" });
semphon("容", "宀", "公", 3, "hold; contain; tolerate");
semphon("船", "舟", "公", 6, "boat; ship", "", true);
icon("益", "increase; benefit; profit", `Depicts food or drink filling up a container (皿). Based on the original meaning "overflow", now written as 溢. The meaning later shifted to "increase" and "benefit".`, "b", [iconComponent(O, [0, 5], "Depicts food or drink filling up its container."), iconComponent("皿", [5], "Depicts a vessel for holding food or drink.")]);
semphon("溢", "氵", "益", 3, "overflow", "Originally written as 益.");
icon("易", "easy; amiable; change", `Upside-down version of 益 (increase; benefit), which depicts food or drink filling up a container (皿). Originally was the same character as 益, but the meaning later shifted to "easy".`, "益:bs",
    [iconComponent("皿", [0, 4], "Depicts a vessel for holding food or drink."), iconComponent(O, [4], "Depicts food or drink filling up its container.")]);
semphon("調", "言", "周", 7, "tone; accent; adjust");
simp("调", "調", [[0, 2], [2]], { "言": "讠" });
icon("氏", "clan; family", "Pictograph of a man bowing down.", "ob");
semphon("紙", "糹", "氏", 6, "paper");
simp("纸", "紙", [[0, 3], [3]], { "糹": "纟" });
icon("昌", "flourishing; prosperous", `Duplication of the 日 (sun) character, meaning "sunlight". The meaning later shifted to "beautiful" and "flourishing".`, "s", [iconComponent("日", [0, 4]), iconComponent("日", [4])]);
semphon("唱", "口", "昌", 3, "sing");
icon("缶", "pottery", "Pictograph of a pot with a lid.", "os");
semsem("髟", "镸", "彡", 7, "hair; shaggy", "Depicts long (镸) hair (彡).");
icon("齒", "tooth", "Pictograph of a mouth full of teeth. The sound component 止 was added later.", "os", [soundComponent("止", [0, 4]), iconComponent(O, [4], "Depicts a mouth full of teeth.")]);
simp("齿", "齒");
icon("耒", "plow", "Pictograph of a farming tool used to make furrows in the ground.", "s");
icon("鹿", "deer", "Pictograph of a deer.", "obs");
icon("尢", "lame", "Pictograph of a person with bent legs.", "b");
icon("龍", "dragon", "Pictograph of a dragon curled up.", "obs");
simp("龙", "龍", [], {}, {}, true);
icon("鼠", "rat; mouse", "Pictograph of a rat.", "obs");
icon("釆", "sow; scatter", "Pictograph of a farming tool for sowing seeds.", "b");
icon("杀", "kill; murder", simplified("殺") + " Depicts a person being impaled in the head.", "bs");
icon("殺", "kill; murder", "Depicts a person being impaled in the head (杀) with a spear (殳).", "", [iconComponent("杀", [0, 6]), iconComponent("殳", [6])]);
icon("斗", "dipper; ladle; unit of dry measure; (simp.) fight, struggle", "Pictograph of a cup or dipper. " + simplifyMerge("斗", "鬥", "fight, struggle"), "b");
icon("鬥", "fight; struggle", "Pictograph of two people wrestling each other.", "os");
icon("谷", "valley", "Pictograph of the valley between two mountains.", "b");
icon("戎", "weapons", "Pictograph of an axe, similar to 戈.", "ob");
icon("敖", "ramble; rove", "Pictograph of a person roving about.", "bs", [iconComponent(O, [0, 6], "Depicts a person roving about."), meaningComponent("攵", [6])]);
icon("劦", "unending exertion of energy", "Triple of 力 (strength; power).", "", [iconComponent("力", [0, 2]), iconComponent("力", [2, 4]), iconComponent("力", [4])]);
icon("尺", "unit of length", "Origin unclear.", "bs");
icon("予", "give; I", "Origin unclear.", "s");
addEtymology("野", "field; plain; wild", "Phonosemantic compound. 田 and 土 represent the meaning, and 予 represents the sound.",
    [meaningComponent("田", [0, 4]), meaningComponent("土", [4, 7]), soundComponent("予", [7])]);
icon("凡", "(plate); ordinary; commonplace", "Originally a pictograph of a plate or dish. The current meaning is a phonetic loan.", "bs");
icon("丹", "red; pellet", "Origin unclear.", "b");
icon("享", "enjoy; benefit", `Originally a pictograph of a temple or a shrine. The meaning later shifted to "festive" and "enjoy".`, "s");
icon("朿", "stab", "Pictograph of a thorned weapon.", "ob");
icon("民", "people; citizen; nationality", "Pictograph of a line going into the eye. Relation to current meaning unclear.", "bs");
icon("瓜", "melon; gourd; squash", "Pictograph of a melon hanging from a vine.", "b");
addEtymology("众", "many; crowd; multitude", "Triple of 人 (person), depicts many people together. " + simplified("眾"), [iconComponent("人", [0, 2]), iconComponent("人", [2, 4]), iconComponent("人", [4])]);
addEtymology("眾", "many; crowd; multitude", "Depicts a crowd (众) under someone's gaze (目).", [iconComponent("目", [0, 5]), iconComponent("众", [5])]);
icon("血", "blood", "Depicts a drop of blood in a container (皿).", "o", [iconComponent(O, [0, 1], "Depicts a drop of blood."), iconComponent("皿", [1])]);
icon("莫", "none; do not", `Depicts the sun (日) shining through vegetation (艸). Based on the original meaning "sunset", now written as 暮. The current meaning is a phonetic loan.`, "bs",
    [iconComponent("艹", [0, 3]), iconComponent("日", [3, 7]), iconComponent("艸", [7])]);
phonsem("暮", "莫", "日", 10, "sunset; evening", "Originally written as 莫.");
icon("圭", "jade tablet", "Duplication of 土 (earth). Origin unclear.", "", [unknownComponent("土", [0, 3]), unknownComponent("土", [3])]);
icon("由", "cause; from; due to", "Origin unclear.");
icon("屯", "assemble; garrison; difficult", "Origin unclear.", "b");
icon("朱", "red pigment (vermilion)", `Based on the original meaning "tree trunk", now written as 株. Derivative of 木 (tree). The current meaning is a phonetic loan.`, "bs", [iconComponent("木", [2])]);
semphon("株", "木", "朱", 4, "tree trunk; stump", "Originally written as 朱.");
icon("兀", "erect; towering", "Pictograph of a platform that makes things taller.");
icon("堯", "Emperor Yao", `Depicts a mound of dirt (土) on top of a platorm (兀), representing the meaning "tall; lofty", later used to describe the legendary Emperor Yao.`, "os",
    [iconComponent("土", [0, 3]), iconComponent("土", [3, 6]), iconComponent("土", [6, 9]), iconComponent("兀", [9])]);
simp("尧", "堯", [[0, 1], [1, 2], [2, 3], [3]]);
icon("僉", "all", "Depicts multiple people (人) opening their mouths (口) to speak together, representing the meaning \"together\" or \"all\".", "s",
    [iconComponent(O, [0, 3], "Depicts speech coming out of the mouth."), iconComponent("口", [3, 6]), iconComponent("口", [6, 9]), iconComponent("人", [9, 11]), iconComponent("人", [11])]);
simp("佥", "僉", [[0, 3], [3, 5], [5, 6], [6], [6]]);
icon("尞", "burn; set on fire", `Original form of 燎 (burn; set on fire). Originally written as 木 (wood) with several dots around it, representing flame. The 日 (sun) and 火 (fire) components were added later.`, "obs",
    [iconComponent("木", [0, 3]), iconComponent(O, [3, 5], "Depicts dots of flame."), meaningComponent("日", [5, 9]), meaningComponent("火", [9])]);
semphon("燎", "火", "尞", 4, "burn; set on fire", "", false, true);
icon("屮", "sprout", "Half of 艸 (grass).");
icon("甫", "barely; just now", "Pictograph of something sprouting (屮) from a field (田), depicting a garden or orchard, now written as 圃. The current meaning is a phonetic loan.", "o", [iconComponent("屮", [0, 1, 5]), iconComponent("田", [1, 6])]);
semphon("圃", "囗", "甫", [[0, 2, 9], [2, 9]], "garden; orchard", "Originally written as 甫.");
icon("俞", "surname Yu", "Origin unclear.");
icon("䇂", "sickle", "Pictograph of a curved knife-like object.");
icon("辟", "ruler; law; punish", "Depicts punishing a kneeling person (卩) with a curved knife (䇂).", "b", [iconComponent("卩", [0, 3]), iconComponent("䇂", [6], "Depicts a curved knife used to punish criminals."), meaningComponent("口", [3, 6])]);
icon("甲", "first heavenly stem", "Pictograph of a turtle shell.", "b");
icon("柬", "letter; card", "Two dots added to 束 (bind; bunch). Origin unclear.");
icon("半", "half", "Depicts cutting a cow (牛) into two halves (八).", "s", [iconComponent("八", [0, 2], "Depicts splitting into two halves."), iconComponent("牛", [2])]);
icon("倉", "granary; barn; storehouse", "Depicts things being stored together (合) behind a door (戶).", "s", [iconComponent("合", [0, 3, 7]), iconComponent("戶", [3, 7])]);
simp("仓", "倉", [[0, 2], [2]]);
icon("監", "supervise; inspect", "Pictograph of a person leaning over to look at his own reflection on a plate.", "obs", [iconComponent("目", [0, 6]), iconComponent("人", [6, 9]), iconComponent("皿", [9])]);
simp("监", "監", [[0, 2], [2, 5], [5]]);
icon("卒", "soldier; servant; finish", "A cross shape (十) added to clothes (衣). Origin unclear.", "b", [unknownComponent("衣", [0, 6]), unknownComponent("十", [6])]);
icon("寅", "3rd earthly branch", "Originally a pictograph of an arrow (矢). Later two hand components (爪) were added on the sides.", "ob", [iconComponent("矢", [0, 4, 7, 8, 9]), iconComponent("爪", [4, 5, 6, 7, 8, 9]), iconComponent("爪", [5, 7, 8, 9])]);
addEtymology("螾", "earthworm - yǐn", `Phonosemantic compound. 虫 represents the meaning and 寅 represents the sound.`);
addEtymology("旬", "ten-day period; period of time", "Originally a pictograph of an earthworm, now written as 螾, used here since the word for earthworm sounded similar to 旬. Later the meaning component (日) was added.",
    [soundComponent("螾", [0, 2], "Depicts an earthworm."), meaningComponent("日", [2])], "ob");
icon("敝", "ruined; shabby", "Depicts shabby clothes that have been beaten down.", "", [iconComponent(O, [0, 7], "Depicts ruined clothes."), meaningComponent("攵", [7])]);
icon("弗", "not", "A curved shape crossed out by two lines.", "b");
icon("允", "just; fair; allow", "Pictograph of a person nodding their head in agreement.", "obs", [iconComponent(O, [0, 2], "Depicts a person's head."), iconComponent("人", [2])]);
phonsem("夋", "允", "夂", 4, "dawdle; flat-footed");
semsem("奄", "大", "电", 3, "sudden; abrupt; surround; cover", "Lightning (电) is a big (大) and sudden and abrupt phenomenon.");
icon("冊", "book", "Pictograph of strips of bamboo strung together. In ancient China writing was done on bamboo strips.", "ob");
simp("册", "冊");
icon("扁", "flat; tablet", "Pictograph of a tablet affixed to a door.", "", [iconComponent("户", [0, 4]), iconComponent("冊", [4], "Depicts a flat thing affixed to a door.")]);
icon("畐", "full; filled", "Pictograph of a container full of something.", "bs");
icon("亢", "high; firm; overbearing", "Pictograph of a person with a line through their legs. Original meaning unclear.", "bs");
icon("支", "support; raise; sustain", "Pictograph of a hand (又) lifting a piece of bamboo (个).", "s", [iconComponent("个", [0, 2], "Depicts a piece of bamboo being lifted,"), iconComponent("又", [2])]);
icon("及", "and; extend; reach; in time for", "Pictograph of a hand (又) reaching to grab a person (人).", "obs", [iconComponent("人", [0, 2]), iconComponent("又", [1])]);
icon("內", "inside", "Depicts an entrance (入) to a hall (冂).", "", [iconComponent("入", [2]), iconComponent("冂", [0, 2])]);
simp("内", "內");
icon("品", "article; product; commodity; kind; grade; character", "Triple of 口. Depicts a variety of utensils together.", "", [iconComponent("口", [0, 3]), iconComponent("口", [3, 6]), iconComponent("口", [6])]);
icon("匚", "enclosed area");
icon("區", "area; region", "Depicts a group of things (品) in an enclosed area.", "", [iconComponent("匚", [0, 1, 10], "Depicts an enclosed area."), iconComponent("品", [1, 10], "Depicts a group of things.")]);
simp("区", "區", [[0, 1, 3], [1, 3]]);
icon("辰", "(farming tool); 5th earthly branch", "Pictograph of an ancient farming tool.", "obs");
icon("秋", "fall; autumn", "Originally a pictograph of a cricket, since cricket chirps indicate the beginning of autumn. Later the character was reanalyzed as 禾 (grain) + 火 (fire), perhaps alluding to the red color of leaves during autumn.", "obs", [iconComponent("禾", [0, 5]), iconComponent("火", [5])]);
semsem("宗", "宀", "示", 3, "school; sect; clan; ancestral; temple", "Depicts a spiritual (示) edifice (宀), such as an ancestral shrine.");
phonsem("䍃", "⺼", "缶", 4, "vase; pitcher", "", true, false, "s");
semsem("罷", "网", "能", 5, "stop; cease; dismiss", "Depicts stopping something from being able (能) to continue with a net (网).");
simp("罢", "罷", [[0, 5], [5]], {}, { 能: "去" });
semsem("筆", "⺮", "聿", 6, "pen; brush; pencil", "Depicts a utensil for writing (聿) made from bamboo (⺮).");
simp("笔", "筆", [[0, 6], [6]], {}, { 聿: "毛" });
semsem("竄", "穴", "鼠", 5, "scuttle; scurry off; flee", "Depicts a mouse (鼠) scurrying out of a hole (穴).");
semphon("窜", "穴", "串", 5, "scuttle; scurry off; flee", simplified("竄"));
icon("畢", "whole; complete; finish", "Depicts some sort of hunting trap used in a field (田). The meaning later shifted to \"finish\".", "b", [iconComponent("田", [0, 4]), iconComponent(O, [4], "Depicts some sort of hunting trap.")]);
addEtymology("毕", "whole; complete; finish", simplified("畢") + ` 比 represents the sound. The bottom component is a remnant from the traditional character 畢.`, [soundComponent("比", [0, 4]), simplifiedComponent("畢", [4], "Remnant from the traditional character 畢.")]);
icon("蟲", "bug; insect; worm", "Triple of 虫.", "", [iconComponent("虫", [0, 6]), iconComponent("虫", [6, 12]), iconComponent("虫", [12])]);
phonsem("羍", "大", "羊", 3, "little lamb");
phonsem("達", "羍", "辶", 9, "attain; reach");
phonsem("达", "大", "辶", 3, "attain; reach", simplified("達"));
phonsem("黨", "尚", "黑", 8, "party; association; club");
simp("党", "黨", [[8], [0, 8]], {}, { 黑: "儿" });
icon("斷", "break; cut off", "Depicts cutting off threads with an axe (斤)", "", [iconComponent(O, [0, 14], "Depicts silk threads."), iconComponent("斤", [14])]);
simp("断", "斷", [[0, 7], [7]]);
addEtymology("㒸", "obey; comply", "Origin unclear.", [unknownComponent("八", [0, 2]), soundComponent("豕", [2])]);
semphon("隊", "阝", "㒸", 2, "squadron; team; group");
simp("队", "隊", [[0, 2], [2]], {}, { 㒸: "人" });
icon("帚", "broom", "Pictograph of a hand sweeping with a broom.", "obs", [iconComponent("又", [0, 3], "Depicts a hand holding a broom."), iconComponent("巾", [5], "Depicts the bristles of a broom.")]);
addEtymology("歸", "return; go back", "Origin unclear.", [unknownComponent("𠂤", [0, 6]), unknownComponent("止", [6, 10]), unknownComponent("帚", [10])]);
simp("归", "歸", [[0, 2], [2, 2], [2]], { "帚": "彐" }, { "𠂤": "刂" });
icon("龜", "tortoise; turtle", "Pictograph of a tortoise.", "obs");
simp("龟", "龜");
semphon("淮", "氵", "隹", 3, "name of a river");
semphon("匯", "匚", "淮", [[0, 1, 12], [1, 12]], "converge; flow together; send money");
simp("汇", "匯", [[3], [0, 3]], {}, { "淮": "氵" });
icon("夾", "press from both sides; place between; sandwich", "Pictograph of a person (大) being pushed by people on both sides.", "b", [iconComponent("大", [0, 3], "Depicts a standing person being pushed from both sides."), iconComponent("人", [3, 5], "Depicts a person pushing from the left."), iconComponent("人", [5, 7], "Depicts a person pushing from the right.")]);
simp("夹", "夾", [[0, 1, 4], [1, 2, 3, 4], [2, 4]]);
icon("廌", "unicorn", "Pictograph of a mythical animal similar to a unicorn.", "os");
semphon("薦", "艹", "廌", 4, "recommend", `Based on the original meaning "straw mat". The current meaning is a phonetic loan.`, true);
phonsem("存", "才", "子", 3, "exist; keep; survive", "", true);
semphon("荐", "艹", "存", 3, "recommend", simplified("薦") + ` Based on the original meaning "straw mat". The current meaning is a phonetic loan.`);
icon("盡", "use up; finish; exhaust; entirely", "Pictograph of scrubbing dishes clean after one is finished eating.", "os", [iconComponent("又", [0, 3], "Depicts a hand cleaning dishes."), iconComponent(O, [3, 9], "Depicts a brush used to clean dishes."), iconComponent("皿", [9], "Depicts a dish for holding food.")]);
simp("尽", "盡", [[0, 2, 3, 4], [2, 3, 4], [4, 4]]);
phonsem("舉", "與", "手", 13, "lift; hold up");
simp("举", "舉", [[6], [0, 6]], {}, { 與: "兴" });
icon("壳", "shell; crust", "Origin unclear.");
icon("殼", "shell; crust", "Origin unclear.", "", [unknownComponent("壳", [0, 8]), unknownComponent("殳", [8])]);
icon("厤", "experience; undergo", "Original form of 歷. Origin unclear.", "", [unknownComponent("厂", [0, 2]), unknownComponent("禾", [2, 7]), unknownComponent("禾", [7])]);
phonsem("歷", "厤", "止", 12, "experience; undergo");
phonsem("曆", "厤", "日", 12, "calendar");
addEtymology("历", "experience; undergo; calendar", simplified("歷") + " " + simplifyMerge("历", "曆", "calendar"), [simplifiedComponent("厂", [0, 2], "Simplified shorthand of the traditional 厤 component."), soundComponent("力", [2])]);
icon("麗", "beautiful", "Pictograph of a deer (鹿) with two beautiful antlers.", "b", [iconComponent(O, [0, 8], "Depicts two beautiful antlers on the head of a deer."), iconComponent("鹿", [8])]);
simp("丽", "麗", [[0, 7], [7, 7]]);
icon("霝", "drops of rain", "Pictograph of drops of rain.", "ob", [meaningComponent("雨", [0, 8]), iconComponent(O, [8], "Depicts three falling raindrops.")]);
icon("巫", "wizard; witch; shaman", "Depicts some sort of object used by shamans. The exact nature of this object is unclear.", "b");
phonsem("靈", "霝", "巫", 17, "spiritual; spirit; clever; smart");
simp("灵", "靈", [[3], [0, 3]], {}, { 霝: "彐", "巫": "火" });
addEtymology("劉", "surname Liu", `Based on the original meaning "battle-axe". The current meaning is a phonetic loan.`, [soundComponent("卯", [0, 5], obsoleteSound("劉", "卯")), meaningComponent("金", [5, 13]), meaningComponent("刂", [13])]);
simp("刘", "劉", [[0, 0], [0, 4], [4]], {}, { 金: "文" });
addEtymology("盧", "rice vessel; black", "Phonosemantic compound. 虍 represents the sound, and the remainder of the character is a pictograph of a vessel for cooking rice.", [soundComponent("虍", [0, 6], obsoleteSound("盧", "虎")), iconComponent(O, [6, 11], "Depicts a pot full of rice."), meaningComponent("皿", [11])], "os");
simp("卢", "盧", [[0, 2], [2], [2, 2]]);
icon("彔", "carve wood", "Pictograph of a water well. Relation to current meaning unclear.", "o", [iconComponent(O, [0, 3], "Depicts the top part of a well used to raise and lower the bucket of water."), iconComponent("水", [3])]);
semphon("錄", "金", "彔", 8, "copy; record");
simp("录", "錄", [[0, 0], [0]]);
icon("黽", "toad", "Pictograph of a toad.", "o");
simp("黾", "黽");
icon("聶", "whisper", "Triple of 耳 (ear).", "", [iconComponent("耳", [0, 6]), iconComponent("耳", [6, 12]), iconComponent("耳", [12])]);
icon("聂", "whisper", simplified("聶") + " Triple of 耳 (ear).", "", [iconComponent("耳", [0, 6]), simplifiedComponent("又", [6, 8], "Shorthand for the traditional component 耳."), simplifiedComponent("又", [8], "Shorthand for the traditional component 耳.")]);
addEtymology("寧", "peaceful; prefer", "Phonosemantic compound. 丁 represents the sound and the other components represent the meaning.",
    [meaningComponent("宀", [0, 3]), meaningComponent("心", [3, 7]), meaningComponent("皿", [7, 12]), soundComponent("丁", [12])]);
simp("宁", "寧", [[0, 3], [3, 3], [3, 3], [3]]);
icon("豈", "how", "Origin unclear.", "", [unknownComponent("山", [0, 3]), unknownComponent("豆", [3])]);
addEtymology("岂", "how", "Simplified form of 豈. Origin unclear. The simplified component 己 represents the sound.", [unknownComponent("山", [0, 3]), soundComponent("己", [3])]);
icon("遷", "move; shift; change", "Origin unclear.", "", [unknownComponent("覀", [0, 6]), meaningComponent("舁", [6, 11], "Depicts raising something with two hands."), meaningComponent("辶", [11])]);
phonsem("迁", "千", "辶", 3, "move; shift; change", simplified("遷"))
semphon("穹", "穴", "弓", 5, "vault; dome");
semphon("窮", "身", "穹", [[5, 12], [0, 5, 12]], "poor; destitute");
simp("穷", "窮", [[5], [0, 5]], {}, { 身: "力", 穹: "穴" });
icon("嗇", "stingy", `Pictograph of wheat (麥) being stored in a granary. Based on the original meaning "harvest; hoard". The meaning later shifted to "stingy".`, "os", [iconComponent("麥", [0, 7]), iconComponent(O, [7], "Depicts a place for storing grain.")]);
simp("啬", "嗇", [[0, 5], [5]], { 麥: "麦" });
icon("審", "examine; investigate", "Origin unclear.", "", [unknownComponent("宀", [0, 3]), unknownComponent("采", [3, 10]), unknownComponent("田", [10])]);
semphon("审", "宀", "申", 3, "examine; investigate", simplified("審"));
icon("尾", "tail", "Depicts fur (毛) protruding from the posterior of an animal.", "s", [iconComponent(O, [0, 3], "Depicts the posterior of an animal."), iconComponent("毛", [3])]);
icon("蜀", "historical name of Sichuan", "Pictograph of a silkworm. Can Cong (蠶叢), the legendary ruler of the kingdom of Shu (modern-day Sichuan), was said to have been the inventor of silk.", "o",
    [iconComponent(O, [0, 7], "Depicts a silkworm."), meaningComponent("虫", [7])]);
semphon("屬", "尾", "蜀", 8, "belong; category; constitute; join together");
icon("禹", "surname Yu", "Depicts Yu the Great (21st century BC), a legendary leader who tamed the floods.", "o");
simp("属", "屬", [[0, 3], [3]], {}, { 蜀: "禹" });
addEtymology("雙", "pair; double", "Depicts a pair of birds in the hand.", [iconComponent("隹", [0, 8]), iconComponent("隹", [8, 16]), iconComponent("又", [16])]);
addEtymology("双", "pair; double", simplified("雙") + " Depicts a pair of hands.", [iconComponent("又", [0, 2]), iconComponent("又", [2])]);
semsem("孫", "子", "系", 3, "grandson; descendant", `Semantic compound of child (子) and 系 (relation; connection).`);
semsem("孙", "子", "小", 3, "grandson; descendant", simplified("孫") + " A grandson is a small (小) child (子).");
addEtymology("獻", "offer; present; donate", "Phonosemantic compound. 犬 represents the sound, and the left component is a depiction of a sacrificial offering on an altar.", [
    iconComponent(O, [0, 16], "Depicts a sacrificial offering on an altar."), soundComponent("犬", [16])
], "ob");
icon("南", "south", "Depicts the front of a house. In some regions of ancient China, houses were typically built to face the south.", "ob");
simp("献", "獻", [[0, 9], [9]], {}, { [O]: "南" });
icon("尋", "look for; search; seek", "Pictograph of two outstretched arms searching for something.", "os");
simp("寻", "尋");
icon("亞", "Asia; second; next to", "Originally depicted a common Chinese architectural shape. Relation to current meaning unclear.", "b");
simp("亚", "亞");
icon("甘", "sweet", "Pictograph of something sweet inside the mouth (口).", "o", [iconComponent("口", [0, 3, 4]), iconComponent(O, [3, 4], "Depicts something sweet inside the mouth.")]);
semphon("敢", "爭", "甘", [[0, 2, 7], [2, 7]], "dare; bold; have confidence");
icon("喦", "talkative", "Pictograph of three mouths (口) linked together.");
semphon("嚴", "喦", "敢", 8, "strict; severe", `Based on the original meaning "boast". The meaning later shifted to "extremely" and "severe".`);
simp("严", "嚴", [[0, 7], [7, 7]]);
icon("厭", "loathe; be fed up with", `Pictograph of a dog (犬) with a piece of meat (肉) in its mouth (口). Based on the original meaning "satiated". The meaning later shifted to "be fed up with" and "dislike".`, "b",
    [iconComponent("犬", [10]), iconComponent("口", [0, 6]), iconComponent("肉", [6, 10])]);
simp("厌", "厭", [[2], [0, 2], [2, 2]]);
addEtymology("藝", "skill; art", "Originally written as 埶. The 艹 and 云 components were added later for unknown reasons.", [unknownComponent("艹", [0, 4]), meaningComponent("埶", [4, 15]), unknownComponent("云", [15])]);
semphon("艺", "艹", "乙", 3, "skill; art", simplified("藝"));
addEtymology("陰", "cloudy; overcast; Yin", "Phonosemantic compound. 今 and 云 represent the sound, while 阝 and 云 represent the meaning.", [meaningComponent("阝", [0, 2]), soundComponent("今", [2, 6]), meaningComponent("云", [6], "Also serves as a sound component.")]);
addEtymology("阴", "cloudy; overcast; Yin", "The traditional characters 陰 (Yin) and 陽 (Yang) were simplified to 阴 and 阳. In Chinese philosophy, the moon (月) corresponds to Yin (阴) and the sun (日) corresponds to Yang (阳).",
    [meaningComponent("阝", [0, 2]), simplifiedComponent("月", [2], "Simplified from the traditional 陰. Used here since the moon corresponds to the 'Yin' of 'Yin and Yang' in Chinese philosophy.")]);
semphon("陽", "阝", "昜", 2, "positive; sun; Yang");
addEtymology("阳", "positive; sun; Yang", "The traditional characters 陰 (Yin) and 陽 (Yang) were simplified to 阴 and 阳. In Chinese philosophy, the moon (月) corresponds to Yin (阴) and the sun (日) corresponds to Yang (阳).",
    [meaningComponent("阝", [0, 2]), simplifiedComponent("日", [2], "Simplified from the traditional 陽. Used here since the sun corresponds to the 'Yang' of 'Yin and Yang' in Chinese philosophy.")]);
icon("㥯", "cautious", "Origin unclear.", "s", [unknownComponent("爪", [0, 4]), unknownComponent("工", [4, 7]), unknownComponent("又", [7, 10]), meaningComponent("心", [10])]);
semphon("隱", "阝", "㥯", 2, "hidden; secret");
simp("隐", "隱", [[0, 2], [2]]);
semphon("猶", "犭", "酉", 3, "as if; just like; yet", `Based on the original meaning "type of monkey". The current meaning is a phonetic loan.`);
semphon("犹", "犭", "尤", 3, "as if; just like; yet", simplified("猶") + ` Based on the original meaning "type of monkey". The current meaning is a phonetic loan.`);
icon("奠", "fix; settle; libation for the dead", "Pictograph of alchohol (酉) being poured out as a a libation for the dead.", "b", [iconComponent("酉", [0, 9]), iconComponent(O, [9], "Depicts an altar or platform that the libation is poured onto.")]);
phonsem("鄭", "奠", "⻏", 12, "surname Zheng");
simp("郑", "鄭", [[6], [0, 6]], {}, { "奠": "关" });
addEtymology("賓", "guest; visitor", "Depicts someone walking (止) into a house (宀) with a gift (貝).", [iconComponent("宀", [0, 3]), iconComponent("止", [3, 7]), iconComponent("貝", [7])]);
icon("兵", "soldier; force; weapon; army", "Pictograph of two hands (廾) holding some sort of weapon.", "ob", [iconComponent("斤", [0, 4], "Depicts some sort of weapon."), iconComponent("廾", [4], "Depicts two hands.")]);
semphon("宾", "宀", "兵", 3, "guest; visitor", simplified("賓"));
addEtymology("質", "character; nature", "Origin unclear.", [unknownComponent("斤", [0, 4]), unknownComponent("斤", [4, 8]), unknownComponent("貝", [8])]);
simp("质", "質", [[0, 4], [4, 4], [4]], { "貝": "贝" });
icon("彥", "accomplished; elegant", "Depicts being accomplished in both literature (文) and military skill (弓). 厂 is a phonetic component.", "s", [meaningComponent("文", [0, 4]), soundComponent("厂", [4, 6]), meaningComponent("弓", [6])]);
simp("彦", "彥", [[0, 4], [4, 6], [6]]);
phonsem("產", "彥", "生", 6, "give birth to; produce");
simp("产", "產", [[0, 0], [0]], { 彥: "彦" });
icon("芻", "mow; cut grass; hay", "Pictograph of a tool used for cutting grass.", "o");
simp("刍", "芻");
semsem("集", "隹", "木", 8, "gather; collect", "Depicts a bird (隹) gathering wood (木) to build a nest.", "o");
addEtymology("侖", "arrange; sequence", "Depicts an arrangement of writings (冊). The origin of the top component is unclear.", [unknownComponent(O, [0, 3]), meaningComponent("冊", [3])]);
simp("仑", "侖", [[0, 2], [2]], {}, { 冊: "匕" });
addEtymology("羅", "collect; gather; catch", "Depicts a net (网) for catching birds (隹). The 糹 (silk; thread) component was added later.", [meaningComponent("网", [0, 5]), meaningComponent("糹", [5, 11]), meaningComponent("隹", [11])]);
simp("罗", "羅", [[0, 5], [5, 5], [5]], {}, { "隹": "夕" });
addEtymology("農", "farm; peasant; agriculture", "Depicts using a farming tool (辰) in a field (田) surrounded by forest (林).",
    [meaningComponent("田", [0, 2, 5, 6]), meaningComponent("林", [2, 5]), meaningComponent("辰", [6])], "b");
simp("农", "農", [[0, 2], [2, 2], [2]], {}, { 田: "冖" });
icon("齊", "even; uniform; neat", "Pictograph of stalks of millet. Possibly alludes to the even and uniform appearance of a millet field.", "obs");
simp("齐", "齊");
semsem("喬", "大", "高", [[0, 1, 2, 4], [1, 2, 4]], "tall", "Originally written the same as 高 (tall). The 大 component was added to distinguish the two characters.", "s");
simp("乔", "喬", [[0, 1, 2, 4], [1, 2, 4]]);
icon("壽", "long life; old age", "The top component is a remnant of 老 (old). The origin of the bottom component is unclear.", "bs", [meaningComponent("耂", [0, 4]), unknownComponent(O, [4], "The meaning of this component is unclear.")]);
simp("寿", "壽", [[0, 4], [4]]);
icon("𣶒", "deep pool; deep; profound", "Original form of 淵. Pictograph of water inside a pool.", "s");
semsem("淵", "氵", "𣶒", 3, "deep pool; deep; profound", "Originally written as 𣶒. The left 氵 (water) component was added later.")
simp("渊", "淵", [[0, 3], [3]]);
semsem("肅", "聿", "𣶒", 4, "respectful; solemn", "The 𣶒 (deep; profound) component hints at the meaning. The purpose of the 聿 (writing utensil) component is unclear.");
simp("肃", "肅");
icon("叀", "spindle; spinning wheel", "Pictograph of a spindle.", "o");
semsem("專", "叀", "寸", 8, "particular; purpose; special; expert", `Depicts a hand (寸) spinning a wheel (叀). Based on the original meaning "turn", now written as 轉. The current meaning is a phonetic loan.`, "s");
semphon("轉", "車", "專", 7, "turn; transfer; revolve", "Originally written as 專. The 車 component was added later.", false, true);
simp("专", "專", [[0, 2], [2]], {}, {}, true);
simp("转", "轉", [[0, 4], [4]], { 車: "车", 專: "专" });
icon("凸", "stick out; protruding; convex", "Pictograph of a bump sticking out. Opposite of 凹.");
icon("凹", "sunken; indented; concave; hollow", "Pictograph of a concavity. Opposite of 凸.");
phonsem("嘗", "尚", "旨", 8, "try; taste; experience");
simp("尝", "嘗", [[5], [0, 5]], {}, { 旨: "云" });
phonsem("虜", "虍", "男", 6, "capture; take prisoner");
simp("虏", "虜", [[6], [0, 6]], {}, { 男: "力" });
semphon("抱", "扌", "包", 3, "hold; carry; hug");
semphon("汽", "氵", "气", 3, "steam; vapor");
addEtymology("雞", "chicken", "The left component is a pictograph of a chicken. The right component 隹 (bird) was added later.", [iconComponent(O, [0, 10], "Depicts a chicken."), meaningComponent("隹", [10])], "os");
addEtymology("鸡", "chicken", simplified("雞") + ` The traditional left component was originally a pictograph of a chicken, but in simplified characters it was abbreviated to 又. The traditional 隹 (bird) component was replaced with 鸟, a different character for "bird".`,
    [simplifiedComponent("又", [0, 2], "Shorthand form of the left component in the traditional character 雞."), meaningComponent("鸟", [2])], "雞:os");
icon("兮", "(bustling); [exclamatory particle]", "Depicts two lines of air (八) coming from breath (丂).", "b", [iconComponent("八", [0, 2], "Depicts lines of air."), iconComponent("丂", [2], "Depicts breath.")]);
phonsem("市", "之", "兮", 2, "city; market", "Alludes to the noist bustle (兮) of a city.");
semsem("制", "木", "刂", 6, "control; regulate; manufacture", "Depicts cutting down a tree (木) with a knife (刂).", "s");
addEtymology("傷", "injure; wound", "Phonosemantic compound. 亻 and 刀 represent the meaning and 昜 represents the sound.", [meaningComponent("亻", [0, 2]), meaningComponent("刀", [2, 4]), soundComponent("昜", [4])]);
simp("伤", "傷", [[0, 2], [2, 4], [4]], {}, { 昜: "力" });
semsem("冬", "夂", "冫", 3, "winter", "Winter is the season when ice (冫) is beneath your feet (夂).");
icon("圖", "picture; drawing; map", "Pictograph of a map of territory.", "b", [meaningComponent("囗", [0, 2, 13]), iconComponent(O, [2, 13], "Depicts territory drawn on a map.")]);
simp("图", "圖", [[0, 2, 7], [2, 7]], {}, { [O]: "冬" });
semsem("討", "言", "寸", 7, "invite; provoke; demand; ask for; denounce", "Depicts using speech (言) and one's hands (寸) to ask for something.");
simp("讨", "討", [[0, 2], [2]], { 言: "讠" });
semphon("論", "言", "侖", 7, "opinion; discuss; doctrine");
simp("论", "論", [[0, 2], [2]], { 言: "讠", 侖: "仑" });
semphon("亭", "京", "丁", 7, "pavilion; booth; kiosk");
semphon("停", "亻", "亭", 2, "stop; halt");
icon("氐", "low; base; root", "Depicts a man bowing down (氏) low to the ground.", "", [iconComponent("氏", [0, 4], "Depicts a man bowing down."), iconComponent(O, [4], "Depicts the ground.")]);
semsem("昏", "氐", "日", 4, "twilight; muddle-headed", "Depicts the sun (日) down low (氐) during twilight.");
semphon("婚", "女", "昏", 3, "marry; marriage");
phonsem("雇", "户", "隹", 4, "employ; hire", `Originally was the name of a type of bird. The current meaning is a phonetic loan.`);
phonsem("顧", "雇", "頁", 12, "look after; attend to");
simp("顾", "顧", [[4], [0, 4]], { 頁: "页" });
semsem("連", "車", "辶", 7, "link; continuous; even", "Depicts a line of man-drawn (辶) carriages (車).");
simp("连", "連", [[0, 4], [4]], { 車: "车" });
semphon("份", "亻", "分", 2, "[measure word]; portion; share");
semphon("街", "行", "圭", [[0, 3, 9], [3, 9]], "street");
addEtymology("流", "flow", "Depicts an upside-down child (子) being born headfirst with amniotic fluid flowing out.", [meaningComponent("氵", [0, 3]), iconComponent("子", [3, 7], "Depicts an upside-down child being born headfirst."), iconComponent("川", [7], "Depicts amniotic fluid flowing out during childbirth.")]);
icon("塞", "stop up; squeeze; stuff", "Depicts two hands (廾) stuffing various objects (工) into an enclosed space (宀) and sealing it with clay (土).", "s", [iconComponent("宀", [0, 3]), iconComponent("工", [3, 6]), iconComponent("工", [3, 5, 6, 7]), iconComponent("廾", [7, 10]), iconComponent("土", [10])]);
phonsem("賽", "塞", "貝", 10, "competition", `貝 (shell) depicts the prize for a competition - shells were used as currency in ancient China.`);
simp("赛", "賽", [[10], [0, 10]], { 貝: "贝" });
addEtymology("往", "go towards", "Phonosemantic compound. 彳 and 止 represent the meaning, and 王 represents the sound.", [meaningComponent("彳", [0, 3]), meaningComponent("止", [3, 4], "Abbreviated to a single stroke in the modern form."), soundComponent("王", [4])], "b");
semphon("低", "亻", "氐", 2, "low; beneath; lower", "", false, true);
icon("叚", "borrow", "Original form of 假. Depicts one hand (又) borrowing something from another hand (手).", "s", [iconComponent("手", [0, 5]), iconComponent(O, [5, 7], "Depicts an object being borrowed."), iconComponent("又", [7])]);
semphon("假", "亻", "叚", 2, "fake; false; borrow", "", false, true);
semsem("香", "禾", "甘", 5, "fragrant; sweet smelling", "Represents the sweet (甘) smell of fresh grain (禾).");
icon("朮", "glutinous millet", "Pictograph of millet.", "");
semphon("術", "行", "朮", [[0, 3, 8], [3, 8]], "method; technique");
simp("术", "術", [[0, 0], [0]]);
semsem("付", "亻", "寸", 2, "pay; hand over", "Depicts a hand (寸) giving payment to a person (亻).");
semphon("附", "阝", "付", 2, "add; attach; be close to");
semphon("園", "囗", "袁", [[0, 2, 12], [2, 12]], "park; garden");
semphon("园", "囗", "元", [[0, 2, 6], [2, 6]], "park; garden", simplified("園"));
phonsem("觜", "此", "角", 6, "mouth; beak; spout", "Original form of 嘴.", true);
semphon("嘴", "口", "觜", 3, "mouth; beak; spout", "Originally written as 觜. The 口 (mouth) component was added later.", false, true);
phonsem("功", "工", "力", 3, "skill; merit; achievement");
semsem("卡", "上", "下", [[0, 3], [2]], "stop; block; be stuck", "Depicts being stuck between something above (上) and something below (下).");
semphon("輛", "車", "兩", 7, "[vehicle measure word]");
simp("辆", "輛", [[0, 4], [4]], { "車": "车", "兩": "两" });
icon("罙", "explore; search out", "Depicts a person exploring inside a cave. Original form of 探.", "", [iconComponent("穴", [0, 4]), iconComponent(O, [4], "Depicts a person exploring inside a cave.")]);
semphon("探", "扌", "罙", 3, "explore; search out", "Originally written as 罙. The 扌 (hand) component was added later.");
semphon("深", "氵", "罙", 3, "deep");
phonsem("普", "並", "日", 8, "general; popular; universal", "", true);
phonsem("般", "凡", "殳", 6, "sort; kind; class", "The original 凡 component was later reanalyzed as 舟 (boat).");
phonsem("盤", "般", "皿", 10, "plate; dish; tray");
simp("盘", "盤", [[6], [0, 6]], {}, { 般: "舟" });
addEtymology("展", "spread out; open", "Origin unclear.", [meaningComponent("尸", [0, 3]), unknownComponent(O, [3], "The meaning of this component is unclear.")]);
icon("退", "retreat; move back", "Originally a pictograph of a foot (止) retreating back to a safe place. The 辶 (walk) component was added later.", "os", [iconComponent(O, [0, 4], "Depicts a safe place."), iconComponent("止", [4, 6], "Depicts a foot retreating to a safe place."), meaningComponent("辶", [6])]);
semphon("腿", "⺼", "退", 4, "leg");
icon("朵", "flower; [measure word]", "Pictograph of a flower.", "s");
phonsem("觀", "雚", "見", 18, "look at; watch; observe");
simp("观", "觀", [[2], [0, 2]], { "見": "见" }, { "雚": "又" });
icon("祭", "offer sacrifice", "Depicts a hand (又) offering meat (⺼) as a sacrifice to a deity (示).", "", [iconComponent("⺼", [0, 4], "Depicts sacrificial meat."), iconComponent("又", [4, 6], "Depicts a hand offering meat as a sacrifice."), meaningComponent("示", [6])]);
semphon("察", "宀", "祭", 3, "examine; observe", "", true);
semphon("健", "亻", "建", 2, "healthy; invigorate; strengthen", "", false, true);
icon("臼", "mortar", "Pictograph of a mortar: a hollow vessel used to crush ingredients.", "s");
icon("雈", "owl", "Pictograph of an owl.", "s", [iconComponent(O, [0, 4], "Depicts the head of an owl."), iconComponent("隹", [4])]);
semphon("舊", "雈", "臼", 12, "old", `Based on the original meaning "type of owl". The current meaning is a phonetic loan.`);
icon("丨", "vertical line");
simp("旧", "舊", [[0, 1], [1]], {}, { "雈": "丨", "臼": "日" });
icon("吅", "noisy; uproarious", "Duplicate of 口 (mouth). Depicts multiple mouths making lots of noise.");
semsem("哭", "吅", "犬", 6, "cry; weep; wail", "Depicts the howl (吅) of a dog (犬).");
addEtymology("竟", "unexpectedly; actually", "Origin unclear.", [unknownComponent("音", [0, 9]), unknownComponent("人", [9])]);
semphon("鏡", "釒", "竟", 8, "mirror; lens");
simp("镜", "鏡", [[0, 5], [5]], { "釒": "钅" });
semsem("料", "米", "斗", 6, "material; stuff; grain; feed", "Depicts a dipper (斗) full of rice (米).");
semphon("搬", "扌", "般", 3, "move; relocate");
semphon("育", "子", "⺼", 4, "raise children; educate", "The 子 (child) component is upside-down.", true);
icon("奐", "excellent", "Origin unclear.", "", [unknownComponent(O, [0, 6]), meaningComponent("大", [6])]);
simp("奂", "奐", [[0, 4], [4]]);
semphon("換", "扌", "奐", 3, "exchange; change");
simp("换", "換", [[0, 3], [3]], { 奐: "奂" });
phonsem("導", "道", "寸", 12, "lead; guide; direct", "", false, true);
simp("导", "導", [[3], [0, 3]], {}, { 道: "已" });
semphon("庫", "广", "車", 3, "storehouse", "", true);
simp("库", "庫", [[0, 3], [3]], { "車": "车" });
semphon("褲", "衤", "庫", 5, "pants; trousers");
simp("裤", "褲", [[0, 5], [5]], { 庫: "库" });
semphon("瞋", "目", "真", 5, "stare at angrily");
icon("臣", "official; statesman", `Pictograph of an eye, similar to 目. Based on the original meaning "to glare at", now written as 瞋. The current meaning is a phonetic loan.`, "b");
addEtymology("緊", "tight; strict; tense", "Phonosemantic compound. 臣 represents the sound, while 又 and 糸 represent the meaning.", [soundComponent("臣", [0, 6]), meaningComponent("又", [6, 8], "Depicts a hand tightening a thread."), meaningComponent("糸", [8], "Depicts a thread being tightened.")]);
simp("紧", "緊", [[0, 2], [2, 4], [4]]);
icon("庚", "7th heavenly stem", "Origin unclear.");
phonsem("唐", "庚", "口", 7, "exaggerate; Tang dynasty", "", true);
semphon("糖", "米", "唐", 6, "sugar; sweets");
semphon("掃", "扌", "帚", 3, "sweep; clean");
simp("扫", "掃", [[0, 3], [3]], {}, { "帚": "彐" });
icon("亙", "extending all the way across; continuous", "Pictograph of continuously revolving circle.", "s");
simp("亘", "亙");
semphon("宣", "宀", "亘", 3, "declare; announce", "", true);
semphon("仔", "亻", "子", 2, "young");
addEtymology("器", "utensil; tool", "Origin unclear.", [unknownComponent("口", [0, 3]), unknownComponent("口", [3, 6]), unknownComponent("犬", [6, 10]), unknownComponent("口", [10, 13]), unknownComponent("口", [13, 16])]);
semsem("武", "戈", "止", [[0, 2, 6], [2, 6]], "Depicts marching (止) with a weapon (戈).");
icon("茍", "cautious; circumspect", "Pictograph of a person kneeling down in respect.", "b");
semsem("敬", "茍", "攵", 8, "respect; venerate", "Depicts kneeling (茍) and extending one's hands 攵 in respect.");
phonsem("警", "敬", "言", 12, "alert; warn; police");
phonsem("春", "屯", "日", 5, "spring");
icon("乇", "blade of grass", "Origin unclear. Traditionally explained as a pictograph of a blade of grass.");
semphon("托", "扌", "乇", 3, "prop; support; rest; trust");
phonsem("壓", "厭", "土", 14, "press; push down; pressure");
simp("压", "壓", [[2, 5], [0, 2, 5]], { 厭: "厌" });
semphon("雜", "衣", "集", [[0, 6], [6]], "mixed; miscellaneous");
simp("杂", "雜", [[0, 2], [2]], {}, { 衣: "九", 集: "木" });
icon("亂", "confusion; disorder", "Pictograph of two hands doing work with tangled threads.", "bs", [iconComponent("爪", [0, 4]), iconComponent("又", [10, 12]), iconComponent(O, [4, 10, 12], "Depicts tangled threadwork.")]);
addEtymology("乱", "confusion; disorder", simplified("亂") + " The left side of 亂 was simplified to the graphically similar 舌 (tongue).", [simplifiedComponent("舌", [0, 6], "Simplified from the left side of 亂."), iconComponent(O, [6], "Depicts tangled threadwork.")]);
phonsem("志", "士", "心", 3, "aspiration; ambition; (simp.) sign; record", simplifyMerge("志", "誌", "sign; record"));
semphon("誌", "言", "志", 7, "sign; mark; record");
addEtymology("尌", "stand (something) up", "Depicts a hand (寸) cultivating a plant (屮). The sound component 豆 was added later.", [iconComponent("屮", [0, 2], "Depicts a plant sprouting up."), soundComponent("豆", [2, 9], obsoleteSound("尌", "豆")), iconComponent("寸", [9], "Depicts a hand cultivating a plant.")]);
semphon("廚", "广", "尌", 3, "kitchen");
simp("厨", "廚", [[0, 2], [2]], { "广": "厂" });
semphon("終", "糹", "冬", 6, "end; finish");
simp("终", "終", [[0, 3], [3]], { "糹": "纟" });
semphon("抓", "扌", "瓜", 3, "grab; catch");
icon("差", "difference; mistake; fall short", `Depicts grain (麥) being rolled between the fingers in the left hand (左). Based on the original meaning "rub between fingers", now written as 搓. The meaning later shifted to "uneven" and "error".`, "b",
    [iconComponent("麥", [0, 4]), iconComponent("左", [4])]);
semphon("招", "扌", "召", 3, "recruit; provoke; trick");
semphon("座", "广", "坐", 3, "seat; base", "", false, true);
icon("尹", "administer; oversee", "Depicts a hand (又) holding a staff, held by people in positions of authority.", "b", [iconComponent("又", [0, 3]), iconComponent("丨", [3], "Depicts a staff.")]);
phonsem("君", "尹", "口", 4, "monarch; ruler; gentleman", "", false, true);
phonsem("群", "君", "羊", 7, "group; herd; flock");
semphon("治", "氵", "台", 3, "rule; manage; control", `Originally referred to a body of water in Shandong province. The current meaning is a phonetic loan.`, true);
semphon("療", "疒", "尞", 5, "treat; cure");
semphon("疗", "疒", "了", 5, "treat; cure", simplified("療"));
icon("貴", "expensive; precious; noble", "Pictograph of two hands carrying a shell. (Shells were used in ancient china as currency.)", "s", [iconComponent(O, [0, 5], "Depicts two hands carrying something together."), iconComponent("貝", [5], "Depicts a shell, used as currency in ancient China.")]);
simp("贵", "貴", [[0, 5], [5]], { 貝: "贝" });
addEtymology("充", "fill; satisfy", "Origin unclear. The 子 (child) component is upside-down.", [unknownComponent("子", [0, 4]), unknownComponent("儿", [4])]);
semphon("統", "糹", "充", 6, "gather; unite");
simp("统", "統", [[0, 3], [3]], { "糹": "纟" });
semphon("奉", "廾", "丰", [[2, 5], [0, 2, 5]], "offer tribute; present", "", false, false, false, "s");
semphon("棒", "木", "奉", 4, "stick; club; wornderful");
semphon("底", "广", "氐", 3, "bottom; end; background");
semphon("宓", "宀", "必", 3, "still; silent");
phonsem("密", "宓", "山", 8, "secret");
phonsem("度", "石", "又", 7, "measure; degree", "", true);
semphon("梅", "木", "每", 4, "plum");
semsem("某", "甘", "木", 5, "some; such-and-such", `Depicts a sweet (甘) fruit in a tree (木). Based on the original meaning "plum", now written as 梅. The current meaning is a phonetic loan.`);
semphon("謀", "言", "某", 7, "plan; scheme");
simp("谋", "謀", [[0, 2], [2]], { 言: "讠" });
addEtymology("刷", "brush; scrub", "The left component is a pictograph of a brush. The 刂 (knife) component indicates that it is a tool/utensil.", [iconComponent(O, [0, 6], "Depicts a brush."), meaningComponent("刂", [6])]);
semphon("代", "亻", "弋", 2, "act on behalf; replace", "", true);
phonsem("袋", "代", "衣", 5, "bag; sack");
addEtymology("微", "tiny; slightly", "Origin unclear.", [unknownComponent("彳", [0, 3]), unknownComponent("美", [3, 9], "Side view of 美, a person with ornamental headwar resembling sheep horns."), unknownComponent("攵", [9])]);
icon("段", "section; stage; length", `Pictograph of a hand holding a forging hammer (殳) and hitting a stone (石). Based on the original meaning "forge", now written as 鍛. The current meaning is a phonetic loan.`, "b", [iconComponent("石", [0, 5]), iconComponent("殳", [5], "Here depicts a hand holding a hammer.")]);
semphon("鍛", "金", "段", 8, "forge");
simp("锻", "鍛", [[0, 5], [5]], { 金: "钅" });
icon("亦", "also", `Pictograph of a person, with two dots at the armpits. Based on the original meaning "armpit", now written as 腋. The current meaning is a phonetic loan.`, "o",
    [iconComponent("大", [0, 4], "Depicts a person."), iconComponent(O, [4], "Indicates the location of the armpits.")]);
phonsem("夜", "亦", "夕", [[0, 4, 7], [4, 7]], "night");
semphon("腋", "⺼", "夜", 4, "armpit", "Originally written as 亦.");
semsem("喿", "品", "木", 9, "chirping of birds", "Depicts three mouths (品) of birds chirping atop a tree (木).");
semphon("澡", "氵", "喿", 3, "bath; shower");
semsem("災", "宀", "火", 3, "disaster; calamity", "Depicts a fire (火) burning a building (宀).");
semsem("灾", "宀", "火", 3, "disaster; calamity", "Depicts a fire (火) burning a building (宀).");
addEtymology("𢦔", "disaster; calamity", `Archaic variant of 灾. Phonosemantic compound. 才 (cái) represents the sound and 戈 (weapon) represents the meaning, alluding to a war calamity.`);
addEtymology("戴", "put on; wear", `Depicts a pair of hands (共) putting something on top of the head. The 𢦔 component represents the sound.`, [soundComponent("𢦔", [0, 3, 14]), iconComponent(O, [3, 8], "Depicts something put on top of the head."), iconComponent("共", [8, 14], "Depicts two hands putting something on top of the head.")], "s");
semsem("肯", "冎", "肉", 4, `Based on the origin meaning "meat (肉) attached to a bone (冎)". The current meaning is a phonetic loan. The 冎 (bone) component was later reanalyzed as 止 (foot).`);
semsem("弄", "玉", "廾", 4, "handle; play with; fix", `Depicts a pair of hands (廾) playing with a jade object (玉).`);
icon("兼", "double; twice", `Depicts a hand (又) holding two stalks of grain (禾).`, "s", [iconComponent("禾", [0, 1, 2, 3, 6, 7, 8, 9]), iconComponent("禾", [1, 3, 7, 8, 9]), iconComponent("又", [3, 6])]);
phonsem("歉", "兼", "欠", 10, "apologize; regret");
icon("卑", "low; base", "Pictograph of a hand holding the base of an object.", "s");
semphon("啤", "口", "卑", 3, "beer", "", true);
phonsem("列", "歹", "刂", 4, "arrange; line up; series", "", true);
semphon("裙", "衤", "君", 5, "skirt");
semphon("置", "网", "直", 5, "install; place; put");
semphon("團", "囗", "專", [[0, 2, 13], [2, 13]], "ball; circle; group");
simp("团", "團", [[0, 2, 5], [2, 5]], {}, { 專: "才" });
addEtymology("秀", "elegant; refined; bloom", `Based on the original meaning "to blossom/bloom". The 禾 (plant) component depicts a blossoming plant. The purpose of the bottom 乃 component is unclear.`,
    [meaningComponent("禾", [0, 5]), unknownComponent("乃", [5])]);
icon("凶", "vicious; ominous", "Pictograph of a trap in the ground.");
semsem("兇", "凶", "卩", 4, "terrible; fierce", "Depicts a vicious (凶) person (卩).");
addEtymology("傻", "stupid; foolish", "Origin unclear. Possibly a combination of 亻 (person) 囟 (head) 八 (separate) and 夂 (foot).", [
    meaningComponent("亻", [0, 2]), meaningComponent("囟", [2, 8]), meaningComponent("八", [8, 10]), meaningComponent("夂", [10])]);
semphon("境", "土", "竟", 3, "boundary; region; place");
semsem("夗", "夕", "卩", 3, "turn over when asleep", "Depicts a person (卩) turning around at night (夕) in their sleep.");
semphon("宛", "宀", "夗", 3, "crooked; winding");
semphon("碗", "石", "宛", 5, "bowl; cup");
icon("克", "be able to; overcome; subdue", "Pictograph of a person (人) carrying a heavy weight on their back.", "s", [iconComponent(O, [0, 5], "Depicts a heavy load being carried on the back."), iconComponent("人", [5])]);
addEtymology("屋", "house; room", `Origin unclear. 尸 might be used here because it looks similar to 户 (door). 至 might be used here because it is a component in 室 (room).`,
    [unknownComponent("尸", [0, 3], "Possibly used here since it is similar to 户 (door)."), unknownComponent("至", [3], "Possibly used here as a remnant of 室 (room).")]);
semphon("握", "扌", "屋", 3, "hold; grasp");
addEtymology("擊", "hit; strike", "Depicts a hand (手) hitting something with a spear (殳).", [unknownComponent(O, [0, 9], `Possibly depicts a part of a chariot (車) being attacked.`), iconComponent("殳", [9, 13]), iconComponent("手", [13])]);
simp("击", "擊", [[0], [0, 0], [0, 0]]);
addEtymology("散", "scatter; break apart", "Depicts hitting (攵) bamboo (竹) to break it apart. The purpose of the 月 component is unclear.", [meaningComponent("竹", [0, 4]), unknownComponent("月", [4, 8]), meaningComponent("攵", [8])]);
semsem("絲", "糹", "糸", 6, "silk; thread; shred", "Duplication of 糸 (silk).");
simp("丝", "絲", [[0, 2, 4], [2]], { 糸: "纟", "糹": "纟" });
addEtymology("幽", "remote; secluded", "Phonosemantic compound. 山 (mountain) represents the meaning and 幺 represents the sound.",
    [meaningComponent("山", [0, 1, 7]), soundComponent("幺", [1, 4]), soundComponent("幺", [4, 7])]);
addEtymology("繼", "continue", "Depicts a continuous series of silk (糸) threads (絲).", [meaningComponent("糹", [0, 6]), meaningComponent("丝", [6, 13]), meaningComponent("丝", [13])]);
addEtymology("继", "continue", simplified("繼") + " Depicts a continuous series of silk (糸) threads (絲).", [meaningComponent("纟", [0, 3]), simplifiedComponent("米", [3], "Shorthand for the right side of the traditional character 繼.")]);
phonsem("尃", "甫", "寸", 7, "state; announce");
semphon("博", "十", "尃", 2, "extensive; ample");
semsem("突", "穴", "犬", 5, "sudden; dash; run out", "Depicts a dog (犬) running out of a cave (穴).");
phonsem("形", "井", "彡", 4, "appearance; form; shape");
icon("禺", "region; legendary monkey", "Remnant of 禹, a legendary leader named Yu.");
phonsem("遇", "禺", "辶", 9, "meet; encounter");
semphon("匍", "勹", "甫", 2, "crawl; lie prostrate");
semphon("葡", "艹", "匍", 3, "grape; Portugal");
phonsem("匋", "勹", "缶", 2, "pottery", "", false, true);
semphon("萄", "艹", "匋", 3, "grape");
semsem("族", "㫃", "矢", 6, "race; nationality; clan", "Depicts a flag (㫃) representing a clan and an arrow (矢) representing their military power.");
phonsem("獎", "將", "犬", 11, "prize; encouragement");
simp("奖", "獎", [[6], [0, 6]], { 將: "将" }, { 犬: "大" });
icon("宜", "proper; suitable", `Originally a pictograph of two pieces of meat (肉) on a table. Based on the original meaning "delicacy" or "fine food". The meaning later shifted to "proper".`, "bs",
    [iconComponent(O, [0, 3, 7], "Depicts a table."), iconComponent("⺼", [3, 7])]);

// 1310	獲: huò 蒦 huò	犭 dog
semphon("獲", "犭", "蒦", 3, `to get, to obtain, to receive, to sieze`);
// 1311	穫: huò 蒦 huò	禾 cereal, grain, rice; plant, stalk
semphon("穫", "禾", "蒦", 5, `reap, harvest`);
addEtymology("获", "catch; obtain; reap; harvest", simplified("獲") + " Phonosemantic compound. 犭 represents the meaning and 蒦 represents the sound.", [meaningComponent("犭", [3, 6]), simplifiedComponent("蒦", [0, 3, 6])]);
icon("閉", "close; shut", "Depicts a door closed shut with horizontal bars.", "s", [iconComponent("門", [0, 8]), iconComponent(O, [8], "Depicts horizontal bars used to keep the door shut.")]);
simp("闭", "閉", [[0, 3], [3]], { 門: "门" });
semsem("季", "禾", "子", 5, "season; youngest brother", `Based on the original meaning "young". 禾 represents short stalks of grain, 子 represents a young child.`);
icon("互", "mutual", "Depicts two symmetric figures facing each other.", "s");
phonsem("改", "己", "攵", 3, "change; alter", "", true);
icon("爯", "pick up; raise", "Depicts a hand grabbing a fish.", "bs", [iconComponent("爪", [0, 4]), iconComponent("鱼", [4])]);
semphon("稱", "禾", "爯", 5);
simp("称", "稱", [[0, 5], [5]], {}, { "爯": "尔" });
addEtymology("章", "chapter; section", "Origin unclear.", [unknownComponent("立", [0, 5]), unknownComponent("早", [5])]);
semphon("況", "氵", "兄", 3, "situation");
simp("况", "況", [[0, 2], [2]], {}, { "氵": "冫" });
icon("傘", "umbrella", "Pictograph of an umbrella.");
simp("伞", "傘");
addEtymology("雖", "although", "This character originally was used to describe some sort of lizard-like animal. The current meaning is a phonetic loan.", [iconComponent("口", [0, 3]), iconComponent("虫", [3, 9]), soundComponent("隹", [9])]);
simp("虽", "雖", [[0, 3], [3, 9], [9, 9]]);
phonsem("番", "釆", "田", 7, "foreign; [measure word]", "Original meaning unclear.");
phonsem("翻", "番", "羽", 12, "turn over; flip through; climb over; translate");
icon("毋", "not have; don't", "Originally written and pronounced the same as 母 (mother). Later it was slightly altered so the two characters could be distinguished.");
addEtymology("毐", "pervert; immoral; wicked person", "Refers to someone who is not (毋) a gentleman (士). Name of an infamous person in Chinese history named Lao Ai (嫪毐).");
semsem("毒", "屮", "毐", [[0, 1, 2, 3], [1, 2, 3]], "poison", "Depicts a plant (屮) that is wicked (毐), i.e. a poisonous plant.");
addEtymology("奮", "exert oneself", "Origin unclear.", [unknownComponent("大", [0, 3]), unknownComponent("隹", [3, 11]), unknownComponent("田", [11])]);
simp("奋", "奮", [[0, 3], [3, 3], [3]]);
phonsem("刑", "井", "刂", 4, "punishment; penalty");
phonsem("型", "刑", "土", 6, "mold; type; style");
addEtymology("祝", "express good wishes", "Depicts a kneeling person (卩) opening their mouth (口) to offer good wishes. The 礻 component is often used in abstract/spiritual characters.",
    [meaningComponent("礻", [0, 4]), iconComponent("口", [4, 7], "Depicts a mouth offering good wishes."), iconComponent("卩", [7], "Depicts a kneeling person opening their mouth.")]);
addEtymology("𣦼", "damage; penetrate", `歹 (bone remnants) + 又 (hand)`);
phonsem("餐", "𣦼", "食", 7, "meal");
semphon("庭", "广", "廷", 3, "main hall; courtyard");
semphon("播", "扌", "番", 3, "sow; spread", "", true);
semsem("套", "大", "镸", 3, "cover; encase", "A cover has to be big (大) and long (镸) enough to wrap around what it is covering.");
semphon("鉛", "金", "公", 8, "lead (metal)", "", true);
simp("铅", "鉛", [[0, 5], [5]], { 金: "钅" });
semsem("鬧", "鬥", "市", 10, "noisy", "Markets (市) and fights (鬥) are noisy.");
simp("闹", "鬧", [[0, 3], [3]], {}, { 鬥: "门" });
semphon("針", "金", "十", 8, "needle; injection", "", true);
simp("针", "針", [[0, 5], [5]], { 金: "钅" });
addEtymology("委", "entrust; send", "Origin unclear.", [unknownComponent("禾", [0, 5]), unknownComponent("女", [5])]);
semphon("矮", "矢", "委", 5, "low; short");
icon("危", "danger", "Depicts a person (人) standing precariously on the edge of a mountain cliff (山).", "s", [iconComponent("人", [0, 2]), iconComponent("山", [2], "Also see 厂 (cliff).")]);
addEtymology("焦", "burnt; scorched", "Combination of 隹 (bird) and 灬 (fire). The purpose of the 隹 component is unclear.", [unknownComponent("隹", [0, 8]), meaningComponent("灬", [8])]);
semphon("蕉", "艹", "焦", 3, "banana");
semsem("守", "宀", "寸", 3, "guard; defent", "Depicts a hand (寸) guarding a building (宀).");
semphon("厲", "厂", "萬", 2, "strict; severe", "", true);
simp("厉", "厲", [[0, 2], [2]], { "萬": "万" });
phonsem("勵", "厲", "力", 15, "encourage; urge", "力 also serves as a sound component.", false);
simp("励", "勵", [[5], [0, 5]], { "厲": "厉" });
icon("競", "compete", "Pictograph of two people side-by-side competing with each other.", "bs");
simp("竞", "競");
icon("引", "draw; pull; attract", "Pictograph of a bowstring being pulled back.", "", [iconComponent("弓", [0, 3]), iconComponent("丨", [3], "Depicts a bowstring being pulled back.")]);
phonsem("康", "庚", "米", [[0, 7], [6]], "healthy", "", false, false, "s");
semsem("甜", "舌", "甘", 6, "sweet", "Depicts the tongue (舌) tasting something sweet (甘).");
addEtymology("曹", "class; generation", `Depicts a pair of baskets (東). Based on the original meaning "pair". Later the meaning shifted to "of the same generation". The purpose of the additional 口 (mouth) component is unclear.`,
    [meaningComponent("東", [0, 7], "The character 東 was originally a pictograph of a basket. This component is a pair of 東 merged together."), unknownComponent("口", [7])], "b");
semphon("糟", "米", "曹", 6, "coarse food; dregs; rotten");
icon("衛", "guard; defend", "Depicts feet (止) walking around, patrolling a street intersection (行).", "obs", [iconComponent("行", [0, 3, 12], "Depicts a street intersection."), iconComponent("止", [3, 6], "Depicts a foot patrolling a street intersection."), iconComponent("口", [6, 9], "Depicts the center of a street intersection."), iconComponent("止", [9, 12], "Depicts a foot patrolling a street intersection.")]);
addEtymology("卫", "guard; defend", "Simplified from the cursive form of the traditional character 衛. Depicts feet (止) walking around, patrolling a street intersection (行).", [], "衛:obstc");
addEtymology("敫", "ancient musical instrument", "Origin unclear.", [unknownComponent("白", [0, 5]), unknownComponent("放", [5])]);
semphon("激", "氵", "敫", 3, "arouse; excite");
semsem("負", "人", "貝", 2, "bear; carry", "Depicts a person (人) carrying money (貝) on his back.");
simp("负", "負", [[0, 2], [2]], { "貝": "贝" });
phonsem("責", "朿", "貝", 4, "duty; responsibility");
simp("责", "責", [[0, 4], [4]]);
semsem("則", "鼎", "刂", 7, "principle; norm; [contrastive conjunction]", "Depicts carving inscriptions on bronzeware (鼎) with a knife (刂). Based on the original meaning \"law\". In ancient China, some legal writings were inscribed on bronzeware.", "b");
simp("则", "則", [[0, 4], [4]]);
semphon("測", "氵", "則", 3, "survey; measure");
simp("测", "測", [[0, 3], [3]], { 則: "则" });
semsem("囚", "囗", "人", [[0, 2, 4], [2, 4]], "prisoner", "Depicts a person (人) trapped inside an enclosure (囗).");
addEtymology("𥁕", "kind; benevolent", "Depicts feeding a prisoner (囚) with a dish (皿).");
semphon("溫", "氵", "𥁕", 3, "warm");
simp("温", "溫");

// 强价典拾售层购释乘宽 17
// 科疑追滚甚梦叶矩养误 16
// 宝暖爆炸弃饿坚营夏曾 15
// 劳泪升脏斯朝厚犯曲 14 
// 琴爷币俩聚锁叔施素类 13
// 拜塑挥弱供废款圈降卷 12
// 灭猴困局巨阅索概席帝 11
// 闪赞胸戒庆派贺社泼唯 10
// 异折替赢插撒丢聘权既 9
// 剩熟稍绩罪承瘦念威胁 8
// 尊姨岸奥俄载宫宋荣姑 7

// top 1000 difficulty levels done

// 增企委构敌陈苏率兰若 6
// 初雷洲范州沉皇抗税阵 5
// 岛欧临湾县毫移智遗鲁 4
// 均藏端港妇谓督泽诺伦 3

// top 1000 characters in books done

// 噢私呃呆毁蠢暴狱誓瞧 2
// 劲烂杰迪艾瑞蒂萨凯纽 1

// top 1000 characters in movies done

for (let direction in radicals) {
    for (let char in radicals[direction]) {
        icon(char, etymologies[radicals[direction][char]].definition, radicalNote(char));
    }
}

// 66	傢: jiā 家 jiā	亻 man, person; people
semphon("傢", "亻", "家", 2, `stubborn, obstinate, intransigent`);
// 76	瞭: liǎo 尞 liào	目 eye; to look, to see; division, topic
semphon("瞭", "目", "尞", 5, `bright; clear-sighted; to understand`);
// 197	祇: qí 氏 shì	礻 spirit
semphon("祇", "礻", "氏", 4, `only, just, simply; one of a pair; an earth god`);
// 198	衹: zhǐ 氏 shì	衤 cloth
semphon("衹", "衤", "氏", 5, `only, merely, just`);
// 215	仝: tóng 工 gōng	人 man, person; people
semphon("仝", "人", "工", 2, `together, same; surname`);
// 227	冣: jù 取 qǔ	冖 cover
semphon("冣", "冖", "取", 2, `to assemble, to collect, to meet`);
// 310	彆: biè 敝 bì	弓 bow; curved, arched
phonsem("彆", "敝", "弓", 11, `awkward`);
// 313	噹: dāng 當 dāng	口 mouth; entrance, gate, opening
semphon("噹", "口", "當", 3, `appropriate, timely; to act, to serve; the sound of bells`);
// 355	鍾: zhōng 重 zhòng	釒 gold, metal; money
semphon("鍾", "釒", "重", 8, `cup, glass, goblet; surname`);
// 431	惯: guàn 贯 guàn	忄 heart; mind; soul
semphon("惯", "忄", "贯", 3, `habit, custom; habitual, usual`, simplified("慣"));
// 432	慣: guàn 貫 guàn	忄 heart; mind; soul
semphon("慣", "忄", "貫", 3, `habit, custom; habitual, usual`);
// 438	盃: bēi 不 bù	皿 dish, vessel; shallow container
phonsem("盃", "不", "皿", 4, `glass, cup`);
// 458	餵: wèi 畏 wèi	飠 food; to eat
semphon("餵", "飠", "畏", 8, `to feed, to raise`);
// 605	遊: yóu 斿 yóu	辶 to walk; walking
semphon("遊", "辶", "斿", 9, `to wander, to travel, to roam`);
// 644	炤: zhào 召 zhào	火 fire, flame; to burn; anger, rage
semphon("炤", "火", "召", 4, `to illuminate, to light up; to reflect`);
// 655	韆: qiān 遷 qiān	革 leather, animal hide; to reform; to remove
semphon("韆", "革", "遷", 9, `thousand, many, numerous; swing, seesaw`);
// 660	筦: guǎn 完 wán	⺮ bamboo; flute
semphon("筦", "⺮", "完", 6, `key; pipe; to be in charge`);
// 681	閤: gé 合 hé	門 gate, door, entrance, opening
semphon("閤", "門", "合", 8, `chamber; shelf; side-door`);
// 767	忘: wàng 亡 wáng	心 heart; mind; soul
phonsem("忘", "亡", "心", 3, `to forget, to miss, to neglect, to overlook`);
// 775	极: jí 及 jí	木 tree; wood, lumber; wooden
semphon("极", "木", "及", 4, `extreme, top; final, furthest, utmost; pole`, simplified("極"));
// 777	课: kè 果 guǒ	讠 words, speech; to speak, to say
semphon("课", "讠", "果", 2, `subject, lesson, course; classwork`, simplified("課"));
// 778	課: kè 果 guǒ	言 words, speech; to speak, to say
semphon("課", "言", "果", 7, `subject, lesson, course; classwork`);
// 787	精: jīng 青 qīng	米 rice, millet, grain
semphon("精", "米", "青", 6, `essence, germ, spirit`);
// 788	神: shén 申 shēn	礻 spirit
semphon("神", "礻", "申", 4, `god, spirit; divine, mysterious, supernatural`);
// 791	收: shōu 丩 jiū	攵 to rap, to tap; script; to let go
phonsem("收", "丩", "攵", 2, `to collect, to gather, to harvest`);
// 795	演: yǎn 寅 yín	氵 water
semphon("演", "氵", "寅", 3, `to perform, to act, to put on a play`);
// 802	掉: diào 卓 zhuō	扌 hand
semphon("掉", "扌", "卓", 3, `to drop, to fall, to remove`);
// 805	咖: kā 加 jiā	口 mouth; entrance, gate, opening
semphon("咖", "口", "加", 3, `coffee; used in transliterations`);
// 806	啡: fēi 非 fēi	口 mouth; entrance, gate, opening
semphon("啡", "口", "非", 3, `coffee; morphine`);
// 808	刻: kè 亥 hài	刂 knife
phonsem("刻", "亥", "刂", 6, `to carve, to engrave; a quarter hour; a moment`);
// 809	趣: qù 取 qǔ	走 to walk, to run, to flee
semphon("趣", "走", "取", 7, `interest; interesting; what attracts one's attention`);
// 818	控: kòng 空 kōng	扌 hand
semphon("控", "扌", "空", 3, `to accuse, to charge; to control; to sue`);
// 822	绍: shào 召 zhào	纟 silk; thread
semphon("绍", "纟", "召", 3, `to connect; to introduce`, simplified("紹"));
// 823	紹: shào 召 zhào	糹 silk; thread
semphon("紹", "糹", "召", 6, `to connect; to introduce`);
// 831	超: chāo 召 zhào	走 to walk, to run, to flee
semphon("超", "走", "召", 7, `to jump over, to leap over; to overtake, to surpass`);
// 832	级: jí 及 jí	纟 silk; thread
semphon("级", "纟", "及", 3, `level, rank; class, grade`, simplified("級"));
// 833	級: jí 及 jí	糹 silk; thread
semphon("級", "糹", "及", 6, `level, rank; class, grade`);
// 838	越: yuè 戉 yuè	走 to walk, to run, to flee
semphon("越", "走", "戉", 7, `to exceed, to surpass, to transcend`);
// 841	脸: liǎn 佥 qiān	⺼ meat, flesh; organic compound
semphon("脸", "⺼", "佥", 4, `face, cheek; reputation`, simplified("臉"));
// 842	臉: liǎn 僉 qiān	⺼ meat, flesh; organic compound
semphon("臉", "⺼", "僉", 4, `face, cheek; reputation`);
// 845	拉: lā 立 lì	扌 hand
semphon("拉", "扌", "立", 3, `to pull, to drag; to seize, to hold; to lengthen; to play (a violin)`);
// 852	儘: jǐn 盡 jǐn	亻 man, person; people
semphon("儘", "亻", "盡", 2, `to exhaust, to use up, to deplete`);
// 859	姓: xìng 生 shēng	女 woman, girl; female
semphon("姓", "女", "生", 3, `name, family name, surname; clan, people`);
// 860	绝: jué 色 sè	纟 silk; thread
semphon("绝", "纟", "色", 3, `to cut, to sever; to break off, to terminate`, simplified("絕"));
// 866	续: xù 卖 mài	纟 silk; thread
semphon("续", "纟", "卖", 3, `continuous, serial`, simplified("續"));
// 867	續: xù 賣 mài	糹 silk; thread
semphon("續", "糹", "賣", 6, `continuous, serial`);
// 868	颜: yán 彦 yàn	页 page, sheet, leaf
phonsem("颜", "彦", "页", 9, `face, facial appearance`, simplified("顏"));
// 869	顏: yán 彥 yàn	頁 page, sheet, leaf
phonsem("顏", "彥", "頁", 9, `face, facial appearance`);
// 881	急: jí 刍 chú	心 heart; mind; soul
phonsem("急", "刍", "心", 5, `anxious, worried; hasty, quick; pressing, urgent`);
// 885	却: què 去 qù	卩 seal; kneeling person
phonsem("却", "去", "卩", 5, `still, but; decline; retreat`, simplified("卻"));
// 886	卻: què 谷 gǔ	卩 seal; kneeling person
phonsem("卻", "谷", "卩", 7, `still, but; decline; retreat`);
// 890	阻: zǔ 且 qiě	阝 place, town, city
semphon("阻", "阝", "且", 2, `to hinder, to impede; to obstruct, to oppose`);
// 893	踢: tī 易 yì	足 foot; to attain, to satisfy; enough
semphon("踢", "足", "易", 7, `to kick`);
// 896	居: jū 古 gǔ	户 door; family
semphon("居", "户", "古", 3, `to live, to reside; to dwell; to sit`);
// 901	量: liàng 旦 dàn	里 unit of distance equal to 0.5km; village; lane
phonsem("量", "旦", "里", 5, `measure, volume; amount, quantity`);
// 914	楼: lóu 娄 lóu	木 tree; wood, lumber; wooden
semphon("楼", "木", "娄", 4, `multi-story building; floor`, simplified("樓"));
// 915	樓: lóu 婁 lóu	木 tree; wood, lumber; wooden
semphon("樓", "木", "婁", 4, `multi-story building; floor`);
// 918	检: jiǎn 佥 qiān	木 tree; wood, lumber; wooden
semphon("检", "木", "佥", 4, `to check, to examine, to inspect`, simplified("檢"));
// 919	檢: jiǎn 僉 qiān	木 tree; wood, lumber; wooden
semphon("檢", "木", "僉", 4, `to check, to examine, to inspect`);
// 923	闻: wén 门 mén	耳 ear; to hear, to hear of; handle
phonsem("闻", "门", "耳", 3, `news; to hear, to smell; to make known`, simplified("聞"));
// 924	聞: wén 門 mén	耳 ear; to hear, to hear of; handle
phonsem("聞", "門", "耳", 8, `news; to hear, to smell; to make known`);
// 925	格: gé 各 gè	木 tree; wood, lumber; wooden
semphon("格", "木", "各", 4, `form, pattern, standard`);
// 927	板: bǎn 反 fǎn	木 tree; wood, lumber; wooden
semphon("板", "木", "反", 4, `board, plank; plate, slab; unnatural, stiff`, simplified("闆"));
// 929	泳: yǒng 永 yǒng	氵 water
semphon("泳", "氵", "永", 3, `to swim, to dive`);
// 936	传: chuán 专 zhuān	亻 man, person; people
semphon("传", "亻", "专", 2, `to pass on; to propagate; to transmit; summons`, simplified("傳"));
// 937	傳: chuán 專 zhuān	亻 man, person; people
semphon("傳", "亻", "專", 2, `to pass on; to propagate; to transmit; summons`);
// 946	否: fǒu 口 kǒu	不 no, not, un-; negative prefix
semphon("否", "不", "口", 4, `no, not, un-; final particle`);
// 947	伙: huǒ 火 huǒ	亻 man, person; people
semphon("伙", "亻", "火", 2, `companion, colleague; utensils`, simplified("夥"));
// 948	夥: huǒ 果 guǒ	多 much, many, multi-; more than, over
phonsem("夥", "果", "多", 8, `assistant; companion; partner; many, numerous`);
// 949	篮: lán 监 jiān	⺮ bamboo; flute
semphon("篮", "⺮", "监", 6, `basket; goal`, simplified("籃"));
// 950	籃: lán 監 jiān	⺮ bamboo; flute
semphon("籃", "⺮", "監", 6, `basket; goal`);
// 969	词: cí 司 sī	讠 words, speech; to speak, to say
semphon("词", "讠", "司", 2, `phrase, expression; words, speech`, simplified("詞"));
// 970	詞: cí 司 sī	言 words, speech; to speak, to say
semphon("詞", "言", "司", 7, `phrase, expression; words, speech`);
// 972	秘: mì 必 bì	禾 cereal, grain, rice; plant, stalk
semphon("秘", "禾", "必", 5, `secret, mysterious, abstruse`, simplified("祕"));
// 973	祕: mì 必 bì	礻 spirit
semphon("祕", "礻", "必", 4, `secret, mysterious, abstruse`);
// 975	浪: làng 良 liáng	氵 water
semphon("浪", "氵", "良", 3, `breaker, wave; reckless, wasteful`);
// 976	费: fèi 弗 fú	贝 sea shell; money, currency
phonsem("费", "弗", "贝", 5, `expenses, fees; to cost, to spend; wasteful`, simplified("費"));
// 977	費: fèi 弗 fú	貝 sea shell; money, currency
phonsem("費", "弗", "貝", 5, `expenses, fees; to cost, to spend; wasteful`);
// 982	案: àn 安 ān	木 tree; wood, lumber; wooden
phonsem("案", "安", "木", 6, `file, legal case; bench, table`);
// 983	海: hǎi 每 měi	氵 water
semphon("海", "氵", "每", 3, `sea, ocean; maritime`);
// 985	险: xiǎn 佥 qiān	阝 place, town, city
semphon("险", "阝", "佥", 2, `narrow pass, strategic point`, simplified("險"));
// 986	險: xiǎn 僉 qiān	阝 place, town, city
semphon("險", "阝", "僉", 2, `narrow pass, strategic point`);
// 988	训: xùn 川 chuān	讠 words, speech; to speak, to say
semphon("训", "讠", "川", 2, `to teach, to instruct; pattern, example; exegesis`, simplified("訓"));
// 989	訓: xùn 川 chuān	言 words, speech; to speak, to say
semphon("訓", "言", "川", 7, `to teach, to instruct; pattern, example; exegesis`);
// 990	练: liàn 柬 jiǎn	纟 silk; thread
semphon("练", "纟", "柬", 3, `to drill, to exercise; to practice, to train`, simplified("練"));
// 991	練: liàn 柬 jiǎn	糹 silk; thread
semphon("練", "糹", "柬", 6, `to drill, to exercise; to practice, to train`);
// 992	造: zào 告 gào	辶 to walk; walking
semphon("造", "辶", "告", 7, `to build, to construct, to invent, to manufacture`);
// 996	味: wèi 未 wèi	口 mouth; entrance, gate, opening
semphon("味", "口", "未", 3, `taste; smell, odor; delicacy`);
// 998	程: chéng 呈 chéng	禾 cereal, grain, rice; plant, stalk
semphon("程", "禾", "呈", 5, `process, rules; journey, trip; agenda, schedule`);
// 1000	较: jiào 交 jiāo	车 cart, vehicle; to move in a cart
semphon("较", "车", "交", 4, `to compare; relatively; more`, simplified("較"));
// 1001	較: jiào 交 jiāo	車 cart, vehicle; to move in a cart
semphon("較", "車", "交", 7, `to compare; relatively; more`);
// 1004	烦: fán 页 yè	火 fire, flame; to burn; anger, rage
semphon("烦", "火", "页", 4, `to bother, to trouble, to vex`, simplified("煩"));
// 1005	煩: fán 頁 yè	火 fire, flame; to burn; anger, rage
semphon("煩", "火", "頁", 4, `to bother, to trouble, to vex`);
// 1008	环: huán 不 bù	王 king, ruler; royal; surname
semphon("环", "王", "不", 4, `bracelet, ring; to surround, to loop`, simplified("環"));
// 1009	環: huán 睘 qióng	王 king, ruler; royal; surname
semphon("環", "王", "睘", 4, `bracelet, ring; to surround, to loop`);
// 1011	借: jiè 昔 xī	亻 man, person; people
semphon("借", "亻", "昔", 2, `to borrow; to lend; excuse, pretext`, simplified("藉"));
// 1013	破: pò 皮 pí	石 stone, rock, mineral
semphon("破", "石", "皮", 5, `to break, to rout; to ruin, to destroy`);
// 1014	基: jī 其 qí	土 soil, earth; items made of earth
phonsem("基", "其", "土", 8, `foundation, base`);
// 1027	短: duǎn 豆 dòu	矢 arrow, dart; to vow, to swear
semphon("短", "矢", "豆", 5, `brief, short; deficient, lacking`);
// 1029	迟: chí 尺 chǐ	辶 to walk; walking
semphon("迟", "辶", "尺", 4, `tardy, slow, late; to delay`, simplified("遲"));
// 1033	惊: jīng 京 jīng	忄 heart; mind; soul
semphon("惊", "忄", "京", 3, `to frighten, to startle; surprise, alarm`, simplified("驚"));
// 1034	驚: jīng 敬 jìng	馬 horse; surname
phonsem("驚", "敬", "馬", 13, `to frighten, to startle; surprise, alarm`);
// 1035	晴: qíng 青 qīng	日 sun; day; daytime
semphon("晴", "日", "青", 4, `clear weather, fine weather`);
// 1036	朗: lǎng 良 liáng	月 moon; month
phonsem("朗", "良", "月", 6, `bright, clear, distinct`);
// 1043	排: pái 非 fēi	扌 hand
semphon("排", "扌", "非", 3, `row, rank, file; to eliminate, to remove`);
// 1044	技: jì 支 zhī	扌 hand
semphon("技", "扌", "支", 3, `ability, talent; skill, technique`);
// 1066	聪: cōng 总 zǒng	耳 ear; to hear, to hear of; handle
semphon("聪", "耳", "总", 6, `sharp (of sight and hearing); intelligent, clever, bright`, simplified("聰"));
// 1067	聰: cōng 悤 cōng	耳 ear; to hear, to hear of; handle
semphon("聰", "耳", "悤", 6, `sharp (of sight and hearing); intelligent, clever, bright`);
// 1070	箱: xiāng 相 xiāng	⺮ bamboo; flute
semphon("箱", "⺮", "相", 6, `box, case; chest, trunk`);
// 1076	烧: shāo 尧 yáo	火 fire, flame; to burn; anger, rage
semphon("烧", "火", "尧", 4, `to burn, to bake; to heat, to roast`, simplified("燒"));
// 1077	燒: shāo 堯 yáo	火 fire, flame; to burn; anger, rage
semphon("燒", "火", "堯", 4, `to burn, to bake; to heat, to roast`);
// 1082	树: shù 对 duì	木 tree; wood, lumber; wooden
semphon("树", "木", "对", 4, `tree; to plant; to set up, to establish`, simplified("樹"));
// 1083	樹: shù 尌 shù	木 tree; wood, lumber; wooden
semphon("樹", "木", "尌", 4, `tree; to plant; to set up, to establish`);
// 1092	值: zhí 直 zhí	亻 man, person; people
semphon("值", "亻", "直", 2, `price, value, worth`);
// 1093	战: zhàn 占 zhàn	戈 spear, lance, halberd
phonsem("战", "占", "戈", 5, `war, fighting, battle`, simplified("戰"));
// 1094	戰: zhàn 單 dān	戈 spear, lance, halberd
phonsem("戰", "單", "戈", 12, `war, fighting, battle`);
// 1099	醒: xǐng 星 xīng	酉 wine; wine vessel; chemical
semphon("醒", "酉", "星", 7, `to wake up, to startle; to sober up`);
// 1100	组: zǔ 且 qiě	纟 silk; thread
semphon("组", "纟", "且", 3, `to form, to assemble; section, department`, simplified("組"));
// 1101	組: zǔ 且 qiě	糹 silk; thread
semphon("組", "糹", "且", 6, `to form, to assemble; section, department`);
// 1102	织: zhī 只 zhī	纟 silk; thread
semphon("织", "纟", "只", 3, `to knit, to weave; to organize, to unite`, simplified("織"));
// 1103	織: zhī 戠 zhī	糹 silk; thread
semphon("織", "糹", "戠", 6, `to knit, to weave; to organize, to unite`);
// 1118	灯: dēng 丁 dīng	火 fire, flame; to burn; anger, rage
semphon("灯", "火", "丁", 4, `lamp, lantern, light`, simplified("燈"));
// 1119	燈: dēng 登 dēng	火 fire, flame; to burn; anger, rage
semphon("燈", "火", "登", 4, `lamp, lantern, light`);
// 1125	釋: shì 睪 yì	釆 to distinguish; to pick, to gather, to collect
semphon("釋", "釆", "睪", 7, `to explain, to interpret; to release`);
// 1126	资: zī 次 cì	贝 sea shell; money, currency
phonsem("资", "次", "贝", 6, `wealth, property, capital`, simplified("資"));
// 1127	資: zī 次 cì	貝 sea shell; money, currency
phonsem("資", "次", "貝", 6, `wealth, property, capital`);
// 1131	怀: huái 不 bù	忄 heart; mind; soul
semphon("怀", "忄", "不", 3, `bosom, breast; to carry in one's bosom`, simplified("懷"));
// 1132	懷: huái 褱 huái	忄 heart; mind; soul
semphon("懷", "忄", "褱", 3, `bosom, breast; to carry in one's bosom`);
// 1136	银: yín 艮 gěn	钅 gold, metal; money
semphon("银", "钅", "艮", 5, `silver; cash, money, wealth`, simplified("銀"));
// 1137	銀: yín 艮 gěn	釒 gold, metal; money
semphon("銀", "釒", "艮", 8, `silver; cash, money, wealth`);
// 1140	吸: xī 及 jí	口 mouth; entrance, gate, opening
semphon("吸", "口", "及", 3, `to inhale, to suck in; to absorb; to attract`);
// 1141	搞: gǎo 高 gāo	扌 hand
semphon("搞", "扌", "高", 3, `to do, to fix, to make, to settle`);
// 1150	铁: tiě 失 shī	钅 gold, metal; money
semphon("铁", "钅", "失", 5, `iron; strong, solid, firm`, simplified("鐵"));
// 1152	适: shì 舌 shé	辶 to walk; walking
semphon("适", "辶", "舌", 6, `match, comfortable; just`, simplified("適"));
// 1154	舒: shū 予 yǔ	舍 house, dwelling; to reside, to dwell; to abandon, to give up
semphon("舒", "舍", "予", 8, `relaxed, comfortable; to unfold, to stretch out`);
// 1155	松: sōng 公 gōng	木 tree; wood, lumber; wooden
semphon("松", "木", "公", 4, `pine tree; fir tree`, simplified("鬆"));
// 1157	际: jì 示 shì	阝 place, town, city
semphon("际", "阝", "示", 2, `border, boundary, juncture`, simplified("際"));
// 1158	際: jì 祭 jì	阝 place, town, city
semphon("際", "阝", "祭", 2, `border, boundary, juncture`);
// 1161	河: hé 可 kě	氵 water
semphon("河", "氵", "可", 3, `river, stream; the Yellow river`);
// 1165	鞋: xié 圭 guī	革 leather, animal hide; to reform; to remove
semphon("鞋", "革", "圭", 9, `shoes, footwear in general`, simplified("鞵"));
// 1168	脱: tuō 兑 duì	⺼ meat, flesh; organic compound
semphon("脱", "⺼", "兑", 4, `to take off, to shed; to escape from`, simplified("脫"));
// 1169	脫: tuō 兌 duì	⺼ meat, flesh; organic compound
semphon("脫", "⺼", "兌", 4, `to take off, to shed; to escape from`);
// 1170	鲜: xiān 羊 yáng	鱼 fish
semphon("鲜", "鱼", "羊", 8, `fresh; delicious; attractive`, simplified("鮮"));
// 1171	鮮: xiān 羊 yáng	魚 fish
semphon("鮮", "魚", "羊", 11, `fresh; delicious; attractive`);
// 1175	净: jìng 争 zhēng	冫 ice
semphon("净", "冫", "争", 2, `clean, pure; to cleanse`, simplified("淨"));
// 1176	淨: jìng 爭 zhēng	氵 water
semphon("淨", "氵", "爭", 3, `clean, pure, unspoiled`);
// 1177	凈: jìng 爭 zhēng	冫 ice
semphon("凈", "冫", "爭", 2, `clean, pure; to cleanse`);
// 1180	规: guī 夫 fū	见 to see, to observe, to meet, to appear
phonsem("规", "夫", "见", 4, `rules, regulations, customs, law`, simplified("規"));
// 1181	規: guī 夫 fū	見 to see, to observe, to meet, to appear
phonsem("規", "夫", "見", 4, `rules, regulations, customs, law`);
// 1185	痛: tòng 甬 yǒng	疒 sickness, disease
semphon("痛", "疒", "甬", 5, `ache, pain; bitterness, sorrow; deeply, thoroughly`);
// 1186	苦: kǔ 古 gǔ	艹 grass, weed, plant, herb
semphon("苦", "艹", "古", 3, `bitter; hardship, suffering`);
// 1187	验: yàn 佥 qiān	马 horse; surname
semphon("验", "马", "佥", 3, `to examine, to inspect, to test, to verify`, simplified("驗"));
// 1188	驗: yàn 僉 qiān	馬 horse; surname
semphon("驗", "馬", "僉", 10, `to examine, to inspect, to test, to verify`);
// 1190	攻: gōng 工 gōng	攵 to rap, to tap; script; to let go
phonsem("攻", "工", "攵", 3, `to accuse; to assault; to criticize`);
// 1193	猜: cāi 青 qīng	犭 dog
semphon("猜", "犭", "青", 3, `to guess, to conjecture, to suppose; to feel`);
// 1194	顺: shùn 川 chuān	页 page, sheet, leaf
phonsem("顺", "川", "页", 3, `to submit to, to obey, to go along with`, simplified("順"));
// 1195	順: shùn 川 chuān	頁 page, sheet, leaf
phonsem("順", "川", "頁", 3, `to submit to, to obey, to go along with`);
// 1198	致: zhì 至 zhì	攵 to rap, to tap; script; to let go
phonsem("致", "至", "攵", 6, `to send; to present, to deliver; to cause; consequence`, simplified("緻"));
// 1200	蓝: lán 监 jiān	艹 grass, weed, plant, herb
semphon("蓝", "艹", "监", 3, `blue; indigo plant; surname`, simplified("藍"));
// 1201	藍: lán 監 jiān	艹 grass, weed, plant, herb
semphon("藍", "艹", "監", 4, `blue; indigo plant; surname`);
// 1202	线: xiàn 戋 jiān	纟 silk; thread
semphon("线", "纟", "戋", 3, `line, thread, wire; clue, trail`, simplified("線"));
// 1203	線: xiàn 泉 quán	糹 silk; thread
semphon("線", "糹", "泉", 6, `line, thread, wire; clue, trail`);
// 1205	救: jiù 求 qiú	攵 to rap, to tap; script; to let go
phonsem("救", "求", "攵", 7, `aid, help; to rescue, to save`, simplified("捄"));
// 1209	预: yù 予 yǔ	页 page, sheet, leaf
phonsem("预", "予", "页", 4, `to prepare, to arrange; in advance`, simplified("預"));
// 1210	預: yù 予 yǔ	頁 page, sheet, leaf
phonsem("預", "予", "頁", 4, `to prepare, to arrange; in advance`);
// 1211	李: lǐ 子 zi	木 tree; wood, lumber; wooden
semphon("李", "木", "子", 4, `plum; luggage; surname`);
// 1212	倒: dào 到 dào	亻 man, person; people
semphon("倒", "亻", "到", 2, `to collapse, to fall over; to lie down`);
// 1213	按: àn 安 ān	扌 hand
semphon("按", "扌", "安", 3, `to check, to control, to push, to restrain`);
// 1219	显: xiǎn 业 yè	日 sun; day; daytime
semphon("显", "日", "业", 4, `clear, evident; prominent; to show`, simplified("顯"));
// 1221	推: tuī 隹 zhuī	扌 hand
semphon("推", "扌", "隹", 3, `to push; to expel; to drive; to decline`);
// 1222	疼: téng 冬 dōng	疒 sickness, disease
semphon("疼", "疒", "冬", 5, `ache, pain; to love dearly`);
// 1240	哦: ó 我 wǒ	口 mouth; entrance, gate, opening
semphon("哦", "口", "我", 3, `oh? really? is that so?`);
// 1241	状: zhuàng 丬 qiáng	犬 dog
phonsem("状", "丬", "犬", 3, `state, condition; shape, appearance, form; certificate`, simplified("狀"));
// 1242	狀: zhuàng 爿 qiáng	犬 dog
phonsem("狀", "爿", "犬", 4, `state, condition; shape, appearance, form; certificate`);
// 1243	态: tài 太 tài	心 heart; mind; soul
phonsem("态", "太", "心", 4, `manner, bearing, attitude`, simplified("態"));
// 1244	態: tài 能 néng	心 heart; mind; soul
phonsem("態", "能", "心", 10, `manner, bearing, attitude`);
// 1251	细: xì 田 tián	纟 silk; thread
semphon("细", "纟", "田", 3, `fine, detailed; slender, thin`, simplified("細"));
// 1252	細: xì 田 tián	糹 silk; thread
semphon("細", "糹", "田", 6, `fine, detailed; slender, thin`);
// 1254	油: yóu 由 yóu	氵 water
semphon("油", "氵", "由", 3, `oil, fat, grease, lard; oil paints`);
// 1257	纪: jì 己 jǐ	纟 silk; thread
semphon("纪", "纟", "己", 3, `discipline, age; period, era; record, annal`, simplified("紀"));
// 1258	紀: jì 己 jǐ	糹 silk; thread
semphon("紀", "糹", "己", 6, `discipline, age; period, era; record, annal`);
// 1261	養: yǎng 羊 yáng	食 food; to eat
phonsem("養", "羊", "食", 6, `to raise, to rear, to bring up; to support`);
// 1262	弹: dàn 单 dān	弓 bow; curved, arched
semphon("弹", "弓", "单", 3, `bullet, pellet, shell; elastic, springy`, simplified("彈"));
// 1263	彈: dàn 單 dān	弓 bow; curved, arched
semphon("彈", "弓", "單", 3, `bullet, pellet, shell; elastic, springy`);
// 1264	研: yán 开 kāi	石 stone, rock, mineral
semphon("研", "石", "开", 5, `to grind, to rub; to study, to research`);
// 1265	究: jiū 九 jiǔ	穴 cave, den, hole
semphon("究", "穴", "九", 5, `to dig into, to investigate; actually, after all`);
// 1277	绿: lǜ 录 lù	纟 silk; thread
semphon("绿", "纟", "录", 3, `green; chlorine`, simplified("綠"));
// 1278	綠: lǜ 彔 lù	糹 silk; thread
semphon("綠", "糹", "彔", 6, `green; chlorine`);
// 1280	效: xiào 交 jiāo	攵 to rap, to tap; script; to let go
phonsem("效", "交", "攵", 6, `result, effect; effective`, simplified("傚"));
// 1301	骑: qí 奇 qí	马 horse; surname
semphon("骑", "马", "奇", 3, `to ride, to mount; cavalry`, simplified("騎"));
// 1302	騎: qí 奇 qí	馬 horse; surname
semphon("騎", "馬", "奇", 10, `to ride, to mount; cavalry`);
// 1313	码: mǎ 马 mǎ	石 stone, rock, mineral
semphon("码", "石", "马", 5, `number, numeral, symbol; yard`, simplified("碼"));
// 1314	碼: mǎ 馬 mǎ	石 stone, rock, mineral
semphon("碼", "石", "馬", 5, `number, numeral, symbol; yard`);
// 1317	修: xiū 攸 yōu	彡 hair; sunlight
phonsem("修", "攸", "彡", 6, `to study; to repair; to decorate; to cultivate`, simplified("脩"));
// 1318	脩: xiū 攸 yōu	⺼ meat, flesh; organic compound
phonsem("脩", "攸", "⺼", 7, `dried meat`);
// 1319	疯: fēng 风 fēng	疒 sickness, disease
semphon("疯", "疒", "风", 5, `crazy, insane, mentally ill`, simplified("瘋"));
// 1320	瘋: fēng 風 fēng	疒 sickness, disease
semphon("瘋", "疒", "風", 5, `crazy, insane, mentally ill`);
// 1323	爬: pá 巴 bā	爪 claws, nails, talons
semphon("爬", "爪", "巴", 4, `to climb, to scramble; to crawl, to creep`);
// 1327	邮: yóu 由 yóu	阝 place, town, city
phonsem("邮", "由", "阝", 5, `mail; post office`, simplified("郵"));
// 1328	郵: yóu 垂 chuí	阝 place, town, city
phonsem("郵", "垂", "阝", 8, `mail; post office`);
// 1329	福: fú 畐 fú	礻 spirit
semphon("福", "礻", "畐", 4, `happiness, good fortune, blessings`);
// 1335	速: sù 束 shù	辶 to walk; walking
semphon("速", "辶", "束", 7, `prompt, quick, speedy`);
// 1338	嘉: jiā 加 jiā	壴 drum
semphon("嘉", "壴", "加", 9, `excellent; joyful; auspicious`);
// 1344	顿: dùn 屯 tún	页 page, sheet, leaf
phonsem("顿", "屯", "页", 4, `to pause; to bow; to arrange`, simplified("頓"));
// 1345	頓: dùn 屯 tún	頁 page, sheet, leaf
phonsem("頓", "屯", "頁", 4, `to pause; to bow; to arrange`);
// 1346	恶: è 亚 yà	心 heart; mind; soul
phonsem("恶", "亚", "心", 6, `bad, evil, wicked; to hate, to loathe; foul, nauseating`, simplified("惡"));
// 1347	惡: è 亞 yà	心 heart; mind; soul
phonsem("惡", "亞", "心", 8, `bad, evil, wicked; to hate, to loathe; foul, nauseating`);
// 1352	邻: lín 令 lìng	阝 place, town, city
phonsem("邻", "令", "阝", 5, `neighbor; neighborhood`, simplified("鄰"));
// 1355	梯: tī 弟 dì	木 tree; wood, lumber; wooden
semphon("梯", "木", "弟", 4, `ladder, steps, stairs`);
// 1358	骗: piàn 扁 biǎn	马 horse; surname
semphon("骗", "马", "扁", 3, `to cheat, to defraud, to swindle`, simplified("騙"));
// 1359	騙: piàn 扁 biǎn	馬 horse; surname
semphon("騙", "馬", "扁", 10, `to cheat, to defraud, to swindle`);
// 1361	败: bài 贝 bèi	攵 to rap, to tap; script; to let go
phonsem("败", "贝", "攵", 4, `failure; to decline, to fail, to suffer defeat`, simplified("敗"));
// 1362	敗: bài 貝 bèi	攵 to rap, to tap; script; to let go
phonsem("敗", "貝", "攵", 7, `failure; to decline, to fail, to suffer defeat`);
// 1363	悲: bēi 非 fēi	心 heart; mind; soul
phonsem("悲", "非", "心", 8, `sorrow, sadness, grief; to be sorry`);
// 1366	仍: réng 亻 rén	乃 then; really, indeed, after all
phonsem("仍", "亻", "乃", 2, `yet, still; keeping, continuing; again`);
// 1369	呀: ya 牙 yá	口 mouth; entrance, gate, opening
semphon("呀", "口", "牙", 3, `particle used to express surprise`);
// 1380	胖: pàng 半 bàn	⺼ meat, flesh; organic compound
semphon("胖", "⺼", "半", 4, `fat, plump, obese; a fat person`);
// 1387	渴: kě 曷 hé	氵 water
semphon("渴", "氵", "曷", 3, `thirsty, parched; to yearn, to pine for`);
// 1388	独: dú 虫 chóng	犭 dog
semphon("独", "犭", "虫", 3, `alone, independent, only, single, solitary`, simplified("獨"));
// 1389	獨: dú 蜀 shǔ	犭 dog
semphon("獨", "犭", "蜀", 3, `alone, independent, only, single, solitary`);
// 1397	權: quán 雚 guàn	木 tree; wood, lumber; wooden
semphon("權", "木", "雚", 4, `authority, power, right`);
// 1400	遍: biàn 扁 biǎn	辶 to walk; walking
semphon("遍", "辶", "扁", 9, `everywhere, all over, throughout`, simplified("徧"));
// 1402	扰: rǎo 尤 yóu	扌 hand
semphon("扰", "扌", "尤", 3, `to poke, to disturb, to annoy, to agitate`, simplified("擾"));
// 1406	陪: péi 咅 pǒu	阝 place, town, city
semphon("陪", "阝", "咅", 2, `to accompany, to be with, to keep company`);
// 1413	暗: àn 音 yīn	日 sun; day; daytime
semphon("暗", "日", "音", 4, `dark, gloomy; obscure; secret, covert`, simplified("晻"));
// 1416	货: huò 化 huà	贝 sea shell; money, currency
phonsem("货", "化", "贝", 4, `products, merchandise; goods, commodities`, simplified("貨"));
// 1417	貨: huò 化 huà	貝 sea shell; money, currency
phonsem("貨", "化", "貝", 4, `products, merchandise; goods, commodities`);
// 1420	设: shè 殳 shū	讠 words, speech; to speak, to say
semphon("设", "讠", "殳", 2, `to build, to design; to establish; to offer`, simplified("設"));
// 1421	設: shè 殳 shū	言 words, speech; to speak, to say
semphon("設", "言", "殳", 7, `to build, to design; to establish; to offer`);
// 1424	判: pàn 半 bàn	刂 knife
phonsem("判", "半", "刂", 5, `to judge; to discriminate; to conclude`);
// 1426	悉: xī 釆 biàn	心 heart; mind; soul
phonsem("悉", "釆", "心", 7, `to know, to learn about, to comprehend`);
// 1427	赶: gǎn 干 gàn	走 to walk, to run, to flee
semphon("赶", "走", "干", 7, `to pursue, to overtake; to hurry; to expel`, simplified("趕"));
// 1429	靠: kào 告 gào	非 not, negative, non-; to oppose
phonsem("靠", "告", "非", 7, `nearby; to depend on, to lean on, to trust`);
// 1430	聊: liáo 卯 mǎo	耳 ear; to hear, to hear of; handle
semphon("聊", "耳", "卯", 6, `somewhat, slightly, at least`);
// 1432	鞦: qiū 秋 qiū	革 leather, animal hide; to reform; to remove
semphon("鞦", "革", "秋", 9, `leather strap; to swing`);
// 1440	巧: qiǎo 丂 kǎo	工 labor, work; laborer, worker
semphon("巧", "工", "丂", 3, `skillful, ingenious, clever`);
// 1449	衬: chèn 寸 cùn	衤 cloth
semphon("衬", "衤", "寸", 5, `underwear, lining; in contrast`, simplified("襯"));
// 1450	襯: chèn 親 qīn	衤 cloth
semphon("襯", "衤", "親", 5, `underwear, lining; in contrast`);
// 1451	衫: shān 彡 shān	衤 cloth
semphon("衫", "衤", "彡", 5, `shirt, robe, jacket, gown`);
// 1462	汁: zhī 十 shí	氵 water
semphon("汁", "氵", "十", 3, `juice, liquor, fluid; sap; gravy, sauce`);
// 1465	优: yōu 尤 yóu	亻 man, person; people
semphon("优", "亻", "尤", 2, `superior; elegant`, simplified("優"));
// 1472	掌: zhǎng 尚 shàng	手 hand
phonsem("掌", "尚", "手", 8, `in charge; the palm of the hand, the sole of the foot`);
// 1477	沙: shā 少 shǎo	氵 water
semphon("沙", "氵", "少", 3, `sand, gravel, pebbles; granulated`);
// 1478	枪: qiāng 仓 cāng	木 tree; wood, lumber; wooden
semphon("枪", "木", "仓", 4, `gun, rife; lance, spear`, simplified("槍"));
// 1479	槍: qiāng 倉 cāng	木 tree; wood, lumber; wooden
semphon("槍", "木", "倉", 4, `gun, rife; lance, spear`);
// 1481	签: qiān 佥 qiān	⺮ bamboo; flute
semphon("签", "⺮", "佥", 6, `to sign, to endorse; a note, a slip of paper`, simplified("簽"));
// 1482	簽: qiān 僉 qiān	⺮ bamboo; flute
semphon("簽", "⺮", "僉", 6, `to sign, to endorse; a note, a slip of paper`);
// 1493	哈: hā 合 hé	口 mouth; entrance, gate, opening
semphon("哈", "口", "合", 3, `the sound of laughter`);
// 1497	输: shū 俞 yú	车 cart, vehicle; to move in a cart
semphon("输", "车", "俞", 4, `to carry, to haul, to transport`, simplified("輸"));
// 1498	輸: shū 俞 yú	車 cart, vehicle; to move in a cart
semphon("輸", "車", "俞", 7, `to carry, to haul, to transport`);
// 1500	领: lǐng 令 lìng	页 page, sheet, leaf
phonsem("领", "令", "页", 5, `neck, collar; lead, guide`, simplified("領"));
// 1501	領: lǐng 令 lìng	頁 page, sheet, leaf
phonsem("領", "令", "頁", 5, `neck, collar; lead, guide`);
// 1511	炼: liàn 柬 jiǎn	火 fire, flame; to burn; anger, rage
semphon("炼", "火", "柬", 4, `to smelt, to refine; to distill, to condense`, simplified("煉"));
// 1512	煉: liàn 柬 jiǎn	火 fire, flame; to burn; anger, rage
semphon("煉", "火", "柬", 4, `to smelt, to refine; to distill, to condense`);
// 1513	鍊: liàn 柬 jiǎn	釒 gold, metal; money
semphon("鍊", "釒", "柬", 8, `smelt metals, forge; refine`);
// 1516	例: lì 列 liè	亻 man, person; people
semphon("例", "亻", "列", 2, `precedent, example, case; regulation`);
// 1517	评: píng 平 píng	讠 words, speech; to speak, to say
semphon("评", "讠", "平", 2, `to appraise, to criticize, to evaluate`, simplified("評"));
// 1518	評: píng 平 píng	言 words, speech; to speak, to say
semphon("評", "言", "平", 7, `to appraise, to criticize, to evaluate`);
// 1519	狂: kuáng 王 wáng	犭 dog
semphon("狂", "犭", "王", 3, `insane, mad; violent; wild`);
// 1522	饱: bǎo 包 bāo	饣 food; to eat
semphon("饱", "饣", "包", 3, `satisfied; to eat one's fill`, simplified("飽"));
// 1523	飽: bǎo 包 bāo	飠 food; to eat
semphon("飽", "飠", "包", 8, `satisfied; to eat one's fill`);
// 1524	烟: yān 因 yīn	火 fire, flame; to burn; anger, rage
semphon("烟", "火", "因", 4, `smoke, soot; opium; tobacco, cigarettes`, simplified("煙"));
// 1527	彩: cǎi 采 cǎi	彡 hair; sunlight
phonsem("彩", "采", "彡", 8, `color, hue; prize; brilliant; variegated`);
// 1529	獎: jiǎng 將 jiāng	犬 dog
phonsem("獎", "將", "犬", 11, `prize, reward; to award`);
// 1531	刮: guā 舌 shé	刂 knife
phonsem("刮", "舌", "刂", 6, `to shave; to scrape; to blow`, simplified("颳"));
// 1535	富: fù 畐 fú	宀 roof; house
semphon("富", "宀", "畐", 3, `abundant, ample; rich, wealthy`);
// 1539	限: xiàn 艮 gěn	阝 place, town, city
semphon("限", "阝", "艮", 2, `boundary, limit, line`);
// 1542	磨: mó 麻 má	石 stone, rock, mineral
phonsem("磨", "麻", "石", 11, `millstone; to grind, to polish, to rub, to wear out`);
// 1543	扔: rēng 乃 nǎi	扌 hand
semphon("扔", "扌", "乃", 3, `to throw, to hurl, to cast away`);
// 1544	挂: guà 圭 guī	扌 hand
semphon("挂", "扌", "圭", 3, `to suspend, to put up, to hang; suspense`, simplified("掛"));
// 1547	抽: chōu 由 yóu	扌 hand
semphon("抽", "扌", "由", 3, `to draw out, to pull out; to sprout`);
// 1548	嘿: hēi 黑 hēi	口 mouth; entrance, gate, opening
semphon("嘿", "口", "黑", 3, `quiet, silent`);
// 1553	禁: jìn 林 lín	示 altar; ceremony; to show, to demonstrate
phonsem("禁", "林", "示", 8, `to restrict, to prohibit, to forbid; to endure`);
// 1554	投: tóu 殳 shū	扌 hand
semphon("投", "扌", "殳", 3, `to pitch, to throw; to bid, to invest`);
// 1555	缺: quē 夬 guài	缶 earthen crock or jar; pottery
semphon("缺", "缶", "夬", 6, `to lack, to be short; vacancy, gap, deficit`);
// 1559	怜: lián 令 lìng	忄 heart; mind; soul
semphon("怜", "忄", "令", 3, `to pity, to sympathize with`, simplified("憐"));
// 1567	诚: chéng 成 chéng	讠 words, speech; to speak, to say
semphon("诚", "讠", "成", 2, `honest, sincere, true; actually, really`, simplified("誠"));
// 1568	誠: chéng 成 chéng	言 words, speech; to speak, to say
semphon("誠", "言", "成", 7, `honest, sincere, true; actually, really`);
// 1569	维: wéi 隹 zhuī	纟 silk; thread
semphon("维", "纟", "隹", 3, `to preserve, to maintain, to hold together`, simplified("維"));
// 1570	維: wéi 隹 zhuī	糹 silk; thread
semphon("維", "糹", "隹", 6, `to preserve, to maintain, to hold together`);
// 1578	迷: mí 米 mǐ	辶 to walk; walking
semphon("迷", "辶", "米", 6, `to bewitch, to charm; a fan of; infatuated`);
// 1579	冲: chōng 中 zhōng	冫 ice
semphon("冲", "冫", "中", 2, `wash, rinse, flush; dash; soar`, simplified("衝"));
// 1581	沖: chōng 中 zhōng	氵 water
semphon("沖", "氵", "中", 3, `wash, rinse, flush; dash; soar`);
// 1583	府: fǔ 付 fù	广 broad, vast, wide; building, house
semphon("府", "广", "付", 3, `prefect; prefecture, government`);
// 1584	偷: tōu 俞 yú	亻 man, person; people
semphon("偷", "亻", "俞", 2, `to steal; burglar, thief`);
// 1587	逃: táo 兆 zhào	辶 to walk; walking
semphon("逃", "辶", "兆", 6, `to abscond, to dodge, to escape, to flee`);
// 1588	勇: yǒng 甬 yǒng	力 strength, power; capability, influence
phonsem("勇", "甬", "力", 7, `brave, courageous, fierce`);
// 1591	咱: zán 自 zì	口 mouth; entrance, gate, opening
semphon("咱", "口", "自", 3, `we, us`, simplified("偺"));
// 1594	窗: chuāng 囱 cōng	穴 cave, den, hole
semphon("窗", "穴", "囱", 5, `window`, simplified("牎"));
// 1603	碰: pèng 並 bìng	石 stone, rock, mineral
semphon("碰", "石", "並", 5, `to touch; to meet with; to collide, to bump into`, simplified("掽"));
// 1606	撞: zhuàng 童 tóng	扌 hand
semphon("撞", "扌", "童", 3, `to bump into, to collide, to hit, to knock against`);
// 1609	架: jià 加 jiā	木 tree; wood, lumber; wooden
phonsem("架", "加", "木", 5, `frame, rack, stand; to prop up`);
// 1610	孤: gū 瓜 guā	子 son, child; seed, egg; fruit; small thing
semphon("孤", "子", "瓜", 3, `orphaned; alone, lonely, solidary`);
// 1611	硬: yìng 更 gèng	石 stone, rock, mineral
semphon("硬", "石", "更", 5, `firm, hard, strong; obstinate`);
// 1615	括: kuò 舌 shé	扌 hand
semphon("括", "扌", "舌", 3, `to embrace, to enclose, to include`);
// 1623	鈆: qiān 公 gōng	釒 gold, metal; money
semphon("鈆", "釒", "公", 8, `lead (element)`);
// 1624	减: jiǎn 咸 xián	冫 ice
semphon("减", "冫", "咸", 2, `to decrease, to subtract, to diminish`, simplified("減"));
// 1625	減: jiǎn 咸 xián	氵 water
semphon("減", "氵", "咸", 3, `to decrease, to subtract, to diminish`);
// 1627	娘: niáng 良 liáng	女 woman, girl; female
semphon("娘", "女", "良", 3, `mother; young girl; woman; wife`, simplified("孃"));
// 1628	孃: niáng 襄 xiāng	女 woman, girl; female
semphon("孃", "女", "襄", 3, `troubled, oppressed; fat; mother`);
// 1634	魂: hún 云 yún	鬼 ghost; demon; sly, mischievous
phonsem("魂", "云", "鬼", 4, `soul, spirit`, simplified("䰟"));
// 1636	忆: yì 乙 yǐ	忄 heart; mind; soul
semphon("忆", "忄", "乙", 3, `to remember, to reflect upon; memory`, simplified("憶"));
// 1637	憶: yì 意 yì	忄 heart; mind; soul
semphon("憶", "忄", "意", 3, `to remember, to reflect upon; memory`);
// 1641	访: fǎng 方 fāng	讠 words, speech; to speak, to say
semphon("访", "讠", "方", 2, `to visit; to inquire, to ask`, simplified("訪"));
// 1642	訪: fǎng 方 fāng	言 words, speech; to speak, to say
semphon("訪", "言", "方", 7, `to visit; to inquire, to ask`);
// 1643	批: pī 比 bǐ	扌 hand
semphon("批", "扌", "比", 3, `comment, criticism; batch, lot; wholesale`);
// 1646	墙: qiáng 啬 sè	土 soil, earth; items made of earth
semphon("墙", "土", "啬", 3, `wall`, simplified("牆"));
// 1647	牆: qiáng 嗇 sè	爿 half of a tree trunk
semphon("牆", "爿", "嗇", 4, `wall`);
// 1648	墻: qiáng 嗇 sè	土 soil, earth; items made of earth
semphon("墻", "土", "嗇", 3, `wall`);
// 1649	吵: chǎo 少 shǎo	口 mouth; entrance, gate, opening
semphon("吵", "口", "少", 3, `to argue, to dispute; to annoy, to disturb`);
// 1651	估: gū 古 gǔ	亻 man, person; people
semphon("估", "亻", "古", 2, `merchant; to estimate, to guess, to presume`);
// 1652	材: cái 才 cái	木 tree; wood, lumber; wooden
semphon("材", "木", "才", 4, `timber; material, stuff; talent`);
// 1656	省: shěng 少 shǎo	目 eye; to look, to see; division, topic
phonsem("省", "少", "目", 4, `province; frugal; to save, to leave out`);
// 1657	键: jiàn 建 jiàn	钅 gold, metal; money
semphon("键", "钅", "建", 5, `lock, door bolt; key`, simplified("鍵"));
// 1658	鍵: jiàn 建 jiàn	釒 gold, metal; money
semphon("鍵", "釒", "建", 8, `lock, door bolt; key`);
// 1659	防: fáng 方 fāng	阝 place, town, city
semphon("防", "阝", "方", 2, `to protect, to defend, to guard against`);
// 1661	航: háng 亢 kàng	舟 boat, ship
semphon("航", "舟", "亢", 6, `vessel, craft; to sail, to navigate`);
// 1662	漫: màn 曼 màn	氵 water
semphon("漫", "氵", "曼", 3, `inundating; exaggerated`);
// 1663	序: xù 予 yǔ	广 broad, vast, wide; building, house
semphon("序", "广", "予", 3, `order, sequence, series; preface`);
// 1668	模: mó 莫 mò	木 tree; wood, lumber; wooden
semphon("模", "木", "莫", 4, `model, pattern, standard; to copy, to imitate`);
// 1669	仿: fǎng 方 fāng	亻 man, person; people
semphon("仿", "亻", "方", 2, `to imitate, to copy; fake; as if`, simplified("彷"));
// 1670	彷: fǎng 方 fāng	彳 to step with the left foot
semphon("彷", "彳", "方", 3, `similar, alike; to resemble`);
// 1675	拍: pāi 白 bái	扌 hand
semphon("拍", "扌", "白", 3, `to clap, to tap; to hit, to beat, to slap; beat, rhythm`);
// 1676	谅: liàng 京 jīng	讠 words, speech; to speak, to say
semphon("谅", "讠", "京", 2, `to excuse, to forgive; to guess, to presume`, simplified("諒"));
// 1677	諒: liàng 京 jīng	言 words, speech; to speak, to say
semphon("諒", "言", "京", 7, `to excuse, to forgive; to guess, to presume`);
// 1679	鼓: gǔ 支 zhī	壴 drum
semphon("鼓", "壴", "支", 9, `drum; to beat, to strike; to rouse`, simplified("皷"));
// 1683	瓶: píng 并 bìng	瓦 tile; pottery, earthenware
phonsem("瓶", "并", "瓦", 6, `bottle, jug, pitcher, vase`, simplified("缾"));
// 1687	憾: hàn 感 gǎn	忄 heart; mind; soul
semphon("憾", "忄", "感", 3, `regret, remorse`);
// 1690	嘛: ma 麻 má	口 mouth; entrance, gate, opening
semphon("嘛", "口", "麻", 3, `final exclamatory particle`);
// 1693	盛: shèng 成 chéng	皿 dish, vessel; shallow container
phonsem("盛", "成", "皿", 6, `abundant, flourishing; to contain; to fill`);
// 1694	软: ruǎn 欠 qiàn	车 cart, vehicle; to move in a cart
semphon("软", "车", "欠", 4, `soft, pliable, flexible; weak`, simplified("軟"));
// 1695	軟: ruǎn 欠 qiàn	車 cart, vehicle; to move in a cart
semphon("軟", "車", "欠", 7, `soft, pliable, flexible; weak`);
// 1697	笨: bèn 本 běn	⺮ bamboo; flute
semphon("笨", "⺮", "本", 6, `stupid, foolish, dull, awkward`);
// 1698	配: pèi 己 jǐ	酉 wine; wine vessel; chemical
semphon("配", "酉", "己", 7, `to blend, to mix; to fit, to match`);
// 1700	济: jì 齐 qí	氵 water
semphon("济", "氵", "齐", 3, `to aid, to help, to relieve; to ferry across`, simplified("濟"));
// 1701	濟: jì 齊 qí	氵 water
semphon("濟", "氵", "齊", 3, `to aid, to help, to relieve; to ferry across`);
// 1707	村: cūn 寸 cùn	木 tree; wood, lumber; wooden
semphon("村", "木", "寸", 4, `village, hamlet; vulgar, uncouth`, simplified("邨"));
// 1710	扮: bàn 分 fēn	扌 hand
semphon("扮", "扌", "分", 3, `costume, disguise; to dress up`);
// 1713	拥: yōng 用 yòng	扌 hand
semphon("拥", "扌", "用", 3, `to have, to hold; to embrace, to hug; to flock, to throng`, simplified("擁"));
// 1715	授: shòu 受 shòu	扌 hand
semphon("授", "扌", "受", 3, `to award, to confer, to instruct, to teach`);
// 1720	吓: xià 下 xià	口 mouth; entrance, gate, opening
semphon("吓", "口", "下", 3, `to scare, to frighten; to threaten, to intimidate`, simplified("嚇"));
// 1722	愉: yú 俞 yú	忄 heart; mind; soul
semphon("愉", "忄", "俞", 3, `pleasant, delightful; to please`);
// 1723	洋: yáng 羊 yáng	氵 water
semphon("洋", "氵", "羊", 3, `sea, ocean; western, foreign`);
// 1728	寄: jì 奇 qí	宀 roof; house
semphon("寄", "宀", "奇", 3, `to mail, to send, to transit; to deposit, to entrust; to rely on`);
// 1732	傲: ào 敖 áo	亻 man, person; people
semphon("傲", "亻", "敖", 2, `proud, haughty, overbearing`);
// 1733	积: jī 只 zhī	禾 cereal, grain, rice; plant, stalk
semphon("积", "禾", "只", 5, `to store up, to amass, to accumulate`, simplified("積"));
// 1735	饼: bǐng 并 bìng	饣 food; to eat
semphon("饼", "饣", "并", 3, `rice-cake, pastry, biscuit`, simplified("餅"));
// 1736	餅: bǐng 并 bìng	飠 food; to eat
semphon("餅", "飠", "并", 8, `rice-cake, pastry, biscuit`);
// 1740	露: lù 路 lù	雨 rain
semphon("露", "雨", "路", 8, `dew; leak; bare, exposed; to reveal, to show`);
// 1743	躺: tǎng 尚 shàng	身 body, torso; person; pregnancy
semphon("躺", "身", "尚", 7, `to recline, to lie down`);
// 1749	胡: hú 古 gǔ	⺼ meat, flesh; organic compound
phonsem("胡", "古", "⺼", 5, `recklessly, foolishly; wildly`, simplified("鬍"));
// 1752	符: fú 付 fù	⺮ bamboo; flute
semphon("符", "⺮", "付", 6, `amulet, charm; mark, tag; to correspond to`);
// 1753	屁: pì 比 bǐ	尸 body, corpse
semphon("屁", "尸", "比", 3, `to break wind, to fart; the buttocks`);
// 1754	股: gǔ 殳 shū	⺼ meat, flesh; organic compound
semphon("股", "⺼", "殳", 4, `share, portion; thighs, haunches, rump`);
// 1755	胜: shèng 生 shēng	⺼ meat, flesh; organic compound
semphon("胜", "⺼", "生", 4, `victory; to excel, to truimph`, simplified("勝"));
// 1757	项: xiàng 工 gōng	页 page, sheet, leaf
phonsem("项", "工", "页", 3, `neck, nape; item; a term in an equation`, simplified("項"));
// 1758	項: xiàng 工 gōng	頁 page, sheet, leaf
phonsem("項", "工", "頁", 3, `neck, nape; item; a term in an equation`);
// 1759	汤: tāng 昜 yáng	氵 water
semphon("汤", "氵", "昜", 3, `soup, gravy, broth; hot water`, simplified("湯"));
// 1760	湯: tāng 昜 yáng	氵 water
semphon("湯", "氵", "昜", 3, `soup, gravy, broth; hot water`);
// 1762	忽: hū 勿 wù	心 heart; mind; soul
phonsem("忽", "勿", "心", 4, `suddenly, abruptly; to neglect`);
// 1763	略: lüè 各 gè	田 field, farm, arable land; cultivated
semphon("略", "田", "各", 5, `approximate, rough; outline, summary; plan, plot`, simplified("畧"));
// 1768	销: xiāo 肖 xiào	钅 gold, metal; money
semphon("销", "钅", "肖", 5, `to fuse, to melt; to market, to sell`, simplified("銷"));
// 1769	銷: xiāo 肖 xiào	釒 gold, metal; money
semphon("銷", "釒", "肖", 8, `to fuse, to melt; to market, to sell`);
// 1771	钥: yào 月 yuè	钅 gold, metal; money
semphon("钥", "钅", "月", 5, `lock, key`, simplified("鑰"));
// 1773	匙: chí shī 是 shì	匕 spoon, ladle; knife, dirk
phonsem("匙", "是", "匕", 9, `spoon; surname`);
// 1775	購: gòu 冓 gòu	貝 sea shell; money, currency
semphon("購", "貝", "冓", 7, `to buy, to purchase`);
// 1776	垃: lā 立 lì	土 soil, earth; items made of earth
semphon("垃", "土", "立", 3, `garbage, refuse, trash, waste`);
// 1777	圾: jī 及 jí	土 soil, earth; items made of earth
semphon("圾", "土", "及", 3, `garbage, rubbish; shaking; danger`);
// 1784	悔: huǐ 每 měi	忄 heart; mind; soul
semphon("悔", "忄", "每", 3, `to regret, to repent, to show remorse`);
// 1787	恕: shù 如 rú	心 heart; mind; soul
phonsem("恕", "如", "心", 6, `to excuse, to forgive, to show mercy`);
// 1788	筷: kuài 快 kuài	⺮ bamboo; flute
semphon("筷", "⺮", "快", 6, `chopsticks`);
// 1789	擦: cā 察 chá	扌 hand
semphon("擦", "扌", "察", 3, `to clean, to erase, to polish; a brush`);
// 1790	逐: zhú 豕 shǐ	辶 to walk; walking
semphon("逐", "辶", "豕", 7, `to pursue; to expel; step by step`);
// 1793	猪: zhū 者 zhě	犭 dog
semphon("猪", "犭", "者", 3, `pig, hog, wild boar`, simplified("豬"));
// 1794	豬: zhū 者 zhě	豕 pig, boar
semphon("豬", "豕", "者", 7, `pig, hog, wild boar`);
// 1797	赚: zhuàn 兼 jiān	贝 sea shell; money, currency
semphon("赚", "贝", "兼", 4, `to earn, to profit, to make money`, simplified("賺"));
// 1798	賺: zhuàn 兼 jiān	貝 sea shell; money, currency
semphon("賺", "貝", "兼", 7, `to earn, to profit, to make money`);
// 1799	创: chuàng 仓 cāng	刂 knife
phonsem("创", "仓", "刂", 4, `to establish, to create; cut, wound, trauma`, simplified("創"));
// 1800	創: chuàng 倉 cāng	刂 knife
phonsem("創", "倉", "刂", 10, `to establish, to create; cut, wound, trauma`);
// 1803	粗: cū 且 qiě	米 rice, millet, grain
semphon("粗", "米", "且", 6, `rough, think; coarse, rude`, simplified("觕"));
// 1806	顶: dǐng 丁 dīng	页 page, sheet, leaf
phonsem("顶", "丁", "页", 2, `top, summit, peak; to carry on the head`, simplified("頂"));
// 1807	頂: dǐng 丁 dīng	頁 page, sheet, leaf
phonsem("頂", "丁", "頁", 2, `top, summit, peak; to carry on the head`);
// 1808	址: zhǐ 止 zhǐ	土 soil, earth; items made of earth
semphon("址", "土", "止", 3, `location, site; the foundation of a house`);
// 1811	姿: zī 次 cì	女 woman, girl; female
phonsem("姿", "次", "女", 6, `grace, good looks; bearing, poise, posture`);
// 1812	势: shì 执 zhí	力 strength, power; capability, influence
phonsem("势", "执", "力", 6, `power, force; tendency, attitude`, simplified("勢"));
// 1813	勢: shì 埶 yì	力 strength, power; capability, influence
phonsem("勢", "埶", "力", 11, `power, force; tendency, attitude`);
// 1814	肥: féi 巴 bā	⺼ meat, flesh; organic compound
semphon("肥", "⺼", "巴", 4, `fat, plump, obese; fertile`);
// 1815	敲: qiāo 高 gāo	攴 to rap, to tap
phonsem("敲", "高", "攴", 10, `to hammer, to pound, to strike`);
// 1819	盒: hé 合 hé	皿 dish, vessel; shallow container
phonsem("盒", "合", "皿", 6, `small box or case; casket`);
// 1823	饮: yǐn 欠 qiàn	饣 food; to eat
semphon("饮", "饣", "欠", 3, `to swallow, to drink; a kind of drink`, simplified("飲"));
// 1824	飲: yǐn 欠 qiàn	飠 food; to eat
semphon("飲", "飠", "欠", 8, `to swallow, to drink; a kind of drink`);
// 1826	透: tòu 秀 xiù	辶 to walk; walking
semphon("透", "辶", "秀", 7, `to pierce, to penetrate, to pass through; thorough`);
// 1827	迹: jī 亦 yì	辶 to walk; walking
semphon("迹", "辶", "亦", 6, `trace, sign, mark, footprint`, simplified("跡"));
// 1828	跡: jī 亦 yì	足 foot; to attain, to satisfy; enough
semphon("跡", "足", "亦", 7, `trace, sign, mark, footprint`);
// 1833	扬: yáng 昜 yáng	扌 hand
semphon("扬", "扌", "昜", 3, `to flutter, to wave; to hoist, to raise; to praise`, simplified("揚"));
// 1834	揚: yáng 昜 yáng	扌 hand
semphon("揚", "扌", "昜", 3, `to flutter, to wave; to hoist, to raise; to praise`);
// 1836	植: zhí 直 zhí	木 tree; wood, lumber; wooden
semphon("植", "木", "直", 4, `tree, plant; to grow`);
// 1841	刺: cì 朿 cì	刂 knife
phonsem("刺", "朿", "刂", 6, `to stab; to prick, to irritate; to prod`);
// 1845	挑: tiāo 兆 zhào	扌 hand
semphon("挑", "扌", "兆", 3, `to select, to choose; picky, choosy; a load`);
// 1846	肤: fū 夫 fū	⺼ meat, flesh; organic compound
semphon("肤", "⺼", "夫", 4, `skin; shallow, superficial`, simplified("膚"));
// 1848	轮: lún 仑 lún	车 cart, vehicle; to move in a cart
semphon("轮", "车", "仑", 4, `wheel; to turn, to revolve; to recur`, simplified("輪"));
// 1849	輪: lún 侖 lún	車 cart, vehicle; to move in a cart
semphon("輪", "車", "侖", 7, `wheel; to turn, to revolve; to recur`);
// 1850	抬: tái 台 tái	扌 hand
semphon("抬", "扌", "台", 3, `to carry, to lift, to raise`);
// 1851	桥: qiáo 乔 qiáo	木 tree; wood, lumber; wooden
semphon("桥", "木", "乔", 4, `bridge; beam, crosspiece`, simplified("橋"));
// 1852	橋: qiáo 喬 qiáo	木 tree; wood, lumber; wooden
semphon("橋", "木", "喬", 4, `bridge; beam, crosspiece`);
// 1855	肚: dù 土 tǔ	⺼ meat, flesh; organic compound
semphon("肚", "⺼", "土", 4, `belly; abdomen, bowels`);
// 1859	牌: pái 卑 bēi	片 slice, splinter; page, strip
semphon("牌", "片", "卑", 4, `card, game piece; placard, signboard, tablet`);
// 1865	亿: yì 乙 yǐ	亻 man, person; people
semphon("亿", "亻", "乙", 2, `hundred million; many`, simplified("億"));
// 1866	億: yì 意 yì	亻 man, person; people
semphon("億", "亻", "意", 2, `hundred million; many`);
// 1867	龄: líng 令 lìng	齿 teeth; gears, cogs; age
semphon("龄", "齿", "令", 8, `age; years`, simplified("齡"));
// 1868	齡: líng 令 lìng	齒 teeth; gears, cogs; age
semphon("齡", "齒", "令", 15, `age; years`);
// 1872	协: xié 十 shí	办 to set up; to manage, to run; to deal with, to handle
phonsem("协", "十", "办", 2, `to assist; to cooperate, to join; to harmonize`, simplified("協"));
// 1873	協: xié 十 shí	劦 to cooperate, to work together; joint labor
phonsem("協", "十", "劦", 2, `to assist; to cooperate, to join; to harmonize`);
// 1874	依: yī 衣 yī	亻 man, person; people
semphon("依", "亻", "衣", 2, `to rely on; to consent, to obey; according to`);
// 1881	汗: hàn 干 gàn	氵 water
semphon("汗", "氵", "干", 3, `perspiration, sweat`);
// 1884	避: bì 辟 pì	辶 to walk; walking
semphon("避", "辶", "辟", 13, `to avoid, to turn away; to escape, to hide`);
// 1899	详: xiáng 羊 yáng	讠 words, speech; to speak, to say
semphon("详", "讠", "羊", 2, `complete, detailed, thorough`, simplified("詳"));
// 1900	詳: xiáng 羊 yáng	言 words, speech; to speak, to say
semphon("詳", "言", "羊", 7, `complete, detailed, thorough`);
// 1904	辣: là 束 shù	辛 bitter; toilsome, laborious; 8th heavenly stem
semphon("辣", "辛", "束", 7, `pepper; hot, spicy; cruel`, simplified("辢"));
// 1906	恨: hèn 艮 gěn	忄 heart; mind; soul
semphon("恨", "忄", "艮", 3, `to dislike, to hate, to resent`);
// 1907	伴: bàn 半 bàn	亻 man, person; people
semphon("伴", "亻", "半", 2, `companion, comrade, partner; to accompany`);
// 1916	恋: liàn 亦 yì	心 heart; mind; soul
phonsem("恋", "亦", "心", 6, `love; to yearn for, to long for`, simplified("戀"));
// 1917	戀: liàn 䜌 luán	心 heart; mind; soul
phonsem("戀", "䜌", "心", 19, `love; to yearn for, to long for`);
// 1919	摆: bǎi 罢 bà	扌 hand
semphon("摆", "扌", "罢", 3, `to arrange, to display; pendulum, swing`, simplified("擺"));
// 1920	擺: bǎi 罷 bà	扌 hand
semphon("擺", "扌", "罷", 3, `to arrange, to display; pendulum, swing`);
// 1921	补: bǔ 卜 bo	衤 cloth
semphon("补", "衤", "卜", 5, `to fix, to mend, to patch, to restore`, simplified("補"));
// 1922	補: bǔ 甫 fǔ	衤 cloth
semphon("補", "衤", "甫", 5, `to fix, to mend, to patch, to restore`);
// 1923	偿: cháng 尝 cháng	亻 man, person; people
semphon("偿", "亻", "尝", 2, `to repay, to recompense; restitution`, simplified("償"));
// 1925	钢: gāng 冈 gāng	钅 gold, metal; money
semphon("钢", "钅", "冈", 5, `steel; hard, strong, tough`, simplified("鋼"));
// 1926	鋼: gāng 岡 gāng	釒 gold, metal; money
semphon("鋼", "釒", "岡", 8, `steel; hard, strong, tough`);
// 1929	操: cāo 喿 zào	扌 hand
semphon("操", "扌", "喿", 3, `to conduct, to manage, to run`, simplified("撡"));
// 1931	编: biān 扁 biǎn	纟 silk; thread
semphon("编", "纟", "扁", 3, `to knit, to weave; to arrange, to compile`, simplified("編"));
// 1932	編: biān 扁 biǎn	糹 silk; thread
semphon("編", "糹", "扁", 6, `to knit, to weave; to arrange, to compile`);
// 1936	幣: bì 敝 bì	巾 cloth, curtain, handkerchief, towel
phonsem("幣", "敝", "巾", 11, `currency, coins, legal tender`);
// 1941	扩: kuò 扌 shǒu	广 broad, vast, wide; building, house
phonsem("扩", "扌", "广", 3, `to expand, to stretch, to magnify`, simplified("擴"));
// 1942	擴: kuò 扌 shǒu	廣 broad, vast, wide; building, house
phonsem("擴", "扌", "廣", 3, `to expand, to stretch, to magnify`);
// 1944	填: tián 真 zhēn	土 soil, earth; items made of earth
semphon("填", "土", "真", 3, `to fill, to pad, to stuff`);
// 1945	江: jiāng 工 gōng	氵 water
semphon("江", "氵", "工", 3, `large river; the Yangtze; surname`);
// 1947	妙: miào 少 shǎo	女 woman, girl; female
semphon("妙", "女", "少", 3, `mysterious, subtle; clever, exquisite, wonderful`, simplified("玅"));
// 1955	措: cuò 昔 xī	扌 hand
semphon("措", "扌", "昔", 3, `to arrange; to execute on; to manage`);
// 1959	採: cǎi 采 cǎi	扌 hand
semphon("採", "扌", "采", 3, `to collect, to gather; to pick, to pluck`);
// 1962	坦: tǎn 旦 dàn	土 soil, earth; items made of earth
semphon("坦", "土", "旦", 3, `flat, level, smooth; candid, open`);
// 1963	凉: liáng 京 jīng	冫 ice
semphon("凉", "冫", "京", 2, `cool, cold; disheartened`, simplified("涼"));
// 1964	涼: liáng 京 jīng	氵 water
semphon("涼", "氵", "京", 3, `cool, cold; disheartened`);
// 1965	映: yìng 央 yāng	日 sun; day; daytime
semphon("映", "日", "央", 4, `to project; to reflect; to shine`, simplified("暎"));
// 1977	抢: qiǎng 仓 cāng	扌 hand
semphon("抢", "扌", "仓", 3, `urgent, rushed; to rob, to plunder`, simplified("搶"));
// 1978	搶: qiǎng 倉 cāng	扌 hand
semphon("搶", "扌", "倉", 3, `urgent, rushed; to rob, to plunder`);
// 1980	桶: tǒng 甬 yǒng	木 tree; wood, lumber; wooden
semphon("桶", "木", "甬", 4, `bucket, pail, tub; can, cask, keg`);
// 1987	迫: pò 白 bái	辶 to walk; walking
semphon("迫", "辶", "白", 5, `to compel, to force; pressing, urgent`, simplified("廹"));
// 1998	础: chǔ 出 chū	石 stone, rock, mineral
semphon("础", "石", "出", 5, `foundation stone, plinth; basis`, simplified("礎"));
// 1999	礎: chǔ 楚 chǔ	石 stone, rock, mineral
semphon("礎", "石", "楚", 5, `foundation stone, plinth; basis`);
// 2014	烈: liè 列 liè	灬 fire
phonsem("烈", "列", "灬", 6, `fiery, violent; ardent, vehement`);
// 2022	财: cái 才 cái	贝 sea shell; money, currency
semphon("财", "贝", "才", 4, `riches, wealth, valuables`, simplified("財"));
// 2023	財: cái 才 cái	貝 sea shell; money, currency
semphon("財", "貝", "才", 7, `riches, wealth, valuables`);
// 2024	档: dàng 当 dāng	木 tree; wood, lumber; wooden
semphon("档", "木", "当", 4, `shelve, frame; files, records; grade, level`, simplified("檔"));
// 2025	檔: dàng 當 dāng	木 tree; wood, lumber; wooden
semphon("檔", "木", "當", 4, `shelve, frame; files, records; grade, level`);
// 2027	構: gòu 冓 gòu	木 tree; wood, lumber; wooden
semphon("構", "木", "冓", 4, `to compose, to make; building, frame, structure`);
// 2029	摩: mó 麻 má	手 hand
phonsem("摩", "麻", "手", 11, `to scour, to rub, to grind; friction`);
// 2031	触: chù 虫 chóng	角 angle, corner; horn, horn-shaped
semphon("触", "角", "虫", 7, `to butt, to gore, to ram; to touch`, simplified("觸"));
// 2032	觸: chù 蜀 shǔ	角 angle, corner; horn, horn-shaped
semphon("觸", "角", "蜀", 7, `to butt, to gore, to ram; to touch`);
// 2035	堵: dǔ 者 zhě	土 soil, earth; items made of earth
semphon("堵", "土", "者", 3, `wall; to stop, to prevent, to block`);
// 2045	塔: tǎ 荅 dā	土 soil, earth; items made of earth
semphon("塔", "土", "荅", 3, `tower, spire, tall building`, simplified("墖"));
// 2049	途: tú 余 yú	辶 to walk; walking
semphon("途", "辶", "余", 7, `way, road, path, journey, course`);
// 2054	辈: bèi 非 fēi	车 cart, vehicle; to move in a cart
phonsem("辈", "非", "车", 8, `generation, lifetime; contemporary`, simplified("輩"));
// 2055	輩: bèi 非 fēi	車 cart, vehicle; to move in a cart
phonsem("輩", "非", "車", 8, `generation, lifetime; contemporary`);
// 2056	摇: yáo 䍃 yóu	扌 hand
semphon("摇", "扌", "䍃", 3, `to rock, to shake; to swing, to wave`, simplified("搖"));
// 2057	搖: yáo 䍃 yóu	扌 hand
semphon("搖", "扌", "䍃", 3, `to rock, to shake; to swing, to wave`);
// 2058	碎: suì 卒 zú	石 stone, rock, mineral
semphon("碎", "石", "卒", 5, `to break, to smash; broken, busted`);
// 2059	损: sǔn 员 yuán	扌 hand
semphon("损", "扌", "员", 3, `to damage, to harm`, simplified("損"));
// 2060	損: sǔn 員 yuán	扌 hand
semphon("損", "扌", "員", 3, `to damage, to harm`);
// 2061	躲: duǒ 朵 duǒ	身 body, torso; person; pregnancy
semphon("躲", "身", "朵", 7, `to evade, to escape; to hide, to take shelter`);
// 2062	佛: fú 弗 fú	亻 man, person; people
semphon("佛", "亻", "弗", 2, `Buddha; Buddhist`, simplified("彿"));
// 2063	彿: fú 弗 fú	彳 to step with the left foot
semphon("彿", "彳", "弗", 3, `similar, alike; Buddhist`);
// 2068	摄: shè 聂 niè	扌 hand
semphon("摄", "扌", "聂", 3, `to absorb, to take in; to photograph; to act on behalf of`, simplified("攝"));
// 2069	攝: shè 聶 niè	扌 hand
semphon("攝", "扌", "聶", 3, `to absorb, to take in; to photograph; to act on behalf of`);
// 2072	恩: ēn 因 yīn	心 heart; mind; soul
phonsem("恩", "因", "心", 6, `kindness, mercy, charity`, simplified("㤙"));
// 2076	慕: mù 莫 mò	⺗ heart; mind; soul
phonsem("慕", "莫", "⺗", 10, `to admire, to desire, to long for`);
// 2077	描: miáo 苗 miáo	扌 hand
semphon("描", "扌", "苗", 3, `to copy, to depict, to sketch, to trace`);
// 2078	述: shù 术 shù	辶 to walk; walking
semphon("述", "辶", "术", 5, `to express, to state; to narrate, to tell`);
// 2088	堆: duī 隹 zhuī	土 soil, earth; items made of earth
semphon("堆", "土", "隹", 3, `crowd, heap, pile, mass; to pile up; measure word for things in piles or stacks`);
// 2095	怒: nù 奴 nú	心 heart; mind; soul
phonsem("怒", "奴", "心", 5, `anger, passion, rage`);
// 2096	醉: zuì 卒 zú	酉 wine; wine vessel; chemical
semphon("醉", "酉", "卒", 7, `intoxicated, drunk; addicted`);
// 2098	佔: zhàn 占 zhàn	亻 man, person; people
semphon("佔", "亻", "占", 2, `to possess, to usurp, to take by force`);
// 2099	策: cè 朿 cì	⺮ bamboo; flute
semphon("策", "⺮", "朿", 6, `to urge, to whip; method, plan, policy`, simplified("筞"));
// 2104	吻: wěn 勿 wù	口 mouth; entrance, gate, opening
semphon("吻", "口", "勿", 3, `to kiss; lips; coinciding`, simplified("脗"));
// 2109	版: bǎn 反 fǎn	片 slice, splinter; page, strip
semphon("版", "片", "反", 4, `printing block, edition; register; volume, version`);
// 2110	洞: dòng 同 tóng	氵 water
semphon("洞", "氵", "同", 3, `cave, grotto, hole, ravine`);
// 2115	彼: bǐ 皮 pí	彳 to step with the left foot
semphon("彼", "彳", "皮", 3, `that, those, the other`);
// 2116	棵: kē 果 guǒ	木 tree; wood, lumber; wooden
semphon("棵", "木", "果", 4, `measure word for trees`);
// 2118	伟: wěi 韦 wéi	亻 man, person; people
semphon("伟", "亻", "韦", 2, `great, imposing; extraordinary`, simplified("偉"));
// 2119	偉: wěi 韋 wéi	亻 man, person; people
semphon("偉", "亻", "韋", 2, `great, imposing; extraordinary`);
// 2124	滑: huá 骨 gǔ	氵 water
semphon("滑", "氵", "骨", 3, `to slip, to slide; slippery, polished`);
// 2127	穩: wěn 㥯 yǐn	禾 cereal, grain, rice; plant, stalk
semphon("穩", "禾", "㥯", 5, `steady, stable; solid, firm`);
// 2128	秒: miǎo 少 shǎo	禾 cereal, grain, rice; plant, stalk
semphon("秒", "禾", "少", 5, `a second; a corn kernel; measure word for time`);
// 2133	彻: chè 彳 chì	切 to cut, to mince, to slice, to carve; close to; eager
phonsem("彻", "彳", "切", 3, `penetrating, pervasive; to penetrate, to pass through`, simplified("徹"));
// 2138	订: dìng 丁 dīng	讠 words, speech; to speak, to say
semphon("订", "讠", "丁", 2, `to make an order; to draw up an agreement`, simplified("訂"));
// 2139	訂: dìng 丁 dīng	言 words, speech; to speak, to say
semphon("訂", "言", "丁", 7, `to make an order; to draw up an agreement`);
// 2140	膏: gāo 高 gāo	⺼ meat, flesh; organic compound
phonsem("膏", "高", "⺼", 10, `grease, fat; ointment, paste`);
// 2148	哇: wa 圭 guī	口 mouth; entrance, gate, opening
semphon("哇", "口", "圭", 3, `to vomit; an infant's cry`);
// 2149	袜: wà 末 mò	衤 cloth
semphon("袜", "衤", "末", 5, `socks, stockings`, simplified("襪"));
// 2157	幕: mù 莫 mò	巾 cloth, curtain, handkerchief, towel
phonsem("幕", "莫", "巾", 10, `curtain, screen, tent; measure word for plays and shows`, simplified("幙"));
// 2159	绪: xù 者 zhě	纟 silk; thread
semphon("绪", "纟", "者", 3, `mental state; thread, clue`, simplified("緒"));
// 2160	緒: xù 者 zhě	糹 silk; thread
semphon("緒", "糹", "者", 6, `mental state; thread, clue`);
// 2164	胆: dǎn 旦 dàn	⺼ meat, flesh; organic compound
semphon("胆", "⺼", "旦", 4, `gallbladder; gall, guts, courage`, simplified("膽"));
// 2165	膽: dǎn 詹 zhān	⺼ meat, flesh; organic compound
semphon("膽", "⺼", "詹", 4, `gallbladder; gall, guts, courage`);
// 2166	驾: jià 加 jiā	马 horse; surname
phonsem("驾", "加", "马", 5, `to drive, to ride, to sail; carriage, cart`, simplified("駕"));
// 2167	駕: jià 加 jiā	馬 horse; surname
phonsem("駕", "加", "馬", 5, `to drive, to ride, to sail; carriage, cart`);
// 2168	驶: shǐ 史 shǐ	马 horse; surname
semphon("驶", "马", "史", 3, `to drive, to pilot, to ride; fast, quick`, simplified("駛"));
// 2169	駛: shǐ 史 shǐ	馬 horse; surname
semphon("駛", "馬", "史", 10, `to drive, to pilot, to ride; fast, quick`);
// 2170	违: wéi 韦 wéi	辶 to walk; walking
semphon("违", "辶", "韦", 4, `to violate, to disobey, to defy; to separate from`, simplified("違"));
// 2171	違: wéi 韋 wéi	辶 to walk; walking
semphon("違", "辶", "韋", 9, `to violate, to disobey, to defy; to separate from`);
// 2174	惩: chéng 征 zhēng	心 heart; mind; soul
phonsem("惩", "征", "心", 8, `to discipline, to punish, to reprimand, to warn`, simplified("懲"));
// 2179	核: hé 亥 hài	木 tree; wood, lumber; wooden
semphon("核", "木", "亥", 4, `core, kernel; nut, seed; atom`, simplified("覈"));
// 2181	纯: chún 屯 tún	纟 silk; thread
semphon("纯", "纟", "屯", 3, `pure, clean; simple, genuine`, simplified("純"));
// 2182	純: chún 屯 tún	糹 silk; thread
semphon("純", "糹", "屯", 6, `pure, clean; simple, genuine`);
// 2183	粹: cuì 卒 zú	米 rice, millet, grain
semphon("粹", "米", "卒", 6, `pure, unadulterated; essence`);
// 2192	吹: chuī 欠 qiàn	口 mouth; entrance, gate, opening
semphon("吹", "口", "欠", 3, `to blow, to puff; to brag, to boast`);
// 2193	咳: hāi 亥 hài	口 mouth; entrance, gate, opening
semphon("咳", "口", "亥", 3, `to cough`);
// 2195	摸: mō 莫 mò	扌 hand
semphon("摸", "扌", "莫", 3, `to caress, to stroke, to gently touch`);
// 2197	欣: xīn 斤 jīn	欠 to lack, to owe; to breathe, to yawn
phonsem("欣", "斤", "欠", 4, `delighted, happy, joyous`);
// 2198	赏: shǎng 尚 shàng	贝 sea shell; money, currency
phonsem("赏", "尚", "贝", 8, `reward; to appreciate; to bestow, to grant`, simplified("賞"));
// 2200	震: zhèn 辰 chén	雨 rain
semphon("震", "雨", "辰", 8, `shake, quake, tremor; to excite`);
// 2201	贡: gòng 工 gōng	贝 sea shell; money, currency
phonsem("贡", "工", "贝", 3, `to offer, to contribute; tribute, gifts`, simplified("貢"));
// 2202	貢: gòng 工 gōng	貝 sea shell; money, currency
phonsem("貢", "工", "貝", 3, `to offer, to contribute; tribute, gifts`);
// 2210	波: bō 皮 pí	氵 water
semphon("波", "氵", "皮", 3, `waves, ripples, breakers; undulations`);
// 2212	豪: háo 高 gāo	豕 pig, boar
phonsem("豪", "高", "豕", 7, `brave, heroic, chivalrous`);
// 2213	陆: lù 击 jī	阝 place, town, city
semphon("陆", "阝", "击", 2, `land, continent; six (bankers' anti-fraud numeral)`, simplified("陸"));
// 2215	喊: hǎn 咸 xián	口 mouth; entrance, gate, opening
semphon("喊", "口", "咸", 3, `to shout, to yell, to call out; to howl; to cry`);
// 2216	域: yù 或 huò	土 soil, earth; items made of earth
semphon("域", "土", "或", 3, `area, district, field, land, region; boundary; domain (in taxonomy)`);
// 2218	液: yè 夜 yè	氵 water
semphon("液", "氵", "夜", 3, `fluid, liquid; juice, sap`);
// 2219	贴: tiē 占 zhàn	贝 sea shell; money, currency
semphon("贴", "贝", "占", 4, `to stick, to paste; attached; allowance, subsidy`, simplified("貼"));
// 2220	貼: tiē 占 zhàn	貝 sea shell; money, currency
semphon("貼", "貝", "占", 7, `to stick, to paste; attached; allowance, subsidy`);
// 2224	醜: chǒu 酉 yǒu	鬼 ghost; demon; sly, mischievous
phonsem("醜", "酉", "鬼", 7, `ugly; shameful; comedian, clown`);
// 2225	敏: mǐn 每 měi	攵 to rap, to tap; script; to let go
phonsem("敏", "每", "攵", 7, `fast, quick; clever, smart`);
// 2226	怖: bù 布 bù	忄 heart; mind; soul
semphon("怖", "忄", "布", 3, `frightened, terrified`);
// 2227	暑: shǔ 者 zhě	日 sun; day; daytime
semphon("暑", "日", "者", 4, `hot; heat; summer`);
// 2232	颗: kē 页 yè	果 fruit, nut; result
semphon("颗", "果", "页", 8, `grain, kernel`, simplified("顆"));
// 2233	顆: kē 頁 yè	果 fruit, nut; result
semphon("顆", "果", "頁", 8, `grain, kernel`);
// 2234	含: hán 今 jīn	口 mouth; entrance, gate, opening
phonsem("含", "今", "口", 4, `to hold in the mouth; to contain; to cherish`);
// 2237	踪: zōng 宗 zōng	足 foot; to attain, to satisfy; enough
semphon("踪", "足", "宗", 7, `footprints, traces, tracks`, simplified("蹤"));
// 2238	蹤: zōng 從 cóng	足 foot; to attain, to satisfy; enough
semphon("蹤", "足", "從", 7, `footprints, traces, tracks`);
// 2243	涂: tú 余 yú	氵 water
semphon("涂", "氵", "余", 3, `to smear, to scribble, to daub; surname`, simplified("塗"));
// 2247	纳: nà 内 nèi	纟 silk; thread
semphon("纳", "纟", "内", 3, `to adopt, to accept; to receive, to take`, simplified("納"));
// 2248	納: nà 内 nèi	糹 silk; thread
semphon("納", "糹", "内", 6, `to adopt, to accept; to receive, to take`);
// 2249	祖: zǔ 且 qiě	礻 spirit
semphon("祖", "礻", "且", 4, `ancestor, forefather; grandfather; surname`);
// 2252	吐: tǔ 土 tǔ	口 mouth; entrance, gate, opening
semphon("吐", "口", "土", 3, `to vomit, to spew out, to cough up; to say`);
// 2264	阶: jiē 介 jiè	阝 place, town, city
semphon("阶", "阝", "介", 2, `stairs, steps; degree, rank`, simplified("階"));
// 2269	碍: ài 㝵 dé	石 stone, rock, mineral
semphon("碍", "石", "㝵", 5, `to block, to deter, to hinder, to obstruct`, simplified("礙"));
// 2271	燥: zào 喿 zào	火 fire, flame; to burn; anger, rage
semphon("燥", "火", "喿", 4, `arid, dry, parched; quick-tempered`);
// 2273	殊: shū 朱 zhū	歹 corpse; death; evil, depraved, wicked
semphon("殊", "歹", "朱", 4, `different, special, unusual`);
// 2286	窄: zhǎi 乍 zhà	穴 cave, den, hole
semphon("窄", "穴", "乍", 5, `narrow, tight; narrow-minded`);
// 2300	俱: jù 具 jù	亻 man, person; people
semphon("俱", "亻", "具", 2, `all, together; accompany`);
// 2301	咬: yǎo 交 jiāo	口 mouth; entrance, gate, opening
semphon("咬", "口", "交", 3, `to bite, to gnaw`, simplified("齩"));
// 2313	壁: bì 辟 pì	土 soil, earth; items made of earth
phonsem("壁", "辟", "土", 13, `partition, wall; rampart`);
// 2317	池: chí 也 yě	氵 water
semphon("池", "氵", "也", 3, `pool, pond; moat; cistern`);
// 2320	绕: rào 尧 yáo	纟 silk; thread
semphon("绕", "纟", "尧", 3, `to entwine, to wind around; to orbit, to revolve`, simplified("繞"));
// 2321	繞: rào 堯 yáo	糹 silk; thread
semphon("繞", "糹", "堯", 6, `to entwine, to wind around; to orbit, to revolve`);
// 2332	魔: mó 麻 má	鬼 ghost; demon; sly, mischievous
phonsem("魔", "麻", "鬼", 11, `demon, evil spirit; magic, spell`);
// 2337	镇: zhèn 真 zhēn	钅 gold, metal; money
semphon("镇", "钅", "真", 5, `calm, composed; to control, to suppress`, simplified("鎮"));
// 2338	鎮: zhèn 真 zhēn	釒 gold, metal; money
semphon("鎮", "釒", "真", 8, `calm, composed; to control, to suppress`);
// 2340	捕: bǔ 甫 fǔ	扌 hand
semphon("捕", "扌", "甫", 3, `to arrest, to catch, to seize`);
// 2341	诗: shī 寺 sì	讠 words, speech; to speak, to say
semphon("诗", "讠", "寺", 2, `poetry; poem, verse, ode`, simplified("詩"));
// 2342	詩: shī 寺 sì	言 words, speech; to speak, to say
semphon("詩", "言", "寺", 7, `poetry; poem, verse, ode`);
// 2354	唤: huàn 奂 huàn	口 mouth; entrance, gate, opening
semphon("唤", "口", "奂", 3, `to call`, simplified("喚"));
// 2355	喚: huàn 奐 huàn	口 mouth; entrance, gate, opening
semphon("喚", "口", "奐", 3, `to call`);
// 2364	敦: dūn 攵 pū	享 to share; to enjoy; to benefit from
semphon("敦", "享", "攵", 8, `honest, candid, sincere; kind-hearted; to esteem`, simplified("㪟"));
// 2368	酷: kù 告 gào	酉 wine; wine vessel; chemical
semphon("酷", "酉", "告", 7, `strong, stimulating; ruthless, intense`);
// 2381	艱: jiān 堇 jǐn	艮 blunt; tough, chewy
phonsem("艱", "堇", "艮", 11, `difficult, hard; hardship`);
// 2382	嫁: jià 家 jiā	女 woman, girl; female
semphon("嫁", "女", "家", 3, `to marry, to give a daughter in marriage`);
// 2383	振: zhèn 辰 chén	扌 hand
semphon("振", "扌", "辰", 3, `to arouse, to excite; to rouse, to shake`);
// 2386	副: fù 畐 fú	刂 knife
phonsem("副", "畐", "刂", 9, `to assist, to supplement; assistant; secondary; auxiliary`);
// 2391	蜜: mì 宓 mì	虫 insect, worm; mollusk
phonsem("蜜", "宓", "虫", 8, `honey, nectar; sweet`);
// 2392	烤: kǎo 考 kǎo	火 fire, flame; to burn; anger, rage
semphon("烤", "火", "考", 4, `to bake, to cook, to roast, to toast`);
// 2402	宇: yǔ 于 yú	宀 roof; house
semphon("宇", "宀", "于", 3, `building, house, room, structure; space, the universe`);
// 2403	宙: zhòu 由 yóu	宀 roof; house
semphon("宙", "宀", "由", 3, `space, time, space-time`);
// 2408	递: dì 弟 dì	辶 to walk; walking
semphon("递", "辶", "弟", 7, `to deliver, to hand over; substitute`, simplified("遞"));
// 2417	姆: mǔ 母 mǔ	女 woman, girl; female
semphon("姆", "女", "母", 3, `governess, matron, nanny`);
// 2418	疾: jí 矢 shǐ	疒 sickness, disease
semphon("疾", "疒", "矢", 5, `sickness, illness, disease; to envy, to hate`);
// 2419	询: xún 旬 xún	讠 words, speech; to speak, to say
semphon("询", "讠", "旬", 2, `to ask about, to inquire into; to consult`, simplified("詢"));
// 2420	詢: xún 旬 xún	言 words, speech; to speak, to say
semphon("詢", "言", "旬", 7, `to ask about, to inquire into; to consult`);
// 2425	捨: shě 扌 shǒu	舍 house, dwelling; to reside, to dwell; to abandon, to give up
phonsem("捨", "扌", "舍", 3, `house, dwelling; to reside, to dwell; to abandon, to give up`);
// 2428	培: péi 咅 pǒu	土 soil, earth; items made of earth
semphon("培", "土", "咅", 3, `to cultivate, to farm; to shore up`);
// 2429	俗: sú 谷 gǔ	亻 man, person; people
semphon("俗", "亻", "谷", 2, `social customs; vulgar, unrefined`);
// 2434	挤: jǐ 齐 qí	扌 hand
semphon("挤", "扌", "齐", 3, `to squeeze, to push against; crowded`, simplified("擠"));
// 2435	擠: jǐ 齊 qí	扌 hand
semphon("擠", "扌", "齊", 3, `to squeeze, to push against; crowded`);
// 2438	晕: yūn 军 jūn	日 sun; day; daytime
semphon("晕", "日", "军", 4, `dizzy, faint, foggy; to see stars`, simplified("暈"));
// 2439	暈: yūn 軍 jūn	日 sun; day; daytime
semphon("暈", "日", "軍", 4, `dizzy, faint, foggy; to see stars`);
// 2440	柿: shì 市 shì	木 tree; wood, lumber; wooden
semphon("柿", "木", "市", 4, `persimmon`, simplified("柹"));
// 2442	账: zhàng 长 zhǎng	贝 sea shell; money, currency
semphon("账", "贝", "长", 4, `accounts, bills; credit, debt`, simplified("賬"));
// 2443	賬: zhàng 長 zhǎng	貝 sea shell; money, currency
semphon("賬", "貝", "長", 7, `accounts, bills; credit, debt`);
// 2447	譽: yù 與 yǔ	言 words, speech; to speak, to say
phonsem("譽", "與", "言", 13, `fame, reputation; to praise`);
// 2448	炮: pào 包 bāo	火 fire, flame; to burn; anger, rage
semphon("炮", "火", "包", 4, `cannon, artillery`, simplified("砲"));
// 2449	砲: pào 包 bāo	石 stone, rock, mineral
semphon("砲", "石", "包", 5, `gun, cannon`);
// 2451	剪: jiǎn 前 qián	刀 knife; old coin; measure
phonsem("剪", "前", "刀", 9, `scissors; to cut, to divide, to separate`);
// 2454	玻: bō 皮 pí	王 king, ruler; royal; surname
semphon("玻", "王", "皮", 4, `glass`);
// 2455	璃: lí 离 lí	王 king, ruler; royal; surname
semphon("璃", "王", "离", 4, `glass; colored glaze`, simplified("琍"));
// 2462	横: héng 黄 huáng	木 tree; wood, lumber; wooden
semphon("横", "木", "黄", 4, `horizontal, across; unreasonable, harsh`, simplified("橫"));
// 2463	橫: héng 黃 huáng	木 tree; wood, lumber; wooden
semphon("橫", "木", "黃", 4, `horizontal, across; unreasonable, harsh`);
// 2464	搭: dā 荅 dā	扌 hand
semphon("搭", "扌", "荅", 3, `to attach, to build, to join`);
// 2465	扯: chě 止 zhǐ	扌 hand
semphon("扯", "扌", "止", 3, `to rip, to tear; to haul; casual talk`, simplified("撦"));
// 2467	淡: dàn 炎 yán	氵 water
semphon("淡", "氵", "炎", 3, `watery, dilute; insipid, tasteless`);
// 2479	狼: láng 良 liáng	犭 dog
semphon("狼", "犭", "良", 3, `wolf`);
// 2481	症: zhèng 正 zhèng	疒 sickness, disease
semphon("症", "疒", "正", 5, `ailment, disease, illness`, simplified("癥"));
// 2483	趟: tàng 尚 shàng	走 to walk, to run, to flee
semphon("趟", "走", "尚", 7, `time, occasion; to make a journey`, simplified("䠀"));
// 2484	䠀: tāng 尚 shàng	足 foot; to attain, to satisfy; enough
semphon("䠀", "足", "尚", 7, `to meditate; to sit cross-legged`);
// 2487	伯: bó 白 bái	亻 man, person; people
semphon("伯", "亻", "白", 2, `older brother; father's elder brother; sir, sire, count`);
// 2488	眠: mián 民 mín	目 eye; to look, to see; division, topic
semphon("眠", "目", "民", 5, `sleep, shut-eye, hibernatation`);
// 2492	冻: dòng 东 dōng	冫 ice
semphon("冻", "冫", "东", 2, `cold; to freeze, to congeal; jelly`, simplified("凍"));
// 2493	凍: dòng 東 dōng	冫 ice
semphon("凍", "冫", "東", 2, `cold; to freeze, to congeal; jelly`);
// 2495	彎: wān 䜌 luán	弓 bow; curved, arched
phonsem("彎", "䜌", "弓", 19, `bend, curve, turn`);
// 2496	绳: shéng 黾 miǎn	纟 silk; thread
semphon("绳", "纟", "黾", 3, `string, rope, cord; to control`, simplified("繩"));
// 2497	繩: shéng 黽 miǎn	糹 silk; thread
semphon("繩", "糹", "黽", 6, `string, rope, cord; to control`);
// 2501	饺: jiǎo 交 jiāo	饣 food; to eat
semphon("饺", "饣", "交", 3, `stuffed dumplings`, simplified("餃"));
// 2502	餃: jiǎo 交 jiāo	飠 food; to eat
semphon("餃", "飠", "交", 8, `stuffed dumplings`);
// 2503	勤: qín 堇 jǐn	力 strength, power; capability, influence
phonsem("勤", "堇", "力", 11, `industrious, diligent, attentive`, simplified("懃"));
// 2510	歇: xiē 曷 hé	欠 to lack, to owe; to breathe, to yawn
phonsem("歇", "曷", "欠", 9, `to stop, to rest, to lodge`);
// 2511	赌: dǔ 者 zhě	贝 sea shell; money, currency
semphon("赌", "贝", "者", 4, `to bet, to gamble, to wager`, simplified("賭"));
// 2512	賭: dǔ 者 zhě	貝 sea shell; money, currency
semphon("賭", "貝", "者", 7, `to bet, to gamble, to wager`);
// 2513	肌: jī 几 jǐ	⺼ meat, flesh; organic compound
semphon("肌", "⺼", "几", 4, `flesh, skin; muscle, tissue; meat on bones`);
// 2516	睁: zhēng 争 zhēng	目 eye; to look, to see; division, topic
semphon("睁", "目", "争", 5, `to open one's eyes; to stare`, simplified("睜"));
// 2517	睜: zhēng 爭 zhēng	目 eye; to look, to see; division, topic
semphon("睜", "目", "爭", 5, `to open one's eyes; to stare`);
// 2522	叛: pàn 半 bàn	反 reverse, opposite; contrary, anti-
phonsem("叛", "半", "反", 5, `rebel; rebellion; rebellious`);
// 2533	铃: líng 令 lìng	钅 gold, metal; money
semphon("铃", "钅", "令", 5, `small bell`, simplified("鈴"));
// 2534	鈴: líng 令 lìng	釒 gold, metal; money
semphon("鈴", "釒", "令", 8, `small bell`);
// 2535	拆: chāi 斥 chì	扌 hand
semphon("拆", "扌", "斥", 3, `to break open, to split up, to tear apart`);
// 2537	逻: luó 罗 luō	辶 to walk; walking
semphon("逻", "辶", "罗", 8, `to patrol, to inspect; patrol, watch; logic`, simplified("邏"));
// 2538	邏: luó 羅 luō	辶 to walk; walking
semphon("邏", "辶", "羅", 19, `to patrol, to inspect; patrol, watch; logic`);
// 2540	溝: gōu 冓 gòu	氵 water
semphon("溝", "氵", "冓", 3, `ditch, drain, gutter, narrow waterway`);
// 2545	稚: zhì 隹 zhuī	禾 cereal, grain, rice; plant, stalk
semphon("稚", "禾", "隹", 5, `young, immature; childhood`, simplified("稺"));
// 2551	勸: quàn 雚 guàn	力 strength, power; capability, influence
phonsem("勸", "雚", "力", 18, `to recommend, to advise; to urge, to exhort`);
// 2557	疲: pí 皮 pí	疒 sickness, disease
semphon("疲", "疒", "皮", 5, `weak, tired, exhausted`);
// 2558	惫: bèi 夂 zhǐ	思 to think, to ponder, to consider; final particle
phonsem("惫", "夂", "思", 3, `tired, weary, fatigued`, simplified("憊"));
// 2559	憊: bèi 備 bèi	心 heart; mind; soul
phonsem("憊", "備", "心", 12, `tired, weary, fatigued`);
// 2560	跃: yuè 夭 yāo	足 foot; to attain, to satisfy; enough
semphon("跃", "足", "夭", 7, `to skip, to jump, to frolic`, simplified("躍"));
// 2563	罐: guàn 雚 guàn	缶 earthen crock or jar; pottery
semphon("罐", "缶", "雚", 6, `jar, jug, pitcher, pot`, simplified("鑵"));
// 2566	慧: huì 彗 huì	心 heart; mind; soul
phonsem("慧", "彗", "心", 11, `bright, intelligent; intelligence`);
// 2570	桃: táo 兆 zhào	木 tree; wood, lumber; wooden
semphon("桃", "木", "兆", 4, `peach; marriage; surname`);
// 2573	逼: bī 畐 fú	辶 to walk; walking
semphon("逼", "辶", "畐", 9, `to bother, to pressure; to compel, to force`, simplified("偪"));
// 2577	炒: chǎo 少 shǎo	火 fire, flame; to burn; anger, rage
semphon("炒", "火", "少", 4, `to boil, to fry, to roast, to sauté; to trade stock`);
// 2582	赔: péi 咅 pǒu	贝 sea shell; money, currency
semphon("赔", "贝", "咅", 4, `to compensate, to pay damages, to suffer a loss`, simplified("賠"));
// 2583	賠: péi 咅 pǒu	貝 sea shell; money, currency
semphon("賠", "貝", "咅", 7, `to compensate, to pay damages, to suffer a loss`);
// 2584	浓: nóng 农 nóng	氵 water
semphon("浓", "氵", "农", 3, `concentrated, dense, strong, thick`, simplified("濃"));
// 2585	濃: nóng 農 nóng	氵 water
semphon("濃", "氵", "農", 3, `concentrated, dense, strong, thick`);
// 2586	漠: mò 莫 mò	氵 water
semphon("漠", "氵", "莫", 3, `desert; aloof, cool, indifferent`);
// 2590	宠: chǒng 龙 lóng	宀 roof; house
semphon("宠", "宀", "龙", 3, `to love; to favor, to pamper, to spoil; concubine`, simplified("寵"));
// 2591	寵: chǒng 龍 lóng	宀 roof; house
semphon("寵", "宀", "龍", 3, `to love; to favor, to pamper, to spoil; concubine`);
// 2592	矿: kuàng 广 guǎng	石 stone, rock, mineral
semphon("矿", "石", "广", 5, `mine; mineral, ore`, simplified("礦"));
// 2593	礦: kuàng 廣 guǎng	石 stone, rock, mineral
semphon("礦", "石", "廣", 5, `mine; mineral, ore`);
// 2595	欲: yù 谷 gǔ	欠 to lack, to owe; to breathe, to yawn
phonsem("欲", "谷", "欠", 7, `desire, want, longing, intent`, simplified("慾"));
// 2599	扶: fú 夫 fū	扌 hand
semphon("扶", "扌", "夫", 3, `to support, to protect, to help`);
// 2600	霉: méi 每 měi	雨 rain
semphon("霉", "雨", "每", 8, `mildew, mold, rot`, simplified("黴"));
// 2604	粉: fěn 分 fēn	米 rice, millet, grain
semphon("粉", "米", "分", 6, `powder, flour, cosmetic powder; plaster`);
// 2608	雾: wù 务 wù	雨 rain
semphon("雾", "雨", "务", 8, `fog, mist, vapor, fine spray`, simplified("霧"));
// 2609	霧: wù 務 wù	雨 rain
semphon("霧", "雨", "務", 8, `fog, mist, vapor, fine spray`);
// 2611	砍: kǎn 欠 qiàn	石 stone, rock, mineral
semphon("砍", "石", "欠", 5, `to hack, to chop, to cut, to fell`);
// 2612	逗: dòu 豆 dòu	辶 to walk; walking
semphon("逗", "辶", "豆", 7, `to entice, to tempt; to arouse, to stir`);
// 2613	抖: dǒu 斗 dòu	扌 hand
semphon("抖", "扌", "斗", 3, `to tremble, to shake, to rouse`);
// 2614	妨: fáng 方 fāng	女 woman, girl; female
semphon("妨", "女", "方", 3, `damage, harm; to impede, to obstruct; to undermine`);
// 2616	屈: qū 出 chū	尸 body, corpse
semphon("屈", "尸", "出", 3, `to bend, to flex; bent, crooked, crouched`);
// 2619	飘: piāo 票 piào	风 wind; air; customs, manners; news
phonsem("飘", "票", "风", 11, `to drift, to float, to flutter`, simplified("飄"));
// 2620	飄: piāo 票 piào	風 wind; air; customs, manners; news
phonsem("飄", "票", "風", 11, `to drift, to float, to flutter`);
// 2622	谨: jǐn 堇 jǐn	讠 words, speech; to speak, to say
semphon("谨", "讠", "堇", 2, `prudent, cautious, attentive`, simplified("謹"));
// 2623	謹: jǐn 堇 jǐn	言 words, speech; to speak, to say
semphon("謹", "言", "堇", 7, `prudent, cautious, attentive`);
// 2624	慎: shèn 真 zhēn	忄 heart; mind; soul
semphon("慎", "忄", "真", 3, `cautious, prudent`, simplified("昚"));
// 2626	恭: gōng 共 gòng	⺗ heart; mind; soul
phonsem("恭", "共", "⺗", 6, `polite, respectful, reverent`);
// 2629	浅: qiǎn 戋 jiān	氵 water
semphon("浅", "氵", "戋", 3, `shallow, superficial`, simplified("淺"));
// 2630	淺: qiǎn 戔 jiān	氵 water
semphon("淺", "氵", "戔", 3, `shallow, superficial`);
// 2631	愧: kuì 鬼 guǐ	忄 heart; mind; soul
semphon("愧", "忄", "鬼", 3, `ashamed, regretful; the pangs of conscience`, simplified("媿"));
// 2633	综: zōng 宗 zōng	纟 silk; thread
semphon("综", "纟", "宗", 3, `to sum up; to arrange threads for weaving`, simplified("綜"));
// 2634	綜: zōng 宗 zōng	糹 silk; thread
semphon("綜", "糹", "宗", 6, `to sum up; to arrange threads for weaving`);
// 2635	紫: zǐ 此 cǐ	糸 silk; thread
phonsem("紫", "此", "糸", 6, `purple, violet; amethyst; surname`);
// 2636	粘: zhān 占 zhàn	米 rice, millet, grain
semphon("粘", "米", "占", 6, `viscous, sticky, mucous, glutinous`);
// 2637	悄: qiāo 肖 xiào	忄 heart; mind; soul
semphon("悄", "忄", "肖", 3, `quiet, silent, still; anxious`);
// 2638	俊: jùn 夋 qūn	亻 man, person; people
semphon("俊", "亻", "夋", 2, `talented, capable; handsome`, simplified("儁"));
// 2643	醬: jiàng 將 jiāng	酉 wine; wine vessel; chemical
phonsem("醬", "將", "酉", 11, `sauce, paste, jam`);
// 2644	贷: dài 代 dài	贝 sea shell; money, currency
phonsem("贷", "代", "贝", 5, `to borrow; to lend; to pardon`, simplified("貸"));
// 2645	貸: dài 代 dài	貝 sea shell; money, currency
phonsem("貸", "代", "貝", 5, `to borrow; to lend; to pardon`);
// 2649	寞: mò 莫 mò	宀 roof; house
semphon("寞", "宀", "莫", 3, `silent, still; lonely, solitary`);
// 2650	袭: xí 衣 yī	龙 dragon; symbol of the emperor
semphon("袭", "龙", "衣", 5, `to attack, to raid; to inherit`, simplified("襲"));
// 2651	襲: xí 衣 yī	龍 dragon; symbol of the emperor
semphon("襲", "龍", "衣", 16, `to attack, to raid; to inherit`);
// 2653	讽: fěng 风 fēng	讠 words, speech; to speak, to say
semphon("讽", "讠", "风", 2, `sarcastic; to chant, to mock, to ridicule`, simplified("諷"));
// 2654	諷: fěng 風 fēng	言 words, speech; to speak, to say
semphon("諷", "言", "風", 7, `sarcastic; to chant, to mock, to ridicule`);
// 2659	踩: cǎi 采 cǎi	足 foot; to attain, to satisfy; enough
semphon("踩", "足", "采", 7, `to step on; to stamp`, simplified("跴"));
// 2663	氛: fēn 分 fēn	气 air, gas; steam, vapor; anger
semphon("氛", "气", "分", 4, `air; atmosphere`);
// 2666	毯: tǎn 炎 yán	毛 hair, fur, feathers; coarse
semphon("毯", "毛", "炎", 4, `rug, carpet, blanket`);
// 2675	纷: fēn 分 fēn	纟 silk; thread
semphon("纷", "纟", "分", 3, `tangled, scattered; numerous, confused`, simplified("紛"));
// 2676	紛: fēn 分 fēn	糹 silk; thread
semphon("紛", "糹", "分", 6, `tangled, scattered; numerous, confused`);
// 2677	悠: yōu 攸 yōu	心 heart; mind; soul
phonsem("悠", "攸", "心", 7, `distant, remote; long, far; carefree`);
// 2678	劣: liè 力 lì	少 few, little; less; inadequate
semphon("劣", "少", "力", 4, `low-quality, inferior, bad`);
// 2682	胳: gē 各 gè	⺼ meat, flesh; organic compound
semphon("胳", "⺼", "各", 4, `arms; armpit`, simplified("肐"));
// 2688	惧: jù 具 jù	忄 heart; mind; soul
semphon("惧", "忄", "具", 3, `to fear, to dread`, simplified("懼"));
// 2691	豫: yù 予 yǔ	象 elephant; ivory; figure, image
phonsem("豫", "予", "象", 4, `relaxed; hesitant`);
// 2696	贸: mào 卯 mǎo	贝 sea shell; money, currency
phonsem("贸", "卯", "贝", 5, `commerce, trade`, simplified("貿"));
// 2699	覽: lǎn 監 jiān	見 to see, to observe, to meet, to appear
phonsem("覽", "監", "見", 14, `to look over, to inspect, to view, to perceive`);
// 2702	粒: lì 立 lì	米 rice, millet, grain
semphon("粒", "米", "立", 6, `grain, granule; bullet, pellet`);
// 2706	鍋: guō 咼 guō	釒 gold, metal; money
semphon("鍋", "釒", "咼", 8, `cooking-pot, saucepan`);
// 2707	洛: luò 各 gè	氵 water
semphon("洛", "氵", "各", 3, `a river in the Shanxi province; a city`);
// 2708	杉: shān 彡 shān	木 tree; wood, lumber; wooden
semphon("杉", "木", "彡", 4, `various species of pine and fir`);
// 2709	矶: jī 几 jǐ	石 stone, rock, mineral
semphon("矶", "石", "几", 5, `jetty, reef; breakwater, eddy`, simplified("磯"));
// 2714	额: é 客 kè	页 page, sheet, leaf
phonsem("额", "客", "页", 9, `forehead; quota, amount`, simplified("額"));
// 2715	額: é 客 kè	頁 page, sheet, leaf
phonsem("額", "客", "頁", 9, `forehead; quota, amount`);
// 2728	豔: yàn 豐 fēng	盍 what? why not?
phonsem("豔", "豐", "盍", 18, `beautiful, plump, voluptuous`);
// 2731	涨: zhǎng 张 zhāng	氵 water
semphon("涨", "氵", "张", 3, `flood tide; to rise in price`, simplified("漲"));
// 2733	捡: jiǎn 佥 qiān	扌 hand
semphon("捡", "扌", "佥", 3, `to pick up, to gather, to collect`, simplified("撿"));
// 2734	撿: jiǎn 僉 qiān	扌 hand
semphon("撿", "扌", "僉", 3, `to pick up, to gather, to collect`);
// 2736	柴: chái 此 cǐ	木 tree; wood, lumber; wooden
phonsem("柴", "此", "木", 6, `firewood, faggots, fuel; surname`);
// 2737	盼: pàn 分 fēn	目 eye; to look, to see; division, topic
semphon("盼", "目", "分", 5, `to look, to gaze; to expect, to hope for`);
// 2738	辅: fǔ 甫 fǔ	车 cart, vehicle; to move in a cart
semphon("辅", "车", "甫", 4, `side road; to assist, to coach, to tutor`, simplified("輔"));
// 2739	輔: fǔ 甫 fǔ	車 cart, vehicle; to move in a cart
semphon("輔", "車", "甫", 7, `side road; to assist, to coach, to tutor`);
// 2740	煮: zhǔ 者 zhě	灬 fire
phonsem("煮", "者", "灬", 8, `to boil, to cook`, simplified("煑"));
// 2745	鸭: yā 甲 jiǎ	鸟 bird
phonsem("鸭", "甲", "鸟", 5, `duck; Anas species (various)`, simplified("鴨"));
// 2746	鴨: yā 甲 jiǎ	鳥 bird
phonsem("鴨", "甲", "鳥", 5, `duck; Anas species (various)`);
// 2747	雅: yǎ 牙 yá	隹 short-tailed bird; sparrow
phonsem("雅", "牙", "隹", 4, `elegant, graceful, refined`);
// 2748	蜡: là 昔 xī	虫 insect, worm; mollusk
semphon("蜡", "虫", "昔", 6, `candle, wax; maggot`, simplified("蠟"));
// 2750	烛: zhú 虫 chóng	火 fire, flame; to burn; anger, rage
semphon("烛", "火", "虫", 4, `candle, taper; to illuminate, to shine`, simplified("燭"));
// 2751	燭: zhú 蜀 shǔ	火 fire, flame; to burn; anger, rage
semphon("燭", "火", "蜀", 4, `candle, taper; to illuminate, to shine`);
// 2752	盆: pén 分 fēn	皿 dish, vessel; shallow container
phonsem("盆", "分", "皿", 4, `basin, bowl, pot, tub`);
// 2753	剂: jì 齐 qí	刂 knife
phonsem("剂", "齐", "刂", 6, `dose; medicine; measure word for medicines`, simplified("劑"));
// 2754	劑: jì 齊 qí	刂 knife
phonsem("劑", "齊", "刂", 14, `dose; medicine; measure word for medicines`);
// 2755	惨: cǎn 参 cān	忄 heart; mind; soul
semphon("惨", "忄", "参", 3, `miserable, wretched; cruel, inhuman`, simplified("慘"));
// 2756	慘: cǎn 參 cān	忄 heart; mind; soul
semphon("慘", "忄", "參", 3, `miserable, wretched; cruel, inhuman`);
// 2757	翅: chì 支 zhī	羽 feather, plume; wings
phonsem("翅", "支", "羽", 4, `wings; fins`, simplified("翄"));
// 2759	朴: pǔ 卜 bo	木 tree; wood, lumber; wooden
semphon("朴", "木", "卜", 4, `plain, simple; sincere; surname`, simplified("樸"));
// 2766	啥: shà 舍 shě	口 mouth; entrance, gate, opening
semphon("啥", "口", "舍", 3, `what?`);
// 2767	棋: qí 其 qí	木 tree; wood, lumber; wooden
semphon("棋", "木", "其", 4, `chess; any strategy game`, simplified("碁"));
// 2772	盯: dīng 丁 dīng	目 eye; to look, to see; division, topic
semphon("盯", "目", "丁", 5, `to rivet one's gaze upon; to keep eyes on`);
// 2773	忠: zhōng 中 zhōng	心 heart; mind; soul
phonsem("忠", "中", "心", 4, `loyalty, devotion, fidelity`);
// 2774	粮: liáng 良 liáng	米 rice, millet, grain
semphon("粮", "米", "良", 6, `food, grain, provisions`, simplified("糧"));
// 2776	络: luò 各 gè	纟 silk; thread
semphon("络", "纟", "各", 3, `web, net; to entangle`, simplified("絡"));
// 2777	絡: luò 各 gè	糹 silk; thread
semphon("絡", "糹", "各", 6, `web, net; to entangle`);
// 2778	煤: méi 某 mǒu	火 fire, flame; to burn; anger, rage
semphon("煤", "火", "某", 4, `carbon, charcoal, coal, coke`);
// 2780	儀: yí 義 yì	亻 man, person; people
semphon("儀", "亻", "義", 2, `instrument, apparatus; ceremony, rites`);
// 2782	锐: ruì 兑 duì	钅 gold, metal; money
semphon("锐", "钅", "兑", 5, `sharp, pointed; keen, acute`, simplified("銳"));
// 2783	銳: ruì 兌 duì	釒 gold, metal; money
semphon("銳", "釒", "兌", 8, `sharp, pointed; keen, acute`);
// 2784	晨: chén 辰 chén	日 sun; day; daytime
semphon("晨", "日", "辰", 4, `dawn, early morning`);
// 2785	洒: sǎ 西 xī	氵 water
semphon("洒", "氵", "西", 3, `to pour, to spill; to scatter, to shed; to wipe away`, simplified("灑"));
// 2786	灑: sǎ 麗 lì	氵 water
semphon("灑", "氵", "麗", 3, `to pour, to spill; to scatter, to shed; to wipe away`);
// 2793	掩: yǎn 奄 yǎn	扌 hand
semphon("掩", "扌", "奄", 3, `to cover up (with a hand); to ambush, to conceal; to shut`);
// 2795	铜: tóng 同 tóng	钅 gold, metal; money
semphon("铜", "钅", "同", 5, `copper, bronze`, simplified("銅"));
// 2796	銅: tóng 同 tóng	釒 gold, metal; money
semphon("銅", "釒", "同", 8, `copper, bronze`);
// 2798	纹: wén 文 wén	纟 silk; thread
semphon("纹", "纟", "文", 3, `line, stripe; pattern, decoration; wrinkle`, simplified("紋"));
// 2799	紋: wén 文 wén	糹 silk; thread
semphon("紋", "糹", "文", 6, `line, stripe; pattern, decoration; wrinkle`);
// 2800	煎: jiān 前 qián	灬 fire
phonsem("煎", "前", "灬", 9, `to fry in fat or oil; to boil in water`);
// 2802	斜: xié 余 yú	斗 to struggle, to fight, to contend; measuring cup
phonsem("斜", "余", "斗", 7, `slanting, sloping, inclined`);
// 2803	嚷: rǎng 襄 xiāng	口 mouth; entrance, gate, opening
semphon("嚷", "口", "襄", 3, `to shout, to roar, to cry; to brawl`);
// 2804	沮: jǔ 且 qiě	氵 water
semphon("沮", "氵", "且", 3, `to stop, to prevent; dejected, defeated`);
// 2807	偏: piān 扁 biǎn	亻 man, person; people
semphon("偏", "亻", "扁", 2, `slanting, inclined; prejudiced`);
// 2808	叙: xù 余 yú	又 and, also, again, in addition
phonsem("叙", "余", "又", 7, `to express, to state; to relate, to narrate`, simplified("敘"));
// 2809	敘: xù 余 yú	攵 to rap, to tap; script; to let go
phonsem("敘", "余", "攵", 7, `to express, to state; to relate, to narrate`);
// 2811	嫌: xián 兼 jiān	女 woman, girl; female
semphon("嫌", "女", "兼", 3, `to hate, to detest; to criticize; to suspect`);
// 2812	诞: dàn 延 yán	讠 words, speech; to speak, to say
semphon("诞", "讠", "延", 2, `to give birth, to bear children; birth, birthday`, simplified("誕"));
// 2813	誕: dàn 延 yán	言 words, speech; to speak, to say
semphon("誕", "言", "延", 7, `to give birth, to bear children; birth, birthday`);
// 2814	咨: zī 次 cì	口 mouth; entrance, gate, opening
phonsem("咨", "次", "口", 6, `to inquire, to consult, to discuss; to plan`);
// 2822	怨: yuàn 夗 yuàn	心 heart; mind; soul
phonsem("怨", "夗", "心", 5, `to blame, to complain, to hate; enmity, resentment`);
// 2823	嘱: zhǔ 属 shǔ	口 mouth; entrance, gate, opening
semphon("嘱", "口", "属", 3, `to instruct, to order, to tell; testament`, simplified("囑"));
// 2824	囑: zhǔ 屬 shǔ	口 mouth; entrance, gate, opening
semphon("囑", "口", "屬", 3, `to instruct, to order, to tell; testament`);
// 2825	愁: chóu 秋 qiū	心 heart; mind; soul
phonsem("愁", "秋", "心", 9, `anxious, worried`);
// 2826	秩: zhì 失 shī	禾 cereal, grain, rice; plant, stalk
semphon("秩", "禾", "失", 5, `order; ordered`);
// 2829	践: jiàn 戋 jiān	足 foot; to attain, to satisfy; enough
semphon("践", "足", "戋", 7, `to trample, to tread on, to walk over`, simplified("踐"));
// 2830	踐: jiàn 戔 jiān	足 foot; to attain, to satisfy; enough
semphon("踐", "足", "戔", 7, `to trample, to tread on, to walk over`);
// 2836	晒: shài 西 xī	日 sun; day; daytime
semphon("晒", "日", "西", 4, `to dry in the sun; to expose to the sun`, simplified("曬"));
// 2837	曬: shài 麗 lì	日 sun; day; daytime
semphon("曬", "日", "麗", 4, `to dry in the sun; to expose to the sun`);
// 2838	帐: zhàng 长 zhǎng	巾 cloth, curtain, handkerchief, towel
semphon("帐", "巾", "长", 3, `tent, screen, mosquito net; debt, credit, account`, simplified("帳"));
// 2839	帳: zhàng 長 zhǎng	巾 cloth, curtain, handkerchief, towel
semphon("帳", "巾", "長", 3, `tent, screen, mosquito net; debt, credit, account`);
// 2841	痒: yǎng 羊 yáng	疒 sickness, disease
semphon("痒", "疒", "羊", 5, `to itch; to tickle`, simplified("癢"));
// 2847	抵: dǐ 氐 dī	扌 hand
semphon("抵", "扌", "氐", 3, `to resist; to arrive; mortgage`);
// 2848	壮: zhuàng 丬 qiáng	士 scholar, gentleman; soldier
phonsem("壮", "丬", "士", 3, `big, large; robust, strong; the name of a tribe`, simplified("壯"));
// 2849	壯: zhuàng 爿 qiáng	士 scholar, gentleman; soldier
phonsem("壯", "爿", "士", 4, `big, large; robust, strong; the name of a tribe`);
// 2850	佳: jiā 圭 guī	亻 man, person; people
semphon("佳", "亻", "圭", 2, `good, auspicious; beautiful; delightful`);
// 2851	泡: pào 包 bāo	氵 water
semphon("泡", "氵", "包", 3, `bubble, blister; swollen, puffed up`);
// 2852	绑: bǎng 邦 bāng	纟 silk; thread
semphon("绑", "纟", "邦", 3, `to tie, to fasten, to bind`, simplified("綁"));
// 2853	綁: bǎng 邦 bāng	糹 silk; thread
semphon("綁", "糹", "邦", 6, `to tie, to fasten, to bind`);
// 2857	郊: jiāo 交 jiāo	阝 place, town, city
phonsem("郊", "交", "阝", 6, `suburbs, outskirts; wasteland, open space`);
// 2858	抄: chāo 少 shǎo	扌 hand
semphon("抄", "扌", "少", 3, `copy, plagiarism; to confiscate, to seize`);
// 2862	蝶: dié 枼 yè	虫 insect, worm; mollusk
semphon("蝶", "虫", "枼", 6, `butterfly`, simplified("蜨"));
// 2864	吩: fēn 分 fēn	口 mouth; entrance, gate, opening
semphon("吩", "口", "分", 3, `to order, to command; to instruct`);
// 2865	咐: fù 付 fù	口 mouth; entrance, gate, opening
semphon("咐", "口", "付", 3, `to instruct; to order`);
// 2866	厢: xiāng 相 xiāng	厂 cliff; factory, workshop; building
semphon("厢", "厂", "相", 2, `side-room, wing; theatre box`, simplified("廂"));
// 2867	廂: xiāng 相 xiāng	广 broad, vast, wide; building, house
semphon("廂", "广", "相", 3, `side-room, wing; theatre box`);
// 2868	恳: kěn 艮 gěn	心 heart; mind; soul
phonsem("恳", "艮", "心", 6, `sincere, earnest, cordial`, simplified("懇"));
// 2872	裂: liè 列 liè	衣 cloth; clothes, apparel; dress, coat
phonsem("裂", "列", "衣", 6, `to split, to rend; crevice, crack`);
// 2873	狡: jiǎo 交 jiāo	犭 dog
semphon("狡", "犭", "交", 3, `cunning, deceitful, treacherous`);
// 2874	猾: huá 骨 gǔ	犭 dog
semphon("猾", "犭", "骨", 3, `crafty, cunning, shrewd; deceitful`);
// 2875	埋: mái 里 lǐ	土 soil, earth; items made of earth
semphon("埋", "土", "里", 3, `to bury; to conceal; to plant`);
// 2876	劫: jié 去 qù	力 strength, power; capability, influence
phonsem("劫", "去", "力", 5, `to take by force, to coerce; disaster; misfortune`, simplified("刦"));
// 2880	趋: qū 刍 chú	走 to walk, to run, to flee
semphon("趋", "走", "刍", 7, `to hurry, to hasten; to approach, to be attracted to`, simplified("趨"));
// 2881	趨: qū 芻 chú	走 to walk, to run, to flee
semphon("趨", "走", "芻", 7, `to hurry, to hasten; to approach, to be attracted to`);
// 2882	谦: qiān 兼 jiān	讠 words, speech; to speak, to say
semphon("谦", "讠", "兼", 2, `humble, modest`, simplified("謙"));
// 2883	謙: qiān 兼 jiān	言 words, speech; to speak, to say
semphon("謙", "言", "兼", 7, `humble, modest`);
// 2886	鸽: gē 合 hé	鸟 bird
phonsem("鸽", "合", "鸟", 6, `pigeon, dove; Columba species (various)`, simplified("鴿"));
// 2887	鴿: gē 合 hé	鳥 bird
phonsem("鴿", "合", "鳥", 6, `pigeon, dove; Columba species (various)`);
// 2888	拼: pīn 并 bìng	扌 hand
semphon("拼", "扌", "并", 3, `to link, to join together; to incorporate`);
// 2889	橡: xiàng 象 xiàng	木 tree; wood, lumber; wooden
semphon("橡", "木", "象", 4, `chestnut oak; rubber tree; rubber`);
// 2890	耶: yé 阝 yì	耳 ear; to hear, to hear of; handle
semphon("耶", "耳", "阝", 6, `used in transliterations`);
// 2895	伊: yī 尹 yǐn	亻 man, person; people
semphon("伊", "亻", "尹", 2, `he she; this, that; used in transliterations`);
// 2896	舅: jiù 臼 jiù	男 man, boy; male; baron; surname
phonsem("舅", "臼", "男", 6, `mother's brother, uncle`);
// 2898	欺: qī 其 qí	欠 to lack, to owe; to breathe, to yawn
phonsem("欺", "其", "欠", 8, `to cheat, to double-cross, to deceive`);
// 2901	吨: dūn 屯 tún	口 mouth; entrance, gate, opening
semphon("吨", "口", "屯", 3, `a metric ton`, simplified("噸"));
// 2911	鞭: biān 便 biàn	革 leather, animal hide; to reform; to remove
semphon("鞭", "革", "便", 9, `whip; to lash, to flog`);
// 2912	仇: chóu 九 jiǔ	亻 man, person; people
semphon("仇", "亻", "九", 2, `enemy; hatred, enmity`);
// 2913	虹: hóng 工 gōng	虫 insect, worm; mollusk
semphon("虹", "虫", "工", 6, `rainbow`);
// 2918	坞: wù 乌 wū	土 soil, earth; items made of earth
semphon("坞", "土", "乌", 3, `bank, entrenchment, low wall; dock`, simplified("塢"));
// 2919	塢: wù 烏 wū	土 soil, earth; items made of earth
semphon("塢", "土", "烏", 3, `bank, entrenchment, low wall; dock`);
// 2921	莱: lái 来 lái	艹 grass, weed, plant, herb
semphon("莱", "艹", "来", 3, `weed, goosefoot; fallow field; used in transliterations`, simplified("萊"));
// 2922	萊: lái 來 lái	艹 grass, weed, plant, herb
semphon("萊", "艹", "來", 4, `weed, goosefoot; fallow field; used in transliterations`);
// 2928	扣: kòu 口 kǒu	扌 hand
semphon("扣", "扌", "口", 3, `to detain; to knock, to tap; button`, simplified("釦"));
// 2929	釦: kòu 口 kǒu	釒 gold, metal; money
semphon("釦", "釒", "口", 8, `button; buckle, clasp; to engrave`);
// 2930	洁: jié 吉 jí	氵 water
semphon("洁", "氵", "吉", 3, `clean, pure; to purify, to cleanse`, simplified("潔"));
// 2935	窃: qiè 切 qiè	穴 cave, den, hole
semphon("窃", "穴", "切", 5, `to steal; thief; secret, stealthy`, simplified("竊"));
// 2938	猎: liè 昔 xī	犭 dog
semphon("猎", "犭", "昔", 3, `hunting; field sports`, simplified("獵"));
// 2941	牺: xī 西 xī	牛 ox, cow, bull
semphon("牺", "牛", "西", 4, `to sacrifice, to give up, to die for a cause`, simplified("犧"));
// 2943	牲: shēng 生 shēng	牛 ox, cow, bull
semphon("牲", "牛", "生", 4, `sacrificial animal; domestic animal`);
// 2945	昬: hūn 民 mín	日 sun; day; daytime
phonsem("昬", "民", "日", 5, `dusk; dark, confused; stupid`);
// 2947	胎: tāi 台 tái	⺼ meat, flesh; organic compound
semphon("胎", "⺼", "台", 4, `embryo, fetus; car tire`);
// 2948	胞: bāo 包 bāo	⺼ meat, flesh; organic compound
semphon("胞", "⺼", "包", 4, `womb, placenta, fetal membrane`);
// 2949	痕: hén 艮 gěn	疒 sickness, disease
semphon("痕", "疒", "艮", 5, `scar, mark; vestige, trace`);
// 2950	患: huàn 串 chuàn	心 heart; mind; soul
phonsem("患", "串", "心", 7, `suffering; misfortune; trouble; to suffer`);
// 2951	伪: wěi 为 wèi	亻 man, person; people
semphon("伪", "亻", "为", 2, `false, counterfeit, bogus`, simplified("偽"));
// 2952	偽: wěi 為 wèi	亻 man, person; people
semphon("偽", "亻", "為", 2, `false, counterfeit, bogus`);
// 2963	澤: zé 睪 yì	氵 water
semphon("澤", "氵", "睪", 3, `marsh, swamp; brilliance, grace`);
// 2965	徑: jìng 巠 jīng	彳 to step with the left foot
semphon("徑", "彳", "巠", 3, `path, diameter; straight, direct`);
// 2966	浇: jiāo 尧 yáo	氵 water
semphon("浇", "氵", "尧", 3, `to spray, to sprinkle, to water`, simplified("澆"));
// 2967	澆: jiāo 堯 yáo	氵 water
semphon("澆", "氵", "堯", 3, `to spray, to sprinkle, to water`);
// 2971	晓: xiǎo 尧 yáo	日 sun; day; daytime
semphon("晓", "日", "尧", 4, `dawn; clear, explicit, known`, simplified("曉"));
// 2972	曉: xiǎo 堯 yáo	日 sun; day; daytime
semphon("曉", "日", "堯", 4, `dawn; clear, explicit, known`);
// 2973	厘: lí 里 lǐ	厂 cliff; factory, workshop; building
semphon("厘", "厂", "里", 2, `one thousandth`, simplified("釐"));
// 2981	炭: tàn 山 shān	灰 ashes; dust; lime, mortar
phonsem("炭", "山", "灰", 3, `carbon, charcoal, coal`);
// 2985	盟: méng 明 míng	皿 dish, vessel; shallow container
phonsem("盟", "明", "皿", 8, `alliance, covenant; oath; to swear`);
// 2988	恰: qià 合 hé	忄 heart; mind; soul
semphon("恰", "忄", "合", 3, `just, exactly, precisely; proper`);
// 2989	钻: zuān 占 zhàn	钅 gold, metal; money
semphon("钻", "钅", "占", 5, `diamond; to bore, to drill, to pierce`, simplified("鑽"));
// 2992	浴: yù 谷 gǔ	氵 water
semphon("浴", "氵", "谷", 3, `to bathe, to shower, to wash`);
// 2993	纵: zòng 从 cóng	纟 silk; thread
semphon("纵", "纟", "从", 3, `to indulge in, to give free reign to`, simplified("縱"));
// 2994	縱: zòng 從 cóng	糹 silk; thread
semphon("縱", "糹", "從", 6, `to indulge in, to give free reign to`);
// 2995	珠: zhū 朱 zhū	王 king, ruler; royal; surname
semphon("珠", "王", "朱", 4, `gem, jewel, pearl, precious stone`);
// 3001	媒: méi 某 mǒu	女 woman, girl; female
semphon("媒", "女", "某", 3, `go-between, matchmaker; medium`);
// 3012	勒: lēi 革 gé	力 strength, power; capability, influence
phonsem("勒", "革", "力", 9, `to strangle; to tighten`);
// 3014	沃: wò 夭 yāo	氵 water
semphon("沃", "氵", "夭", 3, `to water, to irrigate; fertile, rich`);
// 3016	禍: huò 咼 guō	礻 spirit
semphon("禍", "礻", "咼", 4, `misfortune, disaster, calamity`);
// 3018	讶: yà 牙 yá	讠 words, speech; to speak, to say
semphon("讶", "讠", "牙", 2, `amazed, surprised; to express surprise`, simplified("訝"));
// 3019	訝: yà 牙 yá	言 words, speech; to speak, to say
semphon("訝", "言", "牙", 7, `amazed, surprised; to express surprise`);
// 3021	纲: gāng 冈 gāng	纟 silk; thread
semphon("纲", "纟", "冈", 3, `program, outline; principle, guiding thread`, simplified("綱"));
// 3022	綱: gāng 岡 gāng	糹 silk; thread
semphon("綱", "糹", "岡", 6, `program, outline; principle, guiding thread`);
// 3023	揭: jiē 曷 hé	扌 hand
semphon("揭", "扌", "曷", 3, `to lift off a cover; to reveal, to divulge; surname`);
// 3028	泥: ní 尼 ní	氵 water
semphon("泥", "氵", "尼", 3, `mud, earth, clay; plaster, paste`);
// 3029	溜: liū 留 liú	氵 water
semphon("溜", "氵", "留", 3, `to slip, to slide, to glide; slippery`);
// 3030	杜: dù 土 tǔ	木 tree; wood, lumber; wooden
semphon("杜", "木", "土", 4, `to prevent, to restrict, to stop; surname`);
// 3031	泄: xiè 世 shì	氵 water
semphon("泄", "氵", "世", 3, `drip, leak, vent; to disperse; to reduce`, simplified("洩"));
// 3033	髦: máo 毛 máo	髟 long hair
semphon("髦", "髟", "毛", 10, `fashionable, in vogue; mane, flowing hair`);
// 3034	臂: bì 辟 pì	⺼ meat, flesh; organic compound
phonsem("臂", "辟", "⺼", 13, `arm`);
// 3035	狠: hěn 艮 gěn	犭 dog
semphon("狠", "犭", "艮", 3, `vicious, fierce, cruel`);
// 3040	绸: chóu 周 zhōu	纟 silk; thread
semphon("绸", "纟", "周", 3, `silk cloth, satin damask`, simplified("綢"));
// 3041	綢: chóu 周 zhōu	糹 silk; thread
semphon("綢", "糹", "周", 6, `silk cloth, satin damask`);
// 3044	割: gē 害 hài	刂 knife
phonsem("割", "害", "刂", 10, `to cut, to divide, to partition; to cede`);
// 3049	诸: zhū 者 zhě	讠 words, speech; to speak, to say
semphon("诸", "讠", "者", 2, `all, many, various; surname`, simplified("諸"));
// 3050	諸: zhū 者 zhě	言 words, speech; to speak, to say
semphon("諸", "言", "者", 7, `all, many, various; surname`);
// 3054	逊: xùn 孙 sūn	辶 to walk; walking
semphon("逊", "辶", "孙", 6, `humble, modest; to yield`, simplified("遜"));
// 3055	遜: xùn 孫 sūn	辶 to walk; walking
semphon("遜", "辶", "孫", 10, `humble, modest; to yield`);
// 3059	梨: lí 利 lì	木 tree; wood, lumber; wooden
phonsem("梨", "利", "木", 7, `pear; opera`);
// 3062	押: yā 甲 jiǎ	扌 hand
semphon("押", "扌", "甲", 3, `to arrest, to detain; to deposit, to pledge; mortgage`);
// 3063	逍: xiāo 肖 xiào	辶 to walk; walking
semphon("逍", "辶", "肖", 7, `to ramble, to stroll; to jaunt, to loiter`);
// 3064	遥: yáo 䍃 yóu	辶 to walk; walking
semphon("遥", "辶", "䍃", 10, `distant, remote`, simplified("遙"));
// 3065	遙: yáo 䍃 yóu	辶 to walk; walking
semphon("遙", "辶", "䍃", 10, `distant, remote`);
// 3076	瞞: mán 㒼 mán	目 eye; to look, to see; division, topic
semphon("瞞", "目", "㒼", 5, `to deceive, to lie; to regard with suspicion`);
// 3078	鑒: jiàn 監 jiān	金 gold, metal; money
phonsem("鑒", "監", "金", 14, `mirror, looking glass; to reflect`);
// 3079	鑑: jiàn 監 jiān	釒 gold, metal; money
semphon("鑑", "釒", "監", 8, `mirror, looking glass; to reflect`);
// 3086	愈: yù 俞 yú	心 heart; mind; soul
phonsem("愈", "俞", "心", 9, `to recover, to heal; more and more`, simplified("癒"));
// 3094	浏: liú 刘 liú	氵 water
semphon("浏", "氵", "刘", 3, `bright; clear; deep; swift`, simplified("瀏"));
// 3095	瀏: liú 劉 liú	氵 water
semphon("瀏", "氵", "劉", 3, `bright; clear; deep; swift`);
// 3101	舰: jiàn 见 jiàn	舟 boat, ship
semphon("舰", "舟", "见", 6, `warship`, simplified("艦"));
// 3102	艦: jiàn 監 jiān	舟 boat, ship
semphon("艦", "舟", "監", 6, `warship`);
// 3106	忧: yōu 尤 yóu	忄 heart; mind; soul
semphon("忧", "忄", "尤", 3, `sad, grieving; melancholy, grief`, simplified("憂"));
// 3110	抚: fǔ 无 wú	扌 hand
semphon("抚", "扌", "无", 3, `to pat, to console; to stroke, to caress`, simplified("撫"));
// 3111	撫: fǔ 無 wú	扌 hand
semphon("撫", "扌", "無", 3, `to pat, to console; to stroke, to caress`);
// 3113	忌: jì 己 jǐ	心 heart; mind; soul
phonsem("忌", "己", "心", 3, `jealous, envious; to fear; to shun`);
// 3115	渡: dù 度 dù	氵 water
semphon("渡", "氵", "度", 3, `to cross, to ferry over, to pass through`);
// 3116	筹: chóu 寿 shòu	⺮ bamboo; flute
semphon("筹", "⺮", "寿", 6, `chip, tally, token; to plan; to raise money`, simplified("籌"));
// 3117	籌: chóu 壽 shòu	⺮ bamboo; flute
semphon("籌", "⺮", "壽", 6, `chip, tally, token; to plan; to raise money`);
// 3119	耻: chǐ 止 zhǐ	耳 ear; to hear, to hear of; handle
semphon("耻", "耳", "止", 6, `shame, humiliation; ashamed`, simplified("恥"));
// 3123	辜: gū 古 gǔ	辛 bitter; toilsome, laborious; 8th heavenly stem
phonsem("辜", "古", "辛", 5, `crime, offense, sin`);
// 3124	郁: yù 有 yǒu	阝 place, town, city
phonsem("郁", "有", "阝", 6, `melancholy; dense growth`, simplified("鬱"));
// 3128	闷: mèn 门 mén	心 heart; mind; soul
phonsem("闷", "门", "心", 3, `gloomy, depressed, melancholy`, simplified("悶"));
// 3129	悶: mèn 門 mén	心 heart; mind; soul
phonsem("悶", "門", "心", 8, `gloomy, depressed, melancholy`);
// 3134	仙: xiān 山 shān	亻 man, person; people
semphon("仙", "亻", "山", 2, `god; fairy; immortal, transcendent`, simplified("僊"));
// 3136	崇: chóng 宗 zōng	山 mountain, hill, peak
semphon("崇", "山", "宗", 3, `high, dignified; to esteem, to honor`);
// 3139	袖: xiù 由 yóu	衤 cloth
semphon("袖", "衤", "由", 5, `sleeve`);
// 3142	捉: zhuō 足 zú	扌 hand
semphon("捉", "扌", "足", 3, `to clutch, to grasp, to seize`);
// 3143	驱: qū 区 qū	马 horse; surname
semphon("驱", "马", "区", 3, `to spur a horse on; to expel, to drive away`, simplified("驅"));
// 3144	驅: qū 區 qū	馬 horse; surname
semphon("驅", "馬", "區", 10, `to spur a horse on; to expel, to drive away`);
// 3149	痴: chī 知 zhī	疒 sickness, disease
semphon("痴", "疒", "知", 5, `foolish, stupid, dumb, silly`, simplified("癡"));
// 3160	坟: fén 文 wén	土 soil, earth; items made of earth
semphon("坟", "土", "文", 3, `grave, mound, bulge; bulging`, simplified("墳"));
// 3162	墓: mù 莫 mò	土 soil, earth; items made of earth
phonsem("墓", "莫", "土", 10, `grave, tomb`);
// 3164	弥: mí 尔 ěr	弓 bow; curved, arched
semphon("弥", "弓", "尔", 3, `complete, extensive, full; to fill`, simplified("彌"));
// 3165	彌: mí 爾 ěr	弓 bow; curved, arched
semphon("彌", "弓", "爾", 3, `complete, extensive, full; to fill`);
// 3167	崩: bēng 朋 péng	山 mountain, hill, peak
semphon("崩", "山", "朋", 3, `to rupture, to split apart; to collapse; death, demise`);
// 3168	溃: kuì 贵 guì	氵 water
semphon("溃", "氵", "贵", 3, `a flooding river; a military defeat; to break down, to disperse`, simplified("潰"));
// 3169	潰: kuì 貴 guì	氵 water
semphon("潰", "氵", "貴", 3, `a flooding river; a military defeat; to break down, to disperse`);
// 3172	箭: jiàn 前 qián	⺮ bamboo; flute
semphon("箭", "⺮", "前", 6, `arrow; a type of bamboo`);
// 3174	桔: jú 吉 jí	木 tree; wood, lumber; wooden
semphon("桔", "木", "吉", 4, `orange, tangerine`);
// 3176	吞: tūn 天 tiān	口 mouth; entrance, gate, opening
phonsem("吞", "天", "口", 4, `to absorb, to annex; to engulf; to swallow`);
// 3178	汰: tài 太 tài	氵 water
semphon("汰", "氵", "太", 3, `to eliminate, to scour, to wash out; excessive`);
// 3179	呵: hē 可 kě	口 mouth; entrance, gate, opening
semphon("呵", "口", "可", 3, `to scold; to yawn; the sound of someone laughing (when repeated)`);
// 3182	铺: pù 甫 fǔ	钅 gold, metal; money
semphon("铺", "钅", "甫", 5, `shop, store; bed, mattress`, simplified("鋪"));
// 3183	鋪: pù 甫 fǔ	釒 gold, metal; money
semphon("鋪", "釒", "甫", 8, `shop, store; bed, mattress`);
// 3184	舖: pù 甫 fǔ	舍 house, dwelling; to reside, to dwell; to abandon, to give up
semphon("舖", "舍", "甫", 8, `store, shop; bunk, bed`);
// 3191	玛: mǎ 马 mǎ	王 king, ruler; royal; surname
semphon("玛", "王", "马", 4, `agate, cornelian`, simplified("瑪"));
// 3192	瑪: mǎ 馬 mǎ	王 king, ruler; royal; surname
semphon("瑪", "王", "馬", 4, `agate, cornelian`);
// 3193	艇: tǐng 廷 tíng	舟 boat, ship
semphon("艇", "舟", "廷", 6, `dugout, punt, small boat`);
// 3194	侠: xiá 夹 jiā	亻 man, person; people
semphon("侠", "亻", "夹", 2, `chivalrous person; knight-errant`, simplified("俠"));
// 3198	唇: chún 辰 chén	口 mouth; entrance, gate, opening
phonsem("唇", "辰", "口", 7, `lips`, simplified("脣"));
// 3199	脣: chún 辰 chén	⺼ meat, flesh; organic compound
phonsem("脣", "辰", "⺼", 7, `lips`);
// 3201	蠻: mán 䜌 luán	虫 insect, worm; mollusk
phonsem("蠻", "䜌", "虫", 19, `barbarians; barbarous, rude, savage`);
// 3202	轨: guǐ 九 jiǔ	车 cart, vehicle; to move in a cart
semphon("轨", "车", "九", 4, `track, rut, path`, simplified("軌"));
// 3203	軌: guǐ 九 jiǔ	車 cart, vehicle; to move in a cart
semphon("軌", "車", "九", 7, `track, rut, path`);
// 3206	扑: pū 卜 bo	扌 hand
semphon("扑", "扌", "卜", 3, `to attack, to beat, to hit, to strike`, simplified("撲"));
// 3210	棍: gùn 昆 kūn	木 tree; wood, lumber; wooden
semphon("棍", "木", "昆", 4, `stick, cudgel; scoundrel`);
// 3219	鑪: lú 盧 lú	釒 gold, metal; money
semphon("鑪", "釒", "盧", 8, `fireplace, stove; oven; furnace`);
// 3221	杆: gān 干 gàn	木 tree; wood, lumber; wooden
semphon("杆", "木", "干", 4, `cane, pole, stick`, simplified("桿"));
// 3226	妒: dù 户 hù	女 woman, girl; female
semphon("妒", "女", "户", 3, `jealous, envious`, simplified("妬"));
// 3228	淇: qí 其 qí	氵 water
semphon("淇", "氵", "其", 3, `a river in Henan province`);
// 3229	淋: lín 林 lín	氵 water
semphon("淋", "氵", "林", 3, `to drench, to drip, to soak; perfectly`);
// 3230	肿: zhǒng 中 zhōng	⺼ meat, flesh; organic compound
semphon("肿", "⺼", "中", 4, `swelling; swollen; to swell`, simplified("腫"));
// 3233	晃: huǎng 光 guāng	日 sun; day; daytime
semphon("晃", "日", "光", 4, `bright, dazzling; to shake, to sway`, simplified("㨪"));
// 3235	腹: fù 复 fù	⺼ meat, flesh; organic compound
semphon("腹", "⺼", "复", 4, `stomach, belly, abdomen; inside`);
// 3236	腔: qiāng 空 kōng	⺼ meat, flesh; organic compound
semphon("腔", "⺼", "空", 4, `chest cavity; a hollow in the body`);
// 3244	窩: wō 咼 guō	穴 cave, den, hole
semphon("窩", "穴", "咼", 5, `cave, den, nest; hiding place; measure word for small animals`);
// 3247	脾: pí 卑 bēi	⺼ meat, flesh; organic compound
semphon("脾", "⺼", "卑", 4, `spleen, pancreas; temper, disposition`);
// 3251	拘: jū 句 jù gōu	扌 hand
semphon("拘", "扌", "句", 3, `to detain, to restrain, to seize`);
// 3252	氧: yǎng 羊 yáng	气 air, gas; steam, vapor; anger
semphon("氧", "气", "羊", 4, `oxygen`);
// 3259	屏: píng 并 bìng	户 door; family
semphon("屏", "户", "并", 3, `screen, shield; to put aside, to reject; to hold`);
// 3260	耗: hào 毛 máo	耒 plow
semphon("耗", "耒", "毛", 6, `to consume, to use up; to squander, to waste`);
// 3261	尴: gān 监 jiān	尢 weak, lame
semphon("尴", "尢", "监", 3, `embarrassed; ill-at-ease`, simplified("尷"));
// 3262	尷: gān 監 jiān	尢 weak, lame
semphon("尷", "尢", "監", 3, `embarrassed; ill-at-ease`);
// 3263	尬: gà 介 jiè	尢 weak, lame
semphon("尬", "尢", "介", 3, `awkward, embarrassed; to limp, to stagger`);
// 3264	昂: áng 卬 áng	日 sun; day; daytime
semphon("昂", "日", "卬", 4, `to rise; proud, bold, upright`);
// 3265	贩: fàn 反 fǎn	贝 sea shell; money, currency
semphon("贩", "贝", "反", 4, `merchant, peddler; to deal in, to trade`, simplified("販"));
// 3266	販: fàn 反 fǎn	貝 sea shell; money, currency
semphon("販", "貝", "反", 7, `merchant, peddler; to deal in, to trade`);
// 3270	巖: yán 嚴 yán	山 mountain, hill, peak
semphon("巖", "山", "嚴", 3, `cliff, precipice; cave, grotto`);
// 3271	嵒: yán 品 pǐn	山 mountain, hill, peak
phonsem("嵒", "品", "山", 9, `cliff, rocks, mountain`);
// 3279	妆: zhuāng 丬 qiáng	女 woman, girl; female
phonsem("妆", "丬", "女", 3, `adornment, make-up; to dress up, to use make-up`, simplified("妝"));
// 3280	妝: zhuāng 爿 qiáng	女 woman, girl; female
phonsem("妝", "爿", "女", 4, `adornment, make-up; to dress up, to use make-up`);
// 3284	咙: lóng 龙 lóng	口 mouth; entrance, gate, opening
semphon("咙", "口", "龙", 3, `throat`, simplified("嚨"));
// 3285	嚨: lóng 龍 lóng	口 mouth; entrance, gate, opening
semphon("嚨", "口", "龍", 3, `throat`);
// 3286	搅: jiǎo 觉 jué	扌 hand
semphon("搅", "扌", "觉", 3, `to annoy, to disturb, to stir up`, simplified("攪"));
// 3287	攪: jiǎo 覺 jué	扌 hand
semphon("攪", "扌", "覺", 3, `to annoy, to disturb, to stir up`);
// 3288	仗: zhàng 丈 zhàng	亻 man, person; people
semphon("仗", "亻", "丈", 2, `1to rely upon; protector; to fight; war, weaponry`);
// 3289	贼: zéi 贝 bèi	戎 arms, armaments; military affairs
phonsem("贼", "贝", "戎", 4, `thief, traitor; cunning, sly`, simplified("賊"));
// 3290	賊: zéi 貝 bèi	戎 arms, armaments; military affairs
phonsem("賊", "貝", "戎", 7, `thief, traitor; cunning, sly`);
// 3291	挽: wǎn 免 miǎn	扌 hand
semphon("挽", "扌", "免", 3, `to pull, to lead; to pull back, to draw a bow`, simplified("輓"));
// 3292	輓: wǎn 免 miǎn	車 cart, vehicle; to move in a cart
semphon("輓", "車", "免", 7, `to pull, to lead; to pull back, to draw a bow`);
// 3293	刊: kān 干 gàn	刂 knife
phonsem("刊", "干", "刂", 3, `publication, periodical; to publish, to print`, simplified("栞"));
// 3295	稿: gǎo 高 gāo	禾 cereal, grain, rice; plant, stalk
semphon("稿", "禾", "高", 5, `draft, manuscript, rough copy`, simplified("稾"));
// 3297	竭: jié 曷 hé	立 to stand; to establish, to set up
semphon("竭", "立", "曷", 5, `to exhaust; to put forth great effort`);
// 3303	抹: mǒ 末 mò	扌 hand
semphon("抹", "扌", "末", 3, `to apply; to erase, to smear, to wipe off`);
// 3305	灌: guàn 雚 guàn	氵 water
semphon("灌", "氵", "雚", 3, `to water, to irrigate; to pour; to flood`);
// 3310	浑: hún 军 jūn	氵 water
semphon("浑", "氵", "军", 3, `blended, mixed; muddy, turbid`, simplified("渾"));
// 3311	渾: hún 軍 jūn	氵 water
semphon("渾", "氵", "軍", 3, `blended, mixed; muddy, turbid`);
// 3314	趴: pā 八 bā	足 foot; to attain, to satisfy; enough
semphon("趴", "足", "八", 7, `prone, lying down, leaning over`);
// 3321	哟: yō 约 yuē	口 mouth; entrance, gate, opening
semphon("哟", "口", "约", 3, `ah, final particle`, simplified("喲"));
// 3322	喲: yō 約 yuē	口 mouth; entrance, gate, opening
semphon("喲", "口", "約", 3, `ah, final particle`);
// 3329	丛: cóng 从 cóng	一 one; a, an; alone
phonsem("丛", "从", "一", 4, `bush, shrub; thicket; collection`, simplified("叢"));
// 3333	贪: tān 今 jīn	贝 sea shell; money, currency
phonsem("贪", "今", "贝", 4, `greedy, covetous; corrupt`, simplified("貪"));
// 3334	貪: tān 今 jīn	貝 sea shell; money, currency
phonsem("貪", "今", "貝", 4, `greedy, covetous; corrupt`);
// 3335	婪: lán 林 lín	女 woman, girl; female
phonsem("婪", "林", "女", 8, `to covet; covetous, avaricious`, simplified("惏"));
// 3343	雕: diāo 周 zhōu	隹 short-tailed bird; sparrow
phonsem("雕", "周", "隹", 8, `to carve, to engrave; eagle, vulture`, simplified("鵰"));
// 3344	鵰: diāo 周 zhōu	鳥 bird
phonsem("鵰", "周", "鳥", 8, `eagle, vulture`);
// 3346	熬: áo 敖 áo	灬 fire
phonsem("熬", "敖", "灬", 10, `to boil, to simmer; to endure pain`);
// 3347	谱: pǔ 普 pǔ	讠 words, speech; to speak, to say
semphon("谱", "讠", "普", 2, `chart, list, table; spectrum; musical score`, simplified("譜"));
// 3348	譜: pǔ 普 pǔ	言 words, speech; to speak, to say
semphon("譜", "言", "普", 7, `chart, list, table; spectrum; musical score`);
// 3349	苍: cāng 仓 cāng	艹 grass, weed, plant, herb
semphon("苍", "艹", "仓", 3, `dark blue; deep green; old, hoary`, simplified("蒼"));
// 3350	蒼: cāng 倉 cāng	艹 grass, weed, plant, herb
semphon("蒼", "艹", "倉", 4, `dark blue; deep green; old, hoary`);
// 3356	稀: xī 希 xī	禾 cereal, grain, rice; plant, stalk
semphon("稀", "禾", "希", 5, `rare, unusual; scarce, sparse`);
// 3360	笼: lóng 龙 lóng	⺮ bamboo; flute
semphon("笼", "⺮", "龙", 6, `basket; cage; bamboo basket used to serve dimsum`, simplified("籠"));
// 3361	籠: lóng 龍 lóng	⺮ bamboo; flute
semphon("籠", "⺮", "龍", 6, `basket; cage; bamboo basket used to serve dimsum`);
// 3363	垫: diàn 执 zhí	土 soil, earth; items made of earth
phonsem("垫", "执", "土", 6, `cushion, mat, pad; to advance money, to pay for another`, simplified("墊"));
// 3364	墊: diàn 執 zhí	土 soil, earth; items made of earth
phonsem("墊", "執", "土", 11, `cushion, mat, pad; to advance money, to pay for another`);
// 3367	剥: bō 录 lù	刂 knife
phonsem("剥", "录", "刂", 8, `to peel, to skin; to exploit`, simplified("剝"));
// 3368	剝: bō 彔 lù	刂 knife
phonsem("剝", "彔", "刂", 8, `to peel, to skin; to exploit`);
// 3369	挪: nuó 那 nà	扌 hand
semphon("挪", "扌", "那", 3, `to shift, to move`);
// 3370	妄: wàng 亡 wáng	女 woman, girl; female
phonsem("妄", "亡", "女", 3, `absurd, foolish, ignorant; rash, reckless, wild`);
// 3371	诈: zhà 乍 zhà	讠 words, speech; to speak, to say
semphon("诈", "讠", "乍", 2, `to cheat, to defraud; sly, treacherous`, simplified("詐"));
// 3372	詐: zhà 乍 zhà	言 words, speech; to speak, to say
semphon("詐", "言", "乍", 7, `to cheat, to defraud; sly, treacherous`);
// 3373	栋: dòng 东 dōng	木 tree; wood, lumber; wooden
semphon("栋", "木", "东", 4, `ridge-beam; the main support of a house`, simplified("棟"));
// 3374	棟: dòng 東 dōng	木 tree; wood, lumber; wooden
semphon("棟", "木", "東", 4, `ridge-beam; the main support of a house`);
// 3376	嘆: tàn 堇 jǐn	口 mouth; entrance, gate, opening
semphon("嘆", "口", "堇", 3, `to sigh, to admire`);
// 3377	歎: tàn 堇 jǐn	欠 to lack, to owe; to breathe, to yawn
phonsem("歎", "堇", "欠", 11, `to sigh; to admire`);
// 3378	谍: dié 枼 yè	讠 words, speech; to speak, to say
semphon("谍", "讠", "枼", 2, `to spy; an intelligence report`, simplified("諜"));
// 3379	諜: dié 枼 yè	言 words, speech; to speak, to say
semphon("諜", "言", "枼", 7, `to spy; an intelligence report`);
// 3380	拟: nǐ 以 yǐ	扌 hand
semphon("拟", "扌", "以", 3, `to draft, to plan; to intend`, simplified("擬"));
// 3384	磅: bàng 旁 páng	石 stone, rock, mineral
semphon("磅", "石", "旁", 5, `pound; to weigh`);
// 3386	驻: zhù 主 zhǔ	马 horse; surname
semphon("驻", "马", "主", 3, `stable; station, garrison`, simplified("駐"));
// 3387	駐: zhù 主 zhǔ	馬 horse; surname
semphon("駐", "馬", "主", 10, `stable; station, garrison`);
// 3397	殖: zhí 直 zhí	歹 corpse; death; evil, depraved, wicked
semphon("殖", "歹", "直", 4, `to breed, to spawn; to grow, to prosper`);
// 3400	津: jīn 聿 yù	氵 water
semphon("津", "氵", "聿", 3, `saliva, sweat; ferry, ford`);
// 3401	悦: yuè 兑 duì	忄 heart; mind; soul
semphon("悦", "忄", "兑", 3, `contented, gratified, pleased`, simplified("悅"));
// 3402	悅: yuè 兌 duì	忄 heart; mind; soul
semphon("悅", "忄", "兌", 3, `contented, gratified, pleased`);
// 3420	沾: zhān 占 zhàn	氵 water
semphon("沾", "氵", "占", 3, `to moisten, to soak, to wet; to touch`, simplified("霑"));
// 3423	摊: tān 难 nán	扌 hand
semphon("摊", "扌", "难", 3, `to spread out, to open, to allot; a merchant's stand`, simplified("攤"));
// 3424	攤: tān 難 nán	扌 hand
semphon("攤", "扌", "難", 3, `to spread out, to open, to allot; a merchant's stand`);
// 3427	枝: zhī 支 zhī	木 tree; wood, lumber; wooden
semphon("枝", "木", "支", 4, `branches, limbs; to branch off`);
// 3428	瘤: liú 留 liú	疒 sickness, disease
semphon("瘤", "疒", "留", 5, `tumor, lump, goiter`, simplified("癅"));
// 3430	宅: zhái 乇 tuō	宀 roof; house
semphon("宅", "宀", "乇", 3, `residence, dwelling, home; grave`);
// 3437	讼: sòng 公 gōng	讠 words, speech; to speak, to say
semphon("讼", "讠", "公", 2, `to accuse, to argue; to dispute, to litigate`, simplified("訟"));
// 3438	訟: sòng 公 gōng	言 words, speech; to speak, to say
semphon("訟", "言", "公", 7, `to accuse, to argue; to dispute, to litigate`);
// 3441	畅: chàng 昜 yáng	申 to report; to extend; to explain; to declare
semphon("畅", "申", "昜", 5, `freely, smoothly; unrestrained`, simplified("暢"));
// 3442	暢: chàng 昜 yáng	申 to report; to extend; to explain; to declare
semphon("暢", "申", "昜", 5, `freely, smoothly; unrestrained`);
// 3443	柱: zhù 主 zhǔ	木 tree; wood, lumber; wooden
semphon("柱", "木", "主", 4, `to lean on; pillar, post, support`);
// 3444	歧: qí 支 zhī	止 to stop, to halt; to detain; to desist
semphon("歧", "止", "支", 4, `to diverge, to fork; a branch; a side road`);
// 3445	膜: mó 莫 mò	⺼ meat, flesh; organic compound
semphon("膜", "⺼", "莫", 4, `membrane, film; to kneel and worship`);
// 3446	坡: pō 皮 pí	土 soil, earth; items made of earth
semphon("坡", "土", "皮", 3, `slope, hillside, embankment`);
// 3449	岗: gǎng 冈 gāng	山 mountain, hill, peak
semphon("岗", "山", "冈", 3, `post; position`, simplified("崗"));
// 3450	崗: gǎng 岡 gāng	山 mountain, hill, peak
semphon("崗", "山", "岡", 3, `post; position`);
// 3452	瘾: yǐn 隐 yǐn	疒 sickness, disease
semphon("瘾", "疒", "隐", 5, `rash; addiction, craving, habit`, simplified("癮"));
// 3453	癮: yǐn 隱 yǐn	疒 sickness, disease
semphon("癮", "疒", "隱", 5, `rash; addiction, craving, habit`);
// 3454	狮: shī 师 shī	犭 dog
semphon("狮", "犭", "师", 3, `lion`, simplified("獅"));
// 3455	獅: shī 師 shī	犭 dog
semphon("獅", "犭", "師", 3, `lion`);
// 3460	宪: xiàn 先 xiān	宀 roof; house
semphon("宪", "宀", "先", 3, `constitution, statute, law`, simplified("憲"));
// 3463	赴: fù 卜 bo	走 to walk, to run, to flee
semphon("赴", "走", "卜", 7, `to attend, to go to, to be present`);
// 3464	颠: diān 真 zhēn	页 page, sheet, leaf
phonsem("颠", "真", "页", 10, `peak, summit, top; to upset`, simplified("顛"));
// 3465	顛: diān 真 zhēn	頁 page, sheet, leaf
phonsem("顛", "真", "頁", 10, `peak, summit, top; to upset`);
// 3467	饶: ráo 尧 yáo	饣 food; to eat
semphon("饶", "饣", "尧", 3, `abundant, bountiful`, simplified("饒"));
// 3468	饒: ráo 堯 yáo	飠 food; to eat
semphon("饒", "飠", "堯", 8, `abundant, bountiful`);
// 3474	辉: huī 军 jūn	光 light; bright, brilliant; only, merely
semphon("辉", "光", "军", 6, `brightness, luster`, simplified("輝"));
// 3475	輝: huī 軍 jūn	光 light; bright, brilliant; only, merely
semphon("輝", "光", "軍", 6, `brightness, luster`);
// 3479	喔: ō 屋 wū	口 mouth; entrance, gate, opening
semphon("喔", "口", "屋", 3, `onomatopoetic, the sound of crowing or crying`);
// 3487	脂: zhī 旨 zhǐ	⺼ meat, flesh; organic compound
semphon("脂", "⺼", "旨", 4, `fat, grease, lard, oil`);
// 3488	肪: fáng 方 fāng	⺼ meat, flesh; organic compound
semphon("肪", "⺼", "方", 4, `animal fat`);
// 3489	娜: nà 那 nà	女 woman, girl; female
semphon("娜", "女", "那", 3, `elegant, graceful, delicate`);
// 3494	饥: jī 几 jǐ	饣 food; to eat
semphon("饥", "饣", "几", 3, `hungry, starving; hunger, famine`, simplified("飢"));
// 3495	飢: jī 几 jǐ	飠 food; to eat
semphon("飢", "飠", "几", 8, `hungry, starving; hunger, famine`);
// 3496	饑: jī 幾 jǐ	飠 food; to eat
semphon("饑", "飠", "幾", 8, `famine; to starve, to go hungry`);
// 3497	菲: fēi 非 fēi	艹 grass, weed, plant, herb
semphon("菲", "艹", "非", 3, `fragrant; rich, luxuriant; the Philippines`);
// 3498	绘: huì 会 huì	纟 silk; thread
semphon("绘", "纟", "会", 3, `to sketch, to paint, to draw`, simplified("繪"));
// 3499	繪: huì 會 huì	糹 silk; thread
semphon("繪", "糹", "會", 6, `to sketch, to paint, to draw`);
// 3501	顽: wán 元 yuán	页 page, sheet, leaf
phonsem("顽", "元", "页", 4, `stubborn, recalcitrant, obstinate`, simplified("頑"));
// 3502	頑: wán 元 yuán	頁 page, sheet, leaf
phonsem("頑", "元", "頁", 4, `stubborn, recalcitrant, obstinate`);
// 3506	喻: yù 俞 yú	口 mouth; entrance, gate, opening
semphon("喻", "口", "俞", 3, `metaphor, analogy; example; such as, like`);
// 3508	棕: zōng 宗 zōng	木 tree; wood, lumber; wooden
semphon("棕", "木", "宗", 4, `hemp palm; palm tree`, simplified("椶"));
// 3510	阔: kuò 活 huó	门 gate, door, entrance, opening
semphon("阔", "门", "活", 3, `ample, broad, wide; separate; to be apart`, simplified("闊"));
// 3511	闊: kuò 活 huó	門 gate, door, entrance, opening
semphon("闊", "門", "活", 8, `ample, broad, wide; separate; to be apart`);
// 3516	削: xuē 肖 xiào	刂 knife
phonsem("削", "肖", "刂", 7, `to pare, to scrape, to trim`);
// 3517	绅: shēn 申 shēn	纟 silk; thread
semphon("绅", "纟", "申", 3, `girdle, tie; gentry; to bend`, simplified("紳"));
// 3518	紳: shēn 申 shēn	糹 silk; thread
semphon("紳", "糹", "申", 6, `girdle, tie; gentry; to bend`);
// 3519	涌: yǒng 甬 yǒng	氵 water
semphon("涌", "氵", "甬", 3, `to surge up, to bubble up, to gush forth`, simplified("湧"));
// 3522	頸: jǐng 巠 jīng	頁 page, sheet, leaf
phonsem("頸", "巠", "頁", 7, `neck, throat`);
// 3523	馒: mán 曼 màn	饣 food; to eat
semphon("馒", "饣", "曼", 3, `steamed buns; steamed dumplings`, simplified("饅"));
// 3524	饅: mán 曼 màn	飠 food; to eat
semphon("饅", "飠", "曼", 8, `steamed buns; steamed dumplings`);
// 3529	滥: làn 监 jiān	氵 water
semphon("滥", "氵", "监", 3, `to flood, to overflow; excessive`, simplified("濫"));
// 3530	濫: làn 監 jiān	氵 water
semphon("濫", "氵", "監", 3, `to flood, to overflow; excessive`);
// 3531	悟: wù 吾 wú	忄 heart; mind; soul
semphon("悟", "忄", "吾", 3, `to apprehend, to realize, to become aware`);
// 3532	肢: zhī 支 zhī	⺼ meat, flesh; organic compound
semphon("肢", "⺼", "支", 4, `limbs`);
// 3536	崑: kūn 昆 kūn	山 mountain, hill, peak
semphon("崑", "山", "昆", 3, `the Kunlun mountains in Jiang Su province`);
// 3541	躁: zào 喿 zào	足 foot; to attain, to satisfy; enough
semphon("躁", "足", "喿", 7, `tense, irritable; rash, hot-tempered`);
// 3545	坑: kēng 亢 kàng	土 soil, earth; items made of earth
semphon("坑", "土", "亢", 3, `pit, hole; to trap, to bury; to harry`, simplified("阬"));
// 3547	皱: zhòu 刍 chú	皮 skin, hide, fur, feathers
phonsem("皱", "刍", "皮", 5, `wrinkles, creases, folds`, simplified("皺"));
// 3548	皺: zhòu 芻 chú	皮 skin, hide, fur, feathers
phonsem("皺", "芻", "皮", 10, `wrinkles, creases, folds`);
// 3549	谣: yáo 䍃 yóu	讠 words, speech; to speak, to say
semphon("谣", "讠", "䍃", 2, `rumor; folksong, ballad`, simplified("謠"));
// 3550	謠: yáo 言 yán	䍃 vase, pitcher, earthenware
phonsem("謠", "言", "䍃", 7, `rumor; folksong, ballad`);
// 3556	驳: bó 爻 yáo	马 horse; surname
semphon("驳", "马", "爻", 3, `variegated, motley; to refuse, to dispute`, simplified("駁"));
// 3557	駁: bó 爻 yáo	馬 horse; surname
semphon("駁", "馬", "爻", 10, `variegated, motley; to refuse, to dispute`);
// 3559	蔽: bì 敝 bì	艹 grass, weed, plant, herb
semphon("蔽", "艹", "敝", 3, `to cover, to hide, to shelter`);
// 3568	坛: tán 云 yún	土 soil, earth; items made of earth
semphon("坛", "土", "云", 3, `altar; arena; examination hall`, simplified("壇"));
// 3574	纤: xiān 千 qiān	纟 silk; thread
semphon("纤", "纟", "千", 3, `fine, delicate; tiny, minute`, simplified("纖"));
// 3577	颇: pō 皮 pí	页 page, sheet, leaf
phonsem("颇", "皮", "页", 5, `rather, quite; partial, biased`, simplified("頗"));
// 3578	頗: pō 皮 pí	頁 page, sheet, leaf
phonsem("頗", "皮", "頁", 5, `rather, quite; partial, biased`);
// 3579	刹: shā 杀 shā	刂 knife
phonsem("刹", "杀", "刂", 6, `temple, shrine, monastary; an instant, a moment; to brake`, simplified("剎"));
// 3581	堕: duò 陏 duò	土 soil, earth; items made of earth
phonsem("堕", "陏", "土", 8, `to drop, to fall, to sink; degenerate`, simplified("墮"));
// 3582	墮: duò 隋 suí	土 soil, earth; items made of earth
phonsem("墮", "隋", "土", 11, `to drop, to fall, to sink; degenerate`);
// 3585	芒: máng 亡 wáng	艹 grass, weed, plant, herb
semphon("芒", "艹", "亡", 3, `blade; ray; silvergrass, Miscanthus sinensis`);
// 3587	哨: shào 肖 xiào	口 mouth; entrance, gate, opening
semphon("哨", "口", "肖", 3, `to whistle; to chirp`);
// 3589	淹: yān 奄 yǎn	氵 water
semphon("淹", "氵", "奄", 3, `to drown, to immerse, to steep`);
// 3591	睹: dǔ 者 zhě	目 eye; to look, to see; division, topic
semphon("睹", "目", "者", 5, `to look at, to gaze at; to observe`, simplified("覩"));
// 3601	莉: lì 利 lì	艹 grass, weed, plant, herb
semphon("莉", "艹", "利", 3, `jasmine`);
// 3607	賂: lù 各 gè	貝 sea shell; money, currency
semphon("賂", "貝", "各", 7, `bribery; to bribe; to present`);
// 3608	旺: wàng 王 wáng	日 sun; day; daytime
semphon("旺", "日", "王", 4, `to flourish, to prosper; prosperous`);
// 3613	辖: xiá 害 hài	车 cart, vehicle; to move in a cart
semphon("辖", "车", "害", 4, `to control, to have jurisdiction; the linchpin of a wheel`, simplified("轄"));
// 3614	轄: xiá 害 hài	車 cart, vehicle; to move in a cart
semphon("轄", "車", "害", 7, `to control, to have jurisdiction; the linchpin of a wheel`);
// 3620	呕: ǒu 区 qū	口 mouth; entrance, gate, opening
semphon("呕", "口", "区", 3, `to vomit; to annoy, to enrage`, simplified("嘔"));
// 3621	嘔: ǒu 區 qū	口 mouth; entrance, gate, opening
semphon("嘔", "口", "區", 3, `to vomit; to annoy, to enrage`);
// 3623	翔: xiáng 羊 yáng	羽 feather, plume; wings
phonsem("翔", "羊", "羽", 6, `to soar, to hover, to glide`);
// 3624	咽: yàn 因 yīn	口 mouth; entrance, gate, opening
semphon("咽", "口", "因", 3, `throat; pharynx`, simplified("嚥"));
// 3627	钞: chāo 少 shǎo	钅 gold, metal; money
semphon("钞", "钅", "少", 5, `bank note, paper money; to counterfeit`, simplified("鈔"));
// 3628	鈔: chāo 少 shǎo	釒 gold, metal; money
semphon("鈔", "釒", "少", 8, `bank note, paper money; to counterfeit`);
// 3633	剖: pōu 咅 pǒu	刂 knife
phonsem("剖", "咅", "刂", 8, `to bisect, to dissect, to slice`);
// 3642	泊: pō 白 bái	氵 water
semphon("泊", "氵", "白", 3, `to anchor; to moor`);
// 3643	勉: miǎn 免 miǎn	力 strength, power; capability, influence
phonsem("勉", "免", "力", 7, `to endeavor, to make an effort; to urge`);
// 3645	砖: zhuān 专 zhuān	石 stone, rock, mineral
semphon("砖", "石", "专", 5, `tile, brick`, simplified("磚"));
// 3646	磚: zhuān 專 zhuān	石 stone, rock, mineral
semphon("磚", "石", "專", 5, `tile, brick`);
// 3649	疤: bā 巴 bā	疒 sickness, disease
semphon("疤", "疒", "巴", 5, `scar, cicatrix; birthmark`);
// 3651	胀: zhàng 长 zhǎng	⺼ meat, flesh; organic compound
semphon("胀", "⺼", "长", 4, `swelling, inflation`, simplified("脹"));
// 3652	脹: zhàng 長 zhǎng	⺼ meat, flesh; organic compound
semphon("脹", "⺼", "長", 4, `swelling, inflation`);
// 3653	掠: lüè 京 jīng	扌 hand
semphon("掠", "扌", "京", 3, `to pillage, to ransack`);
// 3659	銜: xián 行 xíng	金 gold, metal; money
phonsem("銜", "行", "金", 6, `rank, title; to bite, to hold in the mouth`);
// 3662	昧: mèi 未 wèi	日 sun; day; daytime
semphon("昧", "日", "未", 4, `dark, hidden, obscure`);
// 3663	驰: chí 也 yě	马 horse; surname
semphon("驰", "马", "也", 3, `speed, haste; to run, to gallop`, simplified("馳"));
// 3664	馳: chí 也 yě	馬 horse; surname
semphon("馳", "馬", "也", 10, `speed, haste; to run, to gallop`);
// 3665	挫: cuò 坐 zuò	扌 hand
semphon("挫", "扌", "坐", 3, `to check, to obstruct, to push down`);
// 3671	擎: qíng 敬 jìng	手 hand
phonsem("擎", "敬", "手", 12, `to lift; to support, to hold up`);
// 3675	哄: hōng 共 gòng	口 mouth; entrance, gate, opening
semphon("哄", "口", "共", 3, `to coax; to beguile, to cheat, to deceive; tumult, uproar`, simplified("鬨"));
// 3676	鬨: hòng 共 gòng	鬥 to struggle, to fight, to contend; measuring cup
semphon("鬨", "鬥", "共", 10, `boisterous; clamor, noise`);
// 3678	碑: bēi 卑 bēi	石 stone, rock, mineral
semphon("碑", "石", "卑", 5, `stone tablet; gravestone`);
// 3681	幢: chuáng 童 tóng	巾 cloth, curtain, handkerchief, towel
semphon("幢", "巾", "童", 3, `carriage curtain; sun screen; tent; measure word for buildings`);
// 3687	叨: dāo 刀 dāo	口 mouth; entrance, gate, opening
semphon("叨", "口", "刀", 3, `talkative; grumbling`);
// 3689	帆: fān 凡 fán	巾 cloth, curtain, handkerchief, towel
semphon("帆", "巾", "凡", 3, `boat; to sail`, simplified("㠶"));
// 3693	氓: máng 亡 wáng	民 citizens, subjects; a nation's people
phonsem("氓", "亡", "民", 3, `people, subjects, vassals`);
// 3697	叮: dīng 丁 dīng	口 mouth; entrance, gate, opening
semphon("叮", "口", "丁", 3, `to persistently exhort or urge; sting (as of an insect)`);
// 3698	呻: shēn 申 shēn	口 mouth; entrance, gate, opening
semphon("呻", "口", "申", 3, `to moan, to groan; to chant`);
// 3700	唫: jìn 金 jīn	口 mouth; entrance, gate, opening
semphon("唫", "口", "金", 3, `to hum, to intone; to close, to shut`);
// 3703	辐: fú 畐 fú	车 cart, vehicle; to move in a cart
semphon("辐", "车", "畐", 4, `ray, spoke`, simplified("輻"));
// 3704	輻: fú 畐 fú	車 cart, vehicle; to move in a cart
semphon("輻", "車", "畐", 7, `ray, spoke`);
// 3708	杖: zhàng 丈 zhàng	木 tree; wood, lumber; wooden
semphon("杖", "木", "丈", 4, `cane, walking stick`);
// 3709	翘: qiào 尧 yáo	羽 feather, plume; wings
phonsem("翘", "尧", "羽", 6, `outstanding; to elevate, to lift, to raise`, simplified("翹"));
// 3710	翹: qiào 堯 yáo	羽 feather, plume; wings
phonsem("翹", "堯", "羽", 12, `outstanding; to elevate, to lift, to raise`);
// 3711	荷: hé 何 hé	艹 grass, weed, plant, herb
semphon("荷", "艹", "何", 3, `lotus, water lily; burden, responsibility; Holland`);
// 3713	妮: nī 尼 ní	女 woman, girl; female
semphon("妮", "女", "尼", 3, `maid, servant girl; cute girl`);
// 3714	娇: jiāo 乔 qiáo	女 woman, girl; female
semphon("娇", "女", "乔", 3, `seductive, lovable, tender; pampered; frail`, simplified("嬌"));
// 3715	嬌: jiāo 喬 qiáo	女 woman, girl; female
semphon("嬌", "女", "喬", 3, `seductive, lovable, tender; pampered; frail`);
// 3716	祈: qí 斤 jīn	礻 spirit
semphon("祈", "礻", "斤", 4, `to pray, to entreat, to beseech`);
// 3717	祷: dǎo 寿 shòu	礻 spirit
semphon("祷", "礻", "寿", 4, `to pray, to entreat, to beg; prayer`, simplified("禱"));
// 3718	禱: dǎo 壽 shòu	礻 spirit
semphon("禱", "礻", "壽", 4, `to pray, to entreat, to beg; prayer`);
// 3719	哑: yǎ 亚 yà	口 mouth; entrance, gate, opening
semphon("哑", "口", "亚", 3, `dumb, mute, hoarse`, simplified("啞"));
// 3720	啞: yǎ 亞 yà	口 mouth; entrance, gate, opening
semphon("啞", "口", "亞", 3, `dumb, mute, hoarse`);
// 3725	沼: zhǎo 召 zhào	氵 water
semphon("沼", "氵", "召", 3, `lake, pond, swamp`);
// 3729	霜: shuāng 相 xiāng	雨 rain
semphon("霜", "雨", "相", 8, `frost; frozen, crystallized, candied`);
// 3731	渣: zhā 查 chá	氵 water
semphon("渣", "氵", "查", 3, `dregs, sediment; refuse, slag`);
// 3732	瓷: cí 次 cì	瓦 tile; pottery, earthenware
phonsem("瓷", "次", "瓦", 6, `china, crockery, porcelain`);
// 3735	奢: shē 者 zhě	大 big, great, vast, high, deep
semphon("奢", "大", "者", 3, `exaggerated; extravagant, wasteful`);
// 3741	裕: yù 谷 gǔ	衤 cloth
semphon("裕", "衤", "谷", 5, `rich, plentiful, abundant`);
// 3742	瞪: dèng 登 dēng	目 eye; to look, to see; division, topic
semphon("瞪", "目", "登", 5, `to stare at`);
// 3743	狭: xiá 夹 jiā	犭 dog
semphon("狭", "犭", "夹", 3, `narrow, limited; narrow-minded`, simplified("狹"));
// 3744	狹: xiá 夾 jiā	犭 dog
semphon("狹", "犭", "夾", 3, `narrow, limited; narrow-minded`);
// 3746	绒: róng 戎 róng	纟 silk; thread
semphon("绒", "纟", "戎", 3, `cotton, silk, velvet, wool`, simplified("絨"));
// 3747	絨: róng 戎 róng	糹 silk; thread
semphon("絨", "糹", "戎", 6, `cotton, silk, velvet, wool`);
// 3748	屑: xiè 肖 xiào	尸 body, corpse
semphon("屑", "尸", "肖", 3, `bits, crumbs, scraps; fragments; not worthwhile`);
// 3751	枉: wǎng 王 wáng	木 tree; wood, lumber; wooden
semphon("枉", "木", "王", 4, `useless, in vain; crooked, bent`);
// 3752	溶: róng 容 róng	氵 water
semphon("溶", "氵", "容", 3, `to melt, to dissolve`);
// 3755	剑: jiàn 佥 qiān	刂 knife
phonsem("剑", "佥", "刂", 7, `sword, dagger, saber`, simplified("劍"));
// 3756	劍: jiàn 僉 qiān	刂 knife
phonsem("劍", "僉", "刂", 13, `sword, dagger, saber`);
// 3761	咋: zǎ 乍 zhà	口 mouth; entrance, gate, opening
semphon("咋", "口", "乍", 3, `question-forming particle: why? what? how?; to bite; loud`);
// 3763	聋: lóng 龙 lóng	耳 ear; to hear, to hear of; handle
phonsem("聋", "龙", "耳", 5, `deaf`, simplified("聾"));
// 3764	聾: lóng 龍 lóng	耳 ear; to hear, to hear of; handle
phonsem("聾", "龍", "耳", 16, `deaf`);
// 3765	锤: chuí 垂 chuí	钅 gold, metal; money
semphon("锤", "钅", "垂", 5, `hammer`, simplified("錘"));
// 3766	錘: chuí 垂 chuí	釒 gold, metal; money
semphon("錘", "釒", "垂", 8, `hammer`);
// 3768	瑟: sè 必 bì	玨 guitar strings; variant of 珏
semphon("瑟", "玨", "必", 8, `a large string instrument; to tremble, to vibrate`);
// 3769	庇: bì 比 bǐ	广 broad, vast, wide; building, house
semphon("庇", "广", "比", 3, `cover, shield; to protect, to shelter; to harbor`);
// 3770	沫: mò 末 mò	氵 water
semphon("沫", "氵", "末", 3, `bubbles, foam, froth, suds`);
// 3773	椎: chuí 隹 zhuī	木 tree; wood, lumber; wooden
semphon("椎", "木", "隹", 4, `spine, vertebra; hammer, mallet`);
// 3780	腥: xīng 星 xīng	⺼ meat, flesh; organic compound
semphon("腥", "⺼", "星", 4, `fishy, rank; raw meat`);
// 3781	惕: tì 易 yì	忄 heart; mind; soul
semphon("惕", "忄", "易", 3, `cautious, careful, alert`);
// 3783	渗: shèn 参 cān	氵 water
semphon("渗", "氵", "参", 3, `to seep, to permeate, to infiltrate`, simplified("滲"));
// 3784	滲: shèn 參 cān	氵 water
semphon("滲", "氵", "參", 3, `to seep, to permeate, to infiltrate`);
// 3787	宵: xiāo 肖 xiào	宀 roof; house
semphon("宵", "宀", "肖", 3, `night, evening, darkness`);
// 3790	悼: dào 卓 zhuō	忄 heart; mind; soul
semphon("悼", "忄", "卓", 3, `to grieve, to lament, to mourn`);
// 3794	碌: lù 录 lù	石 stone, rock, mineral
semphon("碌", "石", "录", 5, `rocky, rough, uneven; mediocre`, simplified("磟"));
// 3798	钦: qīn 欠 qiàn	钅 gold, metal; money
semphon("钦", "钅", "欠", 5, `to respect, to admire; royal`, simplified("欽"));
// 3799	欽: qīn 欠 qiàn	釒 gold, metal; money
semphon("欽", "釒", "欠", 8, `to respect, to admire; royal`);
// 3800	翰: hàn 倝 gàn	羽 feather, plume; wings
phonsem("翰", "倝", "羽", 10, `pen, pencil, writing brush`);
// 3801	颂: sòng 公 gōng	页 page, sheet, leaf
phonsem("颂", "公", "页", 4, `to laud, to acclaim; ode, hymn`, simplified("頌"));
// 3802	頌: sòng 公 gōng	頁 page, sheet, leaf
phonsem("頌", "公", "頁", 4, `to laud, to acclaim; ode, hymn`);
// 3804	酝: yùn 云 yún	酉 wine; wine vessel; chemical
semphon("酝", "酉", "云", 7, `liquor, spirits, wine; to ferment`, simplified("醞"));
// 3806	酿: niàng 良 liáng	酉 wine; wine vessel; chemical
semphon("酿", "酉", "良", 7, `to ferment, to brew`, simplified("釀"));
// 3807	釀: niàng 襄 xiāng	酉 wine; wine vessel; chemical
semphon("釀", "酉", "襄", 7, `to ferment, to brew`);
// 3808	拓: tà 石 shí	扌 hand
semphon("拓", "扌", "石", 3, `to develop, to expand, to open up`);
// 3811	肠: cháng 昜 yáng	⺼ meat, flesh; organic compound
semphon("肠", "⺼", "昜", 4, `intestines; emotions; sausage`, simplified("腸"));
// 3812	腸: cháng 昜 yáng	⺼ meat, flesh; organic compound
semphon("腸", "⺼", "昜", 4, `intestines; emotions; sausage`);
// 3816	滞: zhì 带 dài	氵 water
semphon("滞", "氵", "带", 3, `to block, to obstruct; sluggish, stagnant`, simplified("滯"));
// 3817	滯: zhì 帶 dài	氵 water
semphon("滯", "氵", "帶", 3, `to block, to obstruct; sluggish, stagnant`);
// 3821	叭: bā 八 bā	口 mouth; entrance, gate, opening
semphon("叭", "口", "八", 3, `trumpet`);
// 3825	莖: jīng 巠 jīng	艹 grass, weed, plant, herb
semphon("莖", "艹", "巠", 4, `stem, stalk`);
// 3826	挠: náo 尧 yáo	扌 hand
semphon("挠", "扌", "尧", 3, `to yield; to scratch, to disturb`, simplified("撓"));
// 3827	撓: náo 堯 yáo	扌 hand
semphon("撓", "扌", "堯", 3, `to yield; to scratch, to disturb`);
// 3828	墅: shù 土 tǔ	野 field, open country; wilderness
semphon("墅", "野", "土", 11, `villa, country house`);
// 3831	瘫: tān 难 nán	疒 sickness, disease
semphon("瘫", "疒", "难", 5, `paralysis, palsy, numbness`, simplified("癱"));
// 3832	癱: tān 難 nán	疒 sickness, disease
semphon("癱", "疒", "難", 5, `paralysis, palsy, numbness`);
// 3833	痪: huàn 奂 huàn	疒 sickness, disease
semphon("痪", "疒", "奂", 5, `numbness, paralysis`, simplified("瘓"));
// 3834	瘓: huàn 奐 huàn	疒 sickness, disease
semphon("瘓", "疒", "奐", 5, `numbness, paralysis`);
// 3835	掷: zhì 郑 zhèng	扌 hand
semphon("掷", "扌", "郑", 3, `to throw, to hurl, to fling, to cast`, simplified("擲"));
// 3836	擲: zhì 鄭 zhèng	扌 hand
semphon("擲", "扌", "鄭", 3, `to throw, to hurl, to fling, to cast`);
// 3837	雌: cí 此 cǐ	隹 short-tailed bird; sparrow
phonsem("雌", "此", "隹", 6, `female; feminine; gentle, soft`);
// 3838	斩: zhǎn 车 chē	斤 a catty (about 500 grams); an axe; keen, shrewd
phonsem("斩", "车", "斤", 4, `to chop, to cut, to sever; to behead`, simplified("斬"));
// 3839	斬: zhǎn 車 chē	斤 a catty (about 500 grams); an axe; keen, shrewd
phonsem("斬", "車", "斤", 7, `to chop, to cut, to sever; to behead`);
// 3843	劈: pī 辟 pì	刀 knife; old coin; measure
phonsem("劈", "辟", "刀", 13, `to chop, to cut apart; to split`);
// 3844	橙: chéng 登 dēng	木 tree; wood, lumber; wooden
semphon("橙", "木", "登", 4, `orange`);
// 3847	灿: càn 山 shān	火 fire, flame; to burn; anger, rage
semphon("灿", "火", "山", 4, `vivid, illuminating, brilliant`, simplified("燦"));
// 3855	耕: gēng 井 jǐng	耒 plow
semphon("耕", "耒", "井", 6, `to plow, to cultivate`, simplified("畊"));
// 3857	耘: yún 云 yún	耒 plow
semphon("耘", "耒", "云", 6, `to weed`);
// 3858	澄: chéng 登 dēng	氵 water
semphon("澄", "氵", "登", 3, `clear, limpid, pure`, simplified("澂"));
// 3860	吁: xū 于 yú	口 mouth; entrance, gate, opening
semphon("吁", "口", "于", 3, `alas; to sigh`, simplified("籲"));
// 3862	滨: bīn 宾 bīn	氵 water
semphon("滨", "氵", "宾", 3, `beach, coast, river bank`, simplified("濱"));
// 3863	濱: bīn 賓 bīn	氵 water
semphon("濱", "氵", "賓", 3, `beach, coast, river bank`);
// 3866	拙: zhuō 出 chū	扌 hand
semphon("拙", "扌", "出", 3, `awkward, clumsy; dull, stupid`);
// 3867	奸: jiān 干 gàn	女 woman, girl; female
semphon("奸", "女", "干", 3, `crafty, dishonest, selfish; evil, villainous; adultery`, simplified("姦"));
// 3870	塘: táng 唐 táng	土 soil, earth; items made of earth
semphon("塘", "土", "唐", 3, `pond, tank; dike, embankment`);
// 3871	壤: rǎng 襄 xiāng	土 soil, earth; items made of earth
semphon("壤", "土", "襄", 3, `soil, loam, earth; rich`);
// 3872	殴: ōu 区 qū	殳 tool, weapon
phonsem("殴", "区", "殳", 4, `to hit, to beat, to fight with fists`, simplified("毆"));
// 3873	毆: ōu 區 qū	殳 tool, weapon
phonsem("毆", "區", "殳", 11, `to hit, to beat, to fight with fists`);
// 3880	饲: sì 司 sī	饣 food; to eat
semphon("饲", "饣", "司", 3, `to raise animals; to nourish, to feed`, simplified("飼"));
// 3881	飼: sì 司 sī	飠 food; to eat
semphon("飼", "飠", "司", 8, `to raise animals; to nourish, to feed`);
// 3884	拢: lǒng 龙 lóng	扌 hand
semphon("拢", "扌", "龙", 3, `to collect, to bring together`, simplified("攏"));
// 3885	攏: lǒng 龍 lóng	扌 hand
semphon("攏", "扌", "龍", 3, `to collect, to bring together`);
// 3888	耸: sǒng 从 cóng	耳 ear; to hear, to hear of; handle
phonsem("耸", "从", "耳", 4, `to excite, to urge; to raise; to shrug; lofty, towering`, simplified("聳"));
// 3889	聳: sǒng 從 cóng	耳 ear; to hear, to hear of; handle
phonsem("聳", "從", "耳", 11, `to excite, to urge; to raise; to shrug; lofty, towering`);
// 3890	剔: tī 易 yì	刂 knife
phonsem("剔", "易", "刂", 8, `to pick out; to scrape off; picky`);
// 3891	怯: qiè 去 qù	忄 heart; mind; soul
semphon("怯", "忄", "去", 3, `afraid, lacking in courage`);
// 3893	芽: yá 牙 yá	艹 grass, weed, plant, herb
semphon("芽", "艹", "牙", 3, `bud, shoot, sprout`);
// 3894	磕: kē 盍 hé	石 stone, rock, mineral
semphon("磕", "石", "盍", 5, `to collide, to hit, to knock, to tap`);
// 3897	僻: pì 辟 pì	亻 man, person; people
semphon("僻", "亻", "辟", 2, `out-of-the-way, remote; unorthodox`);
// 3903	迄: qì 乞 qǐ	辶 to walk; walking
semphon("迄", "辶", "乞", 3, `to extend, to reach; till, until`);
// 3905	繹: yì 睪 yì	糹 silk; thread
semphon("繹", "糹", "睪", 6, `to unravel; to interpret`);
// 3908	魄: pò 白 bái	鬼 ghost; demon; sly, mischievous
phonsem("魄", "白", "鬼", 5, `vigor, soul, body; the dark side of the moon`);
// 3910	氫: qīng 巠 jīng	气 air, gas; steam, vapor; anger
semphon("氫", "气", "巠", 4, `ammonia`);
// 3912	铸: zhù 寿 shòu	钅 gold, metal; money
semphon("铸", "钅", "寿", 5, `to melt, to cast; to mint, to coin`, simplified("鑄"));
// 3913	鑄: zhù 壽 shòu	釒 gold, metal; money
semphon("鑄", "釒", "壽", 8, `to melt, to cast; to mint, to coin`);
// 3918	绣: xiù 秀 xiù	纟 silk; thread
semphon("绣", "纟", "秀", 3, `to embroider; embroidery; ornament`, simplified("繡"));
// 3919	繡: xiù 肅 sù	糹 silk; thread
semphon("繡", "糹", "肅", 6, `to embroider; embroidery; ornament`);
// 3921	沸: fèi 弗 fú	氵 water
semphon("沸", "氵", "弗", 3, `to boil, to bubble up, to gush`);
// 3922	憋: biē 敝 bì	心 heart; mind; soul
phonsem("憋", "敝", "心", 11, `to stifle, to restrain, to choke; to suppress one's inner feelings`);
// 3930	堤: dī 是 shì	土 soil, earth; items made of earth
semphon("堤", "土", "是", 3, `dike`, simplified("隄"));
// 3931	隄: dī 是 shì	阝 place, town, city
semphon("隄", "阝", "是", 2, `dike, embankment`);
// 3932	阁: gé 各 gè	门 gate, door, entrance, opening
semphon("阁", "门", "各", 3, `cabinet, chamber, pavilion`, simplified("閣"));
// 3933	閣: gé 各 gè	門 gate, door, entrance, opening
semphon("閣", "門", "各", 8, `cabinet, chamber, pavilion`);
// 3934	烘: hōng 共 gòng	火 fire, flame; to burn; anger, rage
semphon("烘", "火", "共", 4, `to bake, to roast; to dry by the fire`);
// 3935	伺: cì 司 sī	亻 man, person; people
semphon("伺", "亻", "司", 2, `to serve, to wait upon, to attend; to examine`);
// 3936	泌: mì 必 bì	氵 water
semphon("泌", "氵", "必", 3, `to seep out, to secrete`);
// 3938	闢: pì 辟 pì	門 gate, door, entrance, opening
semphon("闢", "門", "辟", 8, `open; to settle, to develop, to open up`);
// 3939	涛: tāo 寿 shòu	氵 water
semphon("涛", "氵", "寿", 3, `large waves`, simplified("濤"));
// 3940	濤: tāo 壽 shòu	氵 water
semphon("濤", "氵", "壽", 3, `large waves`);
// 3942	唾: tuò 垂 chuí	口 mouth; entrance, gate, opening
semphon("唾", "口", "垂", 3, `to spit; to spit on; saliva`);
// 3943	帜: zhì 只 zhī	巾 cloth, curtain, handkerchief, towel
semphon("帜", "巾", "只", 3, `flag, pennant, sign; to fasten`, simplified("幟"));
// 3944	幟: zhì 戠 zhī	巾 cloth, curtain, handkerchief, towel
semphon("幟", "巾", "戠", 3, `flag, pennant, sign; to fasten`);
// 3945	涕: tì 弟 dì	氵 water
semphon("涕", "氵", "弟", 3, `tears; mucus`);
// 3946	诵: sòng 甬 yǒng	讠 words, speech; to speak, to say
semphon("诵", "讠", "甬", 2, `to chant, to recite, to repeat, to read aloud`, simplified("誦"));
// 3947	誦: sòng 甬 yǒng	言 words, speech; to speak, to say
semphon("誦", "言", "甬", 7, `to chant, to recite, to repeat, to read aloud`);
// 3948	裸: luǒ 果 guǒ	衤 cloth
semphon("裸", "衤", "果", 5, `bare, nude; to strip, to undress`, simplified("臝"));
// 3952	凄: qī 妻 qī	冫 ice
semphon("凄", "冫", "妻", 2, `bitter cold, miserable, dreary`, simplified("淒"));
// 3953	淒: qī 妻 qī	氵 water
semphon("淒", "氵", "妻", 3, `bitter, cold, dreary, miserable`);
// 3954	悽: qī 妻 qī	忄 heart; mind; soul
semphon("悽", "忄", "妻", 3, `sorrowful, grieving; melancholy`);
// 3956	芦: lú 户 hù	艹 grass, weed, plant, herb
semphon("芦", "艹", "户", 3, `rushes, reeds`, simplified("蘆"));
// 3957	蘆: lú 盧 lú	艹 grass, weed, plant, herb
semphon("蘆", "艹", "盧", 4, `rushes, reeds`);
// 3958	拣: jiǎn 柬 jiǎn	扌 hand
semphon("拣", "扌", "柬", 3, `to choose, to select; to gather, to pick up`, simplified("揀"));
// 3959	揀: jiǎn 柬 jiǎn	扌 hand
semphon("揀", "扌", "柬", 3, `to choose, to select; to gather, to pick up`);
// 3960	鲍: bào 包 bāo	鱼 fish
semphon("鲍", "鱼", "包", 8, `abalone; dried fish; surname`, simplified("鮑"));
// 3961	鮑: bào 包 bāo	魚 fish
semphon("鮑", "魚", "包", 11, `abalone; dried fish; surname`);
// 3962	滤: lǜ 虑 lǜ	氵 water
semphon("滤", "氵", "虑", 3, `to filter, to strain`, simplified("濾"));
// 3963	濾: lǜ 慮 lǜ	氵 water
semphon("濾", "氵", "慮", 3, `to filter, to strain`);
// 3966	茂: mào 戊 wù	艹 grass, weed, plant, herb
semphon("茂", "艹", "戊", 3, `thick, lush, dense; talented`);
// 3968	阐: chǎn 单 dān	门 gate, door, entrance, opening
semphon("阐", "门", "单", 3, `to disclose; to explain; to open`, simplified("闡"));
// 3969	闡: chǎn 單 dān	門 gate, door, entrance, opening
semphon("闡", "門", "單", 8, `to disclose; to explain; to open`);
// 3973	扒: bā 八 bā	扌 hand
semphon("扒", "扌", "八", 3, `to scratch, to dig up; to crouch, to crawl`);
// 3975	苟: gǒu 句 jù gōu	艹 grass, weed, plant, herb
semphon("苟", "艹", "句", 3, `careless, frivolous, illicit; but, if only`);
// 3984	饪: rèn 壬 rén	饣 food; to eat
semphon("饪", "饣", "壬", 3, `cooked food; to cook until well-done`, simplified("飪"));
// 3985	飪: rèn 壬 rén	飠 food; to eat
semphon("飪", "飠", "壬", 8, `cooked food; to cook until well-done`);
// 3987	坝: bà 贝 bèi	土 soil, earth; items made of earth
semphon("坝", "土", "贝", 3, `embankment; dam`, simplified("壩"));
// 3989	诅: zǔ 且 qiě	讠 words, speech; to speak, to say
semphon("诅", "讠", "且", 2, `to curse; to pledge, to swear`, simplified("詛"));
// 3990	詛: zǔ 且 qiě	言 words, speech; to speak, to say
semphon("詛", "言", "且", 7, `to curse; to pledge, to swear`);
// 3995	拌: bàn 半 bàn	扌 hand
semphon("拌", "扌", "半", 3, `to mix`);
// 3996	拧: níng 宁 níng	扌 hand
semphon("拧", "扌", "宁", 3, `screw, wrench; to pinch, to twist, to wring`, simplified("擰"));
// 3997	擰: níng 寧 níng	扌 hand
semphon("擰", "扌", "寧", 3, `screw, wrench; to pinch, to twist, to wring`);
// 3998	搂: lǒu 娄 lóu	扌 hand
semphon("搂", "扌", "娄", 3, `to embrace, to hug; to drag, to pull`, simplified("摟"));
// 3999	摟: lǒu 婁 lóu	扌 hand
semphon("摟", "扌", "婁", 3, `to embrace, to hug; to drag, to pull`);
// 4002	媳: xí 息 xī	女 woman, girl; female
semphon("媳", "女", "息", 3, `daughter-in-law`);
// 4003	泻: xiè 写 xiě	氵 water
semphon("泻", "氵", "写", 3, `to leak; diarrhea`, simplified("瀉"));
// 4004	瀉: xiè 寫 xiě	氵 water
semphon("瀉", "氵", "寫", 3, `to leak; diarrhea`);
// 4005	峻: jùn 夋 qūn	山 mountain, hill, peak
semphon("峻", "山", "夋", 3, `high, steep, towering; stern`);
// 4009	芬: fēn 分 fēn	艹 grass, weed, plant, herb
semphon("芬", "艹", "分", 3, `aroma, fragrance, perfume`);
// 4012	晤: wù 吾 wú	日 sun; day; daytime
semphon("晤", "日", "吾", 4, `to meet; to interview with`);
// 4020	琳: lín 林 lín	王 king, ruler; royal; surname
semphon("琳", "王", "林", 4, `a beautiful gemstone`);
// 4022	伶: líng 令 lìng	亻 man, person; people
semphon("伶", "亻", "令", 2, `clever; lonely, solitary`);
// 4023	俐: lì 利 lì	亻 man, person; people
semphon("俐", "亻", "利", 2, `smooth; active; clever, sharp`);
// 4027	柏: bǎi 白 bái	木 tree; wood, lumber; wooden
semphon("柏", "木", "白", 4, `cypress, cedar`, simplified("栢"));
// 4029	锈: xiù 秀 xiù	钅 gold, metal; money
semphon("锈", "钅", "秀", 5, `to rust, to corrode`, simplified("銹"));
// 4030	銹: xiù 秀 xiù	釒 gold, metal; money
semphon("銹", "釒", "秀", 8, `to rust, to corrode`);
// 4031	纬: wěi 韦 wéi	纟 silk; thread
semphon("纬", "纟", "韦", 3, `warp and woof; lines of latitude`, simplified("緯"));
// 4032	緯: wěi 韋 wéi	糹 silk; thread
semphon("緯", "糹", "韋", 6, `warp and woof; lines of latitude`);
// 4035	徘: pái 非 fēi	彳 to step with the left foot
semphon("徘", "彳", "非", 3, `to dither, to pace; hesitant`);
// 4037	衅: xìn 半 bàn	血 blood
semphon("衅", "血", "半", 6, `to quarrel, to dispute; a blood sacrifice`, simplified("釁"));
// 4041	屡: lǚ 娄 lóu	尸 body, corpse
semphon("屡", "尸", "娄", 3, `frequently, often, again and again`, simplified("屢"));
// 4042	屢: lǚ 婁 lóu	尸 body, corpse
semphon("屢", "尸", "婁", 3, `frequently, often, again and again`);
// 4045	啸: xiào 肃 sù	口 mouth; entrance, gate, opening
semphon("啸", "口", "肃", 3, `to roar, to howl; to scream; to whistle`, simplified("嘯"));
// 4046	嘯: xiào 肅 sù	口 mouth; entrance, gate, opening
semphon("嘯", "口", "肅", 3, `to roar, to howl; to scream; to whistle`);
// 4050	恍: huǎng 光 guāng	忄 heart; mind; soul
semphon("恍", "忄", "光", 3, `absent-minded; distracted; indistinct; seemingly`, simplified("怳"));
// 4053	濒: bīn 频 pín	氵 water
semphon("濒", "氵", "频", 3, `to approach; near, on the verge of`, simplified("瀕"));
// 4054	瀕: bīn 頻 pín	氵 water
semphon("瀕", "氵", "頻", 3, `to approach; near, on the verge of`);
// 4055	韧: rèn 刃 rèn	韦 tanned leather; surname
semphon("韧", "韦", "刃", 4, `tough, strong; pliable`, simplified("韌"));
// 4056	韌: rèn 刃 rèn	韋 tanned leather; surname
semphon("韌", "韋", "刃", 9, `tough, strong; pliable`);
// 4062	纺: fǎng 方 fāng	纟 silk; thread
semphon("纺", "纟", "方", 3, `to spin, to weave, to reel`, simplified("紡"));
// 4063	紡: fǎng 方 fāng	糹 silk; thread
semphon("紡", "糹", "方", 6, `to spin, to weave, to reel`);
// 4065	槳: jiǎng 將 jiāng	木 tree; wood, lumber; wooden
phonsem("槳", "將", "木", 11, `paddle, oar`);
// 4066	镶: xiāng 襄 xiāng	钅 gold, metal; money
semphon("镶", "钅", "襄", 5, `inset, inlay; to set, to mount; to fill`, simplified("鑲"));
// 4067	鑲: xiāng 襄 xiāng	釒 gold, metal; money
semphon("鑲", "釒", "襄", 8, `inset, inlay; to set, to mount; to fill`);
// 4068	啃: kěn 肯 kěn	口 mouth; entrance, gate, opening
semphon("啃", "口", "肯", 3, `to gnaw, to chew, to bite`);
// 4071	诽: fěi 非 fēi	讠 words, speech; to speak, to say
semphon("诽", "讠", "非", 2, `to condemn, to slander, to vilify`, simplified("誹"));
// 4072	誹: fěi 非 fēi	言 words, speech; to speak, to say
semphon("誹", "言", "非", 7, `to condemn, to slander, to vilify`);
// 4073	谤: bàng 旁 páng	讠 words, speech; to speak, to say
semphon("谤", "讠", "旁", 2, `to slander, to defame`, simplified("謗"));
// 4074	謗: bàng 旁 páng	言 words, speech; to speak, to say
semphon("謗", "言", "旁", 7, `to slander, to defame`);
// 4075	屿: yǔ 与 yǔ	山 mountain, hill, peak
semphon("屿", "山", "与", 3, `island`, simplified("嶼"));
// 4076	嶼: yǔ 與 yǔ	山 mountain, hill, peak
semphon("嶼", "山", "與", 3, `island`);
// 4077	芝: zhī 之 zhī	艹 grass, weed, plant, herb
semphon("芝", "艹", "之", 3, `sesame; a magical mushroom`);
// 4078	巩: gǒng 工 gōng	凡 any, every, all; common, ordinary
phonsem("巩", "工", "凡", 3, `to bind, to guard, to strengthen; firm, secure, strong`, simplified("鞏"));
// 4082	咯: gē 各 gè	口 mouth; entrance, gate, opening
semphon("咯", "口", "各", 3, `final particle`);
// 4089	紊: wěn 文 wén	糸 silk; thread
phonsem("紊", "文", "糸", 4, `tangled; confused, disordered`);
// 4091	梢: shāo 肖 xiào	木 tree; wood, lumber; wooden
semphon("梢", "木", "肖", 4, `the tip of a branch; rudder`);
// 4092	佑: yòu 右 yòu	亻 man, person; people
semphon("佑", "亻", "右", 2, `to help; to protect; to bless`);
// 4096	陡: dǒu 走 zǒu	阝 place, town, city
semphon("陡", "阝", "走", 2, `steep, sloping; sudden, abrupt`);
// 4097	赐: cì 易 yì	贝 sea shell; money, currency
semphon("赐", "贝", "易", 4, `to give; to bestow a favor; to appoint`, simplified("賜"));
// 4098	賜: cì 易 yì	貝 sea shell; money, currency
semphon("賜", "貝", "易", 7, `to give; to bestow a favor; to appoint`);
// 4100	痹: bì 畀 bì	疒 sickness, disease
semphon("痹", "疒", "畀", 5, `numbess, paralysis`, simplified("痺"));
// 4101	痺: bì 卑 bēi	疒 sickness, disease
semphon("痺", "疒", "卑", 5, `numbness, paralysis`);
// 4105	婊: biǎo 表 biǎo	女 woman, girl; female
semphon("婊", "女", "表", 3, `whore, prostitute`);
// 4106	哺: bǔ 甫 fǔ	口 mouth; entrance, gate, opening
semphon("哺", "口", "甫", 3, `to chew; to feed`, simplified("餔"));
// 4108	譬: pì 辟 pì	言 words, speech; to speak, to say
phonsem("譬", "辟", "言", 13, `example; metaphor, simile`);
// 4111	霞: xiá 叚 jiǎ	雨 rain
semphon("霞", "雨", "叚", 8, `rosy clouds`);
// 4114	汹: xiōng 凶 xiōng	氵 water
semphon("汹", "氵", "凶", 3, `turbulent, torrential, restless`, simplified("洶"));
// 4116	稣: sū 鱼 yú	禾 cereal, grain, rice; plant, stalk
phonsem("稣", "鱼", "禾", 8, `to revive; to rise again`, simplified("穌"));
// 4117	穌: sū 魚 yú	禾 cereal, grain, rice; plant, stalk
phonsem("穌", "魚", "禾", 11, `to revive; to rise again`);
// 4118	爹: diē 多 duō	父 father, dad
semphon("爹", "父", "多", 4, `father, dad, daddy`);
// 4124	筛: shāi 师 shī	⺮ bamboo; flute
semphon("筛", "⺮", "师", 6, `screen, sieve; to filter, to sift`, simplified("篩"));
// 4125	篩: shāi 師 shī	⺮ bamboo; flute
semphon("篩", "⺮", "師", 6, `screen, sieve; to filter, to sift`);
// 4126	讳: huì 韦 wéi	讠 words, speech; to speak, to say
semphon("讳", "讠", "韦", 2, `taboo; to shun, to conceal, to avoid mentioning`, simplified("諱"));
// 4127	諱: huì 韋 wéi	言 words, speech; to speak, to say
semphon("諱", "言", "韋", 7, `taboo; to shun, to conceal, to avoid mentioning`);
// 4130	呐: nà 内 nèi	口 mouth; entrance, gate, opening
semphon("呐", "口", "内", 3, `to raise one's voice; to yell, to shout; to stammer`, simplified("吶"));
// 4131	吶: nà 內 nèi	口 mouth; entrance, gate, opening
semphon("吶", "口", "內", 3, `to raise one's voice; to yell, to shout; to stammer`);
// 4135	疙: gē 乞 qǐ	疒 sickness, disease
semphon("疙", "疒", "乞", 5, `pimple, sore; wart, pustule`);
// 4136	瘩: da 荅 dā	疒 sickness, disease
semphon("瘩", "疒", "荅", 5, `pimples`);
// 4137	萌: méng 明 míng	艹 grass, weed, plant, herb
semphon("萌", "艹", "明", 3, `bud, germ, sprout; to bud`);
// 4138	垄: lǒng 龙 lóng	土 soil, earth; items made of earth
phonsem("垄", "龙", "土", 5, `grave, mound; furrow, ridge`, simplified("壟"));
// 4139	壟: lǒng 龍 lóng	土 soil, earth; items made of earth
phonsem("壟", "龍", "土", 16, `grave, mound; furrow, ridge`);
// 4145	睬: cǎi 采 cǎi	目 eye; to look, to see; division, topic
semphon("睬", "目", "采", 5, `to notice, to pay attention to`, simplified("倸"));
// 4149	坠: zhuì 队 duì	土 soil, earth; items made of earth
phonsem("坠", "队", "土", 4, `to drop, to fall down, to sink; heavy; weight`, simplified("墜"));
// 4150	墜: zhuì 隊 duì	土 soil, earth; items made of earth
phonsem("墜", "隊", "土", 11, `to drop, to fall down, to sink; heavy; weight`);
// 4152	晝: zhòu 聿 yù	旦 dawn; morning; day
phonsem("晝", "聿", "旦", 6, `daytime, daylight`);
// 4153	遏: è 曷 hé	辶 to walk; walking
semphon("遏", "辶", "曷", 9, `to curb, to check, to stop, to suppress`);
// 4154	屠: tú 者 zhě	尸 body, corpse
semphon("屠", "尸", "者", 3, `to butcher, to slaughter; massacre`);
// 4156	沐: mù 木 mù	氵 water
semphon("沐", "氵", "木", 3, `to bathe, to cleanse, to shampoo, to wash`);
// 4157	肝: gān 干 gàn	⺼ meat, flesh; organic compound
semphon("肝", "⺼", "干", 4, `liver`);
// 4158	瞩: zhǔ 属 shǔ	目 eye; to look, to see; division, topic
semphon("瞩", "目", "属", 5, `to focus on, to stare at, to watch carefully`, simplified("矚"));
// 4159	矚: zhǔ 屬 shǔ	目 eye; to look, to see; division, topic
semphon("矚", "目", "屬", 5, `to focus on, to stare at, to watch carefully`);
// 4164	捎: shāo 肖 xiào	扌 hand
semphon("捎", "扌", "肖", 3, `to carry, to take; to select`);
// 4165	搓: cuō 差 chà	扌 hand
semphon("搓", "扌", "差", 3, `to rub or roll between the hands`);
// 4166	唆: suō 夋 qūn	口 mouth; entrance, gate, opening
semphon("唆", "口", "夋", 3, `to make mischief; to instigate, to incite`);
// 4173	仆: pú 卜 bo	亻 man, person; people
semphon("仆", "亻", "卜", 2, `to fall forward; prostrate, prone; servant`, simplified("僕"));
// 4175	抒: shū 扌 shǒu	予 to give; to award
phonsem("抒", "扌", "予", 3, `to express; to pour out`);
// 4177	葛: gé 曷 hé	艹 grass, weed, plant, herb
semphon("葛", "艹", "曷", 3, `an edible bean; vine; surname`);
// 4178	辽: liáo 了 le liǎo	辶 to walk; walking
semphon("辽", "辶", "了", 2, `distant, far`, simplified("遼"));
// 4179	遼: liáo 尞 liào	辶 to walk; walking
semphon("遼", "辶", "尞", 12, `distant, far`);
// 4183	茨: cí 次 cì	艹 grass, weed, plant, herb
semphon("茨", "艹", "次", 3, `thatching; caltrop, Tribulus terrestris`);
// 4188	畴: chóu 寿 shòu	田 field, farm, arable land; cultivated
semphon("畴", "田", "寿", 5, `field, farmland; class, category`, simplified("疇"));
// 4189	疇: chóu 壽 shòu	田 field, farm, arable land; cultivated
semphon("疇", "田", "壽", 5, `field, farmland; class, category`);
// 4190	殃: yāng 央 yāng	歹 corpse; death; evil, depraved, wicked
semphon("殃", "歹", "央", 4, `misfortune, disaster, calamity`);
// 4191	蹬: dēng 登 dēng	足 foot; to attain, to satisfy; enough
semphon("蹬", "足", "登", 7, `to step on; to wear; to face bad luck`);
// 4194	讥: jī 几 jǐ	讠 words, speech; to speak, to say
semphon("讥", "讠", "几", 2, `to ridicule, to mock, to jeer`, simplified("譏"));
// 4195	譏: jī 幾 jǐ	言 words, speech; to speak, to say
semphon("譏", "言", "幾", 7, `to ridicule, to mock, to jeer`);
// 4198	腮: sāi 思 sī	⺼ meat, flesh; organic compound
semphon("腮", "⺼", "思", 4, `jaw; gills`, simplified("顋"));
// 4202	惦: diàn 店 diàn	忄 heart; mind; soul
semphon("惦", "忄", "店", 3, `to think of, to remember, to miss`);
// 4203	酌: zhuó 勺 sháo	酉 wine; wine vessel; chemical
semphon("酌", "酉", "勺", 7, `to pour wine, to drink wine; to deliberate, to consider`);
// 4213	狈: bèi 贝 bèi	犭 dog
semphon("狈", "犭", "贝", 3, `a legendary wolf; distressed, wretched`, simplified("狽"));
// 4214	狽: bèi 貝 bèi	犭 dog
semphon("狽", "犭", "貝", 3, `a legendary wolf; distressed, wretched`);
// 4217	郡: jùn 君 jūn	阝 place, town, city
phonsem("郡", "君", "阝", 7, `county, region, administrative division`);
// 4218	眯: mī 米 mǐ	目 eye; to look, to see; division, topic
semphon("眯", "目", "米", 5, `to squint, to narrow the eyes; blindness`, simplified("瞇"));
// 4224	唔: wú 吾 wú	口 mouth; entrance, gate, opening
semphon("唔", "口", "吾", 3, `to hold in the mouth; bite`);
// 4226	怠: dài 台 tái	心 heart; mind; soul
phonsem("怠", "台", "心", 5, `idle; negligent, remiss; to neglect`);
// 4227	咀: jǔ 且 qiě	口 mouth; entrance, gate, opening
semphon("咀", "口", "且", 3, `to suck; to chew`);
// 4228	咪: mī 米 mǐ	口 mouth; entrance, gate, opening
semphon("咪", "口", "米", 3, `a cat's meow; a meter`);
// 4229	隘: ài 益 yì	阝 place, town, city
semphon("隘", "阝", "益", 2, `narrow, confined; a strategic pass`);
// 4233	峭: qiào 肖 xiào	山 mountain, hill, peak
semphon("峭", "山", "肖", 3, `steep, precipitous, rugged`, simplified("陗"));
// 4235	俭: jiǎn 佥 qiān	亻 man, person; people
semphon("俭", "亻", "佥", 2, `temperate, frugal, economical`, simplified("儉"));
// 4236	儉: jiǎn 僉 qiān	亻 man, person; people
semphon("儉", "亻", "僉", 2, `temperate, frugal, economical`);
// 4237	莲: lián 连 lián	艹 grass, weed, plant, herb
semphon("莲", "艹", "连", 3, `lotus, water lily; paradise`, simplified("蓮"));
// 4238	蓮: lián 連 lián	艹 grass, weed, plant, herb
semphon("蓮", "艹", "連", 4, `lotus, water lily; paradise`);
// 4239	瞻: zhān 詹 zhān	目 eye; to look, to see; division, topic
semphon("瞻", "目", "詹", 5, `to look; to look out for; to respect`);
// 4242	毙: bì 比 bǐ	死 dead; death; impassable, inflexible
phonsem("毙", "比", "死", 4, `to kill; to die a violent death`, simplified("斃"));
// 4243	斃: bì 敝 bì	死 dead; death; impassable, inflexible
phonsem("斃", "敝", "死", 11, `to kill; to die a violent death`);
// 4245	狄: dí 火 huǒ	犭 dog
semphon("狄", "犭", "火", 3, `barbarians; a tribe from northern China; surname`);
// 4246	迸: bèng 并 bìng	辶 to walk; walking
semphon("迸", "辶", "并", 6, `to gush, to burst; to crack, to split`);
// 4249	妖: yāo 夭 yāo	女 woman, girl; female
semphon("妖", "女", "夭", 3, `strange, weird, supernatural; bewitching, enchanting, seductive`);
// 4252	贾: jiǎ 覀 xī	贝 sea shell; money, currency
phonsem("贾", "覀", "贝", 6, `merchant; to buy, to trade; surname`, simplified("賈"));
// 4253	賈: jiǎ 覀 xī	貝 sea shell; money, currency
phonsem("賈", "覀", "貝", 6, `merchant; to buy, to trade; surname`);
// 4256	楊: yáng 昜 yáng	木 tree; wood, lumber; wooden
semphon("楊", "木", "昜", 4, `willow, poplar, aspen; surname`);
// 4259	萝: luó 罗 luō	艹 grass, weed, plant, herb
semphon("萝", "艹", "罗", 3, `carrot, radish, turnip`, simplified("蘿"));
// 4260	蘿: luó 羅 luō	艹 grass, weed, plant, herb
semphon("蘿", "艹", "羅", 4, `carrot, radish, turnip`);
// 4267	淀: diàn 定 dìng	氵 water
semphon("淀", "氵", "定", 3, `marsh, swamp; sediment; to precipitate`, simplified("澱"));
// 4269	晾: liàng 京 jīng	日 sun; day; daytime
semphon("晾", "日", "京", 4, `to air-dry; to sun-dry`);
// 4270	沧: cāng 仓 cāng	氵 water
semphon("沧", "氵", "仓", 3, `azure, cold, vast (all as of the sea)`, simplified("滄"));
// 4271	滄: cāng 倉 cāng	氵 water
semphon("滄", "氵", "倉", 3, `azure, cold, vast (all as of the sea)`);
// 4275	瞄: miáo 苗 miáo	目 eye; to look, to see; division, topic
semphon("瞄", "目", "苗", 5, `to take aim at; to look at`);
// 4276	暧: ài 爱 ài	日 sun; day; daytime
semphon("暧", "日", "爱", 4, `obscure, dim; ambiguous, vague`, simplified("曖"));
// 4277	曖: ài 愛 ài	日 sun; day; daytime
semphon("曖", "日", "愛", 4, `obscure, dim; ambiguous, vague`);
// 4278	惋: wǎn 宛 wǎn	忄 heart; mind; soul
semphon("惋", "忄", "宛", 3, `to regret, to be sorry`);
// 4279	琼: qióng 京 jīng	王 king, ruler; royal; surname
semphon("琼", "王", "京", 4, `jade; rare, precious; elegant`, simplified("瓊"));
// 4281	翁: wēng 公 gōng	羽 feather, plume; wings
phonsem("翁", "公", "羽", 4, `old man; father, father-in-law`);
// 4282	玫: méi 攵 pū	王 king, ruler; royal; surname
semphon("玫", "王", "攵", 4, `rose`);
// 4283	瑰: guī 鬼 guǐ	王 king, ruler; royal; surname
semphon("瑰", "王", "鬼", 4, `extraordinary, fabulous; rose; semi-precious stone`, simplified("瓌"));
// 4288	腺: xiàn 泉 quán	⺼ meat, flesh; organic compound
semphon("腺", "⺼", "泉", 4, `gland`);
// 4292	侨: qiáo 乔 qiáo	亻 man, person; people
semphon("侨", "亻", "乔", 2, `emigrant; to sojourn`, simplified("僑"));
// 4293	僑: qiáo 喬 qiáo	亻 man, person; people
semphon("僑", "亻", "喬", 2, `emigrant; to sojourn`);
// 4294	鹅: é 我 wǒ	鸟 bird
phonsem("鹅", "我", "鸟", 7, `goose`, simplified("鵝"));
// 4295	鵝: é 我 wǒ	鳥 bird
phonsem("鵝", "我", "鳥", 7, `goose`);
// 4299	侍: shì 寺 sì	亻 man, person; people
semphon("侍", "亻", "寺", 2, `to serve, to attend upon; servant, attendant; samurai`);
// 4300	芭: bā 巴 bā	艹 grass, weed, plant, herb
semphon("芭", "艹", "巴", 3, `a plantain or banana palm`);
// 4302	椭: tuǒ 陏 duò	木 tree; wood, lumber; wooden
semphon("椭", "木", "陏", 4, `elliptical, oval-shaped; tubular`, simplified("橢"));
// 4303	橢: tuǒ 隋 suí	木 tree; wood, lumber; wooden
semphon("橢", "木", "隋", 4, `elliptical, oval-shaped; tubular`);
// 4306	侄: zhí 至 zhì	亻 man, person; people
semphon("侄", "亻", "至", 2, `nephew`, simplified("姪"));
// 4307	姪: zhí 至 zhì	女 woman, girl; female
semphon("姪", "女", "至", 3, `niece`);
// 4309	茄: jiā 加 jiā	艹 grass, weed, plant, herb
semphon("茄", "艹", "加", 3, `eggplant`);
// 4312	酪: lào 各 gè	酉 wine; wine vessel; chemical
semphon("酪", "酉", "各", 7, `cream, cheese; koumiss`);
// 4314	稠: chóu 周 zhōu	禾 cereal, grain, rice; plant, stalk
semphon("稠", "禾", "周", 5, `crowded, dense; viscous, thick`);
// 4315	坎: kǎn 欠 qiàn	土 soil, earth; items made of earth
semphon("坎", "土", "欠", 3, `pit, hole; to trap, to snare; crisis`, simplified("埳"));
// 4317	柄: bǐng 丙 bǐng	木 tree; wood, lumber; wooden
semphon("柄", "木", "丙", 4, `handle, lever, knob; authority`);
// 4320	猩: xīng 星 xīng	犭 dog
semphon("猩", "犭", "星", 3, `ape, orangutan`);
// 4326	豁: huō 害 hài	谷 valley, gorge, ravine
phonsem("豁", "害", "谷", 10, `clear, open; exempt`);
// 4327	猖: chāng 昌 chāng	犭 dog
semphon("猖", "犭", "昌", 3, `mad, wild; reckless, unruly`);
// 4329	蜘: zhī 知 zhī	虫 insect, worm; mollusk
semphon("蜘", "虫", "知", 6, `spider`);
// 4330	蛛: zhū 朱 zhū	虫 insect, worm; mollusk
semphon("蛛", "虫", "朱", 6, `spider`);
// 4333	哆: duō 多 duō	口 mouth; entrance, gate, opening
semphon("哆", "口", "多", 3, `to quiver, to tremble, to shudder`);
// 4334	腕: wàn 宛 wǎn	⺼ meat, flesh; organic compound
semphon("腕", "⺼", "宛", 4, `wrist`);
// 4335	黛: dài 代 dài	黑 black; dark; evil, sinister
phonsem("黛", "代", "黑", 5, `to blacken one's eyebrows; black`);
// 4336	勋: xūn 员 yuán	力 strength, power; capability, influence
phonsem("勋", "员", "力", 7, `deeds, feats; merit; rank`, simplified("勛"));
// 4337	勛: xūn 員 yuán	力 strength, power; capability, influence
phonsem("勛", "員", "力", 10, `deeds, feats; merit; rank`);
// 4340	惮: dàn 单 dān	忄 heart; mind; soul
semphon("惮", "忄", "单", 3, `to fear, to dread; to dislike, to avoid`, simplified("憚"));
// 4341	憚: dàn 單 dān	忄 heart; mind; soul
semphon("憚", "忄", "單", 3, `to fear, to dread; to dislike, to avoid`);
// 4344	浩: hào 告 gào	氵 water
semphon("浩", "氵", "告", 3, `great, grand, vast`);
// 4345	泣: qì 立 lì	氵 water
semphon("泣", "氵", "立", 3, `to cry, to sob, to weep`);
// 4346	纱: shā 少 shǎo	纟 silk; thread
semphon("纱", "纟", "少", 3, `gauze, muslin, yarn`, simplified("紗"));
// 4347	紗: shā 少 shǎo	糹 silk; thread
semphon("紗", "糹", "少", 6, `gauze, muslin, yarn`);
// 4349	漿: jiāng 將 jiāng	水 water, liquid, lotion, juice
phonsem("漿", "將", "水", 11, `pulp, starch, syrup; a thick fluid`);
// 4350	磋: cuō 差 chà	石 stone, rock, mineral
semphon("磋", "石", "差", 5, `to polish, to buff; to examine, to deliberate`);
// 4355	舶: bó 白 bái	舟 boat, ship
semphon("舶", "舟", "白", 6, `large ship, ocean-going vessel`);
// 4357	狐: hú 瓜 guā	犭 dog
semphon("狐", "犭", "瓜", 3, `fox`);
// 4358	狸: lí 里 lǐ	犭 dog
semphon("狸", "犭", "里", 3, `fox`, simplified("貍"));
// 4359	貍: lí 里 lǐ	豸 badger; legendary beast
semphon("貍", "豸", "里", 7, `fox, wildcat`);
// 4360	芳: fāng 方 fāng	艹 grass, weed, plant, herb
semphon("芳", "艹", "方", 3, `fragrant; beautiful, virtuous`);
// 4361	缸: gāng 工 gōng	缶 earthen crock or jar; pottery
semphon("缸", "缶", "工", 6, `earthen jug, crock, cistern`);
// 4362	踌: chóu 寿 shòu	足 foot; to attain, to satisfy; enough
semphon("踌", "足", "寿", 7, `to falter, to hesitate; smug, self-satisfied`, simplified("躊"));
// 4363	躊: chóu 壽 shòu	足 foot; to attain, to satisfy; enough
semphon("躊", "足", "壽", 7, `to falter, to hesitate; smug, self-satisfied`);
// 4364	躇: chú 著 zhe	足 foot; to attain, to satisfy; enough
semphon("躇", "足", "著", 7, `to hesitate, to falter; undecided`);
// 4365	娅: yà 亚 yà	女 woman, girl; female
semphon("娅", "女", "亚", 3, `a mutual term of address for sons-in-law or brothers-in-law`, simplified("婭"));
// 4366	婭: yà 亞 yà	女 woman, girl; female
semphon("婭", "女", "亞", 3, `a mutual term of address for sons-in-law or brothers-in-law`);
// 4370	锡: xī 易 yì	钅 gold, metal; money
semphon("锡", "钅", "易", 5, `tin; to bestow, to confer`, simplified("錫"));
// 4371	錫: xī 易 yì	釒 gold, metal; money
semphon("錫", "釒", "易", 8, `tin; to bestow, to confer`);
// 4372	芙: fú 夫 fū	艹 grass, weed, plant, herb
semphon("芙", "艹", "夫", 3, `lotus; hibiscus`);
// 4373	阂: hé 亥 hài	门 gate, door, entrance, opening
semphon("阂", "门", "亥", 3, `separated, blocked; to prevent, to block`, simplified("閡"));
// 4374	閡: hé 亥 hài	門 gate, door, entrance, opening
semphon("閡", "門", "亥", 8, `separated, blocked; to prevent, to block`);
// 4380	棚: péng 朋 péng	木 tree; wood, lumber; wooden
semphon("棚", "木", "朋", 4, `shack, shed; tent, awning`);
// 4383	鄧: dèng 登 dēng	阝 place, town, city
phonsem("鄧", "登", "阝", 12, `surname`);
// 4389	柳: liǔ 卯 mǎo	木 tree; wood, lumber; wooden
semphon("柳", "木", "卯", 4, `willow tree; pleasure; surname`, simplified("栁"));
// 4392	喽: lóu 娄 lóu	口 mouth; entrance, gate, opening
semphon("喽", "口", "娄", 3, `used in onomatopoetic expressions`, simplified("嘍"));
// 4393	嘍: lóu 婁 lóu	口 mouth; entrance, gate, opening
semphon("嘍", "口", "婁", 3, `used in onomatopoetic expressions`);
// 4398	橄: gǎn 敢 gǎn	木 tree; wood, lumber; wooden
semphon("橄", "木", "敢", 4, `olive`);
// 4399	涮: shuàn 刷 shuā	氵 water
semphon("涮", "氵", "刷", 3, `to rinse; to boil or cook in juice`);
// 4400	疚: jiù 久 jiǔ	疒 sickness, disease
semphon("疚", "疒", "久", 5, `chronic disease; guilt, remorse; sorrow`);
// 4403	呜: wū 乌 wū	口 mouth; entrance, gate, opening
semphon("呜", "口", "乌", 3, `the sound of someone crying or sobbing`, simplified("嗚"));
// 4404	嗚: wū 烏 wū	口 mouth; entrance, gate, opening
semphon("嗚", "口", "烏", 3, `the sound of someone crying or sobbing`);
// 4405	虾: xiā 下 xià	虫 insect, worm; mollusk
semphon("虾", "虫", "下", 6, `shrimp, prawn`, simplified("蝦"));
// 4406	蝦: xiā 叚 jiǎ	虫 insect, worm; mollusk
semphon("蝦", "虫", "叚", 6, `shrimp, prawn`);
// 4409	镖: biāo 票 piào	钅 gold, metal; money
semphon("镖", "钅", "票", 5, `spear, harpoon, dart; to escort`, simplified("鏢"));
// 4410	鏢: biāo 票 piào	釒 gold, metal; money
semphon("鏢", "釒", "票", 8, `spear, harpoon, dart; to escort`);
// 4416	崙: lún 侖 lún	山 mountain, hill, peak
semphon("崙", "山", "侖", 3, `the Kunlun mountains in Jiangsu`);
// 4422	哩: lī 里 lǐ	口 mouth; entrance, gate, opening
semphon("哩", "口", "里", 3, `mile`);
// 4423	珊: shān 册 cè	王 king, ruler; royal; surname
semphon("珊", "王", "册", 4, `coral`);
// 4425	镑: bàng 旁 páng	钅 gold, metal; money
semphon("镑", "钅", "旁", 5, `pound sterling`, simplified("鎊"));
// 4426	鎊: bàng 旁 páng	釒 gold, metal; money
semphon("鎊", "釒", "旁", 8, `pound sterling`);
// 4427	棺: guān 官 guān	木 tree; wood, lumber; wooden
semphon("棺", "木", "官", 4, `coffin`);
// 4428	茜: qiàn 西 xī	艹 grass, weed, plant, herb
semphon("茜", "艹", "西", 3, `reed, madder; Rubia cordifolia`);
// 4429	肮: āng 亢 kàng	⺼ meat, flesh; organic compound
semphon("肮", "⺼", "亢", 4, `dirty, filthy`, simplified("骯"));
// 4430	骯: āng 亢 kàng	骨 bone; skeleton; frame, framework
semphon("骯", "骨", "亢", 10, `dirty, filthy`);
// 4431	奎: kuí 圭 guī	大 big, great, vast, high, deep
semphon("奎", "大", "圭", 3, `a man's stride; a constellation`);
// 4432	豹: bào 勺 sháo	豸 badger; legendary beast
semphon("豹", "豸", "勺", 7, `leopard, panther; surname`);
// 4433	鸦: yā 牙 yá	鸟 bird
phonsem("鸦", "牙", "鸟", 4, `crow; Corvus species (various)`, simplified("鴉"));
// 4434	鴉: yā 牙 yá	鳥 bird
phonsem("鴉", "牙", "鳥", 4, `crow; Corvus species (various)`);
// 4436	浦: pǔ 甫 fǔ	氵 water
semphon("浦", "氵", "甫", 3, `beach, shore, river bank; surname`);
// 4438	翠: cuì 卒 zú	羽 feather, plume; wings
semphon("翠", "羽", "卒", 6, `kingfisher; jade, emerald`);
// 4442	雹: báo 包 bāo	雨 rain
semphon("雹", "雨", "包", 8, `hail`);
// 4444	躯: qū 区 qū	身 body, torso; person; pregnancy
semphon("躯", "身", "区", 7, `the human body`, simplified("軀"));
// 4445	軀: qū 區 qū	身 body, torso; person; pregnancy
semphon("軀", "身", "區", 7, `the human body`);
// 4447	驴: lǘ 户 hù	马 horse; surname
semphon("驴", "马", "户", 3, `donkey, ass`, simplified("驢"));
// 4448	驢: lǘ 盧 lú	馬 horse; surname
semphon("驢", "馬", "盧", 10, `donkey, ass`);
// 4453	暄: xuān 宣 xuān	日 sun; day; daytime
semphon("暄", "日", "宣", 4, `warm, genial; comfortable`);
// 4454	募: mù 莫 mò	力 strength, power; capability, influence
phonsem("募", "莫", "力", 10, `to levy, to raise; to recruit; to summon`);
// 4455	蚂: mǎ 马 mǎ	虫 insect, worm; mollusk
semphon("蚂", "虫", "马", 6, `ant; leech`, simplified("螞"));
// 4456	螞: mǎ 馬 mǎ	虫 insect, worm; mollusk
semphon("螞", "虫", "馬", 6, `ant; leech`);
// 4457	蚁: yǐ 义 yì	虫 insect, worm; mollusk
semphon("蚁", "虫", "义", 6, `ant`, simplified("蟻"));
// 4458	蟻: yǐ 義 yì	虫 insect, worm; mollusk
semphon("蟻", "虫", "義", 6, `ant`);
// 4462	靴: xuē 化 huà	革 leather, animal hide; to reform; to remove
semphon("靴", "革", "化", 9, `boots`, simplified("鞾"));
// 4465	趙: zhào 肖 xiào	走 to walk, to run, to flee
semphon("趙", "走", "肖", 7, `ancient state; surname`);
// 4466	扳: bān 反 fǎn	扌 hand
semphon("扳", "扌", "反", 3, `to drag, to pull; to twist`);
// 4472	懦: nuò 需 xū	忄 heart; mind; soul
semphon("懦", "忄", "需", 3, `weak, timid, cowardly`);
// 4475	桂: guì 圭 guī	木 tree; wood, lumber; wooden
semphon("桂", "木", "圭", 4, `cassia, cinnamon`);
// 4477	僚: liáo 尞 liào	亻 man, person; people
semphon("僚", "亻", "尞", 2, `companion, colleague; officials; bureaucracy; a pretty face`);
// 4478	侏: zhū 朱 zhū	亻 man, person; people
semphon("侏", "亻", "朱", 2, `small, tiny; dwarf`);
// 4479	儒: rú 需 xū	亻 man, person; people
semphon("儒", "亻", "需", 2, `Confucian scholar`);
// 4482	恤: xù 血 xuè	忄 heart; mind; soul
semphon("恤", "忄", "血", 3, `to help, to relieve, to take pity on`, simplified("卹"));
// 4486	拄: zhǔ 主 zhǔ	扌 hand
semphon("拄", "扌", "主", 3, `post; to lean on; to prod, to ridicule`);
// 4487	汀: tīng 丁 dīng	氵 water
semphon("汀", "氵", "丁", 3, `bank, sandbar; beach, shore`);
// 4488	汪: wāng 王 wáng	氵 water
semphon("汪", "氵", "王", 3, `vast, extensive, deep; surname`);
// 4490	咕: gū 古 gǔ	口 mouth; entrance, gate, opening
semphon("咕", "口", "古", 3, `mumble, mutter, murmur; rumble`);
// 4491	趾: zhǐ 止 zhǐ	足 foot; to attain, to satisfy; enough
semphon("趾", "足", "止", 7, `toe; tracks, footprints`);
// 4492	梭: suō 夋 qūn	木 tree; wood, lumber; wooden
semphon("梭", "木", "夋", 4, `a weaver's shuttle; to go back and forth`);
// 4495	绞: jiǎo 交 jiāo	纟 silk; thread
semphon("绞", "纟", "交", 3, `intertwined; to twist, to wring; to hang a criminal`, simplified("絞"));
// 4496	絞: jiǎo 交 jiāo	糹 silk; thread
semphon("絞", "糹", "交", 6, `intertwined; to twist, to wring; to hang a criminal`);
// 4497	轴: zhóu 由 yóu	车 cart, vehicle; to move in a cart
semphon("轴", "车", "由", 4, `axle, pivot, shaft; axis`, simplified("軸"));
// 4498	軸: zhóu 由 yóu	車 cart, vehicle; to move in a cart
semphon("軸", "車", "由", 7, `axle, pivot, shaft; axis`);
// 4499	棘: jí 朿 cì	朿 thorn, sting, prickle; to stab; to assassinate
semphon("棘", "朿", "朿", 6, `jujube tree; thorns, brambles`);
// 4502	伽: jiā gā 加 jiā	亻 man, person; people
semphon("伽", "亻", "加", 2, `temple; used to transliterations`);
// 4503	攘: rǎng 襄 xiāng	扌 hand
semphon("攘", "扌", "襄", 3, `to usurp, to seize; to repel`);
// 4508	凳: dèng 登 dēng	几 small table; how many; a few, some
phonsem("凳", "登", "几", 12, `bench; stool`, simplified("櫈"));
// 4513	捅: tǒng 甬 yǒng	扌 hand
semphon("捅", "扌", "甬", 3, `to jab, to poke`);
// 4515	槟: bīn 宾 bīn	木 tree; wood, lumber; wooden
semphon("槟", "木", "宾", 4, `betel-nut, areca nut`, simplified("檳"));
// 4516	檳: bīn 賓 bīn	木 tree; wood, lumber; wooden
semphon("檳", "木", "賓", 4, `betel-nut, areca nut`);
// 4517	忏: chàn 千 qiān	忄 heart; mind; soul
semphon("忏", "忄", "千", 3, `to regret, to repent; confession, penitence`, simplified("懺"));
// 4519	唬: hǔ 虎 hǔ	口 mouth; entrance, gate, opening
semphon("唬", "口", "虎", 3, `to intimidate; to scare`);
// 4521	徐: xú 余 yú	彳 to step with the left foot
semphon("徐", "彳", "余", 3, `slowly, quietly, calmly; dignified, composed`);
// 4522	骆: luò 各 gè	马 horse; surname
semphon("骆", "马", "各", 3, `camel`, simplified("駱"));
// 4523	駱: luò 各 gè	馬 horse; surname
semphon("駱", "馬", "各", 10, `camel`);
// 4524	驼: tuó 它 tā	马 horse; surname
semphon("驼", "马", "它", 3, `camel; humpback; to carry on one's back`, simplified("駝"));
// 4525	駝: tuó 它 tā	馬 horse; surname
semphon("駝", "馬", "它", 10, `camel; humpback; to carry on one's back`);
// 4527	盔: kuī 灰 huī	皿 dish, vessel; shallow container
phonsem("盔", "灰", "皿", 6, `helmet; bowl, basin`);
// 4535	坪: píng 平 píng	土 soil, earth; items made of earth
semphon("坪", "土", "平", 3, `plain; level ground`);
// 4536	粪: fèn 共 gòng	米 rice, millet, grain
semphon("粪", "米", "共", 6, `manure, dung; shit, excrement`, simplified("糞"));
// 4538	铐: kào 考 kǎo	钅 gold, metal; money
semphon("铐", "钅", "考", 5, `shackles, manacles`, simplified("銬"));
// 4539	銬: kào 考 kǎo	釒 gold, metal; money
semphon("銬", "釒", "考", 8, `shackles, manacles`);
// 4541	撼: hàn 感 gǎn	扌 hand
semphon("撼", "扌", "感", 3, `to incite, to move, to shake`);
// 4544	陀: tuó 阝 yì	它 it; other
phonsem("陀", "阝", "它", 2, `steep bank, rough terrain`);
// 4547	铲: chǎn 产 chǎn	钅 gold, metal; money
semphon("铲", "钅", "产", 5, `spade, shovel; trowel, scoop`, simplified("鏟"));
// 4551	鲸: jīng 京 jīng	鱼 fish
semphon("鲸", "鱼", "京", 8, `whale`, simplified("鯨"));
// 4552	鯨: jīng 京 jīng	魚 fish
semphon("鯨", "魚", "京", 11, `whale`);
// 4554	卦: guà 圭 guī	卜 divination, fortune-telling; prophecy
phonsem("卦", "圭", "卜", 6, `divination, fortune-telling`);
// 4555	焕: huàn 奂 huàn	火 fire, flame; to burn; anger, rage
semphon("焕", "火", "奂", 4, `shining, lustrous`, simplified("煥"));
// 4556	煥: huàn 奐 huàn	火 fire, flame; to burn; anger, rage
semphon("煥", "火", "奐", 4, `shining, lustrous`);
// 4557	撇: piē 敝 bì	扌 hand
semphon("撇", "扌", "敝", 3, `to abandon, to discard`);
// 4558	玲: líng 令 lìng	王 king, ruler; royal; surname
semphon("玲", "王", "令", 4, `the tinkling of jewelry`);
// 4559	珑: lóng 龙 lóng	王 king, ruler; royal; surname
semphon("珑", "王", "龙", 4, `the tinkling of jewelry`, simplified("瓏"));
// 4560	瓏: lóng 龍 lóng	王 king, ruler; royal; surname
semphon("瓏", "王", "龍", 4, `the tinkling of jewelry`);
// 4567	萧: xiāo 艹 cǎo	肃 to pay respects; solemn, reverent
phonsem("萧", "艹", "肃", 3, `mournful, desolate; common Artemisa`, simplified("蕭"));
// 4568	蕭: xiāo 艹 cǎo	肅 to pay respects; solemn, reverent
phonsem("蕭", "艹", "肅", 4, `mournful, desolate; common Artemisa`);
// 4569	馨: xīn 殸 qìng	香 incense; fragrant, aromatic
phonsem("馨", "殸", "香", 11, `fragrant, aromatic`);
// 4570	砰: pēng 平 píng	石 stone, rock, mineral
semphon("砰", "石", "平", 5, `bang! the sound of crashing rock`);
// 4572	蔥: cōng 悤 cōng	艹 grass, weed, plant, herb
semphon("蔥", "艹", "悤", 4, `scallions, leeks, green onions`);
// 4573	钝: dùn 屯 tún	钅 gold, metal; money
semphon("钝", "钅", "屯", 5, `blunt, obtuse; dull, flat; dim-witted`, simplified("鈍"));
// 4574	鈍: dùn 屯 tún	釒 gold, metal; money
semphon("鈍", "釒", "屯", 8, `blunt, obtuse; dull, flat; dim-witted`);
// 4575	琪: qí 其 qí	王 king, ruler; royal; surname
semphon("琪", "王", "其", 4, `fine jade`);
// 4580	蛙: wā 圭 guī	虫 insect, worm; mollusk
semphon("蛙", "虫", "圭", 6, `frog`, simplified("鼃"));
// 4583	绷: běng 朋 péng	纟 silk; thread
semphon("绷", "纟", "朋", 3, `to bind, to strap, to draw firm`, simplified("繃"));
// 4595	骸: hái 亥 hài	骨 bone; skeleton; frame, framework
semphon("骸", "骨", "亥", 9, `skeleton, body; leg bone`);
// 4596	榴: liú 留 liú	木 tree; wood, lumber; wooden
semphon("榴", "木", "留", 4, `pomegranate`);
// 4598	窒: zhì 至 zhì	穴 cave, den, hole
semphon("窒", "穴", "至", 5, `to obstruct, to stop`);
// 4599	薇: wēi 微 wēi	艹 grass, weed, plant, herb
semphon("薇", "艹", "微", 3, `a kind of fern; Osmunda regalis`);
// 4602	冯: féng 冫 bīng	马 horse; surname
phonsem("冯", "冫", "马", 2, `to gallop; by dint of; surname`, simplified("馮"));
// 4603	馮: féng 冫 bīng	馬 horse; surname
phonsem("馮", "冫", "馬", 2, `to gallop; by dint of; surname`);
// 4608	茅: máo 矛 máo	艹 grass, weed, plant, herb
semphon("茅", "艹", "矛", 3, `rushes, reeds, grass; surname`);
// 4609	饵: ěr 耳 ěr	饣 food; to eat
semphon("饵", "饣", "耳", 3, `bait; cake; dumplings; to bait, to entice`, simplified("餌"));
// 4610	餌: ěr 耳 ěr	飠 food; to eat
semphon("餌", "飠", "耳", 8, `bait; cake; dumplings; to bait, to entice`);
// 4614	驯: xún 川 chuān	马 horse; surname
semphon("驯", "马", "川", 3, `tame, obedient, docile`, simplified("馴"));
// 4615	馴: xún 川 chuān	馬 horse; surname
semphon("馴", "馬", "川", 10, `tame, obedient, docile`);
// 4620	逞: chěng 呈 chéng	辶 to walk; walking
semphon("逞", "辶", "呈", 7, `indulge oneself; brag, show off`);
// 4623	拇: mǔ 母 mǔ	扌 hand
semphon("拇", "扌", "母", 3, `thumb; big toe`);
// 4624	褐: hè 曷 hé	衤 cloth
semphon("褐", "衤", "曷", 5, `coarse wool; dull, brown`);
// 4626	绰: chuò 卓 zhuō	纟 silk; thread
semphon("绰", "纟", "卓", 3, `graceful, delicate; spacious`, simplified("綽"));
// 4627	綽: chuò 卓 zhuō	糹 silk; thread
semphon("綽", "糹", "卓", 6, `graceful, delicate; spacious`);
// 4632	绊: bàn 半 bàn	纟 silk; thread
semphon("绊", "纟", "半", 3, `a loop of thread; shackles, fetters; to stumble, to trip`, simplified("絆"));
// 4633	絆: bàn 半 bàn	糹 silk; thread
semphon("絆", "糹", "半", 6, `a loop of thread; shackles, fetters; to stumble, to trip`);
// 4634	剃: tì 弟 dì	刂 knife
phonsem("剃", "弟", "刂", 7, `to shave`, simplified("薙"));
// 4639	猿: yuán 袁 yuán	犭 dog
semphon("猿", "犭", "袁", 3, `ape`, simplified("猨"));
// 4642	肋: lē 力 lì	⺼ meat, flesh; organic compound
semphon("肋", "⺼", "力", 4, `ribs; chest`);
// 4643	螃: páng 旁 páng	虫 insect, worm; mollusk
semphon("螃", "虫", "旁", 6, `crab`);
// 4644	蟹: xiè 解 jiě	虫 insect, worm; mollusk
phonsem("蟹", "解", "虫", 13, `crab, brachyura`, simplified("蠏"));
// 4648	咆: páo 包 bāo	口 mouth; entrance, gate, opening
semphon("咆", "口", "包", 3, `to roar`);
// 4649	哮: xiāo 孝 xiào	口 mouth; entrance, gate, opening
semphon("哮", "口", "孝", 3, `to cough; to pant; to roar`);
// 4652	坊: fāng 方 fāng	土 soil, earth; items made of earth
semphon("坊", "土", "方", 3, `neighborhood, district, community; street, lane; mill`);
// 4655	蝙: biān 扁 biǎn	虫 insect, worm; mollusk
semphon("蝙", "虫", "扁", 6, `bat`);
// 4656	蝠: fú 畐 fú	虫 insect, worm; mollusk
semphon("蝠", "虫", "畐", 6, `bat`);
// 4661	沦: lún 仑 lún	氵 water
semphon("沦", "氵", "仑", 3, `sunk, submerged; to perish, to be lost`, simplified("淪"));
// 4662	淪: lún 侖 lún	氵 water
semphon("淪", "氵", "侖", 3, `sunk, submerged; to perish, to be lost`);
// 4663	瑜: yú 俞 yú	王 king, ruler; royal; surname
semphon("瑜", "王", "俞", 4, `flawless gem or jewel`);
// 4664	懈: xiè 解 jiě	忄 heart; mind; soul
semphon("懈", "忄", "解", 3, `idle, relaxed; negligent, remiss`);
// 4666	喀: kā 客 kè	口 mouth; entrance, gate, opening
semphon("喀", "口", "客", 3, `to vomit; used in transliterations`);
// 4670	缅: miǎn 面 miàn	纟 silk; thread
semphon("缅", "纟", "面", 3, `distant, remote; to think of`, simplified("緬"));
// 4671	緬: miǎn 面 miàn	糹 silk; thread
semphon("緬", "糹", "面", 6, `distant, remote; to think of`);
// 4674	癖: pǐ 辟 pì	疒 sickness, disease
semphon("癖", "疒", "辟", 5, `craving, addiction; habit, hobby; indigestion`);
// 4677	颅: lú 卢 lú	页 page, sheet, leaf
phonsem("颅", "卢", "页", 5, `skull`, simplified("顱"));
// 4678	顱: lú 盧 lú	頁 page, sheet, leaf
phonsem("顱", "盧", "頁", 16, `skull`);
// 4679	疱: pào 包 bāo	疒 sickness, disease
semphon("疱", "疒", "包", 5, `acne`, simplified("皰"));
// 4680	皰: pào 包 bāo	皮 skin, hide, fur, feathers
semphon("皰", "皮", "包", 5, `acne`);
// 4682	崎: qí 奇 qí	山 mountain, hill, peak
semphon("崎", "山", "奇", 3, `rough, uneven; jagged, rugged`);
// 4683	岖: qū 区 qū	山 mountain, hill, peak
semphon("岖", "山", "区", 3, `steep, sheer; rugged, rough`, simplified("嶇"));
// 4684	嶇: qū 區 qū	山 mountain, hill, peak
semphon("嶇", "山", "區", 3, `steep, sheer; rugged, rough`);
// 4685	栓: shuān 全 quán	木 tree; wood, lumber; wooden
semphon("栓", "木", "全", 4, `cork, peg, stopper`);
// 4691	埔: bù 甫 fǔ	土 soil, earth; items made of earth
semphon("埔", "土", "甫", 3, `arena; market; plain; port`);
// 4693	砦: zhài 此 cǐ	石 stone, rock, mineral
phonsem("砦", "此", "石", 6, `stockade, fort, military outpost; brothel`);
// 4694	栖: qī 西 xī	木 tree; wood, lumber; wooden
semphon("栖", "木", "西", 4, `perch, roost, to stay`, simplified("棲"));
// 4695	棲: qī 妻 qī	木 tree; wood, lumber; wooden
semphon("棲", "木", "妻", 4, `perch, roost, to stay`);
// 4698	苛: kē 可 kě	艹 grass, weed, plant, herb
semphon("苛", "艹", "可", 3, `severe, harsh; rigorous, exacting`);
// 4702	嘟: dū 都 dōu	口 mouth; entrance, gate, opening
semphon("嘟", "口", "都", 3, `the sound of a horn tooting`);
// 4704	婶: shěn 审 shěn	女 woman, girl; female
semphon("婶", "女", "审", 3, `father's younger brother's wife`, simplified("嬸"));
// 4705	嬸: shěn 審 shěn	女 woman, girl; female
semphon("嬸", "女", "審", 3, `father's younger brother's wife`);
// 4706	莓: méi 每 měi	艹 grass, weed, plant, herb
semphon("莓", "艹", "每", 3, `moss; edible berries`);
// 4707	柠: níng 宁 níng	木 tree; wood, lumber; wooden
semphon("柠", "木", "宁", 4, `lemon`, simplified("檸"));
// 4708	檸: níng 寧 níng	木 tree; wood, lumber; wooden
semphon("檸", "木", "寧", 4, `lemon`);
// 4714	斐: fěi 非 fēi	文 culture, literature, writing
phonsem("斐", "非", "文", 8, `graceful, elegant, beautiful`);
// 4722	狙: jū 且 qiě	犭 dog
semphon("狙", "犭", "且", 3, `monkey, ape; to spy, to watch for; to lie in ambush`);
// 4728	嬉: xī 喜 xǐ	女 woman, girl; female
semphon("嬉", "女", "喜", 3, `to enjoy; to play, to amuse oneself`);
// 4729	吱: zhī 支 zhī	口 mouth; entrance, gate, opening
semphon("吱", "口", "支", 3, `to chirp; to hiss; to squeak`);
// 4738	骇: hài 亥 hài	马 horse; surname
semphon("骇", "马", "亥", 3, `to terrify, to shock, to frighten`, simplified("駭"));
// 4739	駭: hài 亥 hài	馬 horse; surname
semphon("駭", "馬", "亥", 10, `to terrify, to shock, to frighten`);
// 4746	渎: dú 卖 mài	氵 water
semphon("渎", "氵", "卖", 3, `ditch, sluice, gutter, drain`, simplified("瀆"));
// 4747	瀆: dú 賣 mài	氵 water
semphon("瀆", "氵", "賣", 3, `ditch, sluice, gutter, drain`);
// 4748	掺: càn 参 cān	扌 hand
semphon("掺", "扌", "参", 3, `to mix, to blend, to adulterate`, simplified("摻"));
// 4749	摻: càn 參 cān	扌 hand
semphon("摻", "扌", "參", 3, `to mix, to blend, to adulterate`);
// 4750	咧: liě 列 liè	口 mouth; entrance, gate, opening
semphon("咧", "口", "列", 3, `to grimace, to grin`);
// 4751	哗: huā 华 huá	口 mouth; entrance, gate, opening
semphon("哗", "口", "华", 3, `uproar, tumult, hubbub`, simplified("嘩"));
// 4752	嘩: huā 華 huá	口 mouth; entrance, gate, opening
semphon("嘩", "口", "華", 3, `uproar, tumult, hubbub`);
// 4756	撰: zhuàn 巽 xùn	扌 hand
semphon("撰", "扌", "巽", 3, `to compose, to write`, simplified("譔"));
// 4758	跤: jiāo 交 jiāo	足 foot; to attain, to satisfy; enough
semphon("跤", "足", "交", 7, `to tumble, to fall; to wrestle`);
// 4759	拱: gǒng 共 gòng	扌 hand
semphon("拱", "扌", "共", 3, `to salute, to bow; arched; arch`);
// 4765	氯: lǜ 录 lù	气 air, gas; steam, vapor; anger
semphon("氯", "气", "录", 4, `chlorine`);
// 4766	岭: lǐng 令 lìng	山 mountain, hill, peak
semphon("岭", "山", "令", 3, `mountain ridge, mountain peak`, simplified("嶺"));
// 4771	菩: pú 咅 pǒu	艹 grass, weed, plant, herb
semphon("菩", "艹", "咅", 3, `herb, aromatic plant`);
// 4777	靶: bǎ 巴 bā	革 leather, animal hide; to reform; to remove
semphon("靶", "革", "巴", 9, `target, mark`);
// 4779	钳: qián 甘 gān	钅 gold, metal; money
semphon("钳", "钅", "甘", 5, `pincers, pliers, tongs; to compress`, simplified("鉗"));
// 4780	鉗: qián 甘 gān	釒 gold, metal; money
semphon("鉗", "釒", "甘", 8, `pincers, pliers, tongs; to compress`);
// 4781	坤: kūn 土 tǔ	申 to report; to extend; to explain; to declare
phonsem("坤", "土", "申", 3, `earth; feminine`, simplified("堃"));
// 4783	苔: tái 台 tái	艹 grass, weed, plant, herb
semphon("苔", "艹", "台", 3, `moss, lichen`);
// 4787	瀋: chén 審 shěn	氵 water
semphon("瀋", "氵", "審", 3, `to sink, to submerge; addicted; surname`);
// 4788	迦: jiā 加 jiā	辶 to walk; walking
semphon("迦", "辶", "加", 5, `used in transliterations`);
// 4790	蚊: wén 文 wén	虫 insect, worm; mollusk
semphon("蚊", "虫", "文", 6, `mosquito, gnat`, simplified("螡"));
// 4793	秽: huì 岁 suì	禾 cereal, grain, rice; plant, stalk
semphon("秽", "禾", "岁", 5, `dirty, unclean; immoral, obscene`, simplified("穢"));
// 4794	穢: huì 歲 suì	禾 cereal, grain, rice; plant, stalk
semphon("穢", "禾", "歲", 5, `dirty, unclean; immoral, obscene`);
// 4795	灼: zhuó 勺 sháo	火 fire, flame; to burn; anger, rage
semphon("灼", "火", "勺", 4, `to burn, to cauterize; bright`);
// 4796	婉: wǎn 宛 wǎn	女 woman, girl; female
semphon("婉", "女", "宛", 3, `amiable, graceful, tactful; restrained`);
// 4800	陨: yǔn 员 yuán	阝 place, town, city
semphon("陨", "阝", "员", 2, `to slip, to fall; to drop; to die`, simplified("隕"));
// 4801	隕: yǔn 員 yuán	阝 place, town, city
semphon("隕", "阝", "員", 2, `to slip, to fall; to drop; to die`);
// 4808	碱: jiǎn 咸 xián	石 stone, rock, mineral
semphon("碱", "石", "咸", 5, `alkaline, alkali, lye, salt`, simplified("鹼"));
// 4809	鹼: jiǎn 僉 qiān	鹵 salt
semphon("鹼", "鹵", "僉", 11, `alkaline, alkali, lye, salt`);
// 4812	藻: zǎo 澡 zǎo	艹 grass, weed, plant, herb
semphon("藻", "艹", "澡", 3, `splendid, magnificent; algae`);
// 4813	揪: jiū 秋 qiū	扌 hand
semphon("揪", "扌", "秋", 3, `to pinch, to grasp`);
// 4820	玑: jī 几 jǐ	王 king, ruler; royal; surname
semphon("玑", "王", "几", 4, `an oblong pearl`, simplified("璣"));
// 4821	璣: jī 幾 jǐ	王 king, ruler; royal; surname
semphon("璣", "王", "幾", 4, `an oblong pearl`);
// 4829	叽: jī 几 jǐ	口 mouth; entrance, gate, opening
semphon("叽", "口", "几", 3, `to grumble; to sigh`, simplified("嘰"));
// 4830	嘰: jī 幾 jǐ	口 mouth; entrance, gate, opening
semphon("嘰", "口", "幾", 3, `to grumble; to sigh`);
// 4831	矫: jiǎo 乔 qiáo	矢 arrow, dart; to vow, to swear
semphon("矫", "矢", "乔", 5, `to correct, to rectify, to straighten out`, simplified("矯"));
// 4832	矯: jiǎo 喬 qiáo	矢 arrow, dart; to vow, to swear
semphon("矯", "矢", "喬", 5, `to correct, to rectify, to straighten out`);
// 4833	暇: xiá 叚 jiǎ	日 sun; day; daytime
semphon("暇", "日", "叚", 4, `leisure, relaxation, spare time`);
// 4834	枢: shū 区 qū	木 tree; wood, lumber; wooden
semphon("枢", "木", "区", 4, `door hinge; pivot; center of power`, simplified("樞"));
// 4835	樞: shū 區 qū	木 tree; wood, lumber; wooden
semphon("樞", "木", "區", 4, `door hinge; pivot; center of power`);
// 4836	呗: bei 贝 bèi	口 mouth; entrance, gate, opening
semphon("呗", "口", "贝", 3, `final particle of an assertion`, simplified("唄"));
// 4837	唄: bei 貝 bèi	口 mouth; entrance, gate, opening
semphon("唄", "口", "貝", 3, `final particle of an assertion`);
// 4838	拴: shuān 全 quán	扌 hand
semphon("拴", "扌", "全", 3, `to fasten, to bind`);
// 4839	啰: luō 罗 luō	口 mouth; entrance, gate, opening
semphon("啰", "口", "罗", 3, `long-winded, verbose`, simplified("囉"));
// 4840	囉: luō 羅 luō	口 mouth; entrance, gate, opening
semphon("囉", "口", "羅", 3, `long-winded, verbose`);
// 4844	怡: yí 台 tái	忄 heart; mind; soul
semphon("怡", "忄", "台", 3, `gladness, joy, pleasure; harmony`);
// 4845	谕: yù 俞 yú	讠 words, speech; to speak, to say
semphon("谕", "讠", "俞", 2, `to proclaim; to instruct; edict`, simplified("諭"));
// 4846	諭: yù 俞 yú	言 words, speech; to speak, to say
semphon("諭", "言", "俞", 7, `to proclaim; to instruct; edict`);
// 4851	竿: gān 干 gàn	⺮ bamboo; flute
semphon("竿", "⺮", "干", 6, `bamboo pole; penis`);
// 4852	喋: dié 枼 yè	口 mouth; entrance, gate, opening
semphon("喋", "口", "枼", 3, `to nag; babble, chatter`, simplified("啑"));
// 4854	咎: jiù 处 chù	口 mouth; entrance, gate, opening
phonsem("咎", "处", "口", 5, `fault, defect; error, mistake`);
// 4855	踝: huái 果 guǒ	足 foot; to attain, to satisfy; enough
semphon("踝", "足", "果", 7, `ankle`);
// 4856	彬: bīn 林 lín	彡 hair; sunlight
phonsem("彬", "林", "彡", 8, `ornamental; cultivated, refined, well-bred`);
// 4862	舵: duò 它 tā	舟 boat, ship
semphon("舵", "舟", "它", 6, `helm, rudder`);
// 4863	痔: zhì 寺 sì	疒 sickness, disease
semphon("痔", "疒", "寺", 5, `piles, hemorrhoids`);
// 4864	疮: chuāng 仓 cāng	疒 sickness, disease
semphon("疮", "疒", "仓", 5, `boil, tumor; wound, sore`, simplified("瘡"));
// 4865	瘡: chuāng 倉 cāng	疒 sickness, disease
semphon("瘡", "疒", "倉", 5, `boil, tumor; wound, sore`);
// 4866	拂: fú 弗 fú	扌 hand
semphon("拂", "扌", "弗", 3, `to shake off, to brush away; dust`);
// 4867	踊: yǒng 甬 yǒng	足 foot; to attain, to satisfy; enough
semphon("踊", "足", "甬", 7, `to leap`, simplified("踴"));
// 4869	裘: qiú 求 qiú	衣 cloth; clothes, apparel; dress, coat
phonsem("裘", "求", "衣", 7, `fur coat; surname`);
// 4870	硝: xiāo 肖 xiào	石 stone, rock, mineral
semphon("硝", "石", "肖", 5, `saltpeter; to tan leather`);
// 4871	汝: rǔ 女 nǚ	氵 water
semphon("汝", "氵", "女", 3, `you`);
// 4872	淌: tǎng 尚 shàng	氵 water
semphon("淌", "氵", "尚", 3, `to trickle down, to flow, to drip; to shed tears`);
// 4873	咚: dōng 冬 dōng	口 mouth; entrance, gate, opening
semphon("咚", "口", "冬", 3, `onomatopoetic, a thumping sound`);
// 4878	螂: láng 郎 láng	虫 insect, worm; mollusk
semphon("螂", "虫", "郎", 6, `mantis, dung beetle`, simplified("蜋"));
// 4885	俺: ǎn 奄 yǎn	亻 man, person; people
semphon("俺", "亻", "奄", 2, `I, me, my (some dialects)`);
// 4887	恺: kǎi 岂 qǐ	忄 heart; mind; soul
semphon("恺", "忄", "岂", 3, `to enjoy; kind; joyful, content`, simplified("愷"));
// 4888	愷: kǎi 豈 qǐ	忄 heart; mind; soul
semphon("愷", "忄", "豈", 3, `to enjoy; kind; joyful, content`);
// 4891	逾: yú 俞 yú	辶 to walk; walking
semphon("逾", "辶", "俞", 9, `to jump over; to exceed, to surpass`, simplified("踰"));
// 4893	呛: qiāng 仓 cāng	口 mouth; entrance, gate, opening
semphon("呛", "口", "仓", 3, `choking, as by smoke; something that irritates the nose or throat`, simplified("嗆"));
// 4894	嗆: qiāng 倉 cāng	口 mouth; entrance, gate, opening
semphon("嗆", "口", "倉", 3, `choking, as by smoke; something that irritates the nose or throat`);
// 4895	娥: é 我 wǒ	女 woman, girl; female
semphon("娥", "女", "我", 3, `beautiful, pretty; good; surname`);
// 4896	盎: àng 央 yāng	皿 dish, vessel; shallow container
phonsem("盎", "央", "皿", 5, `pot, cup, bowl; abundant`);
// 4897	喧: xuān 宣 xuān	口 mouth; entrance, gate, opening
semphon("喧", "口", "宣", 3, `lively, noisy; to clamor, to talk loudly`, simplified("諠"));
// 4898	諠: xuān 宣 xuān	言 words, speech; to speak, to say
semphon("諠", "言", "宣", 7, `noisy, uproarious; to forget`);
// 4899	茸: rōng 耳 ěr	艹 grass, weed, plant, herb
semphon("茸", "艹", "耳", 3, `soft, downy; buds, sprouts`);
// 4900	氨: ān 安 ān	气 air, gas; steam, vapor; anger
semphon("氨", "气", "安", 4, `ammonia`);
// 4904	喃: nán 南 nán	口 mouth; entrance, gate, opening
semphon("喃", "口", "南", 3, `to chatter, to keep talking; to mumble`);
// 4906	齋: zhāi 小 xiǎo	齊 even, uniform, of equal length
semphon("齋", "齊", "小", 14, `to fast, to abstain; a vegetarian diet`);
// 4910	羔: gāo 灬 huǒ	羊 sheep, goat
semphon("羔", "羊", "灬", 6, `lamb`);
// 4913	酥: sū 酉 yǒu	禾 cereal, grain, rice; plant, stalk
phonsem("酥", "酉", "禾", 7, `butter; crispy, flaky; fluffy, light`);
// 4917	嗒: dā 荅 dā	口 mouth; entrance, gate, opening
semphon("嗒", "口", "荅", 3, `absent-minded`);
// 4919	闸: zhá 甲 jiǎ	门 gate, door, entrance, opening
semphon("闸", "门", "甲", 3, `sluice, floodgate, canal lock`, simplified("閘"));
// 4920	閘: zhá 甲 jiǎ	門 gate, door, entrance, opening
semphon("閘", "門", "甲", 8, `sluice, floodgate, canal lock`);
// 4922	茵: yīn 因 yīn	艹 grass, weed, plant, herb
semphon("茵", "艹", "因", 3, `mattress, cushion; wormwood, Skimmia japon`);
// 4923	蒋: jiǎng 将 jiāng	艹 grass, weed, plant, herb
semphon("蒋", "艹", "将", 3, `Hydropyrum latifalium; surname`, simplified("蔣"));
// 4924	蔣: jiǎng 將 jiāng	艹 grass, weed, plant, herb
semphon("蔣", "艹", "將", 4, `Hydropyrum latifalium; surname`);
// 4925	拭: shì 式 shì	扌 hand
semphon("拭", "扌", "式", 3, `to wipe away stains with a cloth`);
// 4933	稼: jià 家 jiā	禾 cereal, grain, rice; plant, stalk
semphon("稼", "禾", "家", 5, `crops; to sow grain`);
// 4935	窖: jiào 告 gào	穴 cave, den, hole
semphon("窖", "穴", "告", 5, `cellar, storeroom`);
// 4936	嗑: kē 盍 hé	口 mouth; entrance, gate, opening
semphon("嗑", "口", "盍", 3, `to eat seeds; to reproach; loquacious`);
// 4937	聆: líng 令 lìng	耳 ear; to hear, to hear of; handle
semphon("聆", "耳", "令", 6, `to hear, to listen`);
// 4938	敛: liǎn 佥 qiān	攵 to rap, to tap; script; to let go
phonsem("敛", "佥", "攵", 7, `to collect, to extort`, simplified("斂"));
// 4939	斂: liǎn 僉 qiān	攵 to rap, to tap; script; to let go
phonsem("斂", "僉", "攵", 13, `to collect, to extort`);
// 4940	绽: zhàn 定 dìng	纟 silk; thread
semphon("绽", "纟", "定", 3, `to crack; to burst open; to split at the seams`, simplified("綻"));
// 4941	綻: zhàn 定 dìng	糹 silk; thread
semphon("綻", "糹", "定", 6, `to crack; to burst open; to split at the seams`);
// 4942	倚: yǐ 奇 qí	亻 man, person; people
semphon("倚", "亻", "奇", 2, `to rely on, to depend on`);
// 4943	翩: piān 扁 biǎn	羽 feather, plume; wings
phonsem("翩", "扁", "羽", 9, `to fly, to flutter`);
// 4946	悚: sǒng 束 shù	忄 heart; mind; soul
semphon("悚", "忄", "束", 3, `scared, frightened`);
// 4947	酶: méi 每 měi	酉 wine; wine vessel; chemical
semphon("酶", "酉", "每", 7, `enzyme; to ferment`);
// 4951	瞥: piē 敝 bì	目 eye; to look, to see; division, topic
phonsem("瞥", "敝", "目", 11, `to take a fleeting glance at`);
// 4952	梵: fàn 凡 fán	林 forest, grove; surname
semphon("梵", "林", "凡", 8, `Buddhist, Sanskrit`);
// 4955	霹: pī 辟 pì	雨 rain
semphon("霹", "雨", "辟", 8, `thunderclap, crashing thunder`);
// 4956	雳: lì 历 lì	雨 rain
semphon("雳", "雨", "历", 8, `thunderclap, crashing thunder`, simplified("靂"));
// 4957	靂: lì 歷 lì	雨 rain
semphon("靂", "雨", "歷", 8, `thunderclap, crashing thunder`);
// 4958	淤: yū 於 yú	氵 water
semphon("淤", "氵", "於", 3, `mud, sediment; to clog up, to silt up`);
// 4960	簧: huáng 黄 huáng	⺮ bamboo; flute
semphon("簧", "⺮", "黄", 6, `reed; lock, metal spring`);
// 4963	霆: tíng 廷 tíng	雨 rain
semphon("霆", "雨", "廷", 8, `a sudden peal of thunder`);
// 4965	牡: mǔ 土 tǔ	牛 ox, cow, bull
semphon("牡", "牛", "土", 4, `male animal; key, door bolt`);
// 4968	锚: máo 苗 miáo	钅 gold, metal; money
semphon("锚", "钅", "苗", 5, `anchor`, simplified("錨"));
// 4969	錨: máo 苗 miáo	釒 gold, metal; money
semphon("錨", "釒", "苗", 8, `anchor`);
// 4971	篱: lí 离 lí	⺮ bamboo; flute
semphon("篱", "⺮", "离", 6, `bamboo fence; fence, hedge`, simplified("籬"));
// 4972	籬: lí 離 lí	⺮ bamboo; flute
semphon("籬", "⺮", "離", 6, `bamboo fence; fence, hedge`);
// 4973	笆: bā 巴 bā	⺮ bamboo; flute
semphon("笆", "⺮", "巴", 6, `bamboo fence`);
// 4974	钙: gài 丐 gài	钅 gold, metal; money
semphon("钙", "钅", "丐", 5, `calcium`, simplified("鈣"));
// 4975	鈣: gài 丐 gài	釒 gold, metal; money
semphon("鈣", "釒", "丐", 8, `calcium`);
// 4976	迭: dié 失 shī	辶 to walk; walking
semphon("迭", "辶", "失", 5, `repeatedly, frequently`);
// 4977	嗷: áo 敖 áo	口 mouth; entrance, gate, opening
semphon("嗷", "口", "敖", 3, `clamor; the sound of wailing`);
// 4983	痙: jìng 巠 jīng	疒 sickness, disease
semphon("痙", "疒", "巠", 5, `convulsions, fits`);
// 4985	攣: luán 䜌 luán	手 hand
phonsem("攣", "䜌", "手", 19, `tangled, entwined; crooked`);
// 4989	旭: xù 九 jiǔ	日 sun; day; daytime
phonsem("旭", "九", "日", 2, `the rising sun; brilliant, radiant`);
// 4990	梗: gěng 更 gèng	木 tree; wood, lumber; wooden
semphon("梗", "木", "更", 4, `stem, branch; to hinder, to block`);
// 4991	讪: shàn 山 shān	讠 words, speech; to speak, to say
semphon("讪", "讠", "山", 2, `to abuse, to slander, to vilify; to ridicule`, simplified("訕"));
// 4992	訕: shàn 山 shān	言 words, speech; to speak, to say
semphon("訕", "言", "山", 7, `to abuse, to slander, to vilify; to ridicule`);
// 4999	倘: tǎng 尚 shàng	亻 man, person; people
semphon("倘", "亻", "尚", 2, `if, supposing, in event of`);
// 5000	肛: gāng 工 gōng	⺼ meat, flesh; organic compound
semphon("肛", "⺼", "工", 4, `anus`, simplified("疘"));
// 5004	跷: qiāo 尧 yáo	足 foot; to attain, to satisfy; enough
semphon("跷", "足", "尧", 7, `to stand on tiptoe; stilts`, simplified("蹺"));
// 5005	蹺: qiāo 堯 yáo	足 foot; to attain, to satisfy; enough
semphon("蹺", "足", "堯", 7, `to stand on tiptoe; stilts`);
// 5009	胺: àn 安 ān	⺼ meat, flesh; organic compound
semphon("胺", "⺼", "安", 4, `amine`);
// 5012	窘: jiǒng 君 jūn	穴 cave, den, hole
semphon("窘", "穴", "君", 5, `distressed; embarrassed; hard-pressed`);
// 5013	枫: fēng 风 fēng	木 tree; wood, lumber; wooden
semphon("枫", "木", "风", 4, `maple tree`, simplified("楓"));
// 5014	楓: fēng 風 fēng	木 tree; wood, lumber; wooden
semphon("楓", "木", "風", 4, `maple tree`);
// 5015	檐: yán 詹 zhān	木 tree; wood, lumber; wooden
semphon("檐", "木", "詹", 4, `the eaves of a house; edge, brim`, simplified("簷"));
// 5016	簷: yán 詹 zhān	⺮ bamboo; flute
semphon("簷", "⺮", "詹", 6, `edge, brim; the eaves of a house`);
// 5019	炖: dùn 屯 tún	火 fire, flame; to burn; anger, rage
semphon("炖", "火", "屯", 4, `stew; to cook stew`, simplified("燉"));
// 5022	炳: bǐng 丙 bǐng	火 fire, flame; to burn; anger, rage
semphon("炳", "火", "丙", 4, `bright, luminous; glorious`);
// 5023	殉: xùn 旬 xún	歹 corpse; death; evil, depraved, wicked
semphon("殉", "歹", "旬", 4, `martyr; to die for a cause`);
// 5024	裴: péi 非 fēi	衣 cloth; clothes, apparel; dress, coat
phonsem("裴", "非", "衣", 8, `flowing gown; surname`, simplified("裵"));
// 5026	絮: xù 如 rú	糸 silk; thread
phonsem("絮", "如", "糸", 6, `cotton padding; fluff, padding, waste; long-winded`);
// 5030	苑: yuàn 夗 yuàn	艹 grass, weed, plant, herb
semphon("苑", "艹", "夗", 3, `pasture, park, garden; mansion`);
// 5031	扉: fēi 非 fēi	户 door; family
semphon("扉", "户", "非", 4, `door panel`);
// 5033	鱿: yóu 尤 yóu	鱼 fish
semphon("鱿", "鱼", "尤", 8, `cuttlefish`, simplified("魷"));
// 5034	魷: yóu 尤 yóu	魚 fish
semphon("魷", "魚", "尤", 11, `cuttlefish`);
// 5035	碾: niǎn 展 zhǎn	石 stone, rock, mineral
semphon("碾", "石", "展", 5, `stone roller; to crush, to roll`);
// 5038	蛤: há 合 hé	虫 insect, worm; mollusk
semphon("蛤", "虫", "合", 6, `clam`);
// 5040	闺: guī 圭 guī	门 gate, door, entrance, opening
semphon("闺", "门", "圭", 3, `women's quarters; lady's apartment`, simplified("閨"));
// 5041	閨: guī 圭 guī	門 gate, door, entrance, opening
semphon("閨", "門", "圭", 8, `women's quarters; lady's apartment`);
// 5042	侬: nóng 农 nóng	亻 man, person; people
semphon("侬", "亻", "农", 2, `I; you; surname`, simplified("儂"));
// 5043	儂: nóng 農 nóng	亻 man, person; people
semphon("儂", "亻", "農", 2, `I; you; surname`);
// 5047	飓: jù 具 jù	风 wind; air; customs, manners; news
semphon("飓", "风", "具", 4, `cyclone, gale, typhoon`, simplified("颶"));
// 5048	颶: jù 具 jù	風 wind; air; customs, manners; news
semphon("颶", "風", "具", 9, `cyclone, gale, typhoon`);
// 5049	芥: jiè 介 jiè	艹 grass, weed, plant, herb
semphon("芥", "艹", "介", 3, `mustard, broccoli`);
// 5050	侥: jiǎo 尧 yáo	亻 man, person; people
semphon("侥", "亻", "尧", 2, `to be lucky; by chance, by luck`, simplified("僥"));
// 5051	僥: jiǎo 堯 yáo	亻 man, person; people
semphon("僥", "亻", "堯", 2, `to be lucky; by chance, by luck`);
// 5052	靡: mí 麻 má	非 not, negative, non-; to oppose
phonsem("靡", "麻", "非", 11, `to scatter, to disperse; to divide`);
// 5053	唧: jī 即 jí	口 mouth; entrance, gate, opening
semphon("唧", "口", "即", 3, `the chirping of insects`);
// 5055	喳: zhā 查 chá	口 mouth; entrance, gate, opening
semphon("喳", "口", "查", 3, `to whisper`);
// 5056	脯: pú 甫 fǔ	⺼ meat, flesh; organic compound
semphon("脯", "⺼", "甫", 4, `dried meat; preserved fruits`);
// 5060	痰: tán 炎 yán	疒 sickness, disease
semphon("痰", "疒", "炎", 5, `mucus, phlegm, spit`);
// 5061	弧: hú 瓜 guā	弓 bow; curved, arched
semphon("弧", "弓", "瓜", 3, `arc, crescent; wooden bow`);
// 5062	脓: nóng 农 nóng	⺼ meat, flesh; organic compound
semphon("脓", "⺼", "农", 4, `pus`, simplified("膿"));
// 5063	膿: nóng 農 nóng	⺼ meat, flesh; organic compound
semphon("膿", "⺼", "農", 4, `pus`);
// 5064	蓉: róng 容 róng	艹 grass, weed, plant, herb
semphon("蓉", "艹", "容", 3, `lotus, hibiscus; Chengdu, Sichuan`);
// 5066	蚕: cán 天 tiān	虫 insect, worm; mollusk
phonsem("蚕", "天", "虫", 4, `silkworm`, simplified("蠶"));
// 5068	硅: guī 圭 guī	石 stone, rock, mineral
semphon("硅", "石", "圭", 5, `silicon`);
// 5069	邸: dǐ 氐 dī	阝 place, town, city
phonsem("邸", "氐", "阝", 5, `official residence`);
// 5071	淳: chún 享 xiǎng	氵 water
semphon("淳", "氵", "享", 3, `simple, honest, genuine`, simplified("湻"));
// 5073	骷: kū 古 gǔ	骨 bone; skeleton; frame, framework
semphon("骷", "骨", "古", 9, `skeleton`);
// 5074	髅: lóu 娄 lóu	骨 bone; skeleton; frame, framework
semphon("髅", "骨", "娄", 9, `skull, skeleton`, simplified("髏"));
// 5078	貯: zhù 宁 níng	貝 sea shell; money, currency
semphon("貯", "貝", "宁", 7, `to store, to stockpile, to hoard`);
// 5079	锥: zhuī 隹 zhuī	钅 gold, metal; money
semphon("锥", "钅", "隹", 5, `gimlet, drill, awl; to drill, to bore`, simplified("錐"));
// 5080	錐: zhuī 隹 zhuī	釒 gold, metal; money
semphon("錐", "釒", "隹", 8, `gimlet, drill, awl; to drill, to bore`);
// 5081	瑕: xiá 叚 jiǎ	王 king, ruler; royal; surname
semphon("瑕", "王", "叚", 4, `fault, default; a flaw in a gem`);
// 5082	疵: cī 此 cǐ	疒 sickness, disease
semphon("疵", "疒", "此", 5, `flaw, fault, defect; disease`);
// 5083	黯: àn 音 yīn	黑 black; dark; evil, sinister
semphon("黯", "黑", "音", 12, ` black; dark; sullen, dreary`);
// 5087	缕: lǚ 娄 lóu	纟 silk; thread
semphon("缕", "纟", "娄", 3, `strand, thread; detailed, precise`, simplified("縷"));
// 5088	縷: lǚ 婁 lóu	糹 silk; thread
semphon("縷", "糹", "婁", 6, `strand, thread; detailed, precise`);
// 5089	驭: yù 又 yòu	马 horse; surname
semphon("驭", "马", "又", 3, `to drive, to ride; to manage, to control`, simplified("馭"));
// 5090	馭: yù 又 yòu	馬 horse; surname
semphon("馭", "馬", "又", 10, `to drive, to ride; to manage, to control`);
// 5091	恙: yàng 羊 yáng	心 heart; mind; soul
phonsem("恙", "羊", "心", 6, `illness, sickness; indisposition`);
// 5092	奕: yì 亦 yì	大 big, great, vast, high, deep
phonsem("奕", "亦", "大", 6, `abundant; ordered, in sequence`);
// 5093	氮: dàn 炎 yán	气 air, gas; steam, vapor; anger
semphon("氮", "气", "炎", 4, `nitrogen`);
// 5094	吭: kēng 亢 kàng	口 mouth; entrance, gate, opening
semphon("吭", "口", "亢", 3, `throat`);
// 5095	镯: zhuó 蜀 shǔ	钅 gold, metal; money
semphon("镯", "钅", "蜀", 5, `bracelet, armband; small bell`, simplified("鐲"));
// 5096	鐲: zhuó 蜀 shǔ	釒 gold, metal; money
semphon("鐲", "釒", "蜀", 8, `bracelet, armband; small bell`);
// 5097	哒: dā 达 dá	口 mouth; entrance, gate, opening
semphon("哒", "口", "达", 3, `a sound made to get a horse to move`, simplified("噠"));
// 5098	噠: dā 達 dá	口 mouth; entrance, gate, opening
semphon("噠", "口", "達", 3, `a sound made to get a horse to move`);
// 5101	鹉: wǔ 武 wǔ	鸟 bird
phonsem("鹉", "武", "鸟", 8, `species of parrot`, simplified("鵡"));
// 5102	鵡: wǔ 武 wǔ	鳥 bird
phonsem("鵡", "武", "鳥", 8, `species of parrot`);
// 5108	甥: shēng 生 shēng	男 man, boy; male; baron; surname
phonsem("甥", "生", "男", 5, `niece, nephew; sister's child`);
// 5112	苯: běn 本 běn	艹 grass, weed, plant, herb
semphon("苯", "艹", "本", 3, `benzene, benzol`);
// 5117	鞍: ān 安 ān	革 leather, animal hide; to reform; to remove
semphon("鞍", "革", "安", 9, `saddle`, simplified("鞌"));
// 5120	诠: quán 全 quán	讠 words, speech; to speak, to say
semphon("诠", "讠", "全", 2, `to expound, to explain, to comment on`, simplified("詮"));
// 5121	詮: quán 全 quán	言 words, speech; to speak, to say
semphon("詮", "言", "全", 7, `to expound, to explain, to comment on`);
// 5122	撮: cuō 最 zuì	扌 hand
semphon("撮", "扌", "最", 3, `dash, pinch, small amount`);
// 5123	茉: mò 末 mò	艹 grass, weed, plant, herb
semphon("茉", "艹", "末", 3, `white jasmine`);
// 5124	晦: huì 每 měi	日 sun; day; daytime
semphon("晦", "日", "每", 4, `dark, obscure, unclear; night`);
// 5128	箫: xiāo 肃 sù	⺮ bamboo; flute
semphon("箫", "⺮", "肃", 6, `bamboo flute`, simplified("簫"));
// 5129	簫: xiāo 肅 sù	⺮ bamboo; flute
semphon("簫", "⺮", "肅", 6, `bamboo flute`);
// 5130	轩: xuān 干 gàn	车 cart, vehicle; to move in a cart
semphon("轩", "车", "干", 4, `pavilion; carriage; balcony`, simplified("軒"));
// 5131	軒: xuān 干 gàn	車 cart, vehicle; to move in a cart
semphon("軒", "車", "干", 7, `pavilion; carriage; balcony`);
// 5132	慑: shè 聂 niè	忄 heart; mind; soul
semphon("慑", "忄", "聂", 3, `afraid, scared; to frighten, to intimidate`, simplified("懾"));
// 5133	懾: shè 聶 niè	忄 heart; mind; soul
semphon("懾", "忄", "聶", 3, `afraid, scared; to frighten, to intimidate`);
// 5135	峙: zhì 寺 sì	山 mountain, hill, peak
semphon("峙", "山", "寺", 3, `to pile, to stack; to stand tall`);
// 5136	烙: lào 各 gè	火 fire, flame; to burn; anger, rage
semphon("烙", "火", "各", 4, `to burn, to brand; hot iron`);
// 5140	骼: gé 各 gè	骨 bone; skeleton; frame, framework
semphon("骼", "骨", "各", 9, `bone, skeleton; corpse`);
// 5141	脐: qí 齐 qí	⺼ meat, flesh; organic compound
semphon("脐", "⺼", "齐", 4, `navel; belly, underside`, simplified("臍"));
// 5142	臍: qí 齊 qí	月 moon; month
semphon("臍", "月", "齊", 4, `navel; belly, underside`);
// 5150	狒: fèi 弗 fú	犭 dog
semphon("狒", "犭", "弗", 3, `baboon`);
// 5152	胧: lóng 龙 lóng	月 moon; month
semphon("胧", "月", "龙", 4, `blurry, obscured; the condition or appearance of the moon`, simplified("朧"));
// 5153	朧: lóng 龍 lóng	月 moon; month
semphon("朧", "月", "龍", 4, `blurry, obscured; the condition or appearance of the moon`);
// 5154	钠: nà 内 nèi	钅 gold, metal; money
semphon("钠", "钅", "内", 5, `sodium, natrium; to sharpen wood`, simplified("鈉"));
// 5155	鈉: nà 内 nèi	釒 gold, metal; money
semphon("鈉", "釒", "内", 8, `sodium, natrium; to sharpen wood`);
// 5166	鸥: ōu 区 qū	鸟 bird
phonsem("鸥", "区", "鸟", 4, `seagull, tern; Larus species (various)`, simplified("鷗"));
// 5167	鷗: ōu 區 qū	鳥 bird
phonsem("鷗", "區", "鳥", 11, `seagull, tern; Larus species (various)`);
// 5171	酮: tóng 同 tóng	酉 wine; wine vessel; chemical
semphon("酮", "酉", "同", 7, `ketone`);
// 5173	咏: yǒng 永 yǒng	口 mouth; entrance, gate, opening
semphon("咏", "口", "永", 3, `to sing, to hum, to chant`, simplified("詠"));
// 5174	詠: yǒng 永 yǒng	言 words, speech; to speak, to say
semphon("詠", "言", "永", 7, `to sing, to hum, to chant`);
// 5175	靓: jìng 青 qīng	见 to see, to observe, to meet, to appear
phonsem("靓", "青", "见", 8, `ornament; pretty; to apply make-up`, simplified("靚"));
// 5176	靚: jìng 青 qīng	見 to see, to observe, to meet, to appear
phonsem("靚", "青", "見", 8, `ornament; pretty; to apply make-up`);
// 5177	茬: chá 在 zài	艹 grass, weed, plant, herb
semphon("茬", "艹", "在", 3, `opportunity; farmland after the harvest`);
// 5179	雏: chú 刍 chú	隹 short-tailed bird; sparrow
phonsem("雏", "刍", "隹", 5, `chick, fledging; infant, toddler`, simplified("雛"));
// 5180	雛: chú 芻 chú	隹 short-tailed bird; sparrow
phonsem("雛", "芻", "隹", 10, `chick, fledging; infant, toddler`);
// 5181	瞅: chǒu 秋 qiū	目 eye; to look, to see; division, topic
semphon("瞅", "目", "秋", 5, `to see, to look at, to gaze at`, simplified("矁"));
// 5183	殡: bìn 宾 bīn	歹 corpse; death; evil, depraved, wicked
semphon("殡", "歹", "宾", 4, `funeral; to enbalm, to inter`, simplified("殯"));
// 5184	殯: bìn 賓 bīn	歹 corpse; death; evil, depraved, wicked
semphon("殯", "歹", "賓", 4, `funeral; to enbalm, to inter`);
// 5185	腓: féi 非 fēi	⺼ meat, flesh; organic compound
semphon("腓", "⺼", "非", 4, `leg, calf; to wither, to decay`);
// 5189	绯: fēi 非 fēi	纟 silk; thread
semphon("绯", "纟", "非", 3, `crimson, scarlet; purple`, simplified("緋"));
// 5190	緋: fēi 非 fēi	糹 silk; thread
semphon("緋", "糹", "非", 6, `crimson, scarlet; purple`);
// 5196	嫖: piáo 票 piào	女 woman, girl; female
semphon("嫖", "女", "票", 3, `to patronize a prostitute; to frequent`);
// 5200	瘀: yū 於 yú	疒 sickness, disease
semphon("瘀", "疒", "於", 5, `hematoma, contusion`);
// 5203	琦: qí 奇 qí	王 king, ruler; royal; surname
semphon("琦", "王", "奇", 4, `jade, gem, precious stone`);
// 5206	筝: zhēng 争 zhēng	⺮ bamboo; flute
semphon("筝", "⺮", "争", 6, `guzheng, zither, string instrument`, simplified("箏"));
// 5207	箏: zhēng 爭 zhēng	⺮ bamboo; flute
semphon("箏", "⺮", "爭", 6, `guzheng, zither, string instrument`);
// 5214	袒: tǎn 旦 dàn	衤 cloth
semphon("袒", "衤", "旦", 5, `to strip, to bare`, simplified("襢"));
// 5220	娼: chāng 昌 chāng	女 woman, girl; female
semphon("娼", "女", "昌", 3, `prostitute, harlot`);
// 5221	玷: diàn 占 zhàn	王 king, ruler; royal; surname
semphon("玷", "王", "占", 4, `character flaw; a flaw in a gem`);
// 5222	阉: yān 奄 yǎn	门 gate, door, entrance, opening
semphon("阉", "门", "奄", 3, `eunuch; to castrate`, simplified("閹"));
// 5223	閹: yān 奄 yǎn	門 gate, door, entrance, opening
semphon("閹", "門", "奄", 8, `eunuch; to castrate`);
// 5224	咄: duō 出 chū	口 mouth; entrance, gate, opening
semphon("咄", "口", "出", 3, `a cry of anger`);
// 5225	呱: gū 瓜 guā	口 mouth; entrance, gate, opening
semphon("呱", "口", "瓜", 3, `to wail, to cry; to swear at`);
// 5226	萃: cuì 卒 zú	艹 grass, weed, plant, herb
semphon("萃", "艹", "卒", 3, `grassy; thick, dense, close; to gather, to assemble`);
// 5234	拎: līn 令 lìng	扌 hand
semphon("拎", "扌", "令", 3, `to lift, to haul, to take`);
// 5235	仕: shì 士 shì	亻 man, person; people
semphon("仕", "亻", "士", 2, `official; to serve in the government`);
// 5237	蜴: yì 易 yì	虫 insect, worm; mollusk
semphon("蜴", "虫", "易", 6, `lizard`);
// 5243	阪: bǎn 反 fǎn	阝 place, town, city
semphon("阪", "阝", "反", 2, `hillside, slope`);
// 5244	缎: duàn 段 duàn	纟 silk; thread
semphon("缎", "纟", "段", 3, `satin`, simplified("緞"));
// 5245	緞: duàn 段 duàn	糹 silk; thread
semphon("緞", "糹", "段", 6, `satin`);
// 5246	瞳: tóng 童 tóng	目 eye; to look, to see; division, topic
semphon("瞳", "目", "童", 5, `the pupil of the eye`);
// 5250	迂: yū 于 yú	辶 to walk; walking
semphon("迂", "辶", "于", 3, `abstruse, pedantic, unrealistic`);
// 5251	赘: zhuì 贝 bèi	敖 to ramble, to play about; leisurely; surname
semphon("赘", "敖", "贝", 10, `unnecessary, superfluous`, simplified("贅"));
// 5252	贅: zhuì 貝 bèi	敖 to ramble, to play about; leisurely; surname
semphon("贅", "敖", "貝", 11, `unnecessary, superfluous`);
// 5255	芮: ruì 内 nèi	艹 grass, weed, plant, herb
semphon("芮", "艹", "内", 3, `tiny, small; the water's edge`);
// 5256	沌: dùn 屯 tún	氵 water
semphon("沌", "氵", "屯", 3, `chaotic, confused; murky, turbid`);
// 5257	咔: kā 卡 kǎ	口 mouth; entrance, gate, opening
semphon("咔", "口", "卡", 3, `used in transliterations`);
// 5258	锣: luó 罗 luō	钅 gold, metal; money
semphon("锣", "钅", "罗", 5, `gong`, simplified("鑼"));
// 5259	鑼: luó 羅 luō	釒 gold, metal; money
semphon("鑼", "釒", "羅", 8, `gong`);
// 5266	咻: xiū 休 xiū	口 mouth; entrance, gate, opening
semphon("咻", "口", "休", 3, `to shout; to jeer at`);
// 5268	疡: yáng 昜 yáng	疒 sickness, disease
semphon("疡", "疒", "昜", 5, `sore, ulcer; infection`, simplified("瘍"));
// 5270	阑: lán 柬 jiǎn	门 gate, door, entrance, opening
semphon("阑", "门", "柬", 3, `screen door, railing, fence`, simplified("闌"));
// 5271	闌: lán 柬 jiǎn	門 gate, door, entrance, opening
semphon("闌", "門", "柬", 8, `screen door, railing, fence`);
// 5272	笠: lì 立 lì	⺮ bamboo; flute
semphon("笠", "⺮", "立", 6, `bamboo hat; bamboo covering`);
// 5274	痘: dòu 豆 dòu	疒 sickness, disease
semphon("痘", "疒", "豆", 5, `smallpox`);
// 5275	殆: dài 台 tái	歹 corpse; death; evil, depraved, wicked
semphon("殆", "歹", "台", 4, `almost, probably; danger, peril; to endanger`);
// 5278	褶: zhě 習 xí	衤 cloth
semphon("褶", "衤", "習", 5, `wrinkle, pleat, crease`);
// 5279	鹏: péng 朋 péng	鸟 bird
phonsem("鹏", "朋", "鸟", 8, `fabulous bird of enormous size`, simplified("鵬"));
// 5280	鵬: péng 朋 péng	鳥 bird
phonsem("鵬", "朋", "鳥", 8, `fabulous bird of enormous size`);
// 5281	昵: nì 尼 ní	日 sun; day; daytime
semphon("昵", "日", "尼", 4, `close, intimate; to approach`, simplified("暱"));
// 5284	杭: háng 亢 kàng	木 tree; wood, lumber; wooden
semphon("杭", "木", "亢", 4, `ford; surname`);
// 5288	垢: gòu 后 hòu	土 soil, earth; items made of earth
semphon("垢", "土", "后", 3, `dirt, filth, stains; dirty; disgraceful`);
// 5289	娩: miǎn 免 miǎn	女 woman, girl; female
semphon("娩", "女", "免", 3, `childbirth, labor`);
// 5294	禄: lù 录 lù	礻 spirit
semphon("禄", "礻", "录", 4, `blessing, happiness, prosperity`, simplified("祿"));
// 5295	祿: lù 彔 lù	礻 spirit
semphon("祿", "礻", "彔", 4, `blessing, happiness, prosperity`);
// 5296	桐: tóng 同 tóng	木 tree; wood, lumber; wooden
semphon("桐", "木", "同", 4, `Chinese wood-oil tree, Vernicia fordii`);
// 5298	蝎: xiē 曷 hé	虫 insect, worm; mollusk
semphon("蝎", "虫", "曷", 6, `scorpion`, simplified("蠍"));
// 5301	颐: yí 臣 chén	页 page, sheet, leaf
phonsem("颐", "臣", "页", 7, `cheeks, jaw; chin; rear; to nourish`, simplified("頤"));
// 5302	頤: yí 臣 chén	頁 page, sheet, leaf
phonsem("頤", "臣", "頁", 7, `cheeks, jaw; chin; rear; to nourish`);
// 5303	刨: páo 包 bāo	刂 knife
phonsem("刨", "包", "刂", 5, `carpenter's plane; plane, level`, simplified("鑤"));
// 5305	盹: dǔn 屯 tún	目 eye; to look, to see; division, topic
semphon("盹", "目", "屯", 5, `to doze, to nap, to nod off`);
// 5306	吮: shǔn 允 yǔn	口 mouth; entrance, gate, opening
semphon("吮", "口", "允", 3, `to suck, to sip, to lick`);
// 5311	赡: shàn 詹 zhān	贝 sea shell; money, currency
semphon("赡", "贝", "詹", 4, `rich, elegant; to support, to provide for`, simplified("贍"));
// 5312	贍: shàn 詹 zhān	貝 sea shell; money, currency
semphon("贍", "貝", "詹", 7, `rich, elegant; to support, to provide for`);
// 5315	坍: tān 丹 dān	土 soil, earth; items made of earth
semphon("坍", "土", "丹", 3, `collapse; landslide`);
// 5317	劄: zhā 刂 dāo	答 answer, reply; to return; to assent to
semphon("劄", "答", "刂", 12, `memo, note, official communique`);
// 5318	剳: dá 刂 dāo	荅 to answer; small bean; thick, heavy
semphon("剳", "荅", "刂", 10, `note, memo, official communique`);
// 5321	裆: dāng 当 dāng	衤 cloth
semphon("裆", "衤", "当", 5, `the crotch or seat of a pair of pants`, simplified("襠"));
// 5322	襠: dāng 當 dāng	衤 cloth
semphon("襠", "衤", "當", 5, `the crotch or seat of a pair of pants`);
// 5328	猥: wěi 畏 wèi	犭 dog
semphon("猥", "犭", "畏", 3, `vulgar, low; wanton, obscene`);
// 5332	抨: pēng 平 píng	扌 hand
semphon("抨", "扌", "平", 3, `to impeach; to criticize`);
// 5335	蛾: é 我 wǒ	虫 insect, worm; mollusk
semphon("蛾", "虫", "我", 6, `moth`);
// 5336	嚓: cā 察 chá	口 mouth; entrance, gate, opening
semphon("嚓", "口", "察", 3, `a cracking or snapping sound`);
// 5338	辗: niǎn 展 zhǎn	车 cart, vehicle; to move in a cart
semphon("辗", "车", "展", 4, `to roll over; to turn on a side`, simplified("輾"));
// 5339	輾: niǎn 展 zhǎn	車 cart, vehicle; to move in a cart
semphon("輾", "車", "展", 7, `to roll over; to turn on a side`);
// 5340	驹: jū 句 jù gōu	马 horse; surname
semphon("驹", "马", "句", 3, `colt; fleet, swift; surname`, simplified("駒"));
// 5341	駒: jū 句 jù gōu	馬 horse; surname
semphon("駒", "馬", "句", 10, `colt; fleet, swift; surname`);
// 5343	膳: shàn 善 shàn	⺼ meat, flesh; organic compound
semphon("膳", "⺼", "善", 4, `meals, provisions`, simplified("饍"));
// 5345	芜: wú 无 wú	艹 grass, weed, plant, herb
semphon("芜", "艹", "无", 3, `weeds; overgrowth`, simplified("蕪"));
// 5346	蕪: wú 無 wú	艹 grass, weed, plant, herb
semphon("蕪", "艹", "無", 4, `weeds; overgrowth`);
// 5348	骏: jùn 夋 qūn	马 horse; surname
semphon("骏", "马", "夋", 3, `an excellent horse; a noble steed`, simplified("駿"));
// 5349	駿: jùn 夋 qūn	馬 horse; surname
semphon("駿", "馬", "夋", 10, `an excellent horse; a noble steed`);
// 5350	姚: yáo 兆 zhào	女 woman, girl; female
semphon("姚", "女", "兆", 3, `handsome, elegant, attractive; surname`);
// 5351	漓: lí 离 lí	氵 water
semphon("漓", "氵", "离", 3, `dripping water; a river in Guangxi province`, simplified("灕"));
// 5353	轧: yà 乚 gōu	车 cart, vehicle; to move in a cart
semphon("轧", "车", "乚", 4, `to crush, to grind; mill, roller`, simplified("軋"));
// 5354	軋: yà 乚 gōu	車 cart, vehicle; to move in a cart
semphon("軋", "車", "乚", 7, `to crush, to grind; mill, roller`);
// 5355	栈: zhàn 戋 jiān	木 tree; wood, lumber; wooden
semphon("栈", "木", "戋", 4, `warehouse; tavern, inn`, simplified("棧"));
// 5356	棧: zhàn 戔 jiān	木 tree; wood, lumber; wooden
semphon("棧", "木", "戔", 4, `warehouse; tavern, inn`);
// 5357	铀: yóu 由 yóu	钅 gold, metal; money
semphon("铀", "钅", "由", 5, `uranium`, simplified("鈾"));
// 5358	鈾: yóu 由 yóu	釒 gold, metal; money
semphon("鈾", "釒", "由", 8, `uranium`);
// 5359	弛: chí 也 yě	弓 bow; curved, arched
semphon("弛", "弓", "也", 3, `to loosen, to relax; to unstring a bow`);
// 5361	涤: dí 条 tiáo	氵 water
semphon("涤", "氵", "条", 3, `to wash, to sweep; to purify, to cleanse`, simplified("滌"));
// 5362	滌: dí 條 tiáo	氵 water
semphon("滌", "氵", "條", 3, `to wash, to sweep; to purify, to cleanse`);
// 5363	傀: kuǐ 鬼 guǐ	亻 man, person; people
semphon("傀", "亻", "鬼", 2, `great, gigantic; puppet`);
// 5367	鼾: hān 干 gàn	鼻 nose; first
semphon("鼾", "鼻", "干", 14, `to snore loudly`);
// 5373	姗: shān 册 cè	女 woman, girl; female
semphon("姗", "女", "册", 3, `to slander, to ridicule; to go slowly; graceful`, simplified("姍"));
// 5380	蠕: rú 需 xū	虫 insect, worm; mollusk
semphon("蠕", "虫", "需", 6, `wasp; to wriggle, to squirm`, simplified("蝡"));
// 5385	岌: jí 及 jí	山 mountain, hill, peak
semphon("岌", "山", "及", 3, `perilous, hazardous; steep, high`);
// 5386	瞌: kē 盍 hé	目 eye; to look, to see; division, topic
semphon("瞌", "目", "盍", 5, `sleepy; to doze off`);
// 5392	炙: zhì 月 yuè	火 fire, flame; to burn; anger, rage
phonsem("炙", "月", "火", 4, `to roast, to broil; to cauterize`);
// 5396	遛: liú 留 liú	辶 to walk; walking
semphon("遛", "辶", "留", 10, `to walk, to stroll`);
// 5397	鲑: guī 圭 guī	鱼 fish
semphon("鲑", "鱼", "圭", 8, `salmon; Spheroides vermicularis`, simplified("鮭"));
// 5398	鮭: guī 圭 guī	魚 fish
semphon("鮭", "魚", "圭", 11, `salmon; Spheroides vermicularis`);
// 5399	鲤: lǐ 里 lǐ	鱼 fish
semphon("鲤", "鱼", "里", 8, `carp`, simplified("鯉"));
// 5400	鯉: lǐ 里 lǐ	魚 fish
semphon("鯉", "魚", "里", 11, `carp`);
// 5401	苇: wěi 韦 wéi	艹 grass, weed, plant, herb
semphon("苇", "艹", "韦", 3, `reed`, simplified("葦"));
// 5402	葦: wěi 韋 wéi	艹 grass, weed, plant, herb
semphon("葦", "艹", "韋", 4, `reed`);
// 5405	玺: xǐ 尔 ěr	玉 jade, gem, precious stone
phonsem("玺", "尔", "玉", 5, `imperial signet, royal signet`, simplified("璽"));
// 5406	璽: xǐ 爾 ěr	玉 jade, gem, precious stone
phonsem("璽", "爾", "玉", 14, `imperial signet, royal signet`);
// 5407	铛: dāng 当 dāng	钅 gold, metal; money
semphon("铛", "钅", "当", 5, `frying pan; warming vessel`, simplified("鐺"));
// 5408	鐺: dāng 當 dāng	釒 gold, metal; money
semphon("鐺", "釒", "當", 8, `frying pan; warming vessel`);
// 5409	楠: nán 南 nán	木 tree; wood, lumber; wooden
semphon("楠", "木", "南", 4, `Machilus nanmu`, simplified("枏"));
// 5417	鞘: qiào 肖 xiào	革 leather, animal hide; to reform; to remove
semphon("鞘", "革", "肖", 9, `scabbard, sheath`);
// 5418	釜: fǔ 父 fù	金 gold, metal; money
phonsem("釜", "父", "金", 4, `cauldron, kettle, pot`);
// 5421	蝉: chán 单 dān	虫 insect, worm; mollusk
semphon("蝉", "虫", "单", 6, `cicada; continuous`, simplified("蟬"));
// 5422	蟬: chán 單 dān	虫 insect, worm; mollusk
semphon("蟬", "虫", "單", 6, `cicada; continuous`);
// 5424	炽: chì 只 zhī	火 fire, flame; to burn; anger, rage
semphon("炽", "火", "只", 4, `to burn, to blaze; splendid; intense`, simplified("熾"));
// 5425	熾: chì 戠 zhī	火 fire, flame; to burn; anger, rage
semphon("熾", "火", "戠", 4, `to burn, to blaze; splendid; intense`);
// 5426	酵: jiào 孝 xiào	酉 wine; wine vessel; chemical
semphon("酵", "酉", "孝", 7, `yeast; to leaven`);
// 5427	婷: tíng 亭 tíng	女 woman, girl; female
semphon("婷", "女", "亭", 3, `attractive, graceful, pretty`);
// 5429	氟: fú 弗 fú	气 air, gas; steam, vapor; anger
semphon("氟", "气", "弗", 4, `fluorine`);
// 5430	芸: yún 云 yún	艹 grass, weed, plant, herb
semphon("芸", "艹", "云", 3, `common rue; diverse, varied`, simplified("蕓"));
// 5431	蕓: yún 雲 yún	艹 grass, weed, plant, herb
semphon("蕓", "艹", "雲", 4, `common rue; diverse, varied`);
// 5432	帷: wéi 隹 zhuī	巾 cloth, curtain, handkerchief, towel
semphon("帷", "巾", "隹", 3, `curtain, screen, tent`);
// 5436	蝸: wō 咼 guō	虫 insect, worm; mollusk
semphon("蝸", "虫", "咼", 6, `snail; Eulota callizoma`);
// 5446	妊: rèn 壬 rén	女 woman, girl; female
semphon("妊", "女", "壬", 3, `to conceive; to be pregnant`, simplified("姙"));
// 5448	娠: shēn 辰 chén	女 woman, girl; female
semphon("娠", "女", "辰", 3, `pregnant`);
// 5449	茱: zhū 朱 zhū	艹 grass, weed, plant, herb
semphon("茱", "艹", "朱", 3, `dogwood`);
// 5450	桓: huán 亘 gèn	木 tree; wood, lumber; wooden
semphon("桓", "木", "亘", 4, `variety of tree; surname`);
// 5451	羚: líng 令 lìng	羊 sheep, goat
semphon("羚", "羊", "令", 6, `a species of antelope`);
// 5452	槛: kǎn 监 jiān	木 tree; wood, lumber; wooden
semphon("槛", "木", "监", 4, `threshold, door frame`, simplified("檻"));
// 5453	檻: kǎn 監 jiān	木 tree; wood, lumber; wooden
semphon("檻", "木", "監", 4, `threshold, door frame`);
// 5455	迢: tiáo 召 zhào	辶 to walk; walking
semphon("迢", "辶", "召", 5, `distant, far`);
// 5456	篝: gōu 冓 gòu	⺮ bamboo; flute
semphon("篝", "⺮", "冓", 6, `bamboo basket; bamboo frame`);
// 5457	麒: qí 其 qí	鹿 deer; surname
semphon("麒", "鹿", "其", 11, `mythical unicorn`);
// 5464	雯: wén 文 wén	雨 rain
semphon("雯", "雨", "文", 8, `cloud patterns; storm clouds`);
// 5466	凋: diāo 周 zhōu	冫 ice
semphon("凋", "冫", "周", 2, `withered, fallen; exhausted`);
// 5467	枷: jiā 加 jiā	木 tree; wood, lumber; wooden
semphon("枷", "木", "加", 4, `the stocks, a cangue scaffold`);
// 5468	汲: jí 及 jí	氵 water
semphon("汲", "氵", "及", 3, `to draw water at a well; to imbibe`);
// 5473	毡: zhān 占 zhàn	毛 hair, fur, feathers; coarse
semphon("毡", "毛", "占", 4, `felt; rug, carpet`, simplified("氈"));
// 5476	沥: lì 历 lì	氵 water
semphon("沥", "氵", "历", 3, `trickle, drip, dregs; to strain`, simplified("瀝"));
// 5477	瀝: lì 歷 lì	氵 water
semphon("瀝", "氵", "歷", 3, `trickle, drip, dregs; to strain`);
// 5480	忡: chōng 中 zhōng	忄 heart; mind; soul
semphon("忡", "忄", "中", 3, `sad, grieving; distressed, uneasy`);
// 5481	榆: yú 俞 yú	木 tree; wood, lumber; wooden
semphon("榆", "木", "俞", 4, `elm tree`);
// 5482	潦: lǎo 尞 liào	氵 water
semphon("潦", "氵", "尞", 3, `to flood; puddle; dejected, careless`);
// 5483	疽: jū 且 qiě	疒 sickness, disease
semphon("疽", "疒", "且", 5, `ulcer, carbuncle, abscess`);
// 5484	烷: wán 完 wán	火 fire, flame; to burn; anger, rage
semphon("烷", "火", "完", 4, `alkane`);
// 5485	渝: yú 俞 yú	氵 water
semphon("渝", "氵", "俞", 3, `to change; Chongqing`);
// 5486	弩: nǔ 奴 nú	弓 bow; curved, arched
phonsem("弩", "奴", "弓", 5, `crossbow; an arrow falling, a downward stroke`);
// 5488	琛: chēn 罙 mí	王 king, ruler; royal; surname
semphon("琛", "王", "罙", 4, `treasure, valuables`);
// 5497	漉: lù 鹿 lù	氵 water
semphon("漉", "氵", "鹿", 3, `to filter, to strain; dripping, wet`);
// 5498	蟆: má 莫 mò	虫 insect, worm; mollusk
semphon("蟆", "虫", "莫", 6, `frog, toad`, simplified("蟇"));
// 5500	浣: huàn 完 wán	氵 water
semphon("浣", "氵", "完", 3, `to wash, to rinse`, simplified("澣"));
// 5507	怂: sǒng 从 cóng	心 heart; mind; soul
phonsem("怂", "从", "心", 4, `to arouse, to incite, to instigate`, simplified("慫"));
// 5508	慫: sǒng 從 cóng	心 heart; mind; soul
phonsem("慫", "從", "心", 11, `to arouse, to incite, to instigate`);
// 5509	恿: yǒng 甬 yǒng	心 heart; mind; soul
phonsem("恿", "甬", "心", 7, `to instigate, to incite, to alarm`, simplified("惥"));
// 5516	悴: cuì 卒 zú	忄 heart; mind; soul
semphon("悴", "忄", "卒", 3, `to suffer; haggard, emaciated`, simplified("顇"));
// 5519	砾: lì 乐 lè	石 stone, rock, mineral
semphon("砾", "石", "乐", 5, `gravel, pebbles`, simplified("礫"));
// 5521	茹: rú 如 rú	艹 grass, weed, plant, herb
semphon("茹", "艹", "如", 3, `roots, vegetables`);
// 5522	撩: liāo 尞 liào	扌 hand
semphon("撩", "扌", "尞", 3, `to lift, to raise; to provoke, to tease; to push aside clothing`);
// 5524	惘: wǎng 罔 wǎng	忄 heart; mind; soul
semphon("惘", "忄", "罔", 3, `dejected, discouraged`);
// 5526	憧: chōng 童 tóng	忄 heart; mind; soul
semphon("憧", "忄", "童", 3, `indecisive, irresolute; to yearn for`);
// 5527	憬: jǐng 景 jǐng	忄 heart; mind; soul
semphon("憬", "忄", "景", 3, `to rouse, to awaken; to become conscious`);
// 5528	汞: gǒng 工 gōng	水 water, liquid, lotion, juice
phonsem("汞", "工", "水", 3, `mercury (element)`, simplified("銾"));
// 5533	跛: bǒ 皮 pí	足 foot; to attain, to satisfy; enough
semphon("跛", "足", "皮", 7, `lame`);
// 5536	刽: guì 会 huì	刂 knife
phonsem("刽", "会", "刂", 6, `to amputate, to cut off`, simplified("劊"));
// 5537	劊: guì 會 huì	刂 knife
phonsem("劊", "會", "刂", 13, `to amputate, to cut off`);
// 5538	洼: wā 圭 guī	氵 water
semphon("洼", "氵", "圭", 3, `pit, hollow, depression; swamp`, simplified("窪"));
// 5540	垣: yuán 亘 gèn	土 soil, earth; items made of earth
semphon("垣", "土", "亘", 3, `low wall`);
// 5544	颌: hé 合 hé	页 page, sheet, leaf
phonsem("颌", "合", "页", 6, `mouth; jaw`, simplified("頜"));
// 5545	頜: hé 合 hé	頁 page, sheet, leaf
phonsem("頜", "合", "頁", 6, `mouth; jaw`);
// 5546	涎: xián 延 yán	氵 water
semphon("涎", "氵", "延", 3, `saliva`, simplified("㳄"));
// 5547	㳄: xián 欠 qiàn	氵 water
semphon("㳄", "氵", "欠", 3, `saliva, spittle`);
// 5550	钾: jiǎ 甲 jiǎ	钅 gold, metal; money
semphon("钾", "钅", "甲", 5, `potassium`, simplified("鉀"));
// 5551	鉀: jiǎ 甲 jiǎ	釒 gold, metal; money
semphon("鉀", "釒", "甲", 8, `potassium`);
// 5552	缄: jiān 咸 xián	纟 silk; thread
semphon("缄", "纟", "咸", 3, `to seal, to close, to bind; a letter`, simplified("緘"));
// 5553	緘: jiān 咸 xián	糹 silk; thread
semphon("緘", "糹", "咸", 6, `to seal, to close, to bind; a letter`);
// 5555	豌: wān 宛 wǎn	豆 beans, peas; bean-shaped
semphon("豌", "豆", "宛", 7, `peas`);
// 5558	碉: diāo 周 zhōu	石 stone, rock, mineral
semphon("碉", "石", "周", 5, `watchtower`);
// 5559	貂: diāo 召 zhào	豸 badger; legendary beast
semphon("貂", "豸", "召", 7, `sable, mink, marten`);
// 5561	诲: huì 每 měi	讠 words, speech; to speak, to say
semphon("诲", "讠", "每", 2, `to teach, to instruct; to encourage, to urge`, simplified("誨"));
// 5562	誨: huì 每 měi	言 words, speech; to speak, to say
semphon("誨", "言", "每", 7, `to teach, to instruct; to encourage, to urge`);
// 5565	佼: jiǎo 交 jiāo	亻 man, person; people
semphon("佼", "亻", "交", 2, `beautiful, handsome, good-looking`);
// 5569	廬: lú 盧 lú	广 broad, vast, wide; building, house
semphon("廬", "广", "盧", 3, `hut, cottage; the name of a mountain`);
// 5572	捶: chuí 垂 chuí	扌 hand
semphon("捶", "扌", "垂", 3, `to beat, to lash, to strike with a cane`, simplified("搥"));
// 5576	胱: guāng 光 guāng	⺼ meat, flesh; organic compound
semphon("胱", "⺼", "光", 4, `bladder`);
// 5577	掂: diān 店 diàn	扌 hand
semphon("掂", "扌", "店", 3, `to heft, to weigh; to hold in the palm`);
// 5578	灸: jiǔ 久 jiǔ	火 fire, flame; to burn; anger, rage
phonsem("灸", "久", "火", 3, `to cauterize; moxibustion`);
// 5580	芹: qín 斤 jīn	艹 grass, weed, plant, herb
semphon("芹", "艹", "斤", 3, `celery`);
// 5581	剌: lá 束 shù	刂 knife
phonsem("剌", "束", "刂", 7, `to slash, to cut in two; to contradict`);
// 5582	叩: kòu 口 kǒu	卩 seal; kneeling person
phonsem("叩", "口", "卩", 3, `to ask; to bow, to kowtow; to knock`, simplified("敂"));
// 5590	孜: zī 子 zi	攵 to rap, to tap; script; to let go
phonsem("孜", "子", "攵", 3, `diligent, hard-working`);
// 5594	劾: hé 亥 hài	力 strength, power; capability, influence
phonsem("劾", "亥", "力", 6, `to look into; to impeach, to charge`);
// 5595	磐: pán 般 bān	石 stone, rock, mineral
phonsem("磐", "般", "石", 10, `boulder, large rock; firm, stable`);
// 5596	衙: yá 吾 wú	行 to go, to walk, to move; professional
semphon("衙", "行", "吾", 6, `public office; official residence`);
// 5599	剁: duò 朵 duǒ	刂 knife
phonsem("剁", "朵", "刂", 6, `to chop by pounding, to hash, to mince`);
// 5603	踱: duó 度 dù	足 foot; to attain, to satisfy; enough
semphon("踱", "足", "度", 7, `to pace, to stroll, to walk slowly`);
// 5604	笋: sǔn 尹 yǐn	⺮ bamboo; flute
semphon("笋", "⺮", "尹", 6, `bamboo shoots`, simplified("筍"));
// 5605	筍: sǔn 旬 xún	⺮ bamboo; flute
semphon("筍", "⺮", "旬", 6, `bamboo shoots`);
// 5609	恪: kè 各 gè	忄 heart; mind; soul
semphon("恪", "忄", "各", 3, `respectful, reverent`, simplified("愙"));
// 5611	喵: miāo 苗 miáo	口 mouth; entrance, gate, opening
semphon("喵", "口", "苗", 3, `a cat's meow`);
// 5614	瓢: piáo 票 piào	瓜 melon, gourd, squash, cucumber
phonsem("瓢", "票", "瓜", 11, `a ladle made from a dried gourd`);
// 5616	佯: yáng 羊 yáng	亻 man, person; people
semphon("佯", "亻", "羊", 2, `to pretend, to feign; false, deceitful`);
// 5617	抠: kōu 区 qū	扌 hand
semphon("抠", "扌", "区", 3, `to lift, to raise; tight-fisted`, simplified("摳"));
// 5618	摳: kōu 區 qū	扌 hand
semphon("摳", "扌", "區", 3, `to lift, to raise; tight-fisted`);
// 5619	钵: bō 本 běn	钅 gold, metal; money
semphon("钵", "钅", "本", 5, `earthen basin; alms bowl`, simplified("缽"));
// 5620	缽: bō 本 běn	缶 earthen crock or jar; pottery
semphon("缽", "缶", "本", 6, `earthen basin; alms bowl`);
// 5625	踵: zhǒng 重 zhòng	足 foot; to attain, to satisfy; enough
semphon("踵", "足", "重", 7, `heel; to follow; to visit, to call on`);
// 5629	蛊: gǔ 皿 mǐn	虫 insect, worm; mollusk
semphon("蛊", "虫", "皿", 6, `poison, venom; to bewitch, to harm`, simplified("蠱"));
// 5630	蠱: gǔ 皿 mǐn	蟲 insect, worm; mollusk
semphon("蠱", "蟲", "皿", 18, `poison, venom; to bewitch, to harm`);
// 5634	蛆: qū 且 qiě	虫 insect, worm; mollusk
semphon("蛆", "虫", "且", 6, `maggot`);
// 5635	锌: xīn 辛 xīn	钅 gold, metal; money
semphon("锌", "钅", "辛", 5, `zinc`, simplified("鋅"));
// 5636	鋅: xīn 辛 xīn	釒 gold, metal; money
semphon("鋅", "釒", "辛", 8, `zinc`);
// 5641	冽: liè 列 liè	冫 ice
semphon("冽", "冫", "列", 2, `cold and raw; pure, clear`);
// 5646	龌: wò 屋 wū	齿 teeth; gears, cogs; age
semphon("龌", "齿", "屋", 8, `narrow, small-minded; dirty (1)`, simplified("齷"));
// 5647	齷: wò 屋 wū	齒 teeth; gears, cogs; age
semphon("齷", "齒", "屋", 15, `narrow, small-minded; dirty (1)`);
// 5648	龊: chuò 齿 chǐ	足 foot; to attain, to satisfy; enough
phonsem("龊", "齿", "足", 8, `narrow, small-minded; dirty (2)`, simplified("齪"));
// 5649	齪: chuò 齒 chǐ	足 foot; to attain, to satisfy; enough
phonsem("齪", "齒", "足", 15, `narrow, small-minded; dirty (2)`);
// 5650	闵: mǐn 门 mén	文 culture, literature, writing
phonsem("闵", "门", "文", 3, `to mourn, to grieve; to incite, to urge on`, simplified("閔"));
// 5651	閔: mǐn 門 mén	文 culture, literature, writing
phonsem("閔", "門", "文", 8, `to mourn, to grieve; to incite, to urge on`);
// 5652	坂: bǎn 反 fǎn	土 soil, earth; items made of earth
semphon("坂", "土", "反", 3, `hillside, slope`, simplified("岅"));
// 5654	町: tīng 丁 dīng	田 field, farm, arable land; cultivated
semphon("町", "田", "丁", 5, `a raised path between fields`);
// 5658	哝: nóng 农 nóng	口 mouth; entrance, gate, opening
semphon("哝", "口", "农", 3, `to whisper`, simplified("噥"));
// 5659	噥: nóng 農 nóng	口 mouth; entrance, gate, opening
semphon("噥", "口", "農", 3, `to whisper`);
// 5661	蛭: zhì 至 zhì	虫 insect, worm; mollusk
semphon("蛭", "虫", "至", 6, `leech`);
// 5662	瞰: kàn 敢 gǎn	目 eye; to look, to see; division, topic
semphon("瞰", "目", "敢", 5, `to watch, to spy on; to overlook, to look down on`, simplified("矙"));
// 5664	坷: kě 可 kě	土 soil, earth; items made of earth
semphon("坷", "土", "可", 3, `uneven, bumpy; a clod of earth; a lump of soil`);
// 5665	缭: liáo 尞 liào	纟 silk; thread
semphon("缭", "纟", "尞", 3, `confused; to bind; to wind around`, simplified("繚"));
// 5666	繚: liáo 尞 liào	糹 silk; thread
semphon("繚", "糹", "尞", 6, `confused; to bind; to wind around`);
// 5669	芋: yù 于 yú	艹 grass, weed, plant, herb
semphon("芋", "艹", "于", 3, `taro`);
// 5670	渥: wò 屋 wū	氵 water
semphon("渥", "氵", "屋", 3, `to enrich, to dye; to moisten, to soak`);
// 5673	跺: duò 朵 duǒ	足 foot; to attain, to satisfy; enough
semphon("跺", "足", "朵", 7, `to stamp the feet`, simplified("跥"));
// 5675	鬓: bìn 宾 bīn	髟 long hair
semphon("鬓", "髟", "宾", 10, `hair on temples`, simplified("鬢"));
// 5676	鬢: bìn 賓 bīn	髟 long hair
semphon("鬢", "髟", "賓", 10, `hair on temples`);
// 5677	蜻: qīng 青 qīng	虫 insect, worm; mollusk
semphon("蜻", "虫", "青", 6, `dragonfly`);
// 5678	蜓: tíng 廷 tíng	虫 insect, worm; mollusk
semphon("蜓", "虫", "廷", 6, `dragonfly`);
// 5679	掣: chè 制 zhì	手 hand
phonsem("掣", "制", "手", 8, `to pull, to drag; to hinder, to pull back`);
// 5680	剽: piāo 票 piào	刂 knife
phonsem("剽", "票", "刂", 11, `to rob, to plunder, to slice off; nimble, quick`);
// 5685	辘: lù 鹿 lù	车 cart, vehicle; to move in a cart
semphon("辘", "车", "鹿", 4, `windlass, pulley, capstan`, simplified("轆"));
// 5686	轆: lù 鹿 lù	車 cart, vehicle; to move in a cart
semphon("轆", "車", "鹿", 7, `windlass, pulley, capstan`);
// 5687	烊: yáng 羊 yáng	火 fire, flame; to burn; anger, rage
semphon("烊", "火", "羊", 4, `to smelt; to close for the night`);
// 5688	酯: zhǐ 旨 zhǐ	酉 wine; wine vessel; chemical
semphon("酯", "酉", "旨", 7, `ester`);
// 5689	恃: shì 寺 sì	忄 heart; mind; soul
semphon("恃", "忄", "寺", 3, `to trust, to rely on; to presume`);
// 5692	诋: dǐ 氐 dī	讠 words, speech; to speak, to say
semphon("诋", "讠", "氐", 2, `to slander; to condem, to reproach`, simplified("詆"));
// 5693	詆: dǐ 氐 dī	言 words, speech; to speak, to say
semphon("詆", "言", "氐", 7, `to slander; to condem, to reproach`);
// 5694	梧: wú 吾 wú	木 tree; wood, lumber; wooden
semphon("梧", "木", "吾", 4, `Chinese parasol tree, Sterculia platanifolia`);
// 5695	钚: bù 不 bù	钅 gold, metal; money
semphon("钚", "钅", "不", 5, `plutonium`, simplified("鈈"));
// 5697	摹: mó 莫 mò	手 hand
phonsem("摹", "莫", "手", 10, `to trace; to imitate, to copy; pattern`);
// 5703	洙: zhū 朱 zhū	氵 water
semphon("洙", "氵", "朱", 3, `a river in Shandong province`);
// 5706	钛: tài 太 tài	钅 gold, metal; money
semphon("钛", "钅", "太", 5, `titanium`, simplified("鈦"));
// 5707	鈦: tài 太 tài	釒 gold, metal; money
semphon("鈦", "釒", "太", 8, `titanium`);
// 5712	怦: pēng 平 píng	忄 heart; mind; soul
semphon("怦", "忄", "平", 3, `ardent, eager; impulsive, bold`);
// 5716	栩: xǔ 羽 yǔ	木 tree; wood, lumber; wooden
semphon("栩", "木", "羽", 4, `oak tree; pleased, glad`);
// 5718	怔: zhēng 正 zhèng	忄 heart; mind; soul
semphon("怔", "忄", "正", 3, `frightened, startled, terrified`);
// 5721	扪: mén 门 mén	扌 hand
semphon("扪", "扌", "门", 3, `to stoke, to pat; to grope, to feel`, simplified("捫"));
// 5722	捫: mén 門 mén	扌 hand
semphon("捫", "扌", "門", 3, `to stoke, to pat; to grope, to feel`);
// 5723	鸳: yuān 夗 yuàn	鸟 bird
phonsem("鸳", "夗", "鸟", 5, `male mandarin duck (Aix galericulata)`, simplified("鴛"));
// 5724	鴛: yuān 夗 yuàn	鳥 bird
phonsem("鴛", "夗", "鳥", 5, `male mandarin duck (Aix galericulata)`);
// 5725	鸯: yāng 央 yāng	鸟 bird
phonsem("鸯", "央", "鸟", 5, `female mandarin duck (Aix galericulata)`, simplified("鴦"));
// 5726	鴦: yāng 央 yāng	鳥 bird
phonsem("鴦", "央", "鳥", 5, `female mandarin duck (Aix galericulata)`);
// 5727	绚: xuàn 旬 xún	纟 silk; thread
semphon("绚", "纟", "旬", 3, `variegated, adorned; brilliant`, simplified("絢"));
// 5728	絢: xuàn 旬 xún	糹 silk; thread
semphon("絢", "糹", "旬", 6, `variegated, adorned; brilliant`);
// 5730	魇: yǎn 厌 yàn	鬼 ghost; demon; sly, mischievous
phonsem("魇", "厌", "鬼", 6, `nightmare, bad dream`, simplified("魘"));
// 5731	魘: yǎn 厭 yàn	鬼 ghost; demon; sly, mischievous
phonsem("魘", "厭", "鬼", 14, `nightmare, bad dream`);
// 5732	烯: xī 希 xī	火 fire, flame; to burn; anger, rage
semphon("烯", "火", "希", 4, `alkene`);
// 5733	氪: kè 克 kè	气 air, gas; steam, vapor; anger
semphon("氪", "气", "克", 4, `krypton`);
// 5734	篓: lǒu 娄 lóu	⺮ bamboo; flute
semphon("篓", "⺮", "娄", 6, `bamboo basket`, simplified("簍"));
// 5736	睐: lài 来 lái	目 eye; to look, to see; division, topic
semphon("睐", "目", "来", 5, `to squint at; a sidelong glance`, simplified("睞"));
// 5737	睞: lài 來 lái	目 eye; to look, to see; division, topic
semphon("睞", "目", "來", 5, `to squint at; a sidelong glance`);
// 5738	镁: měi 美 měi	钅 gold, metal; money
semphon("镁", "钅", "美", 5, `magnesium`, simplified("鎂"));
// 5739	鎂: měi 美 měi	釒 gold, metal; money
semphon("鎂", "釒", "美", 8, `magnesium`);
// 5742	炊: chuī 欠 qiàn	火 fire, flame; to burn; anger, rage
semphon("炊", "火", "欠", 4, `meal; to cook, to steam`);
// 5744	蟾: chán 詹 zhān	虫 insect, worm; mollusk
semphon("蟾", "虫", "詹", 6, `toad (1)`);
// 5745	蜍: chú 余 yú	虫 insect, worm; mollusk
semphon("蜍", "虫", "余", 6, `toad (2)`);
// 5747	讣: fù 卜 bo	讠 words, speech; to speak, to say
semphon("讣", "讠", "卜", 2, `obituary, death notice`, simplified("訃"));
// 5748	訃: fù 卜 bo	言 words, speech; to speak, to say
semphon("訃", "言", "卜", 7, `obituary, death notice`);
// 5749	猝: cù 卒 zú	犭 dog
semphon("猝", "犭", "卒", 3, `sudden, abrupt`);
// 5752	鳗: mán 曼 màn	鱼 fish
semphon("鳗", "鱼", "曼", 8, `eel`, simplified("鰻"));
// 5753	鰻: mán 曼 màn	魚 fish
semphon("鰻", "魚", "曼", 11, `eel`);
// 5754	蛀: zhù 主 zhǔ	虫 insect, worm; mollusk
semphon("蛀", "虫", "主", 6, `termite, bookworm; to bore, to eat into`);
// 5759	氰: qíng 青 qīng	气 air, gas; steam, vapor; anger
semphon("氰", "气", "青", 4, `cyanogen; ethane dinitrile`);
// 5763	俚: lǐ 里 lǐ	亻 man, person; people
semphon("俚", "亻", "里", 2, `rustic, vulgar, unpolished; mean`);
// 5764	翡: fěi 非 fēi	羽 feather, plume; wings
phonsem("翡", "非", "羽", 8, `kingfisher; jade, emerald`);
// 5765	咫: zhǐ 只 zhī	尺 ruler, tape-measure; unit of length, about 1 ft.
semphon("咫", "尺", "只", 4, `unit of length used during the Zhou dynasty`);
// 5768	锹: qiāo 秋 qiū	钅 gold, metal; money
semphon("锹", "钅", "秋", 5, `shovel`, simplified("鍬"));
// 5769	鍬: qiāo 秋 qiū	釒 gold, metal; money
semphon("鍬", "釒", "秋", 8, `shovel`);
// 5771	孢: bāo 包 bāo	子 son, child; seed, egg; fruit; small thing
semphon("孢", "子", "包", 3, `spore`);
// 5776	皓: hào 告 gào	白 white; clear, pure, unblemished; bright
semphon("皓", "白", "告", 5, `bright, luminous; clear; hoary`, simplified("暠"));
// 5777	暠: gǎo 高 gāo	日 sun; day; daytime
semphon("暠", "日", "高", 4, `daybreak; brilliant, bright`);
// 5779	鹌: ān 奄 yǎn	鸟 bird
phonsem("鹌", "奄", "鸟", 8, `quail; Coturnix coturnix`, simplified("鵪"));
// 5780	鵪: ān 奄 yǎn	鳥 bird
phonsem("鵪", "奄", "鳥", 8, `quail; Coturnix coturnix`);
// 5781	鹑: chún 享 xiǎng	鸟 bird
phonsem("鹑", "享", "鸟", 8, `quail; Turnix species (various)`, simplified("鶉"));
// 5782	鶉: chún 享 xiǎng	鳥 bird
phonsem("鶉", "享", "鳥", 8, `quail; Turnix species (various)`);
// 5784	搪: táng 唐 táng	扌 hand
semphon("搪", "扌", "唐", 3, `to parry, to block; to ward off, to evade`);
// 5786	矜: jīn 今 jīn	矛 spear, lance
semphon("矜", "矛", "今", 5, `to pity, to sympathize, to feel sorry for`);
// 5787	谟: mó 莫 mò	讠 words, speech; to speak, to say
semphon("谟", "讠", "莫", 2, `to scheme, to plan; to practice`, simplified("謨"));
// 5788	謨: mó 莫 mò	言 words, speech; to speak, to say
semphon("謨", "言", "莫", 7, `to scheme, to plan; to practice`);
// 5790	哔: bì 毕 bì	口 mouth; entrance, gate, opening
semphon("哔", "口", "毕", 3, `used in transliterations`, simplified("嗶"));
// 5791	嗶: bì 畢 bì	口 mouth; entrance, gate, opening
semphon("嗶", "口", "畢", 3, `used in transliterations`);
// 5800	璧: bì 辟 pì	玉 jade, gem, precious stone
phonsem("璧", "辟", "玉", 13, `a jade annulus`);
// 5802	镀: dù 度 dù	钅 gold, metal; money
semphon("镀", "钅", "度", 5, `to plate, to gild, to coat`, simplified("鍍"));
// 5805	垦: kěn 艮 gěn	土 soil, earth; items made of earth
phonsem("垦", "艮", "土", 6, `to cultivate, to farm; to reclaim`, simplified("墾"));
// 5807	豺: chái 才 cái	豸 badger; legendary beast
semphon("豺", "豸", "才", 7, `wolf; cruel, mean, wicked`);
// 5808	梆: bāng 邦 bāng	木 tree; wood, lumber; wooden
semphon("梆", "木", "邦", 4, `a watchman's rattle`);
// 5811	鸠: jiū 九 jiǔ	鸟 bird
phonsem("鸠", "九", "鸟", 2, `pigeon; to collect, to assemble`, simplified("鳩"));
// 5812	鳩: jiū 九 jiǔ	鳥 bird
phonsem("鳩", "九", "鳥", 2, `pigeon; to collect, to assemble`);
// 5814	孿: luán 䜌 luán	子 son, child; seed, egg; fruit; small thing
phonsem("孿", "䜌", "子", 19, `twins`);
// 5815	轶: yì 失 shī	车 cart, vehicle; to move in a cart
semphon("轶", "车", "失", 4, `to surpass, to overtake, to excel`, simplified("軼"));
// 5816	軼: yì 失 shī	車 cart, vehicle; to move in a cart
semphon("軼", "車", "失", 7, `to surpass, to overtake, to excel`);
// 5817	邂: xiè 解 jiě	辶 to walk; walking
semphon("邂", "辶", "解", 13, `an unexpected meeting`);
// 5818	逅: hòu 后 hòu	辶 to walk; walking
semphon("逅", "辶", "后", 6, `to meet unexpectedly`);
// 5819	熠: yì 習 xí	火 fire, flame; to burn; anger, rage
semphon("熠", "火", "習", 4, `bright, sparkling`);
// 5824	诃: hē 可 kě	讠 words, speech; to speak, to say
semphon("诃", "讠", "可", 2, `to scold loudly, to curse, to abuse`, simplified("訶"));
// 5825	訶: hē 可 kě	言 words, speech; to speak, to say
semphon("訶", "言", "可", 7, `to scold loudly, to curse, to abuse`);
// 5828	琵: pí 比 bǐ	玨 guitar strings; variant of 珏
semphon("琵", "玨", "比", 8, `a guitar-like instrument (1)`);
// 5829	琶: pá 巴 bā	玨 guitar strings; variant of 珏
semphon("琶", "玨", "巴", 8, `a guitar-like instrument (2)`);
// 5830	糜: mí 麻 má	米 rice, millet, grain
phonsem("糜", "麻", "米", 11, `rice gruel, congee; mashed`);
// 5832	绶: shòu 受 shòu	纟 silk; thread
semphon("绶", "纟", "受", 3, `a silk ribbon used as a seal`, simplified("綬"));
// 5833	綬: shòu 受 shòu	糹 silk; thread
semphon("綬", "糹", "受", 6, `a silk ribbon used as a seal`);
// 5837	吆: yāo 幺 yāo	口 mouth; entrance, gate, opening
semphon("吆", "口", "幺", 3, `to cry, to bawl; to yell, to shout`);
// 5840	睑: jiǎn 佥 qiān	目 eye; to look, to see; division, topic
semphon("睑", "目", "佥", 5, `eyelid`, simplified("瞼"));
// 5841	瞼: jiǎn 僉 qiān	目 eye; to look, to see; division, topic
semphon("瞼", "目", "僉", 5, `eyelid`);
// 5842	屹: yì 乞 qǐ	山 mountain, hill, peak
semphon("屹", "山", "乞", 3, `to rise, to stand tall`);
// 5843	眺: tiào 兆 zhào	目 eye; to look, to see; division, topic
semphon("眺", "目", "兆", 5, `to gaze, to look at; to scan, to survey`);
// 5845	蹿: cuān 窜 cuàn	足 foot; to attain, to satisfy; enough
semphon("蹿", "足", "窜", 7, `to jump, to leap; to gush, to spurt`, simplified("躥"));
// 5846	躥: cuān 竄 cuàn	足 foot; to attain, to satisfy; enough
semphon("躥", "足", "竄", 7, `to jump, to leap; to gush, to spurt`);
// 5850	挝: wō 过 guò	扌 hand
semphon("挝", "扌", "过", 3, `to beat; to strike`, simplified("撾"));
// 5851	撾: wō 過 guò	扌 hand
semphon("撾", "扌", "過", 3, `to beat; to strike`);
// 5852	锏: jiǎn 间 jiān	钅 gold, metal; money
semphon("锏", "钅", "间", 5, `rapier; mace`, simplified("鐧"));
// 5854	鞑: dá 达 dá	革 leather, animal hide; to reform; to remove
semphon("鞑", "革", "达", 9, `the Tartars`, simplified("韃"));
// 5855	韃: dá 達 dá	革 leather, animal hide; to reform; to remove
semphon("韃", "革", "達", 9, `the Tartars`);
// 5856	靼: dá 旦 dàn	革 leather, animal hide; to reform; to remove
semphon("靼", "革", "旦", 9, `the Tartars`);
// 5857	缮: shàn 善 shàn	纟 silk; thread
semphon("缮", "纟", "善", 3, `to repair, to mend; to transcribe, to rewrite`, simplified("繕"));
// 5858	繕: shàn 善 shàn	糹 silk; thread
semphon("繕", "糹", "善", 6, `to repair, to mend; to transcribe, to rewrite`);
// 5860	沅: yuán 元 yuán	氵 water
semphon("沅", "氵", "元", 3, `a river in western Hunan`);
// 5861	坨: tuó 它 tā	土 soil, earth; items made of earth
semphon("坨", "土", "它", 3, `lump, heap`);
// 5862	氦: hài 亥 hài	气 air, gas; steam, vapor; anger
semphon("氦", "气", "亥", 4, `helium`);
// 5863	笺: jiān 戋 jiān	⺮ bamboo; flute
semphon("笺", "⺮", "戋", 6, `note, memo, letter; stationery; comments`, simplified("箋"));
// 5864	箋: jiān 戔 jiān	⺮ bamboo; flute
semphon("箋", "⺮", "戔", 6, `note, memo, letter; stationery; comments`);
// 5872	寰: huán 睘 qióng	宀 roof; house
semphon("寰", "宀", "睘", 3, `country, domain, world`);
// 5873	忿: fèn 分 fēn	心 heart; mind; soul
phonsem("忿", "分", "心", 4, `anger, fury; exasperation`);
// 5874	踉: liáng 良 liáng	足 foot; to attain, to satisfy; enough
semphon("踉", "足", "良", 7, `to hop, to jump; hurried, urgent`);
// 5875	跄: qiāng 仓 cāng	足 foot; to attain, to satisfy; enough
semphon("跄", "足", "仓", 7, `to stagger, to stumble`, simplified("蹌"));
// 5876	蹌: qiāng 倉 cāng	足 foot; to attain, to satisfy; enough
semphon("蹌", "足", "倉", 7, `to stagger, to stumble`);
// 5878	脛: jìng 巠 jīng	⺼ meat, flesh; organic compound
semphon("脛", "⺼", "巠", 4, `calf, shinbone`);
// 5880	邹: zōu 刍 chú	阝 place, town, city
phonsem("邹", "刍", "阝", 5, `an ancient state; surname`, simplified("鄒"));
// 5881	鄒: zōu 芻 chú	阝 place, town, city
phonsem("鄒", "芻", "阝", 10, `an ancient state; surname`);
// 5884	獾: huān 雚 guàn	犭 dog
semphon("獾", "犭", "雚", 3, `badger`, simplified("䝔"));
// 5888	蜚: fēi 非 fēi	虫 insect, worm; mollusk
phonsem("蜚", "非", "虫", 8, `cockroach`);
// 5892	俑: yǒng 甬 yǒng	亻 man, person; people
semphon("俑", "亻", "甬", 2, `wooden figure buried with dead`);
// 5893	椿: chūn 春 chūn	木 tree; wood, lumber; wooden
semphon("椿", "木", "春", 4, `Chinese toon tree; father (poetic)`);
// 5895	潢: huáng 黄 huáng	氵 water
semphon("潢", "氵", "黄", 3, `pond, lake`);
// 5899	蔷: qiáng 啬 sè	艹 grass, weed, plant, herb
semphon("蔷", "艹", "啬", 3, `rose`, simplified("薔"));
// 5900	薔: qiáng 嗇 sè	艹 grass, weed, plant, herb
semphon("薔", "艹", "嗇", 4, `rose`);
// 5902	渲: xuàn 宣 xuān	氵 water
semphon("渲", "氵", "宣", 3, `to render; to exaggerate, to embellish, to add layers of color`);
// 5903	烩: huì 会 huì	火 fire, flame; to burn; anger, rage
semphon("烩", "火", "会", 4, `ragout; to braise, to cook`, simplified("燴"));
// 5904	燴: huì 會 huì	火 fire, flame; to burn; anger, rage
semphon("燴", "火", "會", 4, `ragout; to braise, to cook`);
// 5905	釉: yòu 由 yóu	釆 to distinguish; to pick, to gather, to collect
semphon("釉", "釆", "由", 7, `enamel, glaze`);
// 5906	螳: táng 堂 táng	虫 insect, worm; mollusk
semphon("螳", "虫", "堂", 6, `praying mantis`);
// 5907	蚱: zhà 乍 zhà	虫 insect, worm; mollusk
semphon("蚱", "虫", "乍", 6, `grasshopper; locust, cicada`);
// 5908	抡: lūn 仑 lún	扌 hand
semphon("抡", "扌", "仑", 3, `to swing, to flourish, to brandish`, simplified("掄"));
// 5909	掄: lūn 侖 lún	扌 hand
semphon("掄", "扌", "侖", 3, `to swing, to flourish, to brandish`);
// 5914	瞟: piǎo 票 piào	目 eye; to look, to see; division, topic
semphon("瞟", "目", "票", 5, `to squint, to glare, to look askance`);
// 5915	焙: bèi 咅 pǒu	火 fire, flame; to burn; anger, rage
semphon("焙", "火", "咅", 4, `to bake, to roast; to dry by the fire`);
// 5924	臊: sāo 喿 zào	⺼ meat, flesh; organic compound
semphon("臊", "⺼", "喿", 4, `shy, bashful; rank, fetid; the smell of urine`);
// 5926	腼: miǎn 面 miàn	⺼ meat, flesh; organic compound
semphon("腼", "⺼", "面", 4, `modest, bashful`, simplified("靦"));
// 5927	靦: miǎn 見 jiàn	面 face; surface, side; plane, dimension
semphon("靦", "面", "見", 9, `modest, bashful`);
// 5934	蚪: dǒu 斗 dòu	虫 insect, worm; mollusk
semphon("蚪", "虫", "斗", 6, `tadpole`);
// 5935	鸵: tuó 它 tā	鸟 bird
semphon("鸵", "鸟", "它", 5, `ostrich`, simplified("鴕"));
// 5936	鴕: tuó 它 tā	鳥 bird
semphon("鴕", "鳥", "它", 11, `ostrich`);
// 5941	梓: zǐ 辛 xīn	木 tree; wood, lumber; wooden
semphon("梓", "木", "辛", 4, `Catalpa ovata`);
// 5946	荼: tú 余 yú	艹 grass, weed, plant, herb
semphon("荼", "艹", "余", 3, `a bitter vegetable`);
// 5948	麝: shè 射 shè	鹿 deer; surname
semphon("麝", "鹿", "射", 11, `musk deer`);
// 5949	觊: jì 岂 qǐ	见 to see, to observe, to meet, to appear
phonsem("觊", "岂", "见", 6, `to covet, to desire, to long for`, simplified("覬"));
// 5950	覬: jì 豈 qǐ	見 to see, to observe, to meet, to appear
phonsem("覬", "豈", "見", 10, `to covet, to desire, to long for`);
// 5951	觎: yú 俞 yú	见 to see, to observe, to meet, to appear
phonsem("觎", "俞", "见", 9, `to covet, to desire, to long for`, simplified("覦"));
// 5952	覦: yú 俞 yú	見 to see, to observe, to meet, to appear
phonsem("覦", "俞", "見", 9, `to covet, to desire, to long for`);
// 5953	酊: dīng 丁 dīng	酉 wine; wine vessel; chemical
semphon("酊", "酉", "丁", 7, `drunk, intoxicated`);
// 5954	遐: xiá 叚 jiǎ	辶 to walk; walking
semphon("遐", "辶", "叚", 9, `distant, far; to abandon, to cast away`);
// 5955	霎: shà 妾 qiè	雨 rain
semphon("霎", "雨", "妾", 8, `drizzle, light rain; fleeting, passing`);
// 5956	绮: qǐ 奇 qí	纟 silk; thread
semphon("绮", "纟", "奇", 3, `fine silk; elegant, beautiful`, simplified("綺"));
// 5957	綺: qǐ 奇 qí	糹 silk; thread
semphon("綺", "糹", "奇", 6, `fine silk; elegant, beautiful`);
// 5960	棠: táng 尚 shàng	木 tree; wood, lumber; wooden
phonsem("棠", "尚", "木", 8, `crabapple tree; wild plum`);
// 5964	狰: zhēng 争 zhēng	犭 dog
semphon("狰", "犭", "争", 3, `fierce-looking, ferocious`, simplified("猙"));
// 5965	猙: zhēng 爭 zhēng	犭 dog
semphon("猙", "犭", "爭", 3, `fierce-looking, ferocious`);
// 5966	狞: níng 宁 níng	犭 dog
semphon("狞", "犭", "宁", 3, `fierce; hideous`, simplified("獰"));
// 5968	杞: qǐ 己 jǐ	木 tree; wood, lumber; wooden
semphon("杞", "木", "己", 4, `willow, medlar tree; a small feudal state`);
// 5970	酚: fēn 分 fēn	酉 wine; wine vessel; chemical
semphon("酚", "酉", "分", 7, `carbolic acid; phenol`);
// 5975	毗: pí 比 bǐ	田 field, farm, arable land; cultivated
semphon("毗", "田", "比", 5, `to aid, to help; to adjoin, to connect`, simplified("毘"));
// 5977	叱: chì 匕 bǐ	口 mouth; entrance, gate, opening
semphon("叱", "口", "匕", 3, `to scold, to upbraid; to shout at`);
// 5978	蛰: zhé 执 zhí	虫 insect, worm; mollusk
phonsem("蛰", "执", "虫", 6, `to hibernate`, simplified("蟄"));
// 5979	蟄: zhé 執 zhí	虫 insect, worm; mollusk
phonsem("蟄", "執", "虫", 11, `to hibernate`);
// 5980	沪: hù 户 hù	氵 water
semphon("沪", "氵", "户", 3, `Shanghai; the Shanghai river`, simplified("滬"));
// 5982	槐: huái 鬼 guǐ	木 tree; wood, lumber; wooden
semphon("槐", "木", "鬼", 4, `locust tree`);
// 5991	蚌: bàng 丰 fēng	虫 insect, worm; mollusk
semphon("蚌", "虫", "丰", 6, `oysters, mussels; mother-of-pearl`);
// 5992	岐: qí 支 zhī	山 mountain, hill, peak
semphon("岐", "山", "支", 3, `to diverge, to branch; the name of a mountain`);
// 5996	柚: yòu 由 yóu	木 tree; wood, lumber; wooden
semphon("柚", "木", "由", 4, `grapefruit, pomelo`);
// 5997	琅: láng 良 liáng	王 king, ruler; royal; surname
semphon("琅", "王", "良", 4, `pure, white; carnelian`, simplified("瑯"));
// 5998	瑯: láng 郎 láng	王 king, ruler; royal; surname
semphon("瑯", "王", "郎", 4, `pure, white; cornelian`);
// 5999	跆: tái 台 tái	足 foot; to attain, to satisfy; enough
semphon("跆", "足", "台", 7, `to trample, to kick`);
// 6000	龈: kěn 艮 gěn	齿 teeth; gears, cogs; age
semphon("龈", "齿", "艮", 8, `gums`, simplified("齦"));
// 6001	齦: kěn 艮 gěn	齒 teeth; gears, cogs; age
semphon("齦", "齒", "艮", 15, `gums`);
// 6002	璐: lù 路 lù	王 king, ruler; royal; surname
semphon("璐", "王", "路", 4, `a beautiful variety of jade`);
// 6004	碴: chá 查 chá	石 stone, rock, mineral
semphon("碴", "石", "查", 5, `quarrel; fault; a shard of glass`);
// 6006	饷: xiǎng 向 xiàng	饣 food; to eat
semphon("饷", "饣", "向", 3, `rations and pay for soldiers`, simplified("餉"));
// 6007	餉: xiǎng 向 xiàng	飠 food; to eat
semphon("餉", "飠", "向", 8, `rations and pay for soldiers`);
// 6009	掖: yē 夜 yè	扌 hand
semphon("掖", "扌", "夜", 3, `to tuck, to fold; to support`);
// 6010	耙: bà 巴 bā	耒 plow
semphon("耙", "耒", "巴", 6, `to rake`);
// 6011	酣: hān 甘 gān	酉 wine; wine vessel; chemical
semphon("酣", "酉", "甘", 7, `to enjoy liquor`);
// 6012	诘: jí 吉 jí	讠 words, speech; to speak, to say
semphon("诘", "讠", "吉", 2, `to question, to interrogate`, simplified("詰"));
// 6013	詰: jí 吉 jí	言 words, speech; to speak, to say
semphon("詰", "言", "吉", 7, `to question, to interrogate`);
// 6022	诛: zhū 朱 zhū	讠 words, speech; to speak, to say
semphon("诛", "讠", "朱", 2, `to execute, to kill; to punish`, simplified("誅"));
// 6023	誅: zhū 朱 zhū	言 words, speech; to speak, to say
semphon("誅", "言", "朱", 7, `to execute, to kill; to punish`);
// 6026	涟: lián 连 lián	氵 water
semphon("涟", "氵", "连", 3, `flowing water; ripples; weeping`, simplified("漣"));
// 6027	漣: lián 連 lián	氵 water
semphon("漣", "氵", "連", 3, `flowing water; ripples; weeping`);
// 6033	讷: nè 内 nèi	讠 words, speech; to speak, to say
semphon("讷", "讠", "内", 2, `inarticulate, slow; to mumble, to stammer`, simplified("訥"));
// 6034	訥: nè 内 nèi	言 words, speech; to speak, to say
semphon("訥", "言", "内", 7, `inarticulate, slow; to mumble, to stammer`);
// 6035	邢: xíng 开 kāi	阝 place, town, city
phonsem("邢", "开", "阝", 4, `a state in Hebei province; surname`);
// 6039	跻: jī 齐 qí	足 foot; to attain, to satisfy; enough
semphon("跻", "足", "齐", 7, `to ascend, to rise`, simplified("躋"));
// 6040	躋: jī 齊 qí	足 foot; to attain, to satisfy; enough
semphon("躋", "足", "齊", 7, `to ascend, to rise`);
// 6041	鹫: jiù 就 jiù	鸟 bird
phonsem("鹫", "就", "鸟", 12, `condor, vulture`, simplified("鷲"));
// 6042	鷲: jiù 就 jiù	鳥 bird
phonsem("鷲", "就", "鳥", 12, `condor, vulture`);
// 6045	谙: ān 音 yīn	讠 words, speech; to speak, to say
semphon("谙", "讠", "音", 2, `well-versed in, fully acquainted with`, simplified("諳"));
// 6046	諳: ān 音 yīn	言 words, speech; to speak, to say
semphon("諳", "言", "音", 7, `well-versed in, fully acquainted with`);
// 6049	岱: dài 代 dài	山 mountain, hill, peak
phonsem("岱", "代", "山", 5, `the Daishan mountain in Shandong`);
// 6053	沽: gū 古 gǔ	氵 water
semphon("沽", "氵", "古", 3, `to buy and sell; of inferior quality`);
// 6055	痢: lì 利 lì	疒 sickness, disease
semphon("痢", "疒", "利", 5, `dysentery`);
// 6056	噼: pī 辟 pì	口 mouth; entrance, gate, opening
semphon("噼", "口", "辟", 3, `onomatopoetic, the sound of something cracking`);
// 6057	菁: jīng 青 qīng	艹 grass, weed, plant, herb
semphon("菁", "艹", "青", 3, `turnip; a flower of the leek family`);
// 6058	妲: dá 旦 dàn	女 woman, girl; female
semphon("妲", "女", "旦", 3, `concubine of the last Shang emperor`);
// 6063	颧: quán 雚 guàn	页 page, sheet, leaf
phonsem("颧", "雚", "页", 17, `cheekbones`, simplified("顴"));
// 6064	顴: quán 雚 guàn	頁 page, sheet, leaf
phonsem("顴", "雚", "頁", 18, `cheekbones`);
// 6065	讹: é 化 huà	讠 words, speech; to speak, to say
semphon("讹", "讠", "化", 2, `to swindle, to cheat; wrong, error; falsehood`, simplified("訛"));
// 6066	訛: é 化 huà	言 words, speech; to speak, to say
semphon("訛", "言", "化", 7, `to swindle, to cheat; wrong, error; falsehood`);
// 6076	瘁: cuì 卒 zú	疒 sickness, disease
semphon("瘁", "疒", "卒", 5, `tired, worn-out; sick; overworked`);
// 6079	诙: huī 灰 huī	讠 words, speech; to speak, to say
semphon("诙", "讠", "灰", 2, `to tease, to joke with; to ridicule, to mock`, simplified("詼"));
// 6080	詼: huī 灰 huī	言 words, speech; to speak, to say
semphon("詼", "言", "灰", 7, `to tease, to joke with; to ridicule, to mock`);
// 6085	榔: láng 郎 láng	木 tree; wood, lumber; wooden
semphon("榔", "木", "郎", 4, `betel-nut tree`);
// 6087	蹣: pán 㒼 mán	足 foot; to attain, to satisfy; enough
semphon("蹣", "足", "㒼", 7, `to stagger, to limp`);
// 6088	跚: shān 册 cè	足 foot; to attain, to satisfy; enough
semphon("跚", "足", "册", 7, `to stagger, to limp`);
// 6092	幔: màn 曼 màn	巾 cloth, curtain, handkerchief, towel
semphon("幔", "巾", "曼", 3, `curtain, screen, tent`);
// 6093	忖: cǔn 寸 cùn	忄 heart; mind; soul
semphon("忖", "忄", "寸", 3, `to guess, to ponder, to suppose`);
// 6094	嗳: āi 爱 ài	口 mouth; entrance, gate, opening
semphon("嗳", "口", "爱", 3, `interjection indicating regret`, simplified("噯"));
// 6095	噯: āi 愛 ài	口 mouth; entrance, gate, opening
semphon("噯", "口", "愛", 3, `interjection indicating regret`);
// 6096	弈: yì 亦 yì	廾 two hands
phonsem("弈", "亦", "廾", 6, `Chinese chess`);
// 6097	砷: shēn 申 shēn	石 stone, rock, mineral
semphon("砷", "石", "申", 5, `arsenic`);
// 6099	沁: qìn 心 xīn	氵 water
semphon("沁", "氵", "心", 3, `to soak, to seep in, to percolate`);
// 6100	镣: liào 尞 liào	钅 gold, metal; money
semphon("镣", "钅", "尞", 5, `fetters, leg-irons`, simplified("鐐"));
// 6101	鐐: liào 尞 liào	釒 gold, metal; money
semphon("鐐", "釒", "尞", 8, `fetters, leg-irons`);
// 6105	箴: zhēn 咸 xián	⺮ bamboo; flute
semphon("箴", "⺮", "咸", 6, `needle, probe; to admonish, to warn`);
// 6106	恬: tián 舌 shé	忄 heart; mind; soul
semphon("恬", "忄", "舌", 3, `calm, peaceful; quiet, tranquil`);
// 6108	镐: gǎo 高 gāo	钅 gold, metal; money
semphon("镐", "钅", "高", 5, `stove; bright`, simplified("鎬"));
// 6109	鎬: gǎo 高 gāo	釒 gold, metal; money
semphon("鎬", "釒", "高", 8, `stove; bright`);
// 6116	笙: shēng 生 shēng	⺮ bamboo; flute
semphon("笙", "⺮", "生", 6, `free reed mouth organ`);
// 6118	巒: luán 䜌 luán	山 mountain, hill, peak
phonsem("巒", "䜌", "山", 19, `mountain range; tall pointed mountain`);
// 6121	儆: jǐng 敬 jìng	亻 man, person; people
semphon("儆", "亻", "敬", 2, `to warn; warning`);
// 6122	垠: yín 艮 gěn	土 soil, earth; items made of earth
semphon("垠", "土", "艮", 3, `boundary, river bank`);
// 6127	啮: niè 齿 chǐ	口 mouth; entrance, gate, opening
semphon("啮", "口", "齿", 3, `to bite, to gnaw`, simplified("嚙"));
// 6128	嚙: niè 齒 chǐ	口 mouth; entrance, gate, opening
semphon("嚙", "口", "齒", 3, `to bite, to gnaw`);
// 6136	瑶: yáo 䍃 yóu	王 king, ruler; royal; surname
semphon("瑶", "王", "䍃", 4, `precious jade`, simplified("瑤"));
// 6137	瑤: yáo 䍃 yóu	王 king, ruler; royal; surname
semphon("瑤", "王", "䍃", 4, `precious jade`);
// 6138	娣: dì 弟 dì	女 woman, girl; female
semphon("娣", "女", "弟", 3, `younger sister; younger brother's wife`);
// 6139	鲈: lú 卢 lú	鱼 fish
semphon("鲈", "鱼", "卢", 8, `perch; sea bass`, simplified("鱸"));
// 6140	鱸: lú 盧 lú	魚 fish
semphon("鱸", "魚", "盧", 11, `perch; sea bass`);
// 6141	孺: rú 需 xū	子 son, child; seed, egg; fruit; small thing
semphon("孺", "子", "需", 3, `child; blood relation; affection`);
// 6146	恣: zì 次 cì	心 heart; mind; soul
phonsem("恣", "次", "心", 6, `indulgent; unrestrained`);
// 6148	鼬: yòu 由 yóu	鼠 rat, mouse
semphon("鼬", "鼠", "由", 13, `weasel, mustela itatis`);
// 6152	麋: mí 米 mǐ	鹿 deer; surname
semphon("麋", "鹿", "米", 11, `elk; surname`);
// 6154	驛: yì 睪 yì	馬 horse; surname
semphon("驛", "馬", "睪", 10, `relay station`);
// 6156	蜒: yán 延 yán	虫 insect, worm; mollusk
semphon("蜒", "虫", "延", 6, `millipede`);
// 6157	璜: huáng 黄 huáng	王 king, ruler; royal; surname
semphon("璜", "王", "黄", 4, `a jade pendant`);
// 6158	鳖: biē 敝 bì	鱼 fish
phonsem("鳖", "敝", "鱼", 11, `turtle`, simplified("鱉"));
// 6159	鱉: biē 敝 bì	魚 fish
phonsem("鱉", "敝", "魚", 11, `turtle`);
// 6161	苜: mù 目 mù	艹 grass, weed, plant, herb
semphon("苜", "艹", "目", 3, `clover`);
// 6163	蜊: lí 利 lì	虫 insect, worm; mollusk
semphon("蜊", "虫", "利", 6, `clam`);
// 6166	铬: gè 各 gè	钅 gold, metal; money
semphon("铬", "钅", "各", 5, `chromium`, simplified("鉻"));
// 6167	鉻: gè 各 gè	釒 gold, metal; money
semphon("鉻", "釒", "各", 8, `chromium`);
// 6173	葆: bǎo 保 bǎo	艹 grass, weed, plant, herb
semphon("葆", "艹", "保", 3, `dense foliage; to cover, to conceal; to preserve`);
// 6175	荚: jiá 夹 jiā	艹 grass, weed, plant, herb
semphon("荚", "艹", "夹", 3, `seed-pod`, simplified("莢"));
// 6176	莢: jiá 夾 jiā	艹 grass, weed, plant, herb
semphon("莢", "艹", "夾", 4, `seed-pod`);
// 6177	驮: tuó 大 dà	马 horse; surname
semphon("驮", "马", "大", 3, `to carry on one's back`, simplified("馱"));
// 6178	馱: tuó 大 dà	馬 horse; surname
semphon("馱", "馬", "大", 10, `to carry on one's back`);
// 6180	岬: jiǎ 甲 jiǎ	山 mountain, hill, peak
semphon("岬", "山", "甲", 3, `cape; promontory, headland`);
// 6182	汶: wèn 文 wén	氵 water
semphon("汶", "氵", "文", 3, `a river in Shandong province`);
// 6183	缤: bīn 宾 bīn	纟 silk; thread
semphon("缤", "纟", "宾", 3, `abundant, diverse, variegated`, simplified("繽"));
// 6184	繽: bīn 賓 bīn	糹 silk; thread
semphon("繽", "糹", "賓", 6, `abundant, diverse, variegated`);
// 6187	诩: xǔ 羽 yǔ	讠 words, speech; to speak, to say
semphon("诩", "讠", "羽", 2, `to brag, to boast; popular, well-known`, simplified("詡"));
// 6188	詡: xǔ 羽 yǔ	言 words, speech; to speak, to say
semphon("詡", "言", "羽", 7, `to brag, to boast; popular, well-known`);
// 6189	俳: pái 非 fēi	亻 man, person; people
semphon("俳", "亻", "非", 2, `actor; vaudeville show; insincere`);
// 6191	砧: zhēn 占 zhàn	石 stone, rock, mineral
semphon("砧", "石", "占", 5, `anvil, flat stone`, simplified("碪"));
// 6193	祠: cí 司 sī	礻 spirit
semphon("祠", "礻", "司", 4, `ancestral temple; to sacrifice`);
// 6199	筵: yán 延 yán	⺮ bamboo; flute
semphon("筵", "⺮", "延", 6, `bamboo mat; banquet, feast`);
// 6203	惆: chóu 周 zhōu	忄 heart; mind; soul
semphon("惆", "忄", "周", 3, `distressed, regretful, sad`);
// 6204	怅: chàng 长 zhǎng	忄 heart; mind; soul
semphon("怅", "忄", "长", 3, `disappointed; regretful; upset`, simplified("悵"));
// 6205	悵: chàng 長 zhǎng	忄 heart; mind; soul
semphon("悵", "忄", "長", 3, `disappointed; regretful; upset`);
// 6207	窕: tiǎo 兆 zhào	穴 cave, den, hole
semphon("窕", "穴", "兆", 5, `slender; quiet, modest; charming`);
// 6210	铮: zhēng 争 zhēng	钅 gold, metal; money
semphon("铮", "钅", "争", 5, `clanging sound; a small gong`, simplified("錚"));
// 6211	錚: zhēng 争 zhēng	釒 gold, metal; money
semphon("錚", "釒", "争", 8, `clanging sound; a small gong`);
// 6212	邵: shào 召 zhào	阝 place, town, city
phonsem("邵", "召", "阝", 5, `various place names; surname`);
// 6215	酩: mǐng 名 míng	酉 wine; wine vessel; chemical
semphon("酩", "酉", "名", 7, `drunk, tipsy, intoxicated`);
// 6216	榭: xiè 射 shè	木 tree; wood, lumber; wooden
semphon("榭", "木", "射", 4, `pavilion, kiosk`);
// 6217	荤: hūn 军 jūn	艹 grass, weed, plant, herb
semphon("荤", "艹", "军", 3, `non-vegetarian food; garlic; a foul smell`, simplified("葷"));
// 6218	葷: hūn 軍 jūn	艹 grass, weed, plant, herb
semphon("葷", "艹", "軍", 4, `non-vegetarian food; garlic; a foul smell`);
// 6219	铠: kǎi 岂 qǐ	钅 gold, metal; money
semphon("铠", "钅", "岂", 5, `armor, chain mail`, simplified("鎧"));
// 6220	鎧: kǎi 豈 qǐ	釒 gold, metal; money
semphon("鎧", "釒", "豈", 8, `armor, chain mail`);
// 6221	谩: mán 曼 màn	讠 words, speech; to speak, to say
semphon("谩", "讠", "曼", 2, `to slight, to insult; to deceive`, simplified("謾"));
// 6222	謾: mán 曼 màn	言 words, speech; to speak, to say
semphon("謾", "言", "曼", 7, `to slight, to insult; to deceive`);
// 6223	桦: huà 华 huá	木 tree; wood, lumber; wooden
semphon("桦", "木", "华", 4, `a type of birch tree`, simplified("樺"));
// 6224	樺: huà 華 huá	木 tree; wood, lumber; wooden
semphon("樺", "木", "華", 4, `a type of birch tree`);
// 6227	秧: yāng 央 yāng	禾 cereal, grain, rice; plant, stalk
semphon("秧", "禾", "央", 5, `shoots, sprouts; young rice plants`);
// 6233	岑: cén 今 jīn	山 mountain, hill, peak
semphon("岑", "山", "今", 3, `steep, precipitous; peak`);
// 6234	妩: wǔ 无 wú	女 woman, girl; female
semphon("妩", "女", "无", 3, `charming, enchanting; to flatter, to please`, simplified("嫵"));
// 6235	嫵: wǔ 無 wú	女 woman, girl; female
semphon("嫵", "女", "無", 3, `charming, enchanting; to flatter, to please`);
// 6238	箩: luó 罗 luō	⺮ bamboo; flute
semphon("箩", "⺮", "罗", 6, `bamboo basket`, simplified("籮"));
// 6239	籮: luó 羅 luō	⺮ bamboo; flute
semphon("籮", "⺮", "羅", 6, `bamboo basket`);
// 6243	盂: yú 于 yú	皿 dish, vessel; shallow container
phonsem("盂", "于", "皿", 3, `basin; cup`);
// 6244	腱: jiàn 建 jiàn	⺼ meat, flesh; organic compound
semphon("腱", "⺼", "建", 4, `tendon, sinew`);
// 6245	搽: chá 茶 chá	扌 hand
semphon("搽", "扌", "茶", 3, `to wipe, to smear, to rub, to anoint`);
// 6246	霰: sǎn 散 sàn	雨 rain
semphon("霰", "雨", "散", 8, `hail, sleet`);
// 6247	肽: tài 太 tài	⺼ meat, flesh; organic compound
semphon("肽", "⺼", "太", 4, `peptide`);
// 6248	憨: hān 敢 gǎn	心 heart; mind; soul
phonsem("憨", "敢", "心", 11, `silly, foolish; coquettish`);
// 6249	皑: ái 岂 qǐ	白 white; clear, pure, unblemished; bright
semphon("皑", "白", "岂", 5, `brilliant white; as white as snow`, simplified("皚"));
// 6250	皚: ái 豈 qǐ	白 white; clear, pure, unblemished; bright
semphon("皚", "白", "豈", 5, `brilliant white; as white as snow`);
// 6252	抿: mǐn 民 mín	扌 hand
semphon("抿", "扌", "民", 3, `to press, to smooth; to purse the lips`);
// 6253	黔: qián 今 jīn	黑 black; dark; evil, sinister
semphon("黔", "黑", "今", 12, `black; the Guizhou province`);
// 6254	铤: dìng 廷 tíng	钅 gold, metal; money
semphon("铤", "钅", "廷", 5, `ingots, metal bars; to hurry`, simplified("鋌"));
// 6255	鋌: dìng 廷 tíng	釒 gold, metal; money
semphon("鋌", "釒", "廷", 8, `ingots, metal bars; to hurry`);
// 6256	颞: niè 聂 niè	页 page, sheet, leaf
phonsem("颞", "聂", "页", 10, `the temporal bone`, simplified("顳"));
// 6257	顳: niè 聶 niè	頁 page, sheet, leaf
phonsem("顳", "聶", "頁", 18, `the temporal bone`);
// 6258	轼: shì 式 shì	车 cart, vehicle; to move in a cart
semphon("轼", "车", "式", 4, `carriage crossbar`, simplified("軾"));
// 6259	軾: shì 式 shì	車 cart, vehicle; to move in a cart
semphon("軾", "車", "式", 7, `carriage crossbar`);
// 6260	鹳: guàn 雚 guàn	鸟 bird
phonsem("鹳", "雚", "鸟", 17, `crane, stork; Ciconia species (various)`, simplified("鸛"));
// 6262	峨: é 我 wǒ	山 mountain, hill, peak
semphon("峨", "山", "我", 3, `lofty; the name of a mountain`, simplified("峩"));
// 6265	羯: jié 曷 hé	羊 sheep, goat
semphon("羯", "羊", "曷", 6, `wether, castrated ram; deer skin`);
// 6268	疝: shàn 山 shān	疒 sickness, disease
semphon("疝", "疒", "山", 5, `hernia; to rupture`);
// 6269	倏: shū 攸 yōu	犬 dog
phonsem("倏", "攸", "犬", 6, `hastily, suddenly, abruptly`, simplified("倐"));
// 6272	涣: huàn 奂 huàn	氵 water
semphon("涣", "氵", "奂", 3, `scattered; to scatter`, simplified("渙"));
// 6273	渙: huàn 奐 huàn	氵 water
semphon("渙", "氵", "奐", 3, `scattered; to scatter`);
// 6275	掸: dǎn 单 dān	扌 hand
semphon("掸", "扌", "单", 3, `to dust; a duster`, simplified("撣"));
// 6276	撣: dǎn 單 dān	扌 hand
semphon("撣", "扌", "單", 3, `to dust; a duster`);
// 6278	蚣: gōng 公 gōng	虫 insect, worm; mollusk
semphon("蚣", "虫", "公", 6, `centipede`);
// 6279	袤: mào 矛 máo	衣 cloth; clothes, apparel; dress, coat
semphon("袤", "衣", "矛", 6, `longitude; lengthwise; length`);
// 6280	嬷: mā 麽 me	女 woman, girl; female
semphon("嬷", "女", "麽", 3, `mother`, simplified("嬤"));
// 6282	瑾: jǐn 堇 jǐn	王 king, ruler; royal; surname
semphon("瑾", "王", "堇", 4, `the brilliance or luster of a gem`);
// 6291	鹭: lù 路 lù	鸟 bird
phonsem("鹭", "路", "鸟", 13, `heron, egret; Ardea species (various)`, simplified("鷺"));
// 6292	鷺: lù 路 lù	鳥 bird
phonsem("鷺", "路", "鳥", 13, `heron, egret; Ardea species (various)`);
// 6294	馄: hún 昆 kūn	饣 food; to eat
semphon("馄", "饣", "昆", 3, `dumpling soup; wonton`, simplified("餛"));
// 6295	餛: hún 昆 kūn	飠 food; to eat
semphon("餛", "飠", "昆", 8, `dumpling soup; wonton`);
// 6296	饨: tún 屯 tún	饣 food; to eat
semphon("饨", "饣", "屯", 3, `stuffed dumplings`, simplified("飩"));
// 6297	飩: tún 屯 tún	飠 food; to eat
semphon("飩", "飠", "屯", 8, `stuffed dumplings`);
// 6300	锭: dìng 定 dìng	钅 gold, metal; money
semphon("锭", "钅", "定", 5, `spindle, ingot; tablet, slab`, simplified("錠"));
// 6301	錠: dìng 定 dìng	釒 gold, metal; money
semphon("錠", "釒", "定", 8, `spindle, ingot; tablet, slab`);
// 6302	泯: mǐn 民 mín	氵 water
semphon("泯", "氵", "民", 3, `to destroy, to eliminate; to perish`, simplified("冺"));
// 6305	缇: tí 是 shì	纟 silk; thread
semphon("缇", "纟", "是", 3, `orange-red silk; red, brown`, simplified("緹"));
// 6307	盅: zhōng 中 zhōng	皿 dish, vessel; shallow container
phonsem("盅", "中", "皿", 4, `small cup or bowl`);
// 6308	笈: jí 及 jí	⺮ bamboo; flute
semphon("笈", "⺮", "及", 6, `bamboo box used carry books`);
// 6313	羥: qiǎng 羊 yáng	巠 underground river; flowing water
phonsem("羥", "羊", "巠", 6, `hydroxide`);
// 6314	氖: nǎi 乃 nǎi	气 air, gas; steam, vapor; anger
semphon("氖", "气", "乃", 4, `neon`);
// 6318	祉: zhǐ 止 zhǐ	礻 spirit
semphon("祉", "礻", "止", 4, `blessings, happiness, good luck`);
// 6322	唏: xī 希 xī	口 mouth; entrance, gate, opening
semphon("唏", "口", "希", 3, `to weep, to sob; to grieve`);
// 6323	铂: bó 白 bái	钅 gold, metal; money
semphon("铂", "钅", "白", 5, `platinum; thin sheet metal`, simplified("鉑"));
// 6325	饯: jiàn 戋 jiān	饣 food; to eat
semphon("饯", "饣", "戋", 3, `to send off; farewell dinner; preserves`, simplified("餞"));
// 6326	餞: jiàn 戔 jiān	飠 food; to eat
semphon("餞", "飠", "戔", 8, `to send off; farewell dinner; preserves`);
// 6327	蛔: huí 回 huí	虫 insect, worm; mollusk
semphon("蛔", "虫", "回", 6, `tapeworm`, simplified("痐"));
// 6334	踮: diǎn 店 diàn	足 foot; to attain, to satisfy; enough
semphon("踮", "足", "店", 7, `to tip-toe`);
// 6335	馍: mó 莫 mò	饣 food; to eat
semphon("馍", "饣", "莫", 3, `bread`, simplified("饃"));
// 6336	饃: mó 莫 mò	飠 food; to eat
semphon("饃", "飠", "莫", 8, `bread`);
// 6342	菸: yān 於 yú	艹 grass, weed, plant, herb
semphon("菸", "艹", "於", 3, `tobacco, dried leaves; to fade`);
// 6344	钡: bèi 贝 bèi	钅 gold, metal; money
semphon("钡", "钅", "贝", 5, `barium`, simplified("鋇"));
// 6345	鋇: bèi 貝 bèi	釒 gold, metal; money
semphon("鋇", "釒", "貝", 8, `barium`);
// 6346	唁: yàn 言 yán	口 mouth; entrance, gate, opening
semphon("唁", "口", "言", 3, `to offer condolences`);
// 6350	晖: huī 军 jūn	日 sun; day; daytime
semphon("晖", "日", "军", 4, `sunshine; light; bright, radiant`, simplified("暉"));
// 6351	暉: huī 軍 jūn	日 sun; day; daytime
semphon("暉", "日", "軍", 4, `sunshine; light; bright, radiant`);
// 6354	扈: hù 户 hù	邑 area, district, city, state
phonsem("扈", "户", "邑", 4, `escort, retinue; insolent`);
// 6355	煲: bāo 保 bǎo	火 fire, flame; to burn; anger, rage
phonsem("煲", "保", "火", 9, `to heat, to boil; saucepan`);
// 6361	蚜: yá 牙 yá	虫 insect, worm; mollusk
semphon("蚜", "虫", "牙", 6, `aphid, plant louse`);
// 6362	炕: kàng 亢 kàng	火 fire, flame; to burn; anger, rage
semphon("炕", "火", "亢", 4, `the brick-bed in northern China`, simplified("匟"));
// 6364	肓: huāng 亡 wáng	⺼ meat, flesh; organic compound
phonsem("肓", "亡", "⺼", 3, `abdominal cavity; the area between the heart and diaphragm`);
// 6370	鬃: zōng 宗 zōng	髟 long hair
semphon("鬃", "髟", "宗", 10, `mane; neck bristles`, simplified("騣"));
// 6374	砥: dǐ 氐 dī	石 stone, rock, mineral
semphon("砥", "石", "氐", 5, `whetstone; to polish`);
// 6378	舐: shì 氏 shì	舌 tongue; bell clapper
semphon("舐", "舌", "氏", 6, `to lick, to lap up`);
// 6379	晌: shǎng 向 xiàng	日 sun; day; daytime
semphon("晌", "日", "向", 4, `noon, midday; moment`);
// 6380	俨: yǎn 严 yán	亻 man, person; people
semphon("俨", "亻", "严", 2, `grave, respectful; majestic`, simplified("儼"));
// 6381	儼: yǎn 嚴 yán	亻 man, person; people
semphon("儼", "亻", "嚴", 2, `grave, respectful; majestic`);
// 6384	涖: lì 位 wèi	氵 water
semphon("涖", "氵", "位", 3, `creek; a river in Hebei province`);
// 6385	鳕: xuě 雪 xuě	鱼 fish
semphon("鳕", "鱼", "雪", 8, `codfish`, simplified("鱈"));
// 6386	鱈: xuě 雪 xuě	魚 fish
semphon("鱈", "魚", "雪", 11, `codfish`);
// 6389	瞠: chēng 堂 táng	目 eye; to look, to see; division, topic
semphon("瞠", "目", "堂", 5, `to gaze, to look, to stare`);
// 6392	鲟: xún 寻 xún	鱼 fish
semphon("鲟", "鱼", "寻", 8, `sturgeon`, simplified("鱘"));
// 6393	鱘: xún 尋 xún	魚 fish
semphon("鱘", "魚", "尋", 11, `sturgeon`);
// 6395	铵: ǎn 安 ān	钅 gold, metal; money
semphon("铵", "钅", "安", 5, `ammonium`, simplified("銨"));
// 6396	銨: ǎn 安 ān	釒 gold, metal; money
semphon("銨", "釒", "安", 8, `ammonium`);
// 6397	祁: qí 阝 yì	礻 spirit
semphon("祁", "礻", "阝", 4, `to pray; numerous, ample, abundant`);
// 6398	渚: zhǔ 者 zhě	氵 water
semphon("渚", "氵", "者", 3, `islet, sandbar`);
// 6400	哽: gěng 更 gèng	口 mouth; entrance, gate, opening
semphon("哽", "口", "更", 3, `to sob; to choke up`);
// 6401	膺: yīng 䧹 yīng	⺼ meat, flesh; organic compound
phonsem("膺", "䧹", "⺼", 13, `breast, chest; to bear, to undertake`);
// 6402	贻: yí 台 tái	贝 sea shell; money, currency
semphon("贻", "贝", "台", 4, `to hand down, to give to, to bequeath`, simplified("貽"));
// 6403	貽: yí 台 tái	貝 sea shell; money, currency
semphon("貽", "貝", "台", 7, `to hand down, to give to, to bequeath`);
// 6405	蛹: yǒng 甬 yǒng	虫 insect, worm; mollusk
semphon("蛹", "虫", "甬", 6, `pupa, chrysalis`);
// 6406	祺: qí 其 qí	礻 spirit
semphon("祺", "礻", "其", 4, `good luck, good fortune`);
// 6407	犷: guǎng 广 guǎng	犭 dog
semphon("犷", "犭", "广", 3, `fierce, rude, uncivilized`, simplified("獷"));
// 6408	獷: guǎng 廣 guǎng	犭 dog
semphon("獷", "犭", "廣", 3, `fierce, rude, uncivilized`);
// 6413	胛: jiǎ 甲 jiǎ	⺼ meat, flesh; organic compound
semphon("胛", "⺼", "甲", 4, `shoulder; shoulder blade`);
// 6414	纂: zuǎn 算 suàn	糸 silk; thread
phonsem("纂", "算", "糸", 14, `to edit, to compile; to tie a knot`, simplified("篹"));
// 6419	鳃: sāi 思 sī	鱼 fish
semphon("鳃", "鱼", "思", 8, `fish gills`, simplified("鰓"));
// 6420	鰓: sāi 思 sī	魚 fish
semphon("鰓", "魚", "思", 11, `fish gills`);
// 6423	缥: piāo 票 piào	纟 silk; thread
semphon("缥", "纟", "票", 3, `dim, misty, indistinct; a silk veil`, simplified("縹"));
// 6424	縹: piāo 票 piào	糹 silk; thread
semphon("縹", "糹", "票", 6, `dim, misty, indistinct; a silk veil`);
// 6429	锵: qiāng 将 jiāng	钅 gold, metal; money
semphon("锵", "钅", "将", 5, `clang; jingle, tinkle`, simplified("鏘"));
// 6433	耷: dā 大 dà	耳 ear; to hear, to hear of; handle
phonsem("耷", "大", "耳", 3, `drooping ears`);
// 6436	霖: lín 林 lín	雨 rain
semphon("霖", "雨", "林", 8, `monsoon; a long spell of rain`);
// 6437	埠: bù 阜 fù	土 soil, earth; items made of earth
semphon("埠", "土", "阜", 3, `jetty, quay; port city, trade hub`);
// 6439	沏: qī 切 qiè	氵 water
semphon("沏", "氵", "切", 3, `to infuse`);
// 6442	铢: zhū 朱 zhū	钅 gold, metal; money
semphon("铢", "钅", "朱", 5, `a unit of weight, about 1 gram`, simplified("銖"));
// 6443	銖: zhū 朱 zhū	釒 gold, metal; money
semphon("銖", "釒", "朱", 8, `a unit of weight, about 1 gram`);
// 6448	锂: lǐ 里 lǐ	钅 gold, metal; money
semphon("锂", "钅", "里", 5, `lithium`, simplified("鋰"));
// 6449	鋰: lǐ 里 lǐ	釒 gold, metal; money
semphon("鋰", "釒", "里", 8, `lithium`);
// 6452	吡: bǐ 比 bǐ	口 mouth; entrance, gate, opening
semphon("吡", "口", "比", 3, `to blame`);
// 6456	庖: páo 包 bāo	广 broad, vast, wide; building, house
semphon("庖", "广", "包", 3, `kitchen; cooking, cuisine`);
// 6457	荟: huì 会 huì	艹 grass, weed, plant, herb
semphon("荟", "艹", "会", 3, `abundant, flourishing`, simplified("薈"));
// 6458	薈: huì 會 huì	艹 grass, weed, plant, herb
semphon("薈", "艹", "會", 4, `abundant, flourishing`);
// 6459	龛: kān 合 hé	龙 dragon; symbol of the emperor
phonsem("龛", "合", "龙", 6, `niche, shrine`, simplified("龕"));
// 6460	龕: kān 合 hé	龍 dragon; symbol of the emperor
phonsem("龕", "合", "龍", 6, `niche, shrine`);
// 6461	龋: qǔ 禹 yǔ	齿 teeth; gears, cogs; age
semphon("龋", "齿", "禹", 8, `tooth decay`, simplified("齲"));
// 6462	齲: qǔ 禹 yǔ	齒 teeth; gears, cogs; age
semphon("齲", "齒", "禹", 15, `tooth decay`);
// 6465	褴: lán 监 jiān	衤 cloth
semphon("褴", "衤", "监", 5, `ragged, tattered, threadbare`, simplified("襤"));
// 6466	襤: lán 監 jiān	衤 cloth
semphon("襤", "衤", "監", 5, `ragged, tattered, threadbare`);
// 6467	褛: lǚ 娄 lóu	衤 cloth
semphon("褛", "衤", "娄", 5, `lapel, collar; tattered, threadbare`, simplified("褸"));
// 6468	褸: lǚ 婁 lóu	衤 cloth
semphon("褸", "衤", "婁", 5, `lapel, collar; tattered, threadbare`);
// 6470	荔: lì 劦 xié	艹 grass, weed, plant, herb
semphon("荔", "艹", "劦", 3, `lychee`, simplified("茘"));
// 6473	呷: gā 甲 jiǎ	口 mouth; entrance, gate, opening
semphon("呷", "口", "甲", 3, `to swallow, to suck, to drink`);
// 6474	祗: zhī 氐 dī	礻 spirit
semphon("祗", "礻", "氐", 4, `to revere, to respect, to look up to`);
// 6475	镊: niè 聂 niè	钅 gold, metal; money
semphon("镊", "钅", "聂", 5, `tweezers, forceps, pliers; to nip, to pluck`, simplified("鑷"));
// 6476	鑷: niè 聶 niè	釒 gold, metal; money
semphon("鑷", "釒", "聶", 8, `tweezers, forceps, pliers; to nip, to pluck`);
// 6477	茴: huí 回 huí	艹 grass, weed, plant, herb
semphon("茴", "艹", "回", 3, `fennel, aniseed`);
// 6478	锉: cuò 坐 zuò	钅 gold, metal; money
semphon("锉", "钅", "坐", 5, `carpenter's file; to file smooth`, simplified("銼"));
// 6479	銼: cuò 坐 zuò	釒 gold, metal; money
semphon("銼", "釒", "坐", 8, `carpenter's file; to file smooth`);
// 6482	蟎: mǎn 㒼 mán	虫 insect, worm; mollusk
semphon("蟎", "虫", "㒼", 6, `mite, insect`);
// 6486	剮: guǎ 咼 guō	刂 knife
phonsem("剮", "咼", "刂", 9, `to cut; to sever flesh from bone`);
// 6488	娓: wěi 尾 wěi	女 woman, girl; female
semphon("娓", "女", "尾", 3, `agreeable, compliant; to comply, to go along with`);
// 6489	玖: jiǔ 久 jiǔ	王 king, ruler; royal; surname
semphon("玖", "王", "久", 4, `black jade; nine (bankers' anti-fraud numeral)`);
// 6493	弑: shì 式 shì	杀 to kill, to murder, to slaughter; to hurt
semphon("弑", "杀", "式", 6, `patricide, matricide`, simplified("弒"));
// 6499	垩: è 亚 yà	土 soil, earth; items made of earth
phonsem("垩", "亚", "土", 6, `chalk; to daub with chalk; holy, sacred, sagacious`, simplified("堊"));
// 6500	堊: è 亞 yà	土 soil, earth; items made of earth
phonsem("堊", "亞", "土", 8, `chalk; to daub with chalk; holy, sacred, sagacious`);
// 6502	竣: jùn 夋 qūn	立 to stand; to establish, to set up
semphon("竣", "立", "夋", 5, `to terminate, to finish, to end; to quit`);
// 6505	犒: kào 高 gāo	牛 ox, cow, bull
semphon("犒", "牛", "高", 4, `victory feast; to throw a banquet`);
// 6515	髻: jì 吉 jí	髟 long hair
semphon("髻", "髟", "吉", 10, `bun, topknot`);
// 6516	蛟: jiāo 交 jiāo	虫 insect, worm; mollusk
semphon("蛟", "虫", "交", 6, `a legendary scaled dragon`);
// 6517	缜: zhěn 真 zhēn	纟 silk; thread
semphon("缜", "纟", "真", 3, `fine, detailed; closely woven`, simplified("縝"));
// 6519	袄: ǎo 夭 yāo	衤 cloth
semphon("袄", "衤", "夭", 5, `coat, jacket, outerware`, simplified("襖"));
// 6521	啾: jiū 秋 qiū	口 mouth; entrance, gate, opening
semphon("啾", "口", "秋", 3, `the wailing of a child`);
// 6526	荨: xún 寻 xún	艹 grass, weed, plant, herb
semphon("荨", "艹", "寻", 3, `nettle`, simplified("蕁"));
// 6529	垛: duǒ 朵 duǒ	土 soil, earth; items made of earth
semphon("垛", "土", "朵", 3, `heap, pile; to heap, to pile`, simplified("垜"));
// 6535	袅: niǎo 鸟 niǎo	衣 cloth; clothes, apparel; dress, coat
phonsem("袅", "鸟", "衣", 4, `curling upwards; elegant, graceful`, simplified("裊"));
// 6536	裊: niǎo 鳥 niǎo	衣 cloth; clothes, apparel; dress, coat
phonsem("裊", "鳥", "衣", 7, `curling upwards; elegant, graceful`);
// 6540	摈: bìn 宾 bīn	扌 hand
semphon("摈", "扌", "宾", 3, `to exclude, to expel, to reject; to usher`, simplified("擯"));
// 6541	擯: bìn 賓 bīn	扌 hand
semphon("擯", "扌", "賓", 3, `to exclude, to expel, to reject; to usher`);
// 6542	诌: zhōu 刍 chú	讠 words, speech; to speak, to say
semphon("诌", "讠", "刍", 2, `to quip, to play with words, to talk nonsense`, simplified("謅"));
// 6543	謅: zhōu 芻 chú	言 words, speech; to speak, to say
semphon("謅", "言", "芻", 7, `to quip, to play with words, to talk nonsense`);
// 6544	蓦: mò 莫 mò	马 horse; surname
phonsem("蓦", "莫", "马", 10, `suddenly, quickly, abruptly`, simplified("驀"));
// 6545	驀: mò 莫 mò	馬 horse; surname
phonsem("驀", "莫", "馬", 11, `suddenly, quickly, abruptly`);
// 6548	噻: sāi 塞 sāi	口 mouth; entrance, gate, opening
semphon("噻", "口", "塞", 3, `character used in translation`);
// 6549	嫦: cháng 常 cháng	女 woman, girl; female
semphon("嫦", "女", "常", 3, `a moon goddess, the lady in the moon`);
// 6560	浃: jiā 夹 jiā	氵 water
semphon("浃", "氵", "夹", 3, `to saturate, to drench; wet, damp`, simplified("浹"));
// 6561	浹: jiā 夾 jiā	氵 water
semphon("浹", "氵", "夾", 3, `to saturate, to drench; wet, damp`);
// 6563	峋: xún 旬 xún	山 mountain, hill, peak
semphon("峋", "山", "旬", 3, `foothill, mountain range`);
// 6566	砒: pī 比 bǐ	石 stone, rock, mineral
semphon("砒", "石", "比", 5, `arsenic`);
// 6567	谒: yè 曷 hé	讠 words, speech; to speak, to say
semphon("谒", "讠", "曷", 2, `to visit, to pay respects`, simplified("謁"));
// 6568	謁: yè 曷 hé	言 words, speech; to speak, to say
semphon("謁", "言", "曷", 7, `to visit, to pay respects`);
// 6571	麓: lù 鹿 lù	林 forest, grove; surname
semphon("麓", "林", "鹿", 8, `the base of a hill; foothill`);
// 6573	辕: yuán 袁 yuán	车 cart, vehicle; to move in a cart
semphon("辕", "车", "袁", 4, `axle; magistrate's office; surname`, simplified("轅"));
// 6574	轅: yuán 袁 yuán	車 cart, vehicle; to move in a cart
semphon("轅", "車", "袁", 7, `axle; magistrate's office; surname`);
// 6576	粕: pò 白 bái	米 rice, millet, grain
semphon("粕", "米", "白", 6, `sediment, lees, dregs`);
// 6580	挞: tà 达 dá	扌 hand
semphon("挞", "扌", "达", 3, `to whip, to flog, to chastise`, simplified("撻"));
// 6581	撻: tà 達 dá	扌 hand
semphon("撻", "扌", "達", 3, `to whip, to flog, to chastise`);
// 6585	纰: pī 比 bǐ	纟 silk; thread
semphon("纰", "纟", "比", 3, `carelessness; error, mistake; spoiled silk`, simplified("紕"));
// 6586	紕: pī 比 bǐ	糹 silk; thread
semphon("紕", "糹", "比", 6, `carelessness; error, mistake; spoiled silk`);
// 6587	鳌: áo 敖 áo	鱼 fish
phonsem("鳌", "敖", "鱼", 10, `huge sea turtle`, simplified("鰲"));
// 6588	鰲: áo 敖 áo	魚 fish
phonsem("鰲", "敖", "魚", 11, `huge sea turtle`);
// 6592	掴: guāi 国 guó	扌 hand
semphon("掴", "扌", "国", 3, `to slap, to box one's ears`, simplified("摑"));
// 6593	摑: guāi 國 guó	扌 hand
semphon("摑", "扌", "國", 3, `to slap, to box one's ears`);
// 6594	锃: zèng 呈 chéng	钅 gold, metal; money
semphon("锃", "钅", "呈", 5, `to polish, to shine`, simplified("鋥"));
// 6595	鋥: zèng 呈 chéng	釒 gold, metal; money
semphon("鋥", "釒", "呈", 8, `to polish, to shine`);
// 6605	殒: yǔn 员 yuán	歹 corpse; death; evil, depraved, wicked
semphon("殒", "歹", "员", 4, `to die, to fall, to perish, to vanish`, simplified("殞"));
// 6606	殞: yǔn 員 yuán	歹 corpse; death; evil, depraved, wicked
semphon("殞", "歹", "員", 4, `to die, to fall, to perish, to vanish`);
// 6609	拮: jié 吉 jí	扌 hand
semphon("拮", "扌", "吉", 3, `busy, occupied; to pursue`);
// 6610	糯: nuò 需 xū	米 rice, millet, grain
semphon("糯", "米", "需", 6, `glutinous rice; sticky, viscous`, simplified("稬"));
// 6613	麸: fū 夫 fū	麦 wheat, barley, oats
semphon("麸", "麦", "夫", 7, `bran`, simplified("麩"));
// 6614	麩: fū 夫 fū	麥 wheat, barley, oats
semphon("麩", "麥", "夫", 11, `bran`);
// 6618	罄: qìng 殸 qìng	缶 earthen crock or jar; pottery
phonsem("罄", "殸", "缶", 11, `empty; to exhaust, to run out, to use up`);
// 6621	龅: bāo 包 bāo	齿 teeth; gears, cogs; age
semphon("龅", "齿", "包", 8, `buck teeth`, simplified("齙"));
// 6622	齙: bāo 包 bāo	齒 teeth; gears, cogs; age
semphon("齙", "齒", "包", 15, `buck teeth`);
// 6623	骁: xiāo 尧 yáo	马 horse; surname
semphon("骁", "马", "尧", 3, `valiant, brave; skilled; a noble steed`, simplified("驍"));
// 6625	榕: róng 容 róng	木 tree; wood, lumber; wooden
semphon("榕", "木", "容", 4, `banyan tree`);
// 6626	擞: sǒu 数 shù	扌 hand
semphon("擞", "扌", "数", 3, `to tremble, to shake, to quake, to flutter`, simplified("擻"));
// 6627	擻: sǒu 數 shù	扌 hand
semphon("擻", "扌", "數", 3, `to tremble, to shake, to quake, to flutter`);
// 6629	鲱: fēi 非 fēi	鱼 fish
semphon("鲱", "鱼", "非", 8, `herring`, simplified("鯡"));
// 6630	鯡: fēi 非 fēi	魚 fish
semphon("鯡", "魚", "非", 11, `herring`);
// 6633	黠: xiá 吉 jí	黑 black; dark; evil, sinister
semphon("黠", "黑", "吉", 12, `sly, cunning, shrewd; artful`);
// 6634	膘: biāo 票 piào	⺼ meat, flesh; organic compound
semphon("膘", "⺼", "票", 4, `sfat; rump`, simplified("臕"));
// 6636	犄: jī 奇 qí	牛 ox, cow, bull
semphon("犄", "牛", "奇", 4, `animal horns`);
// 6639	揄: yú 俞 yú	扌 hand
semphon("揄", "扌", "俞", 3, `to lift, to raise; to praise; to hang, to flap`);
// 6640	耆: qí 日 rì	老 old, aged; experienced
semphon("耆", "老", "日", 6, `man of sixty; aged, old`);
// 6642	啐: cuì 卒 zú	口 mouth; entrance, gate, opening
semphon("啐", "口", "卒", 3, `to taste, to sip; to spit; the sound of sipping`);
// 6647	恫: dòng 同 tóng	忄 heart; mind; soul
semphon("恫", "忄", "同", 3, `fearful, pained, sorrowful`);
// 6653	硷: jiǎn 佥 qiān	石 stone, rock, mineral
semphon("硷", "石", "佥", 5, `alkaline, alkali, lye, salt`, simplified("礆"));
// 6655	湘: xiāng 相 xiāng	氵 water
semphon("湘", "氵", "相", 3, `Hunan province; the Xiangjiang river`);
// 6665	敕: chì 束 shù	攵 to rap, to tap; script; to let go
phonsem("敕", "束", "攵", 7, `an imperial order or decree`, simplified("勅"));
// 6669	钴: gǔ 古 gǔ	钅 gold, metal; money
semphon("钴", "钅", "古", 5, `cobalt; clothes-iron`, simplified("鈷"));
// 6670	鈷: gǔ 古 gǔ	釒 gold, metal; money
semphon("鈷", "釒", "古", 8, `cobalt; clothes-iron`);
// 6672	氩: yà 亚 yà	气 air, gas; steam, vapor; anger
semphon("氩", "气", "亚", 4, `argon`, simplified("氬"));
// 6679	珉: mín 民 mín	王 king, ruler; royal; surname
semphon("珉", "王", "民", 4, `alabaster; a jade-like stone`);
// 6681	怩: ní 尼 ní	忄 heart; mind; soul
semphon("怩", "忄", "尼", 3, `timid, shy; bashful, ashamed`);
// 6682	沆: hàng 亢 kàng	氵 water
semphon("沆", "氵", "亢", 3, `ferry; fog; to go with the flow`);
// 6685	熹: xī 喜 xǐ	灬 fire
phonsem("熹", "喜", "灬", 12, `dim light, a glimmer; warm; bright`);
// 6686	嗟: jiē 差 chà	口 mouth; entrance, gate, opening
semphon("嗟", "口", "差", 3, `sigh, alas`);
// 6688	笞: chī 台 tái	⺮ bamboo; flute
semphon("笞", "⺮", "台", 6, `bamboo rod used for beatings`);
// 6689	靥: yè 厌 yàn	面 face; surface, side; plane, dimension
phonsem("靥", "厌", "面", 6, `dimples`, simplified("靨"));
// 6691	徇: xùn 旬 xún	彳 to step with the left foot
semphon("徇", "彳", "旬", 3, `to follow, to comply with; to display`, simplified("狥"));
// 6695	砣: tuó 它 tā	石 stone, rock, mineral
semphon("砣", "石", "它", 5, `a stone roller; plumb, weight`);
// 6696	怆: chuàng 仓 cāng	忄 heart; mind; soul
semphon("怆", "忄", "仓", 3, `sad, disconsolate, broken-hearted`, simplified("愴"));
// 6697	愴: chuàng 倉 cāng	忄 heart; mind; soul
semphon("愴", "忄", "倉", 3, `sad, disconsolate, broken-hearted`);
// 6701	痂: jiā 加 jiā	疒 sickness, disease
semphon("痂", "疒", "加", 5, `scab`);
// 6702	桉: ān 安 ān	木 tree; wood, lumber; wooden
semphon("桉", "木", "安", 4, `eucalyptus`);
// 6704	诨: hùn 军 jūn	讠 words, speech; to speak, to say
semphon("诨", "讠", "军", 2, `joke, jest; nickname; obscene joke`, simplified("諢"));
// 6705	諢: hùn 軍 jūn	言 words, speech; to speak, to say
semphon("諢", "言", "軍", 7, `joke, jest; nickname; obscene joke`);
// 6707	篑: kuì 贵 guì	⺮ bamboo; flute
semphon("篑", "⺮", "贵", 6, `a bamboo basket for carrying soil`, simplified("簣"));
// 6708	簣: kuì 貴 guì	⺮ bamboo; flute
semphon("簣", "⺮", "貴", 6, `a bamboo basket for carrying soil`);
// 6713	黜: chù 出 chū	黑 black; dark; evil, sinister
semphon("黜", "黑", "出", 12, `to dismiss; to downgrade, to demote`);
// 6715	闰: rùn 门 mén	王 king, ruler; royal; surname
phonsem("闰", "门", "王", 3, `intercalary; extra, surplus`, simplified("閏"));
// 6716	閏: rùn 門 mén	王 king, ruler; royal; surname
phonsem("閏", "門", "王", 8, `intercalary; extra, surplus`);
// 6717	犸: mà 马 mǎ	犭 dog
semphon("犸", "犭", "马", 3, `mammoth`, simplified("獁"));
// 6720	胴: dòng 同 tóng	⺼ meat, flesh; organic compound
semphon("胴", "⺼", "同", 4, `the large intestine; the body`);
// 6721	熵: shāng 商 shāng	火 fire, flame; to burn; anger, rage
semphon("熵", "火", "商", 4, `entropy`);
// 6725	鹈: tí 弟 dì	鸟 bird
phonsem("鹈", "弟", "鸟", 7, `pelican`, simplified("鵜"));
// 6726	鵜: tí 弟 dì	鳥 bird
phonsem("鵜", "弟", "鳥", 7, `pelican`);
// 6731	牍: dú 卖 mài	片 slice, splinter; page, strip
semphon("牍", "片", "卖", 4, `writing tablet; documents, books`, simplified("牘"));
// 6732	牘: dú 賣 mài	片 slice, splinter; page, strip
semphon("牘", "片", "賣", 4, `writing tablet; documents, books`);
// 6733	阖: hé 盍 hé	门 gate, door, entrance, opening
semphon("阖", "门", "盍", 3, `to close; whole, entire, all`, simplified("闔"));
// 6734	闔: hé 盍 hé	門 gate, door, entrance, opening
semphon("闔", "門", "盍", 8, `to close; whole, entire, all`);
// 6735	锒: láng 良 liáng	钅 gold, metal; money
semphon("锒", "钅", "良", 5, `chain, lock; ornament`, simplified("鋃"));
// 6736	鋃: láng 良 liáng	釒 gold, metal; money
semphon("鋃", "釒", "良", 8, `chain, lock; ornament`);
// 6737	谏: jiàn 柬 jiǎn	讠 words, speech; to speak, to say
semphon("谏", "讠", "柬", 2, `to admonish, to remonstrate`, simplified("諫"));
// 6738	諫: jiàn 柬 jiǎn	言 words, speech; to speak, to say
semphon("諫", "言", "柬", 7, `to admonish, to remonstrate`);
// 6739	翎: líng 令 lìng	羽 feather, plume; wings
phonsem("翎", "令", "羽", 5, `plume, tail feathers`);
// 6740	绌: chù 出 chū	纟 silk; thread
semphon("绌", "纟", "出", 3, `to stitch, to sew; insufficient`, simplified("絀"));
// 6741	絀: chù 出 chū	糹 silk; thread
semphon("絀", "糹", "出", 6, `to stitch, to sew; insufficient`);
// 6744	邯: hán 甘 gān	阝 place, town, city
phonsem("邯", "甘", "阝", 5, `a district in Hebei province`);
// 6745	郸: dān 单 dān	阝 place, town, city
phonsem("郸", "单", "阝", 8, `a county in Hebei province`, simplified("鄲"));
// 6746	鄲: dān 單 dān	阝 place, town, city
phonsem("鄲", "單", "阝", 12, `a county in Hebei province`);
// 6747	砚: yàn 见 jiàn	石 stone, rock, mineral
semphon("砚", "石", "见", 5, `inkstone`, simplified("硯"));
// 6748	硯: yàn 見 jiàn	石 stone, rock, mineral
semphon("硯", "石", "見", 5, `inkstone`);
// 6753	砝: fá 去 qù	石 stone, rock, mineral
semphon("砝", "石", "去", 5, `a standard weight (as for a balance)`);
// 6754	徜: cháng 尚 shàng	彳 to step with the left foot
semphon("徜", "彳", "尚", 3, `to linger, to walk back and forth`);
// 6755	徉: yáng 羊 yáng	彳 to step with the left foot
semphon("徉", "彳", "羊", 3, `to wander, to stray, to roam; to hesitate`);
// 6756	螅: xī 息 xī	虫 insect, worm; mollusk
semphon("螅", "虫", "息", 6, `intestinal worm`);
// 6758	鷂: yào 䍃 yóu	鳥 bird
phonsem("鷂", "䍃", "鳥", 10, `sparrow hawk; Circus species (various)`);
// 6759	仃: dīng 丁 dīng	亻 man, person; people
semphon("仃", "亻", "丁", 2, `lonely, solitary`);
// 6760	铍: pī 皮 pí	钅 gold, metal; money
semphon("铍", "钅", "皮", 5, `beryllium`, simplified("鈹"));
// 6766	髯: rán 冉 rǎn	髟 long hair
semphon("髯", "髟", "冉", 10, `mustache, beard`, simplified("髥"));
// 6768	晟: chéng 成 chéng	日 sun; day; daytime
semphon("晟", "日", "成", 4, `bright, clear, splendid`);
// 6769	忤: wǔ 午 wǔ	忄 heart; mind; soul
semphon("忤", "忄", "午", 3, `disobedient; stubborn; wrong`);
// 6770	荪: sūn 孙 sūn	艹 grass, weed, plant, herb
semphon("荪", "艹", "孙", 3, `aromatic grass; flower, iris`, simplified("蓀"));
// 6772	龚: gōng 共 gòng	龙 dragon; symbol of the emperor
semphon("龚", "龙", "共", 5, `to give, to present; reverential`, simplified("龔"));
// 6773	龔: gōng 共 gòng	龍 dragon; symbol of the emperor
semphon("龔", "龍", "共", 16, `to give, to present; reverential`);
// 6776	锆: gào 告 gào	钅 gold, metal; money
semphon("锆", "钅", "告", 5, `zirconium`, simplified("鋯"));
// 6777	鋯: gào 告 gào	釒 gold, metal; money
semphon("鋯", "釒", "告", 8, `zirconium`);
// 6780	彤: tóng 彡 shān	丹 cinnabar, red, vermilion; pellet, powder
semphon("彤", "丹", "彡", 4, `red, vermillion`);
// 6791	鲇: nián 占 zhàn	鱼 fish
semphon("鲇", "鱼", "占", 8, `sheatfish; Parasilurus asotus`, simplified("鮎"));
// 6793	螯: áo 敖 áo	虫 insect, worm; mollusk
phonsem("螯", "敖", "虫", 10, `claws, pincers`);
// 6797	悻: xìng 幸 xìng	忄 heart; mind; soul
semphon("悻", "忄", "幸", 3, `anger, frustration`);
// 6800	矬: cuó 坐 zuò	矢 arrow, dart; to vow, to swear
semphon("矬", "矢", "坐", 5, `short; a dwarf`);
// 6801	猡: luó 罗 luō	犭 dog
semphon("猡", "犭", "罗", 3, `pig; the Lolo aboriginal tribe`, simplified("玀"));
// 6803	靳: jìn 斤 jīn	革 leather, animal hide; to reform; to remove
semphon("靳", "革", "斤", 9, `a strap on a horse's breast`);
// 6806	楸: qiū 秋 qiū	木 tree; wood, lumber; wooden
semphon("楸", "木", "秋", 4, `Mallotus japonicus`);
// 6807	疖: jiē 卩 jié	疒 sickness, disease
semphon("疖", "疒", "卩", 5, `boil, pimple, sore`, simplified("癤"));
// 6813	瘢: bān 般 bān	疒 sickness, disease
semphon("瘢", "疒", "般", 5, `scar, mole`);
// 6814	陇: lǒng 龙 lóng	阝 place, town, city
semphon("陇", "阝", "龙", 2, `a mountain located in the Shanxi provice`, simplified("隴"));
// 6815	隴: lǒng 龍 lóng	阝 place, town, city
semphon("隴", "阝", "龍", 2, `a mountain located in the Shanxi provice`);
// 6816	茗: míng 名 míng	艹 grass, weed, plant, herb
semphon("茗", "艹", "名", 3, `tea; tea leaves; tea plant`);
// 6821	桡: ráo 尧 yáo	木 tree; wood, lumber; wooden
semphon("桡", "木", "尧", 4, `radius, forearm; a bent or twisted piece of wood`, simplified("橈"));
// 6822	橈: ráo 堯 yáo	木 tree; wood, lumber; wooden
semphon("橈", "木", "堯", 4, `radius, forearm; a bent or twisted piece of wood`);
// 6823	粽: zòng 宗 zōng	米 rice, millet, grain
semphon("粽", "米", "宗", 6, `a dumpling made of glutinous rice`, simplified("糉"));
// 6825	莳: shí 时 shí	艹 grass, weed, plant, herb
semphon("莳", "艹", "时", 3, `to transplant, to grow; dill, Anethum graveolens`, simplified("蒔"));
// 6826	蒔: shí 時 shí	艹 grass, weed, plant, herb
semphon("蒔", "艹", "時", 4, `to transplant, to grow; dill, Anethum graveolens`);
// 6838	汕: shàn 山 shān	氵 water
semphon("汕", "氵", "山", 3, `bamboo; basket for catching fish; Shantou`);
// 6842	仟: qiān 千 qiān	亻 man, person; people
semphon("仟", "亻", "千", 2, `one thousand; leader of one thousand men`);
// 6843	颉: jié 吉 jí	页 page, sheet, leaf
phonsem("颉", "吉", "页", 6, `contest; to fly, to soar`, simplified("頡"));
// 6844	頡: jié 吉 jí	頁 page, sheet, leaf
phonsem("頡", "吉", "頁", 6, `contest; to fly, to soar`);
// 6846	嗔: chēn 真 zhēn	口 mouth; entrance, gate, opening
semphon("嗔", "口", "真", 3, `to be angry at, to rebuke, to scold`);
// 6847	鳝: shàn 善 shàn	鱼 fish
semphon("鳝", "鱼", "善", 8, `eel`, simplified("鱔"));
// 6848	鱔: shàn 善 shàn	魚 fish
semphon("鱔", "魚", "善", 11, `eel`);
// 6851	醍: tí 是 shì	酉 wine; wine vessel; chemical
semphon("醍", "酉", "是", 7, `essential oil of butter`);
// 6855	貉: háo 各 gè	豸 badger; legendary beast
semphon("貉", "豸", "各", 7, `raccoon dog`);
// 6856	埂: gěng 更 gèng	土 soil, earth; items made of earth
semphon("埂", "土", "更", 3, `ditch (for irrigation); hole`);
// 6858	淖: nào 卓 zhuō	氵 water
semphon("淖", "氵", "卓", 3, `mud, slush`);
// 6865	癔: yì 意 yì	疒 sickness, disease
semphon("癔", "疒", "意", 5, `hysteria`);
// 6866	桧: guì 会 huì	木 tree; wood, lumber; wooden
semphon("桧", "木", "会", 4, `Chinese cypress, Chinese juniper`, simplified("檜"));
// 6867	檜: guì 會 huì	木 tree; wood, lumber; wooden
semphon("檜", "木", "會", 4, `Chinese cypress, Chinese juniper`);
// 6875	荃: quán 全 quán	艹 grass, weed, plant, herb
semphon("荃", "艹", "全", 3, `aromatic herb; fine cloth`);
// 6876	浚: jùn 夋 qūn	氵 water
semphon("浚", "氵", "夋", 3, `to dredge`, simplified("濬"));
// 6878	鲫: jì 即 jí	鱼 fish
semphon("鲫", "鱼", "即", 8, `crucian carp; Carassius auratus`, simplified("鯽"));
// 6879	鯽: jì 即 jí	魚 fish
semphon("鯽", "魚", "即", 11, `crucian carp; Carassius auratus`);
// 6880	沂: yí 斤 jīn	氵 water
semphon("沂", "氵", "斤", 3, `a river in southeast Shandong`);
// 6885	焘: dào 寿 shòu	灬 fire
phonsem("焘", "寿", "灬", 7, `to shine, to illuminate; to cover, to envelop`, simplified("燾"));
// 6886	燾: dào 壽 shòu	灬 fire
phonsem("燾", "壽", "灬", 14, `to shine, to illuminate; to cover, to envelop`);
// 6888	秸: jiē 吉 jí	禾 cereal, grain, rice; plant, stalk
semphon("秸", "禾", "吉", 5, `stalks of millet or corn`, simplified("稭"));
// 6890	皖: wǎn 完 wán	白 white; clear, pure, unblemished; bright
semphon("皖", "白", "完", 5, `Anhui province`);
// 6891	铊: tā 它 tā	钅 gold, metal; money
semphon("铊", "钅", "它", 5, `thallium`, simplified("鉈"));
// 6896	闽: mǐn 门 mén	虫 insect, worm; mollusk
phonsem("闽", "门", "虫", 3, `Fujian province; a river; a tribe`, simplified("閩"));
// 6897	閩: mǐn 門 mén	虫 insect, worm; mollusk
phonsem("閩", "門", "虫", 8, `Fujian province; a river; a tribe`);
// 6905	嫔: pín 宾 bīn	女 woman, girl; female
semphon("嫔", "女", "宾", 3, `courtesan; palace maid`, simplified("嬪"));
// 6906	嬪: pín 賓 bīn	女 woman, girl; female
semphon("嬪", "女", "賓", 3, `courtesan; palace maid`);
// 6907	酰: xiān 先 xiān	酉 wine; wine vessel; chemical
semphon("酰", "酉", "先", 7, `acylate`);
// 6912	鞅: yāng 央 yāng	革 leather, animal hide; to reform; to remove
semphon("鞅", "革", "央", 9, `the strap over a horse's neck`);
// 6913	鲭: qīng 青 qīng	鱼 fish
semphon("鲭", "鱼", "青", 8, `mackerel`, simplified("鯖"));
// 6914	鯖: qīng 青 qīng	魚 fish
semphon("鯖", "魚", "青", 11, `mackerel`);
// 6915	窠: kē 果 guǒ	穴 cave, den, hole
semphon("窠", "穴", "果", 5, `den, nest; hole, indentation`);
// 6916	赈: zhèn 辰 chén	贝 sea shell; money, currency
semphon("赈", "贝", "辰", 4, `to relieve, to aid; rich`, simplified("賑"));
// 6917	賑: zhèn 辰 chén	貝 sea shell; money, currency
semphon("賑", "貝", "辰", 7, `to relieve, to aid; rich`);
// 6918	泮: pàn 半 bàn	氵 water
semphon("泮", "氵", "半", 3, `Zhou dynasty school; to disperse, to fall apart`);
// 6923	淙: cóng 宗 zōng	氵 water
semphon("淙", "氵", "宗", 3, `the sound of water gurgling`);
// 6926	滇: diān 真 zhēn	氵 water
semphon("滇", "氵", "真", 3, `Yunnan province`);
// 6930	鹄: gǔ 告 gào	鸟 bird
phonsem("鹄", "告", "鸟", 7, `swan`, simplified("鵠"));
// 6931	鵠: gǔ 告 gào	鳥 bird
phonsem("鵠", "告", "鳥", 7, `swan`);
// 6932	鲔: wěi 有 yǒu	鱼 fish
semphon("鲔", "鱼", "有", 8, `little tuna; Euthynnus alletteratus`, simplified("鮪"));
// 6933	鮪: wěi 有 yǒu	魚 fish
semphon("鮪", "魚", "有", 11, `little tuna; Euthynnus alletteratus`);
// 6939	荀: xún 旬 xún	艹 grass, weed, plant, herb
semphon("荀", "艹", "旬", 3, `plant, herb; surname`);
// 6941	孌: luán 䜌 luán	女 woman, girl; female
phonsem("孌", "䜌", "女", 19, `lovely, beautiful; docile, obedient`);
// 6943	汾: fén 分 fēn	氵 water
semphon("汾", "氵", "分", 3, `a river in Shanxi province`);
// 6946	傩: nuó 难 nán	亻 man, person; people
semphon("傩", "亻", "难", 2, `rich`, simplified("儺"));
// 6947	儺: nuó 難 nán	亻 man, person; people
semphon("儺", "亻", "難", 2, `rich`);
// 6949	浒: hǔ 许 xǔ	氵 water
semphon("浒", "氵", "许", 3, `shore, river bank`, simplified("滸"));
// 6950	滸: hǔ 許 xǔ	氵 water
semphon("滸", "氵", "許", 3, `shore, river bank`);
// 6952	琏: liǎn 连 lián	王 king, ruler; royal; surname
semphon("琏", "王", "连", 4, `a vessel used to hold grain offerings`, simplified("璉"));
// 6954	褚: chǔ 者 zhě	衤 cloth
semphon("褚", "衤", "者", 5, `bag, valise; to pad, to stuff; surname`);
// 6959	荜: bì 毕 bì	艹 grass, weed, plant, herb
semphon("荜", "艹", "毕", 3, `a kind of bean; Piper longtum`, simplified("蓽"));
// 6960	蓽: bì 畢 bì	艹 grass, weed, plant, herb
semphon("蓽", "艹", "畢", 4, `a kind of bean; Piper longtum`);
// 6963	唷: yō 育 yù	口 mouth; entrance, gate, opening
semphon("唷", "口", "育", 3, `final particle`);
// 6964	婵: chán 单 dān	女 woman, girl; female
semphon("婵", "女", "单", 3, `beautiful, graceful, lovely, pretty`, simplified("嬋"));
// 6965	嬋: chán 單 dān	女 woman, girl; female
semphon("嬋", "女", "單", 3, `beautiful, graceful, lovely, pretty`);
// 6968	潼: tóng 童 tóng	氵 water
semphon("潼", "氵", "童", 3, `high, lofty; a mountain pass`);
// 6969	椋: liáng 京 jīng	木 tree; wood, lumber; wooden
semphon("椋", "木", "京", 4, `fruit`);
// 6972	穑: sè 啬 sè	禾 cereal, grain, rice; plant, stalk
semphon("穑", "禾", "啬", 5, `to farm, to harvest grain`, simplified("穡"));
// 6973	穡: sè 嗇 sè	禾 cereal, grain, rice; plant, stalk
semphon("穡", "禾", "嗇", 5, `to farm, to harvest grain`);
// 6974	邙: máng 亡 wáng	阝 place, town, city
phonsem("邙", "亡", "阝", 3, `a mountain in Henan province`);
// 6978	嚅: rú 需 xū	口 mouth; entrance, gate, opening
semphon("嚅", "口", "需", 3, `to mumble, to stutter`);
// 6982	苓: líng 令 lìng	艹 grass, weed, plant, herb
semphon("苓", "艹", "令", 3, `fungus, tuber; licorice`);
// 6983	锺: zhōng 重 zhòng	钅 gold, metal; money
semphon("锺", "钅", "重", 5, `cup, glass, goblet; surname`, simplified("鍾"));
// 6985	畹: wǎn 宛 wǎn	田 field, farm, arable land; cultivated
semphon("畹", "田", "宛", 5, `a field of 20-30 mu`);
// 6987	鑾: luán 䜌 luán	金 gold, metal; money
phonsem("鑾", "䜌", "金", 19, `bells hung on a horse; imperial`);
// 6990	媧: wā 咼 guō	女 woman, girl; female
semphon("媧", "女", "咼", 3, `a goddess, the mythological sister and successor to Fuxi`);
// 6991	唑: zuò 坐 zuò	口 mouth; entrance, gate, opening
semphon("唑", "口", "坐", 3, `in chemistry, -azole`);
// 6995	逕: jìng 巠 jīng	辶 to walk; walking
semphon("逕", "辶", "巠", 7, `way, path; straight, direct; to approach`);
// 6996	莠: yǒu 秀 xiù	艹 grass, weed, plant, herb
semphon("莠", "艹", "秀", 3, `weeds, tares; evil, undesirable`);
// 6997	锕: ā 阿 ā	钅 gold, metal; money
semphon("锕", "钅", "阿", 5, `actinium`, simplified("錒"));
// 6998	錒: ā 阿 ā	釒 gold, metal; money
semphon("錒", "釒", "阿", 8, `actinium`);
// 6999	溏: táng 唐 táng	氵 water
semphon("溏", "氵", "唐", 3, `pool, pond; not hardened, semi-soft`);
// 7001	鹘: gǔ 骨 gǔ	鸟 bird
phonsem("鹘", "骨", "鸟", 9, `a kind of pigeon; treron permagna`, simplified("鶻"));
// 7004	钏: chuàn 川 chuān	钅 gold, metal; money
semphon("钏", "钅", "川", 5, `bracelet, armlet`, simplified("釧"));
// 7005	釧: chuàn 川 chuān	釒 gold, metal; money
semphon("釧", "釒", "川", 8, `bracelet, armlet`);
// 7006	馓: sǎn 散 sàn	饣 food; to eat
semphon("馓", "饣", "散", 3, `fried round cakes of wheat flour`, simplified("饊"));
// 7007	饊: sǎn 散 sàn	飠 food; to eat
semphon("饊", "飠", "散", 8, `fried round cakes of wheat flour`);
// 7008	呣: ḿ 母 mǔ	口 mouth; entrance, gate, opening
semphon("呣", "口", "母", 3, `interjection or exclamation indicating a question`);
// 7011	啁: zhāo 周 zhōu	口 mouth; entrance, gate, opening
semphon("啁", "口", "周", 3, `to chirp, to twitter`);
// 7016	豇: jiāng 工 gōng	豆 beans, peas; bean-shaped
semphon("豇", "豆", "工", 7, `kidney bean; black-eyed pea`);
// 7018	鸮: xiāo 号 hào	鸟 bird
phonsem("鸮", "号", "鸟", 5, `owl`, simplified("鴞"));
// 7019	鴞: xiāo 号 hào	鳥 bird
phonsem("鴞", "号", "鳥", 5, `owl`);
// 7023	鉄: zhí 失 shī	釒 gold, metal; money
semphon("鉄", "釒", "失", 8, `iron; strong, solid, firm`);
// 7027	唵: ǎn 奄 yǎn	口 mouth; entrance, gate, opening
semphon("唵", "口", "奄", 3, `to eat with one's hands; used in transliterations`);

// 784	据: jù 居 jū	扌 hand
semphon("据", "扌", "居", 3, `to possess, to occupy; position; base`, simplified("據"));
// 801	整: zhěng 正 zhèng	敕 an imperial order or decree
semphon("整", "敕", "正", 11, `neat, orderly, whole; to repair, to mend`);
// 907	脚: jiǎo 却 què	⺼ meat, flesh; organic compound
semphon("脚", "⺼", "却", 4, `leg, foot; foundation, base`, simplified("腳"));
// 908	腳: jiǎo 卻 què	⺼ meat, flesh; organic compound
semphon("腳", "⺼", "卻", 4, `leg, foot; foundation, base`);
// 1021	糕: gāo 羔 gāo	米 rice, millet, grain
semphon("糕", "米", "羔", 6, `cake, pastry`, simplified("餻"));
// 1025	装: zhuāng 壮 zhuàng	衣 cloth; clothes, apparel; dress, coat
phonsem("装", "壮", "衣", 6, `dress, clothes, attire; to wear, to install`, simplified("裝"));
// 1026	裝: zhuāng 壯 zhuàng	衣 cloth; clothes, apparel; dress, coat
phonsem("裝", "壯", "衣", 7, `dress, clothes, attire; to wear, to install`);
// 1167	恐: kǒng 巩 gǒng	心 heart; mind; soul
phonsem("恐", "巩", "心", 6, `fearful, apprehensive; to fear, to dread`);
// 1256	爺: yé 耶 yé	父 father, dad
semphon("爺", "父", "耶", 4, `grandfather, old man`);
// 1364	剧: jù 居 jū	刂 knife
phonsem("剧", "居", "刂", 8, `theatrical plays, opera, drama; severe, acute`, simplified("劇"));
// 1412	落: luò 洛 luò	艹 grass, weed, plant, herb
semphon("落", "艹", "洛", 3, `to fall, to drop; surplus, net income`);
// 1454	鼕: dōng 冬 dōng	鼓 drum; to beat, to strike; to rouse
semphon("鼕", "鼓", "冬", 13, `the sound of drums`);
// 1545	掛: guà 卦 guà	扌 hand
semphon("掛", "扌", "卦", 3, `to suspend, to put up, to hang; suspense`);
// 1616	嗯: en 恩 ēn	口 mouth; entrance, gate, opening
semphon("嗯", "口", "恩", 3, `interjection indicating agreement or appreciation`);
// 1665	暂: zàn 斩 zhǎn	日 sun; day; daytime
phonsem("暂", "斩", "日", 8, `temporary`, simplified("暫"));
// 1666	暫: zàn 斬 zhǎn	日 sun; day; daytime
phonsem("暫", "斬", "日", 11, `temporary`);
// 1750	鬍: hú 胡 hú	髟 long hair
semphon("鬍", "髟", "胡", 10, `recklessly, foolishly; wildly`);
// 1791	渐: jiàn 斩 zhǎn	氵 water
semphon("渐", "氵", "斩", 3, `gradually`, simplified("漸"));
// 1792	漸: jiàn 斬 zhǎn	氵 water
semphon("漸", "氵", "斬", 3, `gradually`);
// 1871	嗨: hāi 海 hǎi	口 mouth; entrance, gate, opening
semphon("嗨", "口", "海", 3, `an exclamation`);
// 1908	啦: la 拉 lā	口 mouth; entrance, gate, opening
semphon("啦", "口", "拉", 3, `final particle of an assertion`);
// 1937	湿: shī 显 xiǎn	氵 water
semphon("湿", "氵", "显", 3, `wet, moist, humid, damp; illness`, simplified("濕"));
// 1946	湖: hú 胡 hú	氵 water
semphon("湖", "氵", "胡", 3, `lake; Hubei, Hunan; bluish-green`);
// 2003	润: rùn 闰 rùn	氵 water
semphon("润", "氵", "闰", 3, `fresh, moist; soft, sleek`, simplified("潤"));
// 2004	潤: rùn 閏 rùn	氵 water
semphon("潤", "氵", "閏", 3, `fresh, moist; soft, sleek`);
// 2006	爛: làn 闌 lán	火 fire, flame; to burn; anger, rage
semphon("爛", "火", "闌", 4, `overcooked, overripe; rotten, spoiled`);
// 2075	羨: xiàn 㳄 xián	羊 sheep, goat
semphon("羨", "羊", "㳄", 6, `to covet, to envy; to admire, to praise`);
// 2090	逛: guàng 狂 kuáng	辶 to walk; walking
semphon("逛", "辶", "狂", 7, `to ramble, to stroll, to wander`);
// 2240	糊: hú 胡 hú	米 rice, millet, grain
semphon("糊", "米", "胡", 6, `muddled; paste; to stick on with paste`, simplified("餬"));
// 2241	餬: hú 胡 hú	飠 food; to eat
semphon("餬", "飠", "胡", 8, `porridge, gruel, congee; paste`);
// 2283	憑: píng 馮 féng	心 heart; mind; soul
phonsem("憑", "馮", "心", 12, `to lean on; to rely on`);
// 2421	婆: pó 波 bō	女 woman, girl; female
phonsem("婆", "波", "女", 8, `old woman; grandmother`);
// 2427	蘭: lán 闌 lán	艹 grass, weed, plant, herb
semphon("蘭", "艹", "闌", 4, `orchid; elegant, graceful`);
// 2528	繁: fán 敏 mǐn	糸 silk; thread
phonsem("繁", "敏", "糸", 11, `complex, difficult; many, diverse`, simplified("緐"));
// 2581	攔: lán 闌 lán	扌 hand
semphon("攔", "扌", "闌", 3, `to block, to hinder, to obstruct`);
// 2720	荒: huāng 川 chuān	芒 blade; ray; silvergrass, Miscanthus sinensis
semphon("荒", "芒", "川", 6, `wasteland, desert; uncultivated`);
// 2761	赖: lài 剌 lá	贝 sea shell; money, currency
phonsem("赖", "剌", "贝", 9, `to depend on, to rely on; to bilk, to deny; poor`, simplified("賴"));
// 2775	糧: liáng 量 liàng	米 rice, millet, grain
semphon("糧", "米", "量", 6, `food, grain, provisions`);
// 2820	烫: tàng 汤 tāng	火 fire, flame; to burn; anger, rage
phonsem("烫", "汤", "火", 6, `to scald; to iron clothes or hair`, simplified("燙"));
// 2821	燙: tàng 湯 tāng	火 fire, flame; to burn; anger, rage
phonsem("燙", "湯", "火", 12, `to scald; to iron clothes or hair`);
// 2842	癢: yǎng 養 yǎng	疒 sickness, disease
semphon("癢", "疒", "養", 5, `to itch; to tickle`);
// 2861	蝴: hú 胡 hú	虫 insect, worm; mollusk
semphon("蝴", "虫", "胡", 6, `butterfly`);
// 2902	噸: dūn 頓 dùn	口 mouth; entrance, gate, opening
semphon("噸", "口", "頓", 3, `a metric ton`);
// 2924	嫩: nèn 敕 chì	女 woman, girl; female
semphon("嫩", "女", "敕", 3, `soft, delicate; young, tender`, simplified("嫰"));
// 3052	莊: zhuāng 壯 zhuàng	艹 grass, weed, plant, herb
semphon("莊", "艹", "壯", 4, `village, hamlet; villa, manor`);
// 3091	惭: cán 斩 zhǎn	忄 heart; mind; soul
semphon("惭", "忄", "斩", 3, `ashamed, humiliated; shameful`, simplified("慚"));
// 3092	慚: cán 斬 zhǎn	忄 heart; mind; soul
semphon("慚", "忄", "斬", 3, `ashamed, humiliated; shameful`);
// 3104	撑: chēng 掌 zhǎng	扌 hand
semphon("撑", "扌", "掌", 3, `to support, to prop up, to brace; overflowing`, simplified("撐"));
// 3121	储: chǔ 诸 zhū	亻 man, person; people
semphon("储", "亻", "诸", 2, `to save money, to store, to reserve; heir`, simplified("儲"));
// 3122	儲: chǔ 諸 zhū	亻 man, person; people
semphon("儲", "亻", "諸", 2, `to save money, to store, to reserve; heir`);
// 3141	灣: wān 彎 wān	氵 water
semphon("灣", "氵", "彎", 3, `bay, cove, gulf, inlet`);
// 3173	癌: ái 嵒 yán	疒 sickness, disease
semphon("癌", "疒", "嵒", 5, `cancer, carcinoma`);
// 3340	欄: lán 闌 lán	木 tree; wood, lumber; wooden
semphon("欄", "木", "闌", 4, `fence, railing, balustrade`);
// 3421	霑: zhān 沾 zhān	雨 rain
semphon("霑", "雨", "沾", 8, `moist, soaked; to moisten`);
// 3422	掘: jué 屈 qū	扌 hand
semphon("掘", "扌", "屈", 3, `to dig, to excavate`);
// 3656	搁: gē 阁 gé	扌 hand
semphon("搁", "扌", "阁", 3, `to place, to lay down; to delay`, simplified("擱"));
// 3657	擱: gē 閣 gé	扌 hand
semphon("擱", "扌", "閣", 3, `to place, to lay down; to delay`);
// 3696	莎: shā 沙 shā	艹 grass, weed, plant, herb
semphon("莎", "艹", "沙", 3, `a kind of sedge grass that used to be woven into raincoats`);
// 3721	俯: fǔ 府 fǔ	亻 man, person; people
semphon("俯", "亻", "府", 2, `to bow down, to face down, to look down`, simplified("俛"));
// 3754	碳: tàn 炭 tàn	石 stone, rock, mineral
semphon("碳", "石", "炭", 5, `carbon`);
// 3760	蹦: bèng 崩 bēng	足 foot; to attain, to satisfy; enough
semphon("蹦", "足", "崩", 7, `to jump, to bounce on; bright`);
// 3820	喇: lǎ 剌 lá	口 mouth; entrance, gate, opening
semphon("喇", "口", "剌", 3, `horn, bugle; llama; final particle`);
// 3822	掀: xiān 欣 xīn	扌 hand
semphon("掀", "扌", "欣", 3, `to stir up; to turn over`);
// 3898	崭: zhǎn 斩 zhǎn	山 mountain, hill, peak
semphon("崭", "山", "斩", 3, `new, bold; steep, high`, simplified("嶄"));
// 3899	嶄: zhǎn 斬 zhǎn	山 mountain, hill, peak
semphon("嶄", "山", "斬", 3, `new, bold; steep, high`);
// 3955	葫: hú 胡 hú	艹 grass, weed, plant, herb
semphon("葫", "艹", "胡", 3, `bottle-gourd`);
// 4018	槓: gàng 貢 gòng	木 tree; wood, lumber; wooden
semphon("槓", "木", "貢", 4, `pole, bar; lever, crowbar`);
// 4069	榨: zhà 窄 zhǎi	木 tree; wood, lumber; wooden
semphon("榨", "木", "窄", 4, `to press for juice; a juicer; a vegetable`, simplified("搾"));
// 4162	蔼: ǎi 谒 yè	艹 grass, weed, plant, herb
semphon("蔼", "艹", "谒", 3, `lush; friendly, affable`, simplified("藹"));
// 4163	藹: ǎi 謁 yè	艹 grass, weed, plant, herb
semphon("藹", "艹", "謁", 4, `lush; friendly, affable`);
// 4208	诧: chà 宅 zhái	讠 words, speech; to speak, to say
semphon("诧", "讠", "宅", 2, `surprised, shocked`, simplified("詫"));
// 4209	詫: chà 宅 zhái	言 words, speech; to speak, to say
semphon("詫", "言", "宅", 7, `surprised, shocked`);
// 4219	瞇: mī 迷 mí	目 eye; to look, to see; division, topic
semphon("瞇", "目", "迷", 5, `to squint, to narrow the eyes`);
// 4397	欖: lǎn 覽 lǎn	木 tree; wood, lumber; wooden
semphon("欖", "木", "覽", 4, `olive`);
// 4510	窥: kuī 规 guī	穴 cave, den, hole
semphon("窥", "穴", "规", 5, `to peep, to spy on, to watch`, simplified("窺"));
// 4511	窺: kuī 規 guī	穴 cave, den, hole
semphon("窺", "穴", "規", 5, `to peep, to spy on, to watch`);
// 4529	癫: diān 颠 diān	疒 sickness, disease
semphon("癫", "疒", "颠", 5, `crazy, insane; madness, mania`, simplified("癲"));
// 4530	癲: diān 顛 diān	疒 sickness, disease
semphon("癲", "疒", "顛", 5, `crazy, insane; madness, mania`);
// 4562	锯: jù 居 jū	钅 gold, metal; money
semphon("锯", "钅", "居", 5, `a saw; to saw, to amputate`, simplified("鋸"));
// 4563	鋸: jù 居 jū	釒 gold, metal; money
semphon("鋸", "釒", "居", 8, `a saw; to saw, to amputate`);
// 4578	窍: qiào 巧 qiǎo	穴 cave, den, hole
semphon("窍", "穴", "巧", 5, `hole, opening, aperture`, simplified("竅"));
// 4584	繃: běng 崩 bēng	糹 silk; thread
semphon("繃", "糹", "崩", 6, `to bind, to strap, to draw firm`);
// 4586	鲨: shā 沙 shā	鱼 fish
phonsem("鲨", "沙", "鱼", 7, `shark`, simplified("鯊"));
// 4587	鯊: shā 沙 shā	魚 fish
phonsem("鯊", "沙", "魚", 7, `shark`);
// 4612	悯: mǐn 闵 mǐn	忄 heart; mind; soul
semphon("悯", "忄", "闵", 3, `to pity, to sympathize with; to grieve for`, simplified("憫"));
// 4613	憫: mǐn 閔 mǐn	忄 heart; mind; soul
semphon("憫", "忄", "閔", 3, `to pity, to sympathize with; to grieve for`);
// 4637	嗜: shì 耆 qí	口 mouth; entrance, gate, opening
semphon("嗜", "口", "耆", 3, `addicted to, fond of, with a weakness for`);
// 4669	纜: lǎn 覽 lǎn	糹 silk; thread
semphon("纜", "糹", "覽", 6, `cable, hawser, heavy-duty rope`);
// 4723	嗡: wēng 翁 wēng	口 mouth; entrance, gate, opening
semphon("嗡", "口", "翁", 3, `the droning sound made by an airplane or a bee flying`);
// 4727	窟: kū 屈 qū	穴 cave, den, hole
semphon("窟", "穴", "屈", 5, `hole, cave; cellar; underground`);
// 4778	啪: pā 拍 pāi	口 mouth; entrance, gate, opening
semphon("啪", "口", "拍", 3, `onomatopoetic, a bang sound`);
// 4784	蘑: mó 磨 mó	艹 grass, weed, plant, herb
semphon("蘑", "艹", "磨", 3, `mushroom`);
// 4815	攬: lǎn 覽 lǎn	扌 hand
semphon("攬", "扌", "覽", 3, `to grasp; to monopolize; to seize`);
// 4849	糙: cāo 造 zào	米 rice, millet, grain
semphon("糙", "米", "造", 6, `coarse, harsh, rough; coarse rice`);
// 4850	蒲: pú 浦 pǔ	艹 grass, weed, plant, herb
semphon("蒲", "艹", "浦", 3, `vine, rush`);
// 4859	鸿: hóng 江 jiāng	鸟 bird
phonsem("鸿", "江", "鸟", 6, `a species of wild swan; vast`, simplified("鴻"));
// 4860	鴻: hóng 江 jiāng	鳥 bird
phonsem("鴻", "江", "鳥", 6, `a species of wild swan; vast`);
// 4868	踴: yǒng 勇 yǒng	足 foot; to attain, to satisfy; enough
semphon("踴", "足", "勇", 7, `to leap`);
// 4959	椰: yē 耶 yé	木 tree; wood, lumber; wooden
semphon("椰", "木", "耶", 4, `palm tree, coconut tree`);
// 5017	嚎: háo 豪 háo	口 mouth; entrance, gate, opening
semphon("嚎", "口", "豪", 3, `to cry loudly, to scream, to yell`);
// 5020	燉: dùn 敦 dūn	火 fire, flame; to burn; anger, rage
semphon("燉", "火", "敦", 4, `to simmer; to stew`);
// 5113	幌: huǎng 晃 huǎng	巾 cloth, curtain, handkerchief, towel
semphon("幌", "巾", "晃", 3, `curtain, cloth screen, signboard`);
// 5114	澜: lán 阑 lán	氵 water
semphon("澜", "氵", "阑", 3, `overflowing; ripples, waves`, simplified("瀾"));
// 5115	瀾: lán 闌 lán	氵 water
semphon("瀾", "氵", "闌", 3, `overflowing; ripples, waves`);
// 5126	鳍: qí 耆 qí	鱼 fish
semphon("鳍", "鱼", "耆", 8, `fin`, simplified("鰭"));
// 5127	鰭: qí 耆 qí	魚 fish
semphon("鰭", "魚", "耆", 11, `fin`);
// 5137	壕: háo 豪 háo	土 soil, earth; items made of earth
semphon("壕", "土", "豪", 3, `ditch; trench; channel, moat`);
// 5138	潇: xiāo 萧 xiāo	氵 water
semphon("潇", "氵", "萧", 3, `the sound of beating wind and rain`, simplified("瀟"));
// 5139	瀟: xiāo 蕭 xiāo	氵 water
semphon("瀟", "氵", "蕭", 3, `the sound of beating wind and rain`);
// 5149	瑚: hú 胡 hú	王 king, ruler; royal; surname
semphon("瑚", "王", "胡", 4, `coral`);
// 5162	崛: jué 屈 qū	山 mountain, hill, peak
semphon("崛", "山", "屈", 3, `towering; eminent; a sudden rise`);
// 5218	墩: dūn 敦 dūn	土 soil, earth; items made of earth
semphon("墩", "土", "敦", 3, `stone block; heap, mound; pier`, simplified("墪"));
// 5299	蠍: xiē 歇 xiē	虫 insect, worm; mollusk
semphon("蠍", "虫", "歇", 6, `scorpion`);
// 5327	菠: bō 波 bō	艹 grass, weed, plant, herb
semphon("菠", "艹", "波", 3, `spinach`);
// 5442	痞: pǐ 否 fǒu	疒 sickness, disease
semphon("痞", "疒", "否", 5, `dyspepsia; spleen infection`);
// 5523	腑: fǔ 府 fǔ	⺼ meat, flesh; organic compound
semphon("腑", "⺼", "府", 4, `bowels, entrails, viscera`);
// 5539	窪: wā 洼 wā	穴 cave, den, hole
semphon("窪", "穴", "洼", 5, `pit, hollow, depression; swamp`);
// 5575	褂: guà 卦 guà	衤 cloth
semphon("褂", "衤", "卦", 5, `coat, jacket; gown, robe`);
// 5607	蟋: xī 悉 xī	虫 insect, worm; mollusk
semphon("蟋", "虫", "悉", 6, `cricket (1)`);
// 5637	摒: bǐng 屏 píng	扌 hand
semphon("摒", "扌", "屏", 3, `to expel, to cast off; to arrange`);
// 5667	孀: shuāng 霜 shuāng	女 woman, girl; female
semphon("孀", "女", "霜", 3, `widow`);
// 5701	堑: qiàn 斩 zhǎn	土 soil, earth; items made of earth
phonsem("堑", "斩", "土", 8, `moat, pit, trench; cavity`, simplified("塹"));
// 5702	塹: qiàn 斬 zhǎn	土 soil, earth; items made of earth
phonsem("塹", "斬", "土", 11, `moat, pit, trench; cavity`);
// 5709	嗬: hē 荷 hé	口 mouth; entrance, gate, opening
semphon("嗬", "口", "荷", 3, `hey, hello; interrogative particle`);
// 5713	嘣: bēng 崩 bēng	口 mouth; entrance, gate, opening
semphon("嘣", "口", "崩", 3, `onomatopoetic, the sound of an explosion; bang`);
// 5746	瀚: hàn 翰 hàn	氵 water
semphon("瀚", "氵", "翰", 3, `wide, vast, extensive`);
// 5897	攥: zuàn 纂 zuǎn	扌 hand
semphon("攥", "扌", "纂", 3, `to hold, to grip, to grasp`);
// 5913	箔: bó 泊 pō	⺮ bamboo; flute
semphon("箔", "⺮", "泊", 6, `screen, foil, plaited matting; silkworm basket`);
// 5981	滬: hù 扈 hù	氵 water
semphon("滬", "氵", "扈", 3, `Shanghai; the Shanghai river`);
// 6083	摁: èn 恩 ēn	扌 hand
semphon("摁", "扌", "恩", 3, `to press with a finger`);
// 6119	霾: mái 貍 lí	雨 rain
semphon("霾", "雨", "貍", 8, `fog, mist; smoke, smog; dust storm`);
// 6134	癣: xuǎn 鲜 xiān	疒 sickness, disease
semphon("癣", "疒", "鲜", 5, `ringworms`, simplified("癬"));
// 6135	癬: xuǎn 鮮 xiān	疒 sickness, disease
semphon("癬", "疒", "鮮", 5, `ringworms`);
// 6208	藓: xiǎn 鲜 xiān	艹 grass, weed, plant, herb
semphon("藓", "艹", "鲜", 3, `lichen, moss`, simplified("蘚"));
// 6209	蘚: xiǎn 鮮 xiān	艹 grass, weed, plant, herb
semphon("蘚", "艹", "鮮", 4, `lichen, moss`);
// 6332	咿: yī 伊 yī	口 mouth; entrance, gate, opening
semphon("咿", "口", "伊", 3, `a creaking sound; to laugh`, simplified("吚"));
// 6383	蒞: lì 涖 lì	艹 grass, weed, plant, herb
semphon("蒞", "艹", "涖", 4, `attend, be present; arrive at`);
// 6440	嘞: lei 勒 lēi	口 mouth; entrance, gate, opening
semphon("嘞", "口", "勒", 3, `final particle used to indicate polite refusal`);
// 6450	斓: lán 阑 lán	文 culture, literature, writing
semphon("斓", "文", "阑", 4, `multicolored`, simplified("斕"));
// 6451	斕: lán 闌 lán	文 culture, literature, writing
semphon("斕", "文", "闌", 4, `multicolored`);
// 6464	醛: quán 荃 quán	酉 wine; wine vessel; chemical
semphon("醛", "酉", "荃", 7, `aldehyde`);
// 6503	猕: mí 弥 mí	犭 dog
semphon("猕", "犭", "弥", 3, `macacus monkey`, simplified("獼"));
// 6562	嗲: diǎ 爹 diē	口 mouth; entrance, gate, opening
semphon("嗲", "口", "爹", 3, `childish, coquettish, coy; inviting; "daddy"`);
// 6599	焖: mèn 闷 mèn	火 fire, flame; to burn; anger, rage
semphon("焖", "火", "闷", 4, `to simmer, to cook over a slow fire`, simplified("燜"));
// 6600	燜: mèn 悶 mèn	火 fire, flame; to burn; anger, rage
semphon("燜", "火", "悶", 4, `to simmer, to cook over a slow fire`);
// 6638	揶: yé 耶 yé	扌 hand
semphon("揶", "扌", "耶", 3, `to ridicule, to poke fun at`);
// 6719	噶: gá 葛 gé	口 mouth; entrance, gate, opening
semphon("噶", "口", "葛", 3, `used in transliterations`);
// 6727	鹕: hú 胡 hú	鸟 bird
phonsem("鹕", "胡", "鸟", 9, `pelican`, simplified("鶘"));
// 6728	鶘: hú 胡 hú	鳥 bird
phonsem("鶘", "胡", "鳥", 9, `pelican`);
// 6796	醚: mí 迷 mí	酉 wine; wine vessel; chemical
semphon("醚", "酉", "迷", 7, `ether`);
// 6834	颔: hàn 含 hán	页 page, sheet, leaf
phonsem("颔", "含", "页", 7, `chin, jowl; to nod`, simplified("頷"));
// 6835	頷: hàn 含 hán	頁 page, sheet, leaf
phonsem("頷", "含", "頁", 7, `chin, jowl; to nod`);
// 6852	醐: hú 胡 hú	酉 wine; wine vessel; chemical
semphon("醐", "酉", "胡", 7, `the purest cream`);
// 6863	霭: ǎi 谒 yè	雨 rain
semphon("霭", "雨", "谒", 8, `fog, haze; calm, peaceful`, simplified("靄"));
// 6970	淞: sōng 松 sōng	氵 water
semphon("淞", "氵", "松", 3, `a river in Jiangsu province`);

// 2042	懒: lǎn 赖 lài	忄 heart; mind; soul
semphon("懒", "忄", "赖", 3, `lazy, languid, listless`, simplified("懶"));
// 2162	谎: huǎng 荒 huāng	讠 words, speech; to speak, to say
semphon("谎", "讠", "荒", 2, `to lie`, simplified("謊"));
// 2163	謊: huǎng 荒 huāng	言 words, speech; to speak, to say
semphon("謊", "言", "荒", 7, `to lie`);
// 2445	慌: huāng 荒 huāng	忄 heart; mind; soul
semphon("慌", "忄", "荒", 3, `frantic, nervous, panicked`);
// 5591	濑: lài 赖 lài	氵 water
semphon("濑", "氵", "赖", 3, `current, rapids`, simplified("瀨"));
// 5690	獭: tǎ 赖 lài	犭 dog
semphon("獭", "犭", "赖", 3, `otter`, simplified("獺"));
// 5930	籁: lài 赖 lài	⺮ bamboo; flute
semphon("籁", "⺮", "赖", 6, `bamboo flute; flute, pipe; a musical note`, simplified("籟"));
// 6015	癞: lài 赖 lài	疒 sickness, disease
semphon("癞", "疒", "赖", 5, `leprosy; scabies, mange; shoddy`, simplified("癩"));

// 1650	偶: ǒu 禺 yú	亻 man, person; people
semphon("偶", "亻", "禺", 2, `accidentally, coincidently; mate, image, idol`);
// 2314	寓: yù 禺 yú	宀 roof; house
semphon("寓", "宀", "禺", 3, `residence, lodge, dwelling`, simplified("庽"));
// 2684	膊: bó 尃 fū	⺼ meat, flesh; organic compound
semphon("膊", "⺼", "尃", 4, `shoulder, upper arm`);
// 2713	愚: yú 禺 yú	心 heart; mind; soul
phonsem("愚", "禺", "心", 9, `stupid, foolish`);
// 3011	搏: bó 尃 fū	扌 hand
semphon("搏", "扌", "尃", 3, `combat; to fight; to strike`);
// 3177	淘: táo 匋 táo	氵 water
semphon("淘", "氵", "匋", 3, `to dredge, to sieve; to cleanse, to weed out`);
// 3564	掏: tāo 匋 táo	扌 hand
semphon("掏", "扌", "匋", 3, `to take out; to pull out; to clean out`, simplified("搯"));
// 3785	缚: fù 尃 fū	纟 silk; thread
semphon("缚", "纟", "尃", 3, `to tie, to bind`, simplified("縛"));
// 3786	縛: fù 尃 fū	糹 silk; thread
semphon("縛", "糹", "尃", 6, `to tie, to bind`);
// 4730	匈: xiōng 凶 xiōng	勹 wrap
semphon("匈", "勹", "凶", 2, `breast, chest, thorax; to clamor; Hungary`);
// 4737	甸: diān 田 tián	勹 wrap
semphon("甸", "勹", "田", 2, `suburbs of the capital; to govern; crops`);
// 5416	簇: cù 族 zú	⺮ bamboo; flute
semphon("簇", "⺮", "族", 6, `bunch, cluster; crowd, swarm`);
// 5918	隅: yú 禺 yú	阝 place, town, city
semphon("隅", "阝", "禺", 2, `corner, cranny, niche`);
// 6031	咝: sī 丝 sī	口 mouth; entrance, gate, opening
semphon("咝", "口", "丝", 3, `onomatopoetic, a hissing sound`, simplified("噝"));
// 6133	匐: fú 畐 fú	勹 wrap
semphon("匐", "勹", "畐", 2, `to crawl; to lie prostrate`);
// 6411	啕: táo 匋 táo	口 mouth; entrance, gate, opening
semphon("啕", "口", "匋", 3, `to wail`, simplified("咷"));
// 6958	溥: pǔ 尃 fū	氵 water
semphon("溥", "氵", "尃", 3, `big, great, vast; extensive, pervading, widespread`);

// 2345	薄: báo 溥 pǔ	艹 grass, weed, plant, herb
semphon("薄", "艹", "溥", 3, `thin, slight; meager, weak; poor, stingy`);
// 4115	洶: xiōng 匈 xiōng	氵 water
semphon("洶", "氵", "匈", 3, `turbulent, torrential, restless`);
// 4597	簿: bù 溥 pǔ	⺮ bamboo; flute
semphon("簿", "⺮", "溥", 6, `register, notebook, account book`);

// 2268	障: zhàng 章 zhāng	阝 place, town, city
semphon("障", "阝", "章", 2, `to separate; shield, barricade`);
// 4104	彰: zhāng 章 zhāng	彡 hair; sunlight
phonsem("彰", "章", "彡", 11, `clear, manifest, obvious`);
// 4877	蟑: zhāng 章 zhāng	虫 insect, worm; mollusk
semphon("蟑", "虫", "章", 6, `cockroach`);
// 5489	悸: jì 季 jì	忄 heart; mind; soul
semphon("悸", "忄", "季", 3, `apprehensive, fearful; perturbed`);
// 6267	瘴: zhàng 章 zhāng	疒 sickness, disease
semphon("瘴", "疒", "章", 5, `malaria; miasma, pestilential vapor`);
// 6404	樟: zhāng 章 zhāng	木 tree; wood, lumber; wooden
semphon("樟", "木", "章", 4, `camphor tree`);
// 6894	璋: zhāng 章 zhāng	王 king, ruler; royal; surname
semphon("璋", "王", "章", 4, `jade plaything; jade ornament`);
// 6951	漳: zhāng 章 zhāng	氵 water
semphon("漳", "氵", "章", 3, `a river in Henan province`);

// 4384	潘: pān 番 fān	氵 water
semphon("潘", "氵", "番", 3, `a river that flows into the Han; surname`);
// 5638	蕃: fān 番 fān	艹 grass, weed, plant, herb
semphon("蕃", "艹", "番", 3, `abundant, flourishing; barbarians, foreigners`);
// 6098	幡: fān 番 fān	巾 cloth, curtain, handkerchief, towel
semphon("幡", "巾", "番", 3, `pennant, banner, streamer, flag`);
// 6230	蟠: pán 番 fān	虫 insect, worm; mollusk
semphon("蟠", "虫", "番", 6, `to occupy; to coil; curled up, coiled`);

// 5032	藩: fān 潘 pān	艹 grass, weed, plant, herb
semphon("藩", "艹", "潘", 3, `boundary, fence, outlying border`);

// 1838	瞧: qiáo 焦 jiāo	目 eye; to look, to see; division, topic
semphon("瞧", "目", "焦", 5, `to glance at, to look at, to see`);
// 3403	跪: guì 危 wēi	足 foot; to attain, to satisfy; enough
semphon("跪", "足", "危", 7, `to kneel`);
// 4220	诡: guǐ 危 wēi	讠 words, speech; to speak, to say
semphon("诡", "讠", "危", 2, `to cheat, to defraud; sly, treacherous`, simplified("詭"));
// 4221	詭: guǐ 危 wēi	言 words, speech; to speak, to say
semphon("詭", "言", "危", 7, `to cheat, to defraud; sly, treacherous`);
// 4582	魏: wèi 委 wěi	鬼 ghost; demon; sly, mischievous
phonsem("魏", "委", "鬼", 8, `the kingdom of Wei; surname`);
// 4770	萎: wēi 委 wěi	艹 grass, weed, plant, herb
semphon("萎", "艹", "委", 3, `to wither, to wilt`);
// 4773	狩: shòu 守 shǒu	犭 dog
semphon("狩", "犭", "守", 3, `winter hunting; a hunting dog; an imperial tour`);
// 4824	礁: jiāo 焦 jiāo	石 stone, rock, mineral
semphon("礁", "石", "焦", 5, `jetty, reef`);
// 4966	蛎: lì 厉 lì	虫 insect, worm; mollusk
semphon("蛎", "虫", "厉", 6, `oyster`, simplified("蠣"));
// 4967	蠣: lì 厲 lì	虫 insect, worm; mollusk
semphon("蠣", "虫", "厲", 6, `oyster`);
// 5496	桅: wéi 危 wēi	木 tree; wood, lumber; wooden
semphon("桅", "木", "危", 4, `a ship's mast`);
// 5513	憔: qiáo 焦 jiāo	忄 heart; mind; soul
semphon("憔", "忄", "焦", 3, `worn-out, haggard, emaciated`, simplified("癄"));
// 6030	蚓: yǐn 引 yǐn	虫 insect, worm; mollusk
semphon("蚓", "虫", "引", 6, `earthworm (2)`);
// 6149	痿: wěi 委 wěi	疒 sickness, disease
semphon("痿", "疒", "委", 5, `paralysis; impotence`);
// 6359	倭: wō 委 wěi	亻 man, person; people
semphon("倭", "亻", "委", 2, `dwarf; dwarfish, short`);
// 6909	醮: jiào 焦 jiāo	酉 wine; wine vessel; chemical
semphon("醮", "酉", "焦", 7, `to anoint, to perform a rite; Daoist or Buddhist ceremony`);

// 5923	巍: wēi 魏 wèi	山 mountain, hill, peak
semphon("巍", "山", "魏", 3, `high, lofty; eminent, majestic`);

// 1719	邀: yāo 敫 jiǎo	辶 to walk; walking
semphon("邀", "辶", "敫", 13, `to invite, to welcome; to intercept, to meet`);
// 1734	積: jī 責 zé	禾 cereal, grain, rice; plant, stalk
semphon("積", "禾", "責", 5, `to store up, to amass, to accumulate`);
// 1829	蹟: jī 責 zé	足 foot; to attain, to satisfy; enough
semphon("蹟", "足", "責", 7, `trace, tracks; footprints`);
// 2524	厕: cè 则 zé	厂 cliff; factory, workshop; building
semphon("厕", "厂", "则", 2, `toilet, washroom; to mingle`, simplified("廁"));
// 2525	廁: cè 則 zé	广 broad, vast, wide; building, house
semphon("廁", "广", "則", 3, `toilet, washroom; to mingle`);
// 2598	遭: zāo 曹 cáo	辶 to walk; walking
semphon("遭", "辶", "曹", 11, `to meet, to encounter, to come across`);
// 2762	賴: lài 束 shù	負 load, burden; to carry, to bear
phonsem("賴", "束", "負", 7, `to depend on, to rely on; to bilk, to deny; poor`);
// 3005	侧: cè 则 zé	亻 man, person; people
semphon("侧", "亻", "则", 2, `side; to slant, to lean, to incline`, simplified("側"));
// 3006	側: cè 則 zé	亻 man, person; people
semphon("側", "亻", "則", 2, `side; to slant, to lean, to incline`);
// 3503	慷: kāng 康 kāng	忄 heart; mind; soul
semphon("慷", "忄", "康", 3, `ardent, fervent; generous, magnanimous`);
// 3636	缴: jiǎo 敫 jiǎo	纟 silk; thread
semphon("缴", "纟", "敫", 3, `to deliver, to submit, to hand over`, simplified("繳"));
// 3637	繳: jiǎo 敫 jiǎo	糹 silk; thread
semphon("繳", "糹", "敫", 6, `to deliver, to submit, to hand over`);
// 4298	嘈: cáo 曹 cáo	口 mouth; entrance, gate, opening
semphon("嘈", "口", "曹", 3, `bustling, noisy`);
// 4579	竅: qiào 敫 jiǎo	穴 cave, den, hole
semphon("竅", "穴", "敫", 5, `hole, opening, aperture`);
// 4628	槽: cáo 曹 cáo	木 tree; wood, lumber; wooden
semphon("槽", "木", "曹", 4, `trough, manger; vat, tank; distillery`);
// 5045	渍: zì 责 zé	氵 water
semphon("渍", "氵", "责", 3, `to soak, to steep; dye, stains; sodden`, simplified("漬"));
// 5046	漬: zì 責 zé	氵 water
semphon("漬", "氵", "責", 3, `to soak, to steep; dye, stains; sodden`);
// 5319	啧: zé 责 zé	口 mouth; entrance, gate, opening
semphon("啧", "口", "责", 3, `interjection of approval or admiration`, simplified("嘖"));
// 5320	嘖: zé 責 zé	口 mouth; entrance, gate, opening
semphon("嘖", "口", "責", 3, `interjection of approval or admiration`);
// 6490	恻: cè 则 zé	忄 heart; mind; soul
semphon("恻", "忄", "则", 3, `anguished; sympathetic`, simplified("惻"));
// 6491	惻: cè 則 zé	忄 heart; mind; soul
semphon("惻", "忄", "則", 3, `anguished; sympathetic`);
// 6522	糠: kāng 康 kāng	米 rice, millet, grain
semphon("糠", "米", "康", 6, `chaff, bran, husk; poor`, simplified("穅"));

// 2043	懶: lǎn 賴 lài	忄 heart; mind; soul
semphon("懶", "忄", "賴", 3, `lazy, languid, listless`);
// 5592	瀨: lài 賴 lài	氵 water
semphon("瀨", "氵", "賴", 3, `current, rapids`);
// 5931	籟: lài 賴 lài	⺮ bamboo; flute
semphon("籟", "⺮", "賴", 6, `bamboo flute; flute, pipe; a musical note`);
// 6016	癩: lài 賴 lài	疒 sickness, disease
semphon("癩", "疒", "賴", 5, `leprosy; scabies, mange; shoddy`);



let pinyins = {
    "◎": "xx",
    "覀": "xx",
    "冎": "guǎ|gua",
    "𢆶": "yōu|you",
    "𣏟": "má|ma",
    "枼": "yè|ye",
    "𡈼": "tǐng|ting",
    "䧹": "yīng|ying",
    "屰": "nì|ni",
    "㡿": "chì|chi",
    "𢇇": "guān|guan",
    "𠂤": "duī|dui",
    "㚔": "niè|nie",
    "㫃": "yǎn|yan",
    "𠂇": "zuǒ|zuo",
    "辡": "biàn|bian",
    "䜌": "luán|luan",
    "䖒": "xī|xi",
    "㒼": "mán|man",
    "尞": "liáo|liao",
    "䇂": "qiān|qian",
    "夋": "qūn|qun",
    "畐": "fú|fu",
    "𣶒": "yuān|yuan",
    "叀": "zhuān|zhuan",
    "罙": "tàn|tan",
    "𢦔": "zāi|zai",
    "龰": "zhǐ|zhi",
    "灬": "huǒ|huo",
    "⺗": "xīn|xin",
    "⺼": "ròu|rou",
    "钅": "jīn|jin",
    "釒": "jīn|jin",
    "犭": "quǎn|quan",
    "纟": "mì|mi",
    "糹": "mì|mi",
    "衤": "yī|yi",
    "𤣩": "yù|yu",
    "礻": "shì|shi",
    "阝": "fù|fu",
    "⻏": "yì|yi",
    "攵": "pū|pu",
    "耂": "lǎo|lao",
    "𣦼": "cán|can",
    "敫": "jiǎo|jiao",
    "𥁕": "wēn|wen"
}

for (let char in pinyins) {
    let [formatted, searchable] = pinyins[char].split("|");
    etymologies[char].pinyin = formatted;
    etymologies[char].searchablePinyin = searchable || formatted;
}

if (typeof module !== "undefined") {
    module.exports = etymologies;
}