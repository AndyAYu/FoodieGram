const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require ("./config/keys").mongoURI;
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const comments = require("./routes/api/comments")
const bodyParser = require('body-parser');
const passport = require('passport');
const conversations = require("./routes/api/conversations")
const messages = require("./routes/api/messages")
const path = require('path');
const socket = require('socket.io');
const dotenv = require('dotenv');

dotenv.config();

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

const server = app.listen(port, () => {console.log(`Listening on port ${port}`)});

io = socket(server, {
    cors:{
        origin:"http://localhost:3000",
        // methods: ["GET", "POST"],
        transports: ["websocket", "polling"],
        // credentials: true
    },
    // allowEIO3: true
});


let usersArr = [];


const addUser = (userId, socketId) => {
    !usersArr.some(user => user.userId === userId) && 
    usersArr.push({ userId, socketId });
};

const removeUser = (socketId) => {
    usersArr = usersArr.filter(user => user.socketId !== socketId)
};

const getUser = userId => {
    console.log(usersArr)
    return usersArr.find(user => user.userId === userId)
};

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("addUser", userId => {
        addUser(userId, socket.id);
        io.emit("getUsers", usersArr)
    });


    socket.on("sendMessage", ({ senderId, receiverId, text}) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage", {
            senderId, 
            text,
        })
    })


    socket.on("disconnect", () => {
        console.log("a user disconnected!")
        removeUser(socket.id);
        socket.emit("getUsers", usersArr)
    });
});
