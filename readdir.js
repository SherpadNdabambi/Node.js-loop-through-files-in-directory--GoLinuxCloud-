// in readdir.js
const fs = require("fs")

fs.readdir('files', (err, files) => {
    if (err) throw err
    for (let i of files) console.log(i)
})

process.on("uncaughtException", e => e ? console.log(e.message) : console.log(""))
