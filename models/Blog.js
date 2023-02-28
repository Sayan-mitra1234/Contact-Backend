const mongoose=require('mongoose')
const blogSchema=new mongoose.Schema({
    firstName: {type:String,required:true},
    lastName: {type:String,required:true},
    email: {type:String,required:true},
    phone: {type:Number,required:true}

})

const Blog=mongoose.model('blogs',blogSchema)

module.exports=Blog