let { getGloss, getEntries, allEntries, search } = require("./index");

function assert(condition) {
    if (!condition) throw new Error("Test failed.");
}

assert(getGloss("里") === "inside");
assert(!getGloss("奔腾").includes("Pentium"));
assert(getGloss("喝茶") === "to drink tea");
assert(getEntries("看")[0].pinyin === "kàn");
assert(getGloss("么") === "[particle]");
assert(getGloss("吗") === `(question particle for "yes-no" questions)`);
assert(getGloss("外面") === `outside`);
assert(getGloss("右") === `right (-hand)`);

console.log("All tests passed.");
