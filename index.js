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
    if (tradDict[char]) {
        char = tradDict[char][0].simp;
    }
    return (+(movieCharFrequencies[char] || {}).count || 0) + (+(bookCharFrequencies[char] || {}).count || 0);
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

for (let char in simpDict) {
    simpDict[char].sort((a, b) => b.boost - a.boost);
}

for (let char in tradDict) {
    tradDict[char].sort((a, b) => b.boost - a.boost);
}

function search(term, limit) {
    term = term.toLowerCase();
    limit = limit || 100;
    return entries
        .filter(({ definitions, simp, trad, searchablePinyin, pinyin, pinyinTones }) =>
            isWholeWordMatch(definitions.join(" "), term) ||
            isSubstringMatch(simp, term) || isSubstringMatch(trad, term) || isSubstringMatch(searchablePinyin, term) || isSubstringMatch(pinyinTones, term) || isSubstringMatch(pinyin.toLowerCase(), term))
        .map(entry => {
            let { definitions, simp, trad, searchablePinyin, pinyin, pinyinTones } = entry;
            let relevance = 1;
            let definitionsCount = definitions.length;
            for (let i = 0; i < definitionsCount; i++) {
                let definition = definitions[i];
                if (isWholeWordMatch(definition, term)) {
                    relevance += 10 / (i + 1);
                }
                if (isSubstringMatch(definition, term)) {
                    relevance += 1 / (i + 1);
                }
            }
            if (isWholeWordMatch(simp, term) || isWholeWordMatch(trad, term) || isWholeWordMatch(searchablePinyin, term) || isWholeWordMatch(pinyinTones, term) || isWholeWordMatch(pinyin.toLowerCase(), term)) {
                relevance += 10;
            }
            entry.relevance = relevance;
            return entry;
        })
        .sort((a, b) => (b.boost * b.relevance) - (a.boost * a.relevance))
        .slice(0, limit);
}

function getEntries(word) {
    let matchingEntries = simpDict[word] || tradDict[word];
    return matchingEntries || [];
}

function getEtymology(char) {
    return etymologies[char];
}

function isWholeWordMatch(searchOnString, searchText) {
    if (!searchOnString) return false;
    searchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    return searchOnString.match(new RegExp("\\b" + searchText + "\\b", "i")) != null;
}

function isSubstringMatch(text, term) {
    if (!text) return false;
    return text.includes(term);
}

let getGloss = require("./gloss")(getEntries);
require("./etymology/populatePinyin")(etymologies, getEntries, getGloss);

for (let entry of entries) {
    let { simp } = entry;
    if (simp.length > 1) continue;
    entry.statistics.topWords = entry.statistics.topWords.filter(x => x.word in simpDict).map(x => ({ ...x, trad: simpDict[x.word][0].trad, gloss: getGloss(x.word) }));
}

console.log("Ready!");

module.exports = {
    allEntries: entries,
    simpDict,
    tradDict,
    getEntries,
    getGloss,
    getEtymology,
    search
};