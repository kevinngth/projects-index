const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { PORT } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
