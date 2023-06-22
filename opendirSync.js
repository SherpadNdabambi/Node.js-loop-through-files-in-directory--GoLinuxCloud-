// in opendirSync.js
const fs = require('fs')

const directory = fs.opendirSync("files")
let file
while ((file = directory.readSync()) !== null) {
    console.log(file.name)
}
directory.closeSync()
