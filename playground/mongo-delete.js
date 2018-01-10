//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

var objId=new ObjectID();


//connect to db
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{

    if(err){
      return console.log("unable to connect to mongodatabase");
    }

    // db.collection("Users").deleteOne({name:"jan"}).then((results)=>{
    //     console.log(results)
    // })

    // db.collection("Users").deleteMany({name:"jan"}).then((results)=>{
    //     console.log(results.result.n)
    // })
    //
    // db.collection("Users").findOneAndDelete({name:"jan"}).then((results)=>{
    //     console.log(results.result.n)
    // })

    db.collection("Users").findOneAndDelete({_id:new ObjectID("5a53717d1e5db1ae92f09c0b")}).then((res)=>{
      console.log(JSON.stringify(res,undefined,4))
    },(err)=>{
        if(err){
          console.log("cannot delete")
        }
    })

})
