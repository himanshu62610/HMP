const express = require('express');
const router = express.Router()
const Details = require('../models/Details')  
const { body , validationResult } = require('express-validator');
const User = require('../models/User') 



//collect the data;
//validate the data;
//find the user in db corre to id
//check if user is  null or not  means if user exists corres to id
//make the isBlock field true
//return the res

router.post('/blockuser/:id',async (req,res)=>{
    try{
        //sending the globalized data in response so that it can be use further
        const id=req.params.id;
       const userData=await User.findOne({_id:id})

      //if a user is in messcommitte aur messmember then you things work
 
      userData.isBlock = !userData.isBlock;//userData.isBlock =false hai usme true store kar liya aur ise save kara diya 

       await userData.save();

       console.log(userData);
       //console.log(complaints);
       

       //return the user that is blocked
       res.status(200).send({
        success: true,
        message: "users data list",
        data: userData,
      });
    } 
    
    catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "erorr while fetching users",
        error,
      });
    }
  })


module.exports = router;