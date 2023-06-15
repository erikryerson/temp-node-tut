const path = require('path') // does not need path since the module is built in

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute)