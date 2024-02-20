const a=require('path')
const b1=a.sep
const a1=a.join('./folder','sub','first.txt')
const a2=a.resolve(__dirname,"./folder/sub/first.txt")
const a3=a.basename("./folder/sub/first.txt")
const b={
    b1,
    a1,
    a2,
    a3
}
console.log(b)