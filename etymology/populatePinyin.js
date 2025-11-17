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
            let componentChar = component.char;
            let definition = definitionDict[componentChar] || getGloss(componentChar);
            let pinyin = getPinyin(componentChar, getEntries);
            component.definition = definition;
            component.pinyin = pinyin;
        }
    }
}

function getPinyin(char, getEntries) {
    let entries = getEntries(char);
    return Array.from(new Set(entries.map(x => x.pinyin.toLowerCase()))).join("; ");
}

export default populateComponentDetails;