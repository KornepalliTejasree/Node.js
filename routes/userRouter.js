const express=require('express')

const router=express.Router()

router.get("/signup",(req,res)=>{
    res.send("signup")
})

router.get("/profile",(req,res)=>{
    res.send("profile")
})
 
module.exports=router