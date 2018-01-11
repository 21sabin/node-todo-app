
const request=require("supertest");
const expect=require("expect");
const {ObjectID}=require("mongodb")

var {app}=require("./../server.js");
var {Todo}=require("./../model/todo.js");
var {Users}=require("./../model/user.js")

const users=[{
  _id:new ObjectID(),
  name:"users firstname to test"
},{
  _id:new ObjectID(),
  name:"second username to test"
}
]

beforeEach((done)=>{
    Users.remove({}).then(()=>{
      return Users.insertMany(users);
    }).then(()=>{
      done();
    })
})

describe("/POST test",()=>{
   // var text="testing post todos second test";
   var text="  "
    it("should post todos",(done)=>{
        request(app)
        .post("/todos")
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
               return  done(err);
             }

            Todo.find().then((result)=>{
                expect(result.length).toBe(1);
                expect(result[0].text).toBe(text);
                done();

            }).catch((e)=>{
                    console.log(e)
            })
        })

    });


});

//toHexString is used to convert objectId to string
describe("Get /todos/id test",(done)=>{
    it("should return todo with id",(done)=>{

        request(app)
        .get("/todos/5a54c819c44573e7bcb9a4c0")
        .expect(200)
        .expect((res)=>{
            expect(res.todo.length).toBe(1)
        })
        .end((err,res)=>{
            if(err){
                 return  done(err)
            }

        })
    })

    it("should return 404 on invalid id",(done)=>{

        request(app)
        .get("/todos/fdsfdsf")
        .expect(404)
        .end(done)
    })

    it("should return 404 for non object id ",(done)=>{
        var hexId=new ObjectID().toHexString();

        request(app)
        .get(`/todos/${hexId}`)
        .expect(404)
        .end(done)
    })


    describe("Delete /users",()=>{
      var hexId=users[0]._id.toHexString();
      it("shoul delete users",()=>{
        request(app)
        .delete(`/users/${hexId}`)
        .expect(200).
        expect((res)=>{
          expect(res.body._id).toBe(hexId)
        })
        .end((err,res)=>{
          if(err){
            return done(err);
          }

          //query to database to check the id you deleted is not exist
          Users.findById(hexId).then((res)=>{
            expect(res).toNotExist() ;
            done();
          }).cathc((e)=>{
            console.log(e)
          })

        })
      })

    })

//     it('should reuturn 404 if user not found',(done)=>{
//       var hexId=user[0]._id.toHexString();
//         request(app)
//         .delete(`/users/${hexId}`)
//         .expect(404)
//         .end(done)
//     })
//
//     it('should return 400 if id is not valid',(done)={
//       request(app)
//       .delete("/users/343434")
//       .expect(400)
//       .end(done)
//       })
 });


 describe("PATCH todis/:id",()=>{

   it("should update the todo",(done)=>{
      var hexId=users[0]._id.toHexString();

      var updateTodo={
        text:"updated text",
        completed:true
      }

      request(app)
      .patch(`/todos/${hexId}`)
      .send(updateTodo)
      .expect(200)
      .expect((res)=>{
          expect(res.body.todo.text).toBe(updatedTo.text);
          expect(res.body.todo.completedAt).toBe('number');
      })
      .end((err,res)=>{
        if(err){
          return done(err);
        }

        Todo.finById(hexId).then((todo)=>{
            expect(todo.text).toBe(updateTodo.text);
        }).catch((e)=>{
          console.log(e)
        })
      })
   })

   it("should return 404 i")

 })
