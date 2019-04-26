function formatPinyin(text) {
    let tones = {
        a: " āáǎàa",
        e: " ēéěèe",
        i: " īíǐìi",
        o: " ōóǒòo",
        u: " ūúǔùu",
        ü: " ǖǘǚǜü"
    }
    function isVowel(c) {
        return "aeiouü".includes(c);
    }
    function isGlidedVowel(c) {
        return "iuü".includes(c);
    }

    function formatPinyinSyllable(syllable, isFirst) {
        syllable = syllable.replace(/u:/g, "ü");
        let tone = +syllable.slice(-1);
        if (!tone) return syllable + " ";
        let remainder = syllable.slice(0, -1);
        let toneIndex = 0;
        for (let i = 0; i < remainder.length; i++) {
            let char = remainder[i];
            if (isVowel(char)) {
                toneIndex = i;
                if (isGlidedVowel(char) && i + 1 < remainder.length && isVowel(remainder[i + 1])) {
                    toneIndex++;
                }
                break;
            }
        }
        let replacedChar = remainder[toneIndex];
        let toneString = tones[remainder[toneIndex]];
        if (toneString && tone) {
            replacedChar = toneString[tone];
        }
        let out = remainder.slice(0, toneIndex) + replacedChar + remainder.slice(toneIndex + 1);
        if (!isFirst && "āáǎàaēéěèeōóǒòo".includes(syllable[0])) return "'" + out;
        return out;
    }

    return text.split(" ").map((x, i) => formatPinyinSyllable(x, i === 0)).join("\u200B");
}

module.exports = formatPinyin;