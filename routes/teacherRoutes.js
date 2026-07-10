const express = require("express");
const router = express.Router();

router.get("/teacher", (req, res)=>{
    return res.status(200).send("Welcome Teacher");
});
module.exports = router;