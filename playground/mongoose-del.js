
const {mongoose}=require("./../server/db/mongoose.js");
const {Users}=require("./../server/model/user.js");
const {ObjectID}=require("mongoose");

// Users.remove({}).then(()=>{
//
// })

// Users.findOneAndRemove({_id:""}).then((result)=>{
//   console.log(result)
// })

Users.findOneAndRemove({_id:"5a54a18b55a9f59eb27173f3"}).then((result)=>{
  console.log(reulst)
})

var id="5a54a18b55a9f59eb27173f3";

Users.findByIdAndRemove(id).then((result)=>console.log(result));
