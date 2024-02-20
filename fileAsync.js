const fs=require("fs")
console.log(`start`)
fs.writeFile("./folder/sub/first.txt","hi",(err,data)=>{
    if(err)
    console.log(err)
console.log("Should be before hi there  ")
})
console.log("Hi there!")