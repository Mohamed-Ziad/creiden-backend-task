const fs = require("fs");

const removeFile = (path) => {
    try {
        fs.unlinkSync(path)
        // file removed
    } catch (err) {
        console.error(err)
    }
}

module.exports = { removeFile }