let etymologies = require("./etymology");
let entries = require("./dictionary");
let getStatistics = require("./statistics");
let lunr = require("lunr");

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
    entry.statistics = getStatistics(simp);
    console.log(simp, entry.statistics);
}

let index = lunr(function () {
    this.field("simp");
    this.field("trad");
    this.field("pinyin");
    this.field("definition");
    this.field("etymology");

    for (let i = 0; i < entries.length; i++) {
        let entry = entries[i];
        let etymology = (((entry.simpEtymology || {}).notes || "") + " " + ((entry.tradEtymology || {}).notes || "")).trim();
        this.add({
            id: i,
            simp: entry.simp,
            trad: entry.trad,
            pinyin: entry.searchablePinyin,
            definition: entry.definitions.join("; "),
            etymology
        });
    }
});

console.log(index.search("love").slice(0, 10).map(x => entries[x.ref]));
console.log(index.search("sad").slice(0, 10).map(x => entries[x.ref]));
console.log(index.search("buttocks").slice(0, 10).map(x => entries[x.ref]));