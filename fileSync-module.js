const file=require('fs')
// //console.log(file.readFileSync("./folder/sub/first.txt",'utf8'),file.readFileSync("./folder/sub/second.txt",'utf8'))

// file.writeFileSync("./folder/sub/third.txt","My name is Priyanshu",{flag:'a'})
// file.renameSync('file-module.js','1-file-module.js')
// file.renameSync('os-module.js','2-os-module.js')
// file.renameSync('path-module.js','3-path-module.js')
file.rmdirSync('./folder/sub/first.txt')




