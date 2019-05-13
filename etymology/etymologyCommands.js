if (typeof require !== "undefined") {
    etymologyImages = require("./etymologyImages");
}

let O = "◎";

let etymologies = {};
function addEtymology(char, definition, notes, components, images) {
    components = components || [];
    for (let component of components) {
        if (isRadicalForm(component.char)) {
            component.notes = radicalNote(component.char) + (component.notes || "");
        }
    }
    images = images || "";
    let charForImage = char;
    if (images.split(":").length > 1) {
        charForImage = images.split(":")[0];
        images = images.split(":")[1];
    }
    etymologies[char] = {
        notes: notes || "",
        definition: definition || "",
        components: components || [],
        images: getImages(images, charForImage)
    }
}

function getFragments(leftStrokes, isReversed) {
    let fragments = {};
    if (typeof leftStrokes === "number") {
        fragments.left = [0, leftStrokes];
        fragments.right = [leftStrokes];
    } else {
        fragments = {
            left: leftStrokes[0],
            right: leftStrokes[1]
        }
    }
    if (isReversed) {
        let temp = fragments.left;
        fragments.left = fragments.right;
        fragments.right = temp;
    }
    return fragments;
}

function semsem(char, left, right, leftStrokes, definition, notes, images) {
    let fragments = getFragments(leftStrokes);
    addEtymology(char, definition, notes, [{
        type: "meaning",
        char: left,
        fragment: fragments.left
    }, {
        type: "meaning",
        char: right,
        fragment: fragments.right
    }], images);
}

function semphon(char, left, right, leftStrokes, definition, notes, isObsoleteSound, isSoundAndMeaning, isReversed, images) {
    let defaultNote = `Phonosemantic compound. ${left} represents the meaning and ${right} represents the sound. `;
    notes = defaultNote + (notes || "");
    let fragments = getFragments(leftStrokes, isReversed);
    addEtymology(char, definition, notes, [{
        type: "meaning",
        char: left,
        fragment: fragments.left
    }, {
        type: "sound",
        char: right,
        fragment: fragments.right,
        notes: (isObsoleteSound ? obsoleteSound(char, right) : "") + (isSoundAndMeaning ? alsoMeaning(right) : "")
    }], images)
}

function phonsem(char, left, right, leftStrokes, definition, notes, isObsoleteSound, isSoundAndMeaning, images) {
    return semphon(char, right, left, leftStrokes, definition, notes, isObsoleteSound, isSoundAndMeaning, true, images);
}

let types = {
    o: "oracle",
    b: "bronze",
    s: "seal",
    c: "cursive",
    t: "traditional"
};
let captions = {
    o: "Oracle bone script",
    b: "Bronze script",
    s: "Seal script",
    c: "Cursive script",
    t: "Traditional script"
}

function getImages(abbr, char) {
    return (abbr || "").split("").map(x => {
        let type = types[x],
            caption = captions[x];
        return {
            url: etymologyImages[type][char],
            caption
        };
    });
}

function icon(char, definition, notes, img, components) {
    addEtymology(char, definition, notes, components, img)
}

function meaningComponent(char, fragment, notes) {
    return {
        type: "meaning",
        char,
        fragment,
        notes
    }
}

function simplifiedComponent(char, fragment, notes) {
    return {
        type: "simplified",
        char,
        fragment,
        notes
    }
}

function soundComponent(char, fragment, notes) {
    return {
        type: "sound",
        char,
        fragment,
        notes
    }
}

function iconComponent(char, fragment, notes) {
    return {
        type: "iconic",
        char,
        fragment,
        notes
    }
}

function unknownComponent(char, fragment, notes) {
    return {
        type: "unknown",
        char,
        fragment,
        notes: (char !== O ? unknownComonentNote() : "") + (notes || "")
    }
}

let radicals = {
    bottom: {
        "龰": "止",
        "夂": "止",
        "灬": "火",
        "⺗": "心",
    },
    left: {
        "亻": "人",
        "彳": "行",
        "辶": "辵",
        "⺼": "肉",
        "讠": "言",
        "氵": "水",
        "冫": "冰",
        "扌": "手",
        "钅": "金",
        "釒": "金",
        "忄": "心",
        "犭": "犬",
        "纟": "糸",
        "糹": "糸",
        "冄": "冉",
        "衤": "衣",
        "飠": "食",
        "饣": "食",
        "𤣩": "玉",
        "丬": "爿",
        "镸": "長",
        "礻": "示",
        "阝": "阜",
        "彐": "帚"
    },
    right: {
        "刂": "刀",
        "⻏": "邑",
        "攵": "攴",
        "勾": "句"
    },
    top: {
        "艹": "艸",
        "⺮": "竹",
        "巛": "川",
        "冖": "宀",
        "耂": "老",
        "虍": "虎",
        "勹": "包"
    }
};

