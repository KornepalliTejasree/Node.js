const express=require('express')
const app=express()
app.get('/profile/:username',(req,res)=>{
    console.log(req.params)
    res.send(`Welcome ${req.params.username}`)
})
app.get('/products/:product',(req,res)=>{
    console.log(req.params)
    res.send(`Searching ${req.params.product}`)
})
//Multiple route parameters
app.get('/student/:name/:course',(req,res)=>{
    console.log(req.params)
    res.send(`Searching ${req.params.name} enrolled in ${req.params.course}`)
})
app.listen(3000,()=>{
    console.log("server running successfully")
})