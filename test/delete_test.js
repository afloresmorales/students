const assert = require("assert");
const Student = require("../src/students");

describe("Delete the records", ()=>{
    let jason;
    let jason2;
    beforeEach((done)=>{
         jason = new Student({name: 'Andres'});
         jason2 = new Student({name: 'Jason'});
        jason2.save()
        jason.save()
        .then(()=>
            done()
        )
    })
    it('delete by id', (done)=>{
        Student.findByIdAndDelete(jason._id)
        .then(()=>Student.findOne({name: 'Andres'}))
        .then((student)=>{
            assert(student===null)
            done()
        })
        // assert(student === {name: 'Andres'})
    })
    it('delete by name', (done)=>{
        Student.findOneAndDelete({name: 'Andres'})
        .then(()=>Student.findOne({_id: jason._id}))
        .then((student)=>{
            assert(student===null)
            done()
        })
        // assert(student === {name: 'Andres'})
    })
    it('delete Jason', (done)=>{
        Student.deleteOne({_id: jason._id})
        .then(()=>Student.findOne({name: 'Andres'}))
        .then((student)=>{
            assert(student===null)
            done()
        })
        // assert(student === {name: 'Andres'})
    })
})