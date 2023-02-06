const assert = require("assert");
const Student = require("../src/students");
const Comment = require("../src/comment");
const ArticleBlog = require("../src/articleBlog");

describe("describe association", ()=>{
    let jason, articleBlog, comment;
    beforeEach((done)=>{
        jason = new Student({name: 'Jason'});
        articleBlog = new ArticleBlog({title: 'mongodb', content: 'mongoose and mocha'})
        comment = new Comment({content: 'well done'})

        jason.articleBlog.push(articleBlog);
        articleBlog.comments.push(comment);
        comment.student = jason;
        Promise.all([jason.save(), articleBlog.save(), comment.save()])
        .then(()=>{done()})
    })
    it('associate student with article blog', (done)=>{
        Student.findOne({name: 'Jason'})
        .populate('articleBlog')
        .then((student)=>{
            console.log({student, articleBlog: student.articleBlog})
            assert(student.articleBlog[0].title === 'mongodb')
        })
        done();
        // assert(student === {name: 'Andres'})
    })
    it.only('student article blog comment and owner', (done) => {
        Student.findOne({name: 'Jason'})
        .populate({
            path:  'articleBlog',
            populate: {
                path: 'comments',
                model: 'comment',
                populate: {
                    path: 'students',
                    model: 'student'
                }
            }
        })
        .then(student=>{
            assert(student.name === 'Jason')
            assert(student.articleBlog[0].title === 'mongodb')
            assert(student.articleBlog[0].comment[0].content === 'well done')
            assert(student.articleBlog[0].comment[0].student.name === 'Jason')
        })
        done();
    })
})