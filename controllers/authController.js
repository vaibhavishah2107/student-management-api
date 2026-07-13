const User = require("../models/user.js");
const bcrypt = require("bcrypt");


async function createUser(req, res){
    try{
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password:hashedPassword
    });
    return res.status(201).json(user);
}catch(error){
    console.log(error);
    return res.status(500).send("Internal Server Error");
}
};
async function loginUser(req, res) {

    try {

        // Step 1
        // Get email and password
        const {email,password} = req.body;

        // Step 2
        // Find user
        const user = await User.findOne({
            email
        })

        // Step 3
        // If user doesn't exist
        if(!user){
            return res.status(404).send("no user found");
        }

        // Step 4
        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        // Step 5
        // If password is wrong
        if(!isMatch){
            return res.status(401).send("login fail");
        }

        // Step 6
        // Login successful
        return res.status(200).json({
            message: "login successfull"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send("server error");
    }
}
module.exports = {
    createUser,
    loginUser
};