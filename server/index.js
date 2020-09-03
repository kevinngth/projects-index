const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const { PORT } = process.env;
const app = express();
const db = require("./db");
const router = require("./routes/student");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
