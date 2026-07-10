const mongoose = require("mongoose");
//schema is the blueprint of how our database is gonaa look like
const studentSchema = new mongoose.Schema({
    name : String,
    branch : String,
    year : Number
});
//model creates database
//model is like a construction company which creates house
//blueprint -> construction company -> house
const Student = mongoose.model("Student", studentSchema);//student is model name
//models are treated like classes in javascript
module.exports = Student;