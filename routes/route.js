const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

//retriving contact
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
          res.send(contacts);
    })
});

//add contact
router.post('/contact',(req,res,next)=>{
  //logic to add the contacts
 let newContact = new Contact({
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     phone: req.body.phone
 });
  
    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:"failed to add contact"}); 
        }else{
            res.json({msg:"contact added successfully"});
        }
    })

});

//delete the contact
router.delete('/contact/:id',(req,res,next)=>{
 Contact.remove({_id: req.params.id},function(err,result){
    if(err){
        res.json(err);
    }else{
        res.json(result);
    }
 });
});

module.exports = router;