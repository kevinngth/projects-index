const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: { type: String, required: true },
    project1: {
        title: { type: String, required: false },
        appURL: { type: String, required: false },
        repoURL: { type: String, required: false },
    },
    project2: {
        title: { type: String, required: false },
        appURL: { type: String, required: false },
        repoURL: { type: String, required: false },
    },
    project3: {
        title: { type: String, required: false },
        appURL: { type: String, required: false },
        repoURL: { type: String, required: false },
    },
    project4: {
        title: { type: String, required: false },
        appURL: { type: String, required: false },
        repoURL: { type: String, required: false },
    },
});

module.exports = mongoose.model("Student", StudentSchema);
