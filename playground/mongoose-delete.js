//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

var objId=new ObjectID();


//connect to db
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{

    if(err){
      return console.log("unable to connect to mongodatabase");
    }

    // db.collection("Todos").find({completed:false}).toArray().then((docs)=>{
    //   console.log(JSON.stringify(docs,undefined,3))
    //   console.log(docs[0]._id.getTimeStamp())
    //   // var completed=docs[0].completed;
    //   // console.log(completed)
    //
    // },(err)=>{
    //     if(err){
    //       console.log("unable to fetch data"+err)
    //     }
    // })
    //
    // db.collection("Todos").find({
    //   _id:new ObjectID("5a5371921e5db1ae92f09c0d")
    // }).toArray().then((docs)=>{
    //   console.log(JSON.stringify(docs,undefined,3))
    //   console.log(docs[0]._id.getTimeStamp())
    //   // var completed=docs[0].completed;
    //   // console.log(completed)
    //
    // },(err)=>{
    //     if(err){
    //       console.log("unable to fetch data"+err)
    //     }
    // })

    // db.collection("Users").find({
    //   name:'andrew'
    // }).toArray().then((docs)=>{
    //   console.log(JSON.stringify(docs,undefined,3))
    //   console.log(docs[0]._id.getTimeStamp())
    //   // var completed=docs[0].completed;
    //   // console.log(completed)
    //
    // },(err)=>{
    //     if(err){
    //       console.log("unable to fetch data"+err)
    //     }
    // })

    db.collection("Todos").find({
      _id:new ObjectID("5a5371921e5db1ae92f09c0d")
    }).count().then((count)=>{
      console.log("Users"+count)

    },(err)=>{
        if(err){
          console.log("unable to fetch data"+err)
        }
    })
    db.close();


})
