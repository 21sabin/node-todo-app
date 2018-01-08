//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

var objId=new ObjectID();
console.log(objId

//connect to db
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{

    if(err){
      return console.log("unable to connect to mongodatabase");
    }

    var user={
      name:'sabin'
    }

    // var {name}=user;
    // console.log(user)
    console.log("connected  to MongoDB server");

    // db.collection('Todos').insertOne({
    //   text:"create new database"
    // },(err,result)=>{
    //   if(err){
    //     return console.log("unable to create collection");
    //   }
    //
    //   console.log(JSON.stringify(result.ops,undefined,3))
    //
    // })


    // db.collection("Users").insertOne({
    //   name:'andrew',
    //   age:29,
    //   location:'usa'
    // },(err,result)=>{
    //   if(err){
    //     return console.log("user collectin is not created")
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimeStamp(),undefined,3))
    // })

    db.close();


})
