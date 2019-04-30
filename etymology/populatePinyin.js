function populateComponentDetails(etymologies, getEntries, getGloss) {
    let definitionDict = {};
    for (let char in etymologies) {
        let { definition } = etymologies[char];
        definitionDict[char] = definition;
    }
    for (let char in etymologies) {
        let etymology = etymologies[char];
        etymology.pinyin = getPinyin(char, getEntries);
        for (let component of etymology.components) {
            let char = component.char;
            let definition = definitionDict[char] || getGloss(char);
            let pinyin = getPinyin(char, getEntries);
            component.definition = definition;
            component.pinyin = pinyin;
        }
    }
}

function getPinyin(char, getEntries) {
    let entries = getEntries(char);
    return Array.from(new Set(entries.map(x => x.pinyin.toLowerCase()))).join("; ");
}

module.exports = populateComponentDetails;