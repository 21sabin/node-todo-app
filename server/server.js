
var {mongoose}=require("./db/mongoose")

var {Todo}=require("./model/todo.js")
var {Users}=require("./model/user.js")

var express=require("express");
var bodyParser=require("body-parser");

var app=express();

//providing express a json body prser using middleware
app.use(bodyParser.json())

app.post("/todos",(req,res)=>{
  // console.log("data from postman")
  // console.log(req.body)
  var newTodo=new Todo({
    text:req.body.text,
    completed:req.body.completed
  });

  newTodo.save().then((docs)=>{
    res.send(docs);
  },(err)=>{
    res.status(400).send(err);
  })
})

app.get("/todos",(req,res)=>{
  Todo.find().then((doc)=>{
    res.send({
      doc
    });
  },(e)=>{
    console.log(e);
  })
})

app.post("/users",(req,res)=>{
  var newUser=new Users({
    name:req.body.name,
    age:req.body.age,
    location:req.body.location
  })

  newUser.save().then((docs)=>{
    res.send(docs);
  },(e)=>{
    res.send(e)
  })

})

app.listen(3000,()=>{
  console.log("started at 3000")
})

module.exports={app}

//
//
// var newTodo=new Todo({
//   text:"cook dinner",
//   completed:true
//
// });
//
// newTodo.save().then((model)=>{
//   console.log("model created",model)
// },(e)=>{
//   console.log("unable to create model")
// })

//
// var newUsers=new Users({
//   name:'',
//   age:21,
//   location:"usa"
// });
//
// newUsers.save().then((result)=>{
//   console.log("users model created",result)
// },(e)=>{
//   console.log(e)
// })
