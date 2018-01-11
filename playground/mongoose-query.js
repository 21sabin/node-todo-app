const {ObjectID}=require("mongodb")
const {mongoose}=require("./../server/db/mongoose.js");
const {Todo}=require("./../server/model/todo.js");
const {Users}=require("./../server/model/user.js");

var id='5a54a18b55a9f59eb27173f3'

if(!ObjectID.isValid(id)){
    console.log("invalid id")
}
 
// Todo.find({
//     _id:id
// }).then((result)=>{
//     console.log(result)
// });

// Todo.findOne({_id:id}).then((todo)=>{
//     console.log(todo)
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         console.log("no data")
//     }
// console.log(todo)
// }).catch((e)=>{
//     console.log(e)
// });


Users.findById(id).then((user)=>{
    if(!user){
        console.log("no user found")
    }
    console.log(user)
}).catch((e)=>{
    console.log(e)
})