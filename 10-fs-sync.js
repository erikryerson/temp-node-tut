// this is sync

const { readFileSync, writeFileSync } = require('fs');
// the same as const fs = require('fs'); fs.readFileSync

console.log('start');
const first = readFileSync('./content/first.txt','utf8') // it uses utf8 by default so declaring here isn't needed
const second = readFileSync('./content/second.txt','utf8') 

writeFileSync(
    './content/results-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' } // this flag appends to the file instead of re-writing it
) 

console.log('done with this task');
console.log('starting the next one');

