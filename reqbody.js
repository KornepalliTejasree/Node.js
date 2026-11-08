const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.send("Data fetched successfully")
})


app.listen(3000,()=>{
    console.log("server running successfully")
})