const express = require("express");
const Student = require("../controllers/student");

const router = express.Router();

router.post("/student", Student.createStudent);
router.put("/student/:id", Student.updateStudent);
router.delete("/student/:id", Student.deleteStudent);
router.get("/student/:id", Student.getStudentById);
router.get("/students", Student.getStudents);

module.exports = router;
