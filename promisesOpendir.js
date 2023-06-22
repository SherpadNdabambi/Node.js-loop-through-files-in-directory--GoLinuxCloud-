const fs = require("fs")

const readFiles = async (directory) => {
    const files = await fs.promises.opendir(directory)
    for await (const file of files) console.log(file.name)
}

readFiles('files').catch(e => console.log(e))
