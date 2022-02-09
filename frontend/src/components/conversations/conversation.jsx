import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'

export default function Conversation({ conversation, currentUser, allUsers }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const friendId = conversation.members.find(m => m !== currentUser.id);
        let friendIndex = allUsers.findIndex(user => user._id === friendId);
        let friend = allUsers[friendIndex];
        console.log(friendIndex);
        const getUser =  () => {
            try{
                const res = friend
                setUser(res);
            } catch(err){
                console.log(err);
            };
        };
        getUser();
        console.log(user);
    },[currentUser, conversation]);

    // const usersAvatars = this.props.allUsers.map((e) => {
    //         const container = {};

    //         container[e._id] = e.avatar;
    //         debugger
    //     return container;
    //     })
    console.log(user)
    return (
        <div className='conversation'>
            <span className="conversationName">
                <img src={user ? user.avatar: ""} 
                alt="" 
                className="conversationImg" 
                />
                {user ? user.handle.charAt(0).toUpperCase() + user.handle.slice(1): ""}
            </span>
        </div>
    )
}
