const assert = require("assert");
const Student = require("../src/students");

describe("validation", ()=>{
    it('name is required', ()=>{
        const student = new Student({name : undefined });
        const result = student.validateSync()
        const {message} = result?.errors?.name;
        assert(message === 'name is required')
    })
    it('name must be longer than 2 characters', ()=>{
        const newStudent = new Student({name : 'Em' });
        const newResult = newStudent.validateSync()
        const {message} = newResult?.errors?.name;
        assert(message === 'name is too short')
    })
    it('prevent invalid records', (done)=>{
        const newStudent = new Student({name : 'Em' });
        newStudent.save()
        .catch(validationResult => {
            const {message} = validationResult?.errors?.name;
            assert(message === 'name is too short')
            done()
        })
    })
})