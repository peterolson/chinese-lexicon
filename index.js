let etymologies = require("./etymology/etymologies");
let entries = require("./dictionary/dictionary");

let simpDict = {};
let tradDict = {};

for (let entry of entries) {
    let { simp, trad } = entry;
    simpDict[simp] = simpDict[simp] || [];
    simpDict[simp].push(entry);
    tradDict[trad] = tradDict[trad] || [];
    tradDict[trad].push(entry);
}

for (let char in etymologies) {
    if (!(char in simpDict) && !(char in tradDict)) {
        let etymology = etymologies[char];
        let entry = {
            simp: char,
            trad: char,
            definitions: etymology.definition.split("; "),
            pinyin: etymology.pinyin,
            searchablePinyin: etymology.searchablePinyin
        };
        entries.push(entry);
        simpDict[char] = [entry];
        tradDict[char] = [entry];
        console.log(entry);
    }
}