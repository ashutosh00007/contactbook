const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
       type: String,
       required: true,
       minlength:1,
       trim:true
    },
    email:{
         type: String,
         minlength:5,
         required: true,
         trim:true
      },
    password:{
         type: String,
         minlength:5,
         maxlength:16,
         required: true,
         trim:true
      }
});

const user=mongoose.model('user',userSchema);

module.exports={user};