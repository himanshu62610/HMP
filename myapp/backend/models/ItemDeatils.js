const mongoose = require('mongoose');
const { Schema } = mongoose;

// creating a schema 

//Items k route check karne hai
//data input me kaise aa rha hai
//hostel enum kyu nahi hai


const Items = new Schema({

    //here name represents the name of the  item
    
    name:{
        type:String,
        required:true
    },category:{
        type:String,
        required:true
    },hostel:{
        type:String,
        required:true
    },price:{
        type:Number,
        required:true
    },date:{
        type: Date,
        default: Date.now      
    }
});

module.exports = mongoose.model('item' , Items)