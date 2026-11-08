const express=require('express')

const app=express()

const userRoutes=require('./routes/userRouter')
const backRoutes=require('./routes/backRoutes')

app.use(userRoutes)
app.use(backRoutes)

app.listen(3000,()=>{
    console.log("server running successfully")
})