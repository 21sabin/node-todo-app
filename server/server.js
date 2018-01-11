
var {mongoose}=require("./db/mongoose")
var {ObjectID}=require("mongodb")

var {Todo}=require("./model/todo.js")
var {Users}=require("./model/user.js")

var express=require("express");
var bodyParser=require("body-parser");

var app=express();

const port=process.env.PORT || 3000;

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

app.delete("/users/:id",(req,res,next)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
      res.status(400).send({
        msg:"id is not valid"
      })
  }

  Users.findByIdAndRemove(id).then((result)=>{
    if(!result){
      return res.status(404).send({
        msg:"id not found"
      })
    }

    res.send({result,status:"ok"});

  }).catch(()=>{
    res.send(400).send();
  })

})

app.get("/todos",(req,res)=>{
  Todo.find().then((doc)=>{
    res.send({ doc });
  },(e)=>{
    console.log(e);
  })
})

//url paramater is receiverd by :id
app.get("/todos/:id",(req,res)=>{

    var id=req.params.id;
    if(!ObjectID.isValid(id)){
      return res.status(404).send()
    }



    //no need to pass id on objectId as todo is mongoose modelS
    Todo.findById(id).then((todo)=>{
      console.log(todo)
      if(!todo){
        return res.status(404).send();
      }


        res.send({
          todo
        })


    }).catch((e)=>{
      console.log(e)
      // res.send({
      //   e
      // })
      res.status(400).send()
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

app.listen(port,()=>{
  console.log(`started at ${port}`)
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
