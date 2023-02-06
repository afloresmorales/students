const assert = require("assert");
const Student = require("../src/students");

describe("Read data", ()=>{
    let student, student2;
    beforeEach((done)=>{
        student = new Student({name: 'Andres'})
        student2 = new Student({name: 'Jason'})
        student.save()
        student2.save().then(()=>done());
    })
    // it('find all Andres', async ()=>{
    //    const andres = await Student.find({name: 'Andres'});
    //    console.log({andres})
    //     assert(student._id.toString() === andres[0]._id.toString())
    // })
     it('find one of the Jasons', async ()=>{
       const andres = await Student.findOne({name: 'Andres'});
       console.log({andres})
        assert(andres.name === 'Andres')
    })
})