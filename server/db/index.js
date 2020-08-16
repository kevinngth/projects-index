const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27017/class";

mongoose.connect(DB_URL, { useNewUrlParser: true }).catch((e) => {
    console.error("Connection error", e.message);
});

const db = mongoose.connection;

module.exports = db;
