# FoodieGram

[FoodieGram](https://foodiegram-aa.herokuapp.com/)

## Background and Overview
FoodieGram is a social media app for foodies. Allows you to connect with friends and share your favorite restaurants in town. 

## Technologies and Technical Challenges

 ### Technologies:
+ MongoDB
+ Express
+ React
+ Node.js
+ Websockets
+ AWS
+ Google Maps API


### Technical challenges:
+ Learning websockets for live chat
+ Implementing an updating news feed 

## Functionality and MVPs

FoodieGram is a social media app built for foodies. Use it to follow your friends and other avid foodies on their food adventures around the city. Users will be able to interact with others through many different ways: Posts, likes, personal pages, events
### 1. Splash/ User Auth
<img width="1435" alt="Screen Shot 2022-02-09 at 12 45 18 AM" src="https://user-images.githubusercontent.com/53449807/153129492-7f71cae7-556f-4cdf-ba46-395294b5a90d.png">

### 2. Create your own profile page
<img width="1437" alt="Screen Shot 2022-02-09 at 12 46 45 AM" src="https://user-images.githubusercontent.com/53449807/153129614-35f70c6e-44d2-4b64-836b-1b0d00a3bbe9.png">

### 3. News feed, make posts, tracked likes
<img width="605" alt="Screen Shot 2022-02-09 at 12 47 46 AM" src="https://user-images.githubusercontent.com/53449807/153129741-00ab6538-c985-4a4d-a907-e9dd353270c2.png">
<img width="452" alt="Screen Shot 2022-02-09 at 12 47 56 AM" src="https://user-images.githubusercontent.com/53449807/153129763-b7a7be21-7e68-4023-9b07-314925fd57c6.png">

### 4. Live chat with friends
<img width="1439" alt="Screen Shot 2022-02-09 at 12 49 34 AM" src="https://user-images.githubusercontent.com/53449807/153129918-b7b5728b-bb59-4423-b795-6940919c79dd.png">

- The following code below is for the livechat functionality backend for FoodieGram. This Code utilizes the Socket.io Library to send different actions including on connect, disconnect, addUser, and sending messages/getting messages

```
io.on("connection", (socket) => {
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
        removeUser(socket.id);
        socket.emit("getUsers", usersArr)
    });
});
```

### 5. Search bar for friends and restaurants
<img width="1439" alt="Screen Shot 2022-02-09 at 12 50 28 AM" src="https://user-images.githubusercontent.com/53449807/153130002-60562dfa-d01a-4f07-a666-a1a32b746df9.png">



# Bonus: 
+ General groups for multi-purpose
+ Top foodies based on posts
+ Live map to reflect addresses from posts with descriptive pins

# Group Members:
1. Anuj P Gupta
2. Sonja Ng
3. Andy Yu
4. Jason Chu


# Work Breakdown:
1. Splash/Auth (collective baseline before branching)
- All work together (1/17-1/18)
2. Profile Pages 
Jason/Andy (1/18)
3. News feed, posts, tracked likes (Andy/ Sonja/Jason)
6. Live Chat (Anuj)
7. Search Bar (Jason)

Bonus:
Live map, Groups, Top foodies leaderboard

# Wireframe:
![Index page](./wireframe/user_index.png)

![Profile page](./wireframe/user_profile.png)
