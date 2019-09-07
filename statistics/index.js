let movieCharFrequencies = require("./movieCharFrequency");
let movieCharCount = 46841097;
let movieContextCount = 6243;

let { movieWordFrequencies, movieCharTopWords } = require("./movieWordFrequency");
let movieWordCount = 33546516;

let bookCharFrequencies = require("./bookCharFrequency");
let bookCharCount = 193504018;

let { bookWordFrequencies, bookCharTopWords } = require("./bookWordFrequency");
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
        addTopWords(statistics, word);
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

function addTopWords(statistics, char) {
    let movieWords = movieCharTopWords[char] || [];
    let bookWords = bookCharTopWords[char] || [];
    let wordsMovie = {};
    let totalCountMovie = 0;

    for (let { word, count } of movieWords) {
        totalCountMovie += count;
        wordsMovie[word] = count;
    }
    let wordsBook = {};
    let totalCountBook = 0;
    for (let { word, count } of bookWords) {
        totalCountBook += count;
        wordsBook[word] = count;
    }
    let combinedWords = {};
    for (let word of Object.keys({ ...wordsBook, ...wordsMovie })) {
        let wordCount = ((wordsMovie[word] || 0) / totalCountMovie) || 0;
        let bookCount = ((wordsBook[word] || 0) / totalCountBook) || 0;
        combinedWords[word] = (wordCount + bookCount) / 2;
    }
    statistics.topWords = Object.keys(combinedWords).map(word => ({ word, share: combinedWords[word] })).sort((a, b) => b.share - a.share).slice(0, 25);
}

module.exports = { getStatistics, movieCharFrequencies, bookCharFrequencies };