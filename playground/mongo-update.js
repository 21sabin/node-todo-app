//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');




//connect to db
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{

    if(err){
      return console.log("unable to connect to mongodatabase");
    }

  // db.collection("Todos").findOneAndUpdate(
  //   {
  //     _id:new ObjectID("5a53717d1e5db1ae92f09c0b")
  //   },{
  //     $set:{
  //       completed:true
  //     }
  //   },
  //   {
  //     returnOrginal:false
  //   }
  // ).then((res)=>{
  //     console.log(res)
  // });
  db.collection("Users").findOneAndUpdate(
    {
      _id:new ObjectID("5a5367ac4ab8ffcf71237ae5")
    },{
        $set:{
        name:"andrew"
      },
      $inc:{
        age:1
      }
    },

    {
      returnOrginal:false
    }
  ).then((res)=>{
      console.log(res)
  });


});
