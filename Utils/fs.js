const fs = require('fs')
class File {
    async readFile(path) {
        const data = fs.readFileSync(path, 'utf8')
        const arr = JSON.parse(data)
        return arr
    }
    async writeFile(path, data){
        fs.writeFileSync(path, JSON.stringify(data))
    }
}
module.exports = new File()