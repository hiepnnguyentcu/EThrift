const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(function (err, req, res, next) {
    if (!err) return next();
    return res.status(500).json({ error: "Something wrong happened" });
});

module.exports = app