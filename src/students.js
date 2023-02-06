const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = require('./article_schema')

const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        validate: {
            validator: (name) => name.length > 2,
            message: 'name is too short'
        }
    },
    studentNumber: Number,
    articleCount: Number,
    grade: Number,
    articles: [ArticleSchema],
    articleBlog: [{
        type: Schema.Types.ObjectId,
        ref: 'articleBlog'
    }]
});
const Student = mongoose.model('student', StudentSchema);

module.exports = Student;