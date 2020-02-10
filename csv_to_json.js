const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, "/customer-data.csv"), {encoding: "utf-8"}, function (error, data) {
    if (error) return console.error(error);
    lines = data.split("\n");

    res = []

    if (lines.length > 0) {
        first_ln = lines[0].split(",");

        for (var i = 1; i < lines.length; ++i) {
            let fields = lines[i].split(",");
            let obja = {};
            for (var n  = 0; n < first_ln.length; ++n) {
                obja[first_ln[n]] = fields[n]
            }
            res.push(obja);
        }
    }

    fs.writeFile(path.join(__dirname, "/output.json"), JSON.stringify(res), function (error) {
        if (error) return console.error(error)
        console.log("Writing is done")
    })
})