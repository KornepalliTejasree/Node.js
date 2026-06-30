const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=="/about"){
        res.end("about route")
    }
    res.end("Tejamma")
})

server.listen(3000)

