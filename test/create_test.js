const assert = require("assert");
const Student = require("../src/students");

describe("Create the first data", ()=>{
    it('save the student', (done)=>{
        const student = new Student({name: 'Andres'});
        student.save()
        .then(()=>{
            assert(!student.isNew);
            done();
        })
        // assert(student === {name: 'Andres'})
    })
})