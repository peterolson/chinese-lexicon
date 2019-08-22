function scoreGloss(definition, word, index) {
    let lengthPenalty = definition.length / word.length;
    let indexPenalty = index;
    let otherPenalty = 0;
    if (definition.includes("CL:")) {
        otherPenalty += 20;
    }
    return -lengthPenalty - indexPenalty - otherPenalty;
}

let manualGlosses = {
    "着": "[action in progress]",
    "著": "[action in progress]",
    "你": "you",
    "月": "month",
    "里": "inside",
    "么": "[particle]"
};

module.exports = (getEntries) => function getGloss(word, pinyin) {
    if (word in manualGlosses) return manualGlosses[word];
    let matchingEntries = getEntries(word);
    if (pinyin) {
        matchingEntries = matchingEntries.filter(x => x.pinyin === pinyin);
    }
    if (!matchingEntries.length) return word;
    let definitions = [];
    let entry = matchingEntries.filter(x => x.definitions.length).sort((a, b) => b.boost - a.boost)[0];
    if (!entry) return word;

    let index = 0;
    for (let definition of entry.definitions) {
        definitions.push({
            definition,
            score: scoreGloss(definition, word, index, entry.boost)
        });
        index++;
    }
    definitions.sort((a, b) => b.score - a.score);
    let gloss = definitions[0].definition;
    let referencePatterns = ["see ", "variant of ", "old variant of ", "erhua variant of "];
    for (let pattern of referencePatterns) {
        if (gloss.startsWith(pattern)) {
            let referencedWord = gloss.slice(pattern.length).split("[")[0].split("|")[0];
            if (word === referencedWord) continue;
            let referencedEntries = getEntries(referencedWord);
            if (referencedEntries.length) {
                return getGloss(referencedWord);
            }
            break;
        }
    }
    return gloss;
};