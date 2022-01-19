const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require ("./config/keys").mongoURI;
const users = require("./routes/api/users");
const posts = require("./routes/api/posts")
const bodyParser = require('body-parser');
const passport = require('passport');
const conversations = require("./routes/api/conversations")
const messages = require("./routes/api/messages")
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/users/posts", posts)
app.use("/api/conversations", conversations);
app.use("/api/messages", messages);

app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 4000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});