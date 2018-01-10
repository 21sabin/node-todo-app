
const request=require("supertest");
const expect=require("expect");

var {app}=require("./../server.js");
var {Todo}=require("./../model/todo.js")


beforeEach((done)=>{
    Todo.remove().then(()=>done());
})

describe("/POST test",()=>{
   // var text="testing post todos second test";
   var text=""
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

