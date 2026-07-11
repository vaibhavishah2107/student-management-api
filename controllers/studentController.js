const Student = require("../models/Student.js");

async function createStudent(req,res){
    try{
        const {name, branch, year} = req.body;
    if(!name){
        return res.status(400).send("Name is required");
    }
    if(!branch){
        return res.status(400).send("branch is required");
    }
    if(!year){
        return res.status(400).send("year is required");
    }
    const student = await Student.create({
        name,
        branch,
        year
    });
    return res.status(201).json(student);
    }catch(err){
        console.log(err);
        return res.status(500).send("internal server error");
    }
};
async function getStudentById(req, res){
    try{
        const {id} = req.params;
        if (!student) {
        return res.status(404).send("Student not found");
        }
        const student = await Student.findById(id);
        return res.status(200).json(student);
    }catch(error){
    console.log(error);
    return res.status(400).send("can't find student");
}
};
async function studentSearch(req,res){
    try {
        const{branch,year} = req.query;
        if (!student) {
        return res.status(404).send("Student not found");
        }
        const student = await Student.find({
            branch,
            year
        });
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(400).send("invalid input");
    };
};
async function updateStudent(req, res){
    try {
        const {id} = req.params;
        const {name,branch,year} = req.body;
        if (!student) {
        return res.status(404).send("Student not found");
        }
        const student = await Student.findByIdAndUpdate(
            id,
            {name,
            branch,
            year},
            {new : true}//it will return updated document
        );
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(400).send("can not update student")
    }
};
async function deleteStudent(req, res){
    try{
        const {id} = req.params;
        if (!student) {
        return res.status(404).send("Student not found");
        }
        await Student.findByIdAndDelete(id);
        return res.status(200).send(`student with id ${id} deleted successfully`);
    }catch(error){
    console.log(error);
    return res.status(400).send("can't delete student");
}
};
module.exports = {
    createStudent,
    getStudentById,
    studentSearch,
    updateStudent,
    deleteStudent
};