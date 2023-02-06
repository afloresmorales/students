const assert = require("assert");
const Student = require("../src/students");

describe("updating records", ()=>{
    let student, student2;
    beforeEach((done)=>{
        student = new Student({name: 'Andres', studentNumber: 2500, articleCount: 5, grade: 10})
        student.save().then(()=>done());
    })
    //  it('set and save', async ()=>{
    //    console.log(student)
    //    student.set('name', 'Alex');
    //    console.log(student)
    //    student.save().then(()=>{
    //     Student.find({})
    //    }).then((students => {
    //     assert(students[0].name ==='Alex')
    //    }));
    // })
    // it('update many Andres', async ()=>{
    //     const student = await Student.updateMany({name: "Andres"},{studentNumber: 3000});
    //     const res  =await Student.find({});
    //     assert(res[0].studentNumber === 3000 && res[1].studentNumber === 3000)
    //     console.log(res)
    //  })
     it('update many Andres', async ()=>{
        const artCount = await Student.findOne({name: 'Andres'});
        const student =await Student.updateOne({name: 'Andres'}, {$mul: {grade: artCount.articleCount}})
        const res = await Student.findOne({name: 'Andres'})
        console.log({res})
        assert(res.grade === 50)
     })
})