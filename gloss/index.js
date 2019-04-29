function scoreGloss(definition, word, index) {
    let lengthPenalty = definition.length / word.length;
    let indexPenalty = index;
    return -lengthPenalty - indexPenalty;
}

module.exports = (getEntries) => function getGloss(word, pinyin) {
    let matchingEntries = getEntries(word);
    if (pinyin) {
        matchingEntries = matchingEntries.filter(x => x.pinyin === pinyin);
    }
    if (!matchingEntries.length) return word;
    let definitions = [];
    let entry = matchingEntries[0];
    let index = 0;
    for (let definition of entry.definitions) {
        definitions.push({
            definition,
            score: scoreGloss(definition, word, index)
        });
        index++;
    }
    definitions.sort((a, b) => b.score - a.score);
    let gloss = definitions[0].definition;
    let referencePatterns = ["see ", "variant of "];
    for (let pattern of referencePatterns) {
        if (gloss.startsWith(pattern)) {
            let referencedWord = gloss.slice(pattern.length).split("[")[0].split("|")[0];
            let referencedEntries = getEntries(referencedWord);
            if (referencedEntries.length) {
                return getGloss(referencedWord);
            }
            break;
        }
    }
    return gloss;
};