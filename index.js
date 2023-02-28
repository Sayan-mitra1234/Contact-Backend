const express=require('express')
const mongoose=require('mongoose')
const app=express()
const data=require('./routes/blog')
mongoose.connect('mongodb://localhost:27017/Contact',{useNewUrlParser:true,useUnifiedTopology:true})

mongoose.connection.once('open',()=>{
    console.log('connect to db')
})

app.use('/',data)
app.listen(3005,()=>{console.log('server connect')})