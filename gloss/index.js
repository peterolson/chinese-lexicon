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
    if (gloss.startsWith("see ")) {
        let referencedWord = gloss.slice(4).split("[")[0].split("|")[0];
        let referencedEntries = getEntries(referencedWord);
        if (referencedEntries.length) {
            return getGloss(referencedWord);
        }
    }
    return gloss;
};