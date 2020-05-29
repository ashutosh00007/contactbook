const mongoose=require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Taskmanager',{useNewUrlParser:true}).then(()=>{
    console.log("connected to MongoDB successfully");
}).catch((err)=>{
    console.log("something went wrong connection failed");
    console.log(err);
})

mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

module.exports = {mongoose};
