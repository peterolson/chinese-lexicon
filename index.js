console.log("Importing data...");

let { etymologies, componentDict } = require("./etymology");
let entries = require("./dictionary");
let { getStatistics, movieCharFrequencies, bookCharFrequencies } = require("./statistics");

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

function getBoost(x) {
    if (!x) return 0;
    return Math.log(x + 1);
}

function getFrequency(char) {
    return (+movieCharFrequencies[char] || 0) + (+bookCharFrequencies[char] || 0);
}

function getComponentUses(simp, trad, dict) {
    let componentUses = { ...(componentDict[simp] || {}), ...(componentDict[trad] || {}) }
    let uses = {};
    if (!componentUses) return uses;
    let count = 0;
    for (let type in componentUses) {
        let combined = new Set(Array.from((componentDict[simp] || {})[type] || new Set()).concat(Array.from((componentDict[trad] || {})[type] || new Set())));
        let chars = Array.from(combined).filter(x => x in dict);
        if (chars.length) {
            uses[type] = chars.sort((a, b) => getFrequency(b) - getFrequency(a));
            count += chars.length;
        }
    }
    uses.count = count;
    return uses;
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
    let { hskLevel, movieWordCount, movieCharCount, bookWordCount, bookCharCount, pinyinFrequency } = entry.statistics;
    entry.boost = (7 - hskLevel) + getBoost(movieWordCount) + getBoost(movieCharCount) + getBoost(bookWordCount) + getBoost(bookCharCount) + getBoost(pinyinFrequency) + entry.definitions.length;

    entry.usedAsComponentIn = { simp: getComponentUses(simp, trad, simpDict), trad: getComponentUses(simp, trad, tradDict) };
}

console.log("Building search index...");
let searchStrings = [];

for (let i = 0; i < entries.length; i++) {
    let entry = entries[i];
    let etymology = (((entry.simpEtymology || {}).notes || "") + " " + ((entry.tradEtymology || {}).notes || "")).trim();
    let definition = entry.definitions.join(" ");
    searchStrings.push({
        id: i,
        wholeWordText: `${definition} ${etymology}`,
        substringText: `${entry.simp} ${entry.trad} ${entry.searchablePinyin} ${entry.pinyin}`,
        boost: entry.boost
    });
}

console.log("Ready!");

function search(term, limit) {
    limit = limit || 100;
    return searchStrings
        .filter(({ wholeWordText, substringText }) => isWholeWordMatch(wholeWordText, term) || isSubstringMatch(substringText, term))
        .sort((a, b) => b.boost - a.boost)
        .slice(0, limit)
        .map(x => entries[x.id]);
}

function getEntries(word) {
    let matchingEntries = simpDict[word] || tradDict[word];
    return matchingEntries || [];
}

function getEtymology(char) {
    return etymologies[char];
}

function isWholeWordMatch(searchOnString, searchText) {
    searchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    return searchOnString.match(new RegExp("\\b" + searchText + "\\b", "i")) != null;
}

function isSubstringMatch(text, term) {
    return text.includes(term);
}

let getGloss = require("./gloss")(getEntries);
require("./etymology/populatePinyin")(etymologies, getEntries, getGloss);

module.exports = {
    allEntries: entries,
    simpDict,
    tradDict,
    getEntries,
    getGloss,
    getEtymology,
    search
};