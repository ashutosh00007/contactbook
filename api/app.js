const express=require('express');
const app=express();
const {contacts}=require('./db/models/contactsmodel');
const {user}=require('./db/models/usermodel');
const {mongoose}=require('./db/mongoose');
const bodyParser=require('body-parser');

app.use(bodyParser.json());


//CONTACT LIST
app.get('/contacts/:userid',(req,res)=>{
 //TO get all Contacts
 contacts.find({_userId:req.params.userid}).then((usercontacts)=>{
     res.send(usercontacts);
 });
});

app.post('/contacts/:userid',(req,res)=>{
   // TO POST NEW CONTACT AND
    //TO get all Contacts back
    let newcontactinfo = new contacts({
        name:req.body.name,
        number1:req.body.number1,
        number2:req.body.number2,
        email1:req.body.email1,
        email2:req.body.email2,
        _userId:req.params.userid
    });
    console.log(req.body);

    contacts.find({number1:req.body.number1,number2:req.body.number2,email1:req.body.email1,email2:req.body.email2}).then((resp)=>{
        
        if(resp.length>0)
        {
            res.sendStatus(203);
        }
        else{
           newcontactinfo.save().then((newinfo)=>{
                 res.send(newinfo);
           
           });
        }
    });

    

   });

app.patch('/contacts/:id',(req,res)=>{
 //to Update contact
 contacts.findOneAndUpdate({_id :req.params.id},{
     $set:req.body
    }).then(()=>{
     res.sendStatus(200);
    }); 
});

app.delete('/contacts/:id',(req,res)=>{
    //to delete contact 
    contacts.findOneAndDelete({_id :req.params.id}).then((removedContact)=>{
        res.send(removedContact);
       }); 
});


app.post('/user',(req,res)=>{
    // TO add new user
     let newuserinfo = new user({
         name:req.body.name,
         email:req.body.email,
         password:req.body.password
     });
     console.log(req.body);
 
     user.find({email:req.body.email,password:req.body.password}).then((resp)=>{
          
          if(resp.length>0)
          {
            res.sendStatus(203);
          }
          else{
             newuserinfo.save().then((userinfo)=>{
                   res.sendStatus(200).send(userinfo);
                   
             });
          }
     });
 
     
 
    });

    app.post('/login',(req,res)=>{
        // TO add new user
         let logininfo = new user({
             email:req.body.email,
             password:req.body.password
         });
         console.log(req.body);
     
         user.find({email:req.body.email,password:req.body.password}).then((resp)=>{
              
              if(resp.length>0)
              {
                res.send(resp);
              }
              else{
                res.sendStatus(203);
              }
         });
     
         
     
        });


app.listen(3000,(err)=>{
    if(err)
    console.log(err);
    else
    console.log('running on port 3000');
});





