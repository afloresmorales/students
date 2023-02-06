const assert = require("assert");
const Student = require("../src/students");

describe("subdocument", () => {
    // it('creating a subdocument', done => {
    //     const andres = new Student({
    //         name: 'Andres',
    //         articles: [{ title: 'Article 1' }, { title: 'Article 2' }]
    //     });
    //     andres.save()
    //     .then(()=> {
    //         Student.find({name: 'Andres'})
    //         .then((student)=> {
    //             assert(student.articles[0].title === 'Article 1 ');
    //         })
    //         done();
    //     })

    // })
    it('creating a subdocument', done => {
        const andres = new Student({
            name: 'Andres',
            articles: []
        });
        andres.save()
        .then(()=> Student.findOne({name: 'Andres'}))
        .then(student => {
            student.articles.push({title: 'MongoDB'})
            return student.save()
        })
        .then(() => Student.findOne({name: 'Andres'}))
        .then(student => {
            assert(student.articles[0].title === 'MongoDB')
            done()
        })
    })
})