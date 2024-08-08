const mongoose = require('mongoose');
const { Schema } = mongoose;

// creating a schema 
//we can update this

const ComplainSchema = new Schema({
    name : {
        type: String,
        required:true
    },email:{
        type: String,
        required: true
    },title :{
        type: String,
        required: true
    },date:{
        type: Date,
        default: Date.now
    },hostel:{
        type:String,
        required: true
    },description:{
        type:String,
        required: true
    },isResponse:{
        type:Boolean,
        default:false
    }, Response:{
        type: String,
         required:true
    },imageurl: {
        type: String, // Use Buffer to store binary data
      
    },
    
    comments:{
        type:Array,
        items: {
            type:Object,
            properties:{
                name:{type: String},
                email:{type: String},
                text:{type: String},
                date:{type: Date,default: Date.now}
            },
        },
        default:[]
    },


    // comments: {
    //     type: [{
    //         name: { type: String },
    //         email: { type: String },
    //         text: { type: String },
    //         date: { type: Date, default: Date.now }
    //     }],
    //     default: [] // Default value is an empty array
    // },


    //votes  and comments  are the array in which each field is a object that contain the following properties
    //there are do ways to do so

    //votes wala method simple hai
    votes: [{
        email: { type: String },
        
        type: { type: String, enum: ['upvote', 'downvote'] },
    }],


    countupvote:{
        type:Number,
        default:0
    },
    countdownvote:{
        type:Number,
        default:0
    }

});

module.exports = mongoose.model('complain' , ComplainSchema)