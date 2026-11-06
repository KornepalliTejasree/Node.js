const express=require('express')
const app=express()
app.get("/about",(req,res)=>{
    res.send("About Route")
})
app.get("/",(req,res)=>{
  res.send("Home")
})
app.post("/signup",(req,res)=>{
    console.log("Data inserted into tables")
    res.send("Data inserted successfully")
})
app.put("/profile",(req,res)=>{
    res.send("Profile updated")
})
app.delete("/post",(req,res)=>{
    res.send("post deleted")
})
app.listen(3000,()=>{
    console.log("server running successfully")
})