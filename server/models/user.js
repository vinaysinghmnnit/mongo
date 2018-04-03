var mongoose=require('mongoose');
var user=mongoose.model('user',{
  name:{
  type:String,
  required:true,
  minlength:true,
  trim:true
  },
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  }
});

module.exports={user};
