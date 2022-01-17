const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require ("./config/keys").mongoURI;
const users = require("./routes/api/users")

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.use("/api/users", users)

app.get("/", (req, res) => {
    debugger;
    res.send("Hello World!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});