const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
    projectNumber: { type: Number, required: true },
    title: { type: String, required: true },
    appURL: { type: String, required: true },
    repoURL: { type: String, required: true },
});

module.exports = mongoose.model("projects", Project);
