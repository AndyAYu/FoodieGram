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

    return (
        <div className='conversation'>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/637057ab-e96d-4cef-8e18-fe67f4bfb343/de7am4n-8729f211-870d-4475-b8b7-fe525854e8f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYzNzA1N2FiLWU5NmQtNGNlZi04ZTE4LWZlNjdmNGJmYjM0M1wvZGU3YW00bi04NzI5ZjIxMS04NzBkLTQ0NzUtYjhiNy1mZTUyNTg1NGU4ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ukD5SFWZwoj_ZoPDuieCTdFaiN0vOehbQ9-mq3z-ycQ" alt="" className="conversationImg" />
            <span className="conversationName">{user ? user.handle.charAt(0).toUpperCase() + user.handle.slice(1): ""}</span>
        </div>
    )
}