function isRadicalForm(char) {
    return !!getRadicalOriginal(char);
}

function getRadicalOriginal(char) {
    for (let direction in radicals) {
        let original = radicals[direction][char];
        if (original) {
            return { original, direction };
        }
    }
}

function radicalNote(radical) {
    let { original } = getRadicalOriginal(radical);
    return `${radical} is a component form of ${original}. `;
}

function shiftMeaning(newMeaning, oldMeaning) {
    if (oldMeaning) {
        return `Based on the original meaning "${oldMeaning}". ` + shiftMeaning(newMeaning);
    }
    return `The meaning of this character has shifted over time and now means "${newMeaning}". `
}
function obsoleteMeaning(oldMeaning) {
    return `The character is based on the original meaning "${oldMeaning}", which is unrelated to the modern meaning. `;
}
function obsoleteSound(char, soundComp) {
    return `The pronunciation of ${char} was similar to ${soundComp} in old Chinese, but they no longer sound similar in modern Mandarin due to historical phonetic changes. `;
}

function alsoMeaning(char) {
    return `${char} also serves as a meaning component. `;
}

function unknownComonentNote() {
    return `The purpose of this component is unclear. `;
}

function simplified(trad) {
    return `Simplified form of ${trad}. `;
}

function soundLoan(newMeaning, oldMeaning, newChar) {
    return `The current meaning "${newMeaning}" is a phonetic loan. The original meaning "${oldMeaning}" is now written as ${newChar}.`;
}

function simplifyMerge(simp, trad, meaning) {
    return `In simplified Chinese ${simp} is also used to mean "${meaning}", while in traditional Chinese this meaning is written with a separate character ${trad}.`;
}

function cursive(simp, trad) {
    return `The simplified character ${simp} was adapted from the cursive form of the traditional character ${trad}.`;
}

function shorthand(component, trad) {
    return `Shorthand for the ${component} component in the traditional character ${trad}.`;
}

function simp(simplifiedChar, traditionalChar, fragments, simpleReplacements, changedComponents, isCursive, mergeChar, mergeMeaning) {
    let simplifiedEtymology = { ...etymologies[traditionalChar] };
    simplifiedEtymology.notes = [
        (isCursive ? "" : simplified(traditionalChar)),
        simplifiedEtymology.notes,
        (isCursive ? cursive(simplifiedChar, traditionalChar) : ""),
        (mergeChar ? simplifyMerge(simplifiedChar, mergeChar, mergeMeaning) : "")].filter(x => x).join(" ");
    if (fragments) {
        simplifiedEtymology.components = simplifiedEtymology.components.slice();
        fragments.forEach((fragment, i) => {
            let component = simplifiedEtymology.components[i];
            component = { ...component };
            component.fragment = fragment;
            if (simpleReplacements && simpleReplacements[component.char]) {
                component.char = simpleReplacements[component.char];
                if (isRadicalForm(component.char)) {
                    if (component.notes && component.notes.includes("component form of")) {
                        component.notes = component.notes.split(".")[1].trim();
                    }
                    component.notes = (radicalNote(component.char) + " " + (component.notes || "")).trim();
                }
            }
            if (changedComponents && changedComponents[component.char]) {
                component.notes = (shorthand(component.char, traditionalChar) + " " + (component.notes || "")).trim();
                component.char = changedComponents[component.char];
                component.type = "simplified";
            }
            if (fragment[0] === fragment[1]) {
                component.notes = ((component.notes || "") + ` The traditional component ${component.char} was removed for simplification.`).trim();
                simplifiedEtymology.notes += ` The traditional component ${component.char} was removed for simplification.`;
                component.type = "deleted";
            }
            simplifiedEtymology.components[i] = component;
        });
    }
    if (isCursive) {
        simplifiedEtymology.images = (simplifiedEtymology.images || []).concat(getImages("tc", traditionalChar));
    }
    etymologies[simplifiedChar] = simplifiedEtymology;
}

if (typeof module !== "undefined") {
    module.exports = {
        etymologies,
        addEtymology,
        semsem,
        semphon,
        phonsem,
        icon,
        meaningComponent,
        soundComponent,
        simplifiedComponent,
        iconComponent,
        unknownComponent,
        shiftMeaning,
        obsoleteMeaning,
        obsoleteSound,
        alsoMeaning,
        soundLoan,
        simplifyMerge,
        cursive,
        shorthand,
        simp,
        simplified,
        unknownComonentNote,
        radicals,
        radicalNote,
        O
    }
}