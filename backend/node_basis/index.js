//core modules 
//fs,crypto
const fs=require('fs');
const content=fs.readFileSync('./data.js');
console.log(content.toString());