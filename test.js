let { getGloss } = require("./index");

function assert(condition) {
    if (!condition) throw new Error("Test failed.");
}

assert(getGloss("里") === "inside");
assert(!getGloss("奔腾").includes("Pentium"));

console.log("All tests passed.");