let fs = require("fs");
let formatPinyin = require("./formatPinyin");

let lines = String(require("./cedict")).split("\n");

function formatDefinition(text) {
    return text.replace(/\[[ A-Za-z:0-9]+\]/g, x => `[${formatPinyin(x.slice(1, -1))}]`);
}

let entries = [];

for (let line of lines) {
    if (line[0] === "#") {
        continue;
    }
    let head = line.split("] ")[0];
    let tail = line.split("] ").slice(1).join("] ");
    let [chars, pinyin] = head.split(" [");
    let [trad, simp] = chars.split(" ");
    let definitions = tail.split("/").slice(1, -1).map(formatDefinition);
    let formattedPinyin = formatPinyin(pinyin);
    let searchablePinyin = pinyin.toLowerCase().replace(/[ 0-9]/g, "").replace(/u:/g, "v");
    entries.push({ simp, trad, definitions, pinyin: formattedPinyin, searchablePinyin });
}

module.exports = entries;