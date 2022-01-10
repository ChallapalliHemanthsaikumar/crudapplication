const mongoose = require("mongoose");

const Project = mongoose.model(
  "student",
  new mongoose.Schema({
    Name:String,
    Age:Number
   
  
  })
);

module.exports = Project;