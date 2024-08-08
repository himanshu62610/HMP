const express = require('express');
const router = express.Router();
const Member = require('../models/Messmember'); 

// Create a new mess member
router.post('/add-mess-member', async (req, res) => {

  //name and post come from form  and hostel come from localstorage

    const { name, post, hostel} = req.body;

    try {

      //valid post value
     const allowedPosts = ['Worker Head', 'Worker', 'Grocery Manager', 'Chef'];

      if (!allowedPosts.includes(post)) {
        return res.status(400).json({ message: 'Invalid post. Must be one of Worker Head, Worker, Grocery Manager, or Chef.' });
      }

      
      // Create a new member
      const newMember = new Member({
        name:name,
        post:post,
        hostel:hostel
      });
  
      // Saving the new member to the database
      const savedMember = await newMember.save();
  
      res.status(201).json(savedMember); // Return the created member
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });




// Update a mess member by ID
router.put('/update-mess-member/:id', async (req, res) => {
  //we can also update hostel
  //why are we using name
  
  const memberId = req.params.id;
  const { name, post} = req.body;
  
  try {

    //valid post value
    const allowedPosts = ['Worker Head', 'Worker', 'Grocery Manager', 'Chef'];

    if (!allowedPosts.includes(post)) {
      console.log("hi");
      return res.status(400).json({ message: 'Invalid post. Must be one of Worker Head, Worker, Grocery Manager, or Chef.' });
    }

    // Find the member by ID
    const member = await Member.findByIdAndUpdate(
      memberId,
      {
        $set: {
          name,
          post
        }
      },
      { new: true }
    );


    //if entry is present corresponding to id  then update  the entry and memebr var will contain updated res;
    //if no entry is present corresponding to id  then memebr var will be null


    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }


    //return the updated member
    res.json(member); 
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




// Get all mess members

//why we are not accessing mess memebr of a particular hosel
router.get('/mess-members', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
       // console.log(members);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
});

module.exports = router;
