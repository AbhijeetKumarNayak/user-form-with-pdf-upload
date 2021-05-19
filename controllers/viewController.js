const User = require('../models/userModel');
const mongoose = require('mongoose');


exports.getpage = (req, res) => {
  res.sendFile('/node programe/mcq/views/homee.html');
};

exports.createdetail = async (req, res, next) => {
  console.log('crea')
console.log(req.body);
    const newUser = await User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      age:req.body.age,
      question1: req.body.q1,
      question2: req.body.q2,
      question3: req.body.q3,
      resume:req.files.pdf.name
    });
  
    if(req.files){
      var file = req.files.pdf,
      pdf1 = file.name;
      file.mv("./public/pdf/"+pdf1,function(err){
        if(err){
          console.log(err);
          res.send("error occured")
        }
        else{
          res.status(200).json({
            status: 'success'
          });
        }
      })
    }
  };