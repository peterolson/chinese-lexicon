console.log("Importing data...");

let etymologies = require("./etymology");
let entries = require("./dictionary");
let getStatistics = require("./statistics");
let lunr = require("lunr");

let simpDict = {};
let tradDict = {};

console.log("Combining data...");

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
        if (!entry.pinyin) {
            console.log(entry);
        }
        entries.push(entry);
        simpDict[char] = [entry];
        tradDict[char] = [entry];
    }
}

for (let entry of entries) {
    let { simp, trad } = entry;
    if (simp in etymologies) {
        entry.simpEtymology = etymologies[simp];
    }
    if (trad !== simp && trad in etymologies) {
        entry.tradEtymology = etymologies[trad];
    }
    entry.statistics = getStatistics(entry);
}

function getBoost(x) {
    if (!x) return 0;
    return Math.log(x + 1);
}

console.log("Building search index...");

let index = lunr(function () {
    this.field("simp");
    this.field("trad");
    this.field("pinyin");
    this.field("definition");
    this.field("etymology");

    for (let i = 0; i < entries.length; i++) {
        let entry = entries[i];
        let etymology = (((entry.simpEtymology || {}).notes || "") + " " + ((entry.tradEtymology || {}).notes || "")).trim();
        let { hskLevel, movieWordCount, movieCharCount, bookWordCount, bookCharCount, pinyinFrequency } = entry.statistics;
        let boost = (7 - hskLevel) + getBoost(movieWordCount) + getBoost(movieCharCount) + getBoost(bookWordCount) + getBoost(bookCharCount) + getBoost(pinyinFrequency);
        this.add({
            id: i,
            simp: entry.simp,
            trad: entry.trad,
            pinyin: entry.searchablePinyin,
            definition: entry.definitions.join("; "),
            etymology
        }, {
                boost
            });
    }
});

console.log("Ready!");

function search(term, limit) {
    limit = limit || 100;
    return index.search(term).slice(0, limit).map(x => ({ ...x, ...entries[x.ref] }));

}