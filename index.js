const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/studentDB")
.then(()=>{
    console.log("MongoDB conneccted successfully")
})
.catch(()=>{
    console.log(err);
});
app.use(express.json());      // FIRST

const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

app.use(studentRoutes);        // THEN routes
app.use(teacherRoutes);

// app.post("/student", (req, res) => {
//     const{name, branch, year} = req.body;
//     if(!name && !branch && !year){
//         return res.send(`name is required
//             year is required
//             branch is required`);
//     };
//     if(!name){
//         return res.send("name is required");
//     };
//     if(!branch){
//         return res.send("Branch is required");
//     };
//     if(!year){
//         return res.send("year is required");
//     };

//     return res.status(200).send(`Welcome ${name}!
//         You are studing in ${branch}.
//         current year: ${year}`);
// });
app.listen(3000, () =>{
    console.log("server is running");
}); 