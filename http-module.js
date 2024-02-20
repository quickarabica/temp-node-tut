const a=require('http')
const server=a.createServer((req,res)=>
{
    if(req.url==="/")
    res.end("Welcome to our homepage")
    if(req.url==='/about')
    res.end(`<h1>Priyanshu Khatick</h1>
    <p>Phone number:8697044384 </p>`)
    res.end(`<h1>ERROR</h1> <a href="/">go back to the main page</P>`)

})
server.listen(1000)
