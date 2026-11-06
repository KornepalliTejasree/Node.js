const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=="/about"){
        return res.end("about")
    }
    return res.end("404 not found")
})
server.listen(2000)