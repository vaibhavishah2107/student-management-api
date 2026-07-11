const express = require("express");
const router = express.Router();

const { createStudent,getStudentById,studentSearch,updateStudent,deleteStudent } = require("../controllers/studentController");

router.post("/student", createStudent);
router.get("/student/:id", getStudentById);
router.get("/student/:id", studentSearch);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);
module.exports = router;


// //AP1 4
// router.get("/student/search" , (req, res) => {
//     const {branch, year} = req.query;
//     return res.status(200).send(`Searching students...
// Branch: ${branch}
// Year: ${year}`);
// });
// //AP1 5
// router.get("/student/:id",(req, res) => {
//     const {id} = req.params;
//     return res.status(200).send(`student ID: ${id}`);
// });
// //API 6
// router.put("/student/:id", (req, res)=>{
//     const {branch, year} = req.body;
//     const { id } = req.params;
//     return res.status(200).send(`Student ${id} updated successfully.
// New Branch: ${branch}
// New Year: ${year}`);
// });
// //API 7 
// router.delete("/student/:id",(req, res) => {
//     const {id} = req.params;
//     return res.status(200).send(`Student ${id} deleted successfully.`);
// });
// module.exports = router;