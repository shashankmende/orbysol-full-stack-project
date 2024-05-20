const mongoose = require('mongoose')

const uri ='mongodb://localhost:27017'

const connectDb =()=>{
    try{
        mongoose.connect(uri)
    }
    catch(e){
        console.log("database connection failure:",e)
    }
}

module.exports =  connectDb