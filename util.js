
let charDict = {}
for (let entry of dictionary) charDict[entry.character] = entry


let soundMeanings = dictionary.filter(x => x.etymology && x.etymology.type === "pictophonetic" && x.etymology.phonetic && x.etymology.semantic && x.etymology.phonetic in etymologies && x.etymology.semantic in etymologies && !(x.character in etymologies));
soundMeanings = soundMeanings.filter(entry => chars.indexOf(entry.character) >= 0)
soundMeanings.sort((a, b) => chars.indexOf(a.character) - chars.indexOf(b.character))
soundMeanings = soundMeanings.filter(x => x.decomposition.length === 3)




let lines = [];
outer: for (let entry of soundMeanings) {
    let { character, decomposition, definition, etymology, matches, pinyin } = entry;
    let [formation, left, right] = decomposition.split("");
    let { phonetic, semantic } = etymology;
    let splitPoint = 0, foundSplit = false;
    if (!matches[0]) continue;
    let first = matches[0][0];
    let second = first === 0 ? 1 : 0;
    for (let i = 0; i < matches.length; i++) {
        let match = matches[i];
        if (!match) {
            continue outer;
        }
        if (foundSplit && match[0] === first) {
            continue outer;
        }
        if (match[0] === second && !foundSplit) {
            foundSplit = true;
            splitPoint = i;
        }
    }
    let comment = `// ${chars.indexOf(character)}\t${character}: ${pinyin.join(" ")} ${phonetic} ${charDict[phonetic].pinyin.join(" ")}\t${semantic} ${charDict[semantic].definition}`;
    let tradNote = tradEquivalents[character] ? `, simplified("${tradEquivalents[character]}")` : "";
    let body = "";
    if (left === semantic) {
        if (right !== phonetic) {
            continue;
        }
        body = (`semphon("${character}", "${left}", "${right}", ${splitPoint}, \`${definition}\`${tradNote});`);
    }
    else if (right === semantic) {
        if (left !== phonetic) {
            continue;
        }
        body = (`phonsem("${character}", "${left}", "${right}", ${splitPoint}, \`${definition}\`${tradNote});`);
    }
    if (body) {
        lines.push(comment);
        lines.push(body);
    }

}
console.log(lines.join("\n"));


let phonComponents = {};
let semComponents = {};

let missingPhonSem = dictionary.filter(x => x.etymology && x.etymology.type === "pictophonetic" && x.etymology.phonetic && x.etymology.semantic && !(x.character in etymologies) && x.decomposition.length === 3).filter(entry => chars.indexOf(entry.character) >= 0);
for(let entry of missingPhonSem) {
    let { phonetic, semantic } = entry.etymology;
    if (!(phonetic in etymologies)) {
        phonComponents[phonetic] = (phonComponents[phonetic] || 0) + 1;
    }
    if (!(semantic in etymologies)) {
        semComponents[semantic] = (semComponents[semantic] || 0) + 1;
    }
}
