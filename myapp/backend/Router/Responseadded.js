const express = require('express');
const router = express.Router()
const Details = require('../models/Details') 
const { body , validationResult } = require('express-validator');
const authenticateUser = require('../Malware');

// Save data to local storage

// Retrieve data from local storage


//post response on a particular complain



//get the data  --   id of complain     response on compain

//check complain is present in d or not corresp to id
//update the complain







router.post(`/response`, async (req , res) =>{
    try{
        //fetch complain add from body
        const complain = await Details.findOne({ _id: req.body.id });
        console.log(complain)

        if(!complain){
            return res.json({  Success: false });
        }


        complain.date = Date.now();//why we are doing this
        console.log(complain.date);



       complain.Response=req.body.response;//what if user want to update response--multiple response

       complain.isResponse=true;

      await  complain.save();

        res.json({Success:true});
    }catch (error){
        console.log(error);
        res.json({Success:false});
    }
})
module.exports = router;