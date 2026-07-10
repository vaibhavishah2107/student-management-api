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
function studentSearch(req,res){
    const {branch, year} = req.query;
    return res.status(200).send(`Searching students...
Branch: ${branch}
Year: ${year}`);
};
module.exports = {
    createStudent,
    studentSearch
};