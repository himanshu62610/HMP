const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },

  //meals is a object where breakfast ,launch,evening,dinner  are the array in which each value is a object 
  //in which each value conatin  string

  //mealtype--breakfast ,lunch, evening,,dinner
  //meal type conatin list of string that why mealtype is a array
  //if memaltype conatin only one string we can mke it string  sinle string with spaces

  //why mealtype is an array
  meals: {
    breakfast: [{
      type: String,
      required: true
    }],
    lunch: [{
      type: String,
      required: true
    }],
    dinner: [{
      type: String,
      required: true
    }],
    evening: [{
      type: String,
      required: true
    }]
  },



  hostel:{
    type: String,
     required: true,
    enum: ['Tandon', 'Malviya', 'Tilak']
  },
   

  //ratings is a object where breakfast ,launch,evening,dinner  are the array in which each value is a object 
  //in which each value conatin email and rating

  ratings: {
    breakfast: [{
      email: {
        type: String,
         // Assuming you have a User model
        // required: true
      },
      value: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      }
    }],
    lunch: [{
      email: {
        type: String,
     
        required: true
      },
      value: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      }
    }],
    dinner: [{
      email: {
        type: String,
        // required: true
      },
      value: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      }
    }],
    evening: [{
      email: {
        type: String,
        // required: true
      },
      value: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      }
    }]
  }


});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;