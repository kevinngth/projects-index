const Student = require("../models/student");

const updateStudent = async (req, res) => {
    const { body, headers } = req;
    console.log("process.env.PASSCODE = " + process.env.PASSCODE);
    console.log("headers.passcode = " + headers.passcode);
    if (!(headers.passcode === process.env.PASSCODE)) {
        return res.status(400).json({
            success: false,
            error: "Incorrect Passcode",
        });
    }

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a student to update",
        });
    }

    Student.findOne({ _id: req.params.id }, (err, student) => {
        if (err) {
            return res.status(404).json({
                err,
                message: "Student not found!",
            });
        }
        for (const key in body) {
            student[key] = body[key];
        }
        student
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: student._id,
                    message: "Student updated!",
                });
            })
            .catch((error) => {
                return res.status(404).json({
                    error,
                    message: "Student not updated!",
                });
            });
    });
};

const getStudents = async (req, res) => {
    await Student.find({}, (err, students) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!students.length) {
            return res
                .status(404)
                .json({ success: false, error: `Student not found` });
        }
        return res.status(200).json({ success: true, data: students });
    }).catch((err) => console.log(err));
};

module.exports = {
    updateStudent,
    getStudents,
};
