var mongoose=require("mongoose")

var Users=mongoose.model("Users",{
  name:{
    type:String,
    required:true,
    minLength:4,
    trim:true
  },
  age:{
    type:Number,
    required:true
  },
  location:{
    type:String,
    required:true,
    trim:true
  }
});


 module.exports={Users}
