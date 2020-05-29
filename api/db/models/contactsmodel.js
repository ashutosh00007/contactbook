const mongoose=require('mongoose');

const contactsSchema=new mongoose.Schema({
    name:{
       type: String,
       required: true,
       minlength:1,
       trim:true
    },
    number1:{
        type: String,
        required: true,
        minlength:10,
        maxlength:10,
        trim:true
     },
     number2:{
         type: String,
         minlength:10,
         maxlength:10,
         trim:true
      },
      email1:{
         type: String,
         minlength:5,
         trim:true
      },
      email2:{
         type: String,
         minlength:5,
         trim:true
      },
      _userId:{
          type: mongoose.Types.ObjectId,
          required:true
      }
});

const contacts=mongoose.model('contacts',contactsSchema);

module.exports={contacts};