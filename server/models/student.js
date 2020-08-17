const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model("students", Student);
