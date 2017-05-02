console.log('contacts controller');
require('../config/mongoose');
var mongoose = require('mongoose');

var Contact = mongoose.model('Contact');
function ContactsController(){
  this.index = function(req,res){
    Contact.find({}, function(err, contacts) {
      res.json({placeholder:'index', contacts:contacts});
    })
  };
  
  this.create = function(req,res){
    Contact.findOne({email: req.body.email}, function(err, contact){
      if(err){
        response.json(err);
      }
      else if(!contact){
        var contact = new Contact({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          phone: req.body.phone,
          status: req.body.status,
        });
        contact.save(function(err) {
          if(err){
            console.log("something went wrong");
          } else {
            res.json({placeholder:'create', contact:contact});
          }
        })
      }
      else{
        console.log('Contact already present', contact)
        res.json({placeholder:'error', message:"Email address is already added!"})
      } 
    })
  };

  this.update = function(req,res){
    Contact.findOne({_id:req.params.id}, function(err, contact) {
      if(err){
        console.log("something went wrong");
      } else {
        contact.first_name = req.body.first_name;
        contact.last_name = req.body.last_name;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.status = req.body.status;
        contact.save(function(err){
          if(err){
            console.log("something went wrong");
          } else {
            res.json({placeholder:'update', contact:contact});
          }
        });
      }
    })
  };

  this.delete = function(req,res){
    Contact.remove({_id:req.params.id}, function(err, contact){
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully delete a contact!');
        res.json({placeholder:'delete', contact:contact});
      }
    })
  };

  this.show = function(req,res){
    Contact.findOne({_id:req.params.id},function(err, contact){
      res.json({placeholder:'show', contact:contact});
    })
  };
}
module.exports = new ContactsController(); 
