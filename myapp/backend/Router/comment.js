const express = require('express');
const router = express.Router();
const Details = require('../models/Details');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');


router.post("/add-comments/:id", async (req, res) => {
  try {
    //id is complaind object id 
   // const id = req.params.id;
    //const complain = await Details.findOne({ _id: id });

    // if (!complain) {
    //   return res.status(404).json({ success: false, message: "Complain not found" });
    // }

    // Assuming comments is an array field in your Details model


    
    //can we update comments array in complain in different manner

    //const comments = complain.comments || [];//we should not use [] empty array 


    // const newComment = {
    //   text: req.body.text,
    //   email: req.body.email,
    //   name: req.body.name,
    //   date:Date.now()
    // };
    // comments.push(newComment);

    // // Assuming you have a comments field in your Details model
    // complain.comments = comments;

    // await complain.save();



    const id = req.params.id;

    const newComment = {
      text: req.body.text,
      email: req.body.email,
      name: req.body.name,
      date: Date.now()
    };
    
    // Find one document and push the new comment to the comments array
    const complain=await Details.findOneAndUpdate(
      { _id: id },
      { $push: { comments: newComment } },
      { new: true, runValidators: true } // Return updated document and validate
    );

    console.log(complain);
    if (!complain) {
      return res.status(404).json({ success: false, message: "Complain not found" });
    }



    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
