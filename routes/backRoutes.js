const express=require('express')

const router=express.Router()

router.post("/products",(req,res)=>{
    res.send("Products fetched successfully")
})

router.get("/products/:id",(req,res)=>{
    res.send(`Searching product with ID ${req.params.id}`)
})
 
module.exports=router