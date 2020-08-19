const express = require("express");
const Student = require("../controllers/student");

const router = express.Router();

router.put("/student/:id", Student.updateStudent);
router.get("/students", Student.getStudents);

module.exports = router;
