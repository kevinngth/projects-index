const mongoose = require("mongoose");

const { DB_URL } = process.env;
console.log(DB_URL);
mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((e) => {
        console.error("Connection error", e.message);
    });

const db = mongoose.connection;

module.exports = db;
