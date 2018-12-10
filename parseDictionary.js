let fs = require("fs");
fs.readFile("dictionary.txt", (err, data) => {
    let entries = data.toString().split("\n").map(JSON.parse);
    fs.writeFile("dictionary.js", `let dictionary=${JSON.stringify(entries)};`);
})