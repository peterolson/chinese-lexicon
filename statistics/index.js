let movieCharFrequencies = require("./movieCharFrequency");
let movieCharCount = 46841097;
let movieContextCount = 6243;

let movieWordFrequencies = require("./movieWordFrequency");
let movieWordCount = 33546516;

let bookCharFrequencies = require("./bookCharFrequency");
let bookCharCount = 193504018;

let bookWordFrequencies = require("./bookWordFrequency");
let bookWordCount = 16560059569;

let getHSKLevel = require("./hsk");
let pinyinFrequency = require("./pinyinFrequency");

function getStatistics(entry) {
    let word = entry.simp;
    let statistics = {
        hskLevel: getHSKLevel(word)
    };
    addStatistic(statistics, movieWordFrequencies, "movieWord", word, movieWordCount, movieContextCount);
    addStatistic(statistics, bookWordFrequencies, "bookWord", word, bookWordCount);
    if (word.length === 1) {
        addStatistic(statistics, movieCharFrequencies, "movieChar", word, movieCharCount, movieContextCount);
        addStatistic(statistics, bookCharFrequencies, "bookChar", word, bookCharCount);
    }
    if (pinyinFrequency[entry.trad + entry.pinyin]) {
        statistics.pinyinFrequency = +pinyinFrequency[entry.trad + entry.pinyin];
    } else if (pinyinFrequency[entry.simp + entry.pinyin]) {
        statistics.pinyinFrequency = +pinyinFrequency[entry.simp + entry.pinyin];
    }
    return statistics;
}

function addStatistic(statistics, collection, title, word, charCount, contextCount) {
    let entry = collection[word];
    if (entry) {
        if (entry.count) {
            statistics[title + "Count"] = +entry.count;
            if (charCount) {
                statistics[title + "CountPercent"] = +entry.count / charCount;
            }
        }
        if (entry.rank) {
            statistics[title + "Rank"] = +entry.rank;
        }
        if (entry.contexts) {
            statistics[title + "Contexts"] = +entry.contexts;
            if (contextCount) {
                statistics[title + "ContextsPercent"] = +entry.contexts / contextCount;
            }
        }
    }
}

module.exports = getStatistics;