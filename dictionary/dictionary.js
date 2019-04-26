let fs = require("fs");
let formatPinyin = require("./formatPinyin");

let lines = String(fs.readFileSync("./dictionary/cedict_ts.u8")).split("\r\n");

function formatDefinition(text) {
    return text.replace(/\[[ A-Za-z:0-9]+\]/g, x => `[${formatPinyin(x.slice(1, -1))}]`);
}

let entries = [];

for (let line of lines) {
    if (line[0] === "#") {
        continue;
    }
    let [head, tail] = line.split("] ");
    let [chars, pinyin] = head.split(" [");
    let [simp, trad] = chars.split(" ");
    let definitions = tail.split("/").slice(1, -1).map(formatDefinition);
    let formattedPinyin = formatPinyin(pinyin);
    let searchablePinyin = pinyin.toLowerCase().replace(/[ 0-9]/g, "").replace(/u:/g, "v");
    entries.push({ simp, trad, definitions, pinyin: formattedPinyin, searchablePinyin });
}

module.exports = entries;