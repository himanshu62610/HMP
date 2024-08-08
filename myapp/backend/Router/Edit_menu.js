// Import required modules
const express = require('express');
const router = express.Router()
const Menu = require('../models/Menu');
const User = require('../models/User');


// Express route to get menu details for the week
router.post('/get-menu-for-week', async (req, res) => {
  try {

    // Retrieve menu details for the week
    const hostel=req.body.hostel
    console.log(hostel);

    const menusForWeek = await Menu.find({hostel:hostel});
    
    res.status(200).json(menusForWeek);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// POST route to update the menu for a specific day
router.post('/update-menu/:day', async (req, res) => {
  try {
    console.log("updating menu");
    const dayToUpdate = req.params.day;
    const updatedMenu = req.body.meals;
    
    // Validate that the provided day is a valid day of the week

    //day of the week belong to array or not
    if (!(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].includes(dayToUpdate))) {
      console.log("egekg");
      return res.status(400).json({ error: 'Invalid day' });
    }

    // Try to find the menu for the specified day

    //console.log(updatedMenu)
    let result = await Menu.findOne({ day: dayToUpdate,hostel:req.body.hostel});
   // console.log(result);

    // If the menu for the day does not exist, create a new entry
    //

    //why no string to array conversion
    if (!result) {
      const newMenu = new Menu({
        day: dayToUpdate,
        meals: updatedMenu,
        hostel:req.body.hostel,
        // hostel: req.body.hostel
      });
      
      console.log(newMenu);
      let result = await newMenu.save();
      return res.status(201).json({ message: 'New menu entry created', updatedMenu: result });
    }


    //use of these lines of code

    //why string to array conversion
    //convert the string to array   this code should come before result code
    //dinner-"rice,sabji,roti"  -- dinner-["rice","sabji","roti"];with string conversion
    //dinner-"rice,sabji,roti"  -- dinner-["rice,sabji,roti"]; without string conversion


    if (typeof updatedMenu.breakfast == "string")
      updatedMenu.breakfast = updatedMenu.breakfast.split(',');
    if (typeof updatedMenu.lunch == "string")
      updatedMenu.lunch = updatedMenu.lunch.split(',');
    if (typeof updatedMenu.dinner == "string")
      updatedMenu.dinner = updatedMenu.dinner.split(',');
    if (typeof updatedMenu.evening == "string")
      updatedMenu.evening = updatedMenu.evening.split(',');
    //

    
     console.log(dayToUpdate, updatedMenu);

    // Update the menu in the database
    result = await Menu.findOneAndUpdate({ day: dayToUpdate }, { meals: updatedMenu }, { new: true });
    res.status(200).json({ message: 'Menu updated successfully', updatedMenu: result });


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// module to export the file
module.exports = router;