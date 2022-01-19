import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'

export default function Conversation({ conversation, currentUser }) {
    // console.log(currentUser.id)
    // useEffect(() => {
    //     const friendId = conversation.members.find(m => m !== currentUser.id)
    //     console.log(friendId);
    //     const getUser = async () => {
    //         try{
    //             const res = await axios(`/api/users/${friendId}`)
    //         } catch(err){
    //             console.log(err);
    //         };
    //     };
    //     getUser();
    // },[currentUser, conversation]);
    return (
        <div className='conversation'>
            <img src="" alt="hi" className="conversationImg" />
            <span className="conversationName">John Doe</span>
        </div>
    )
}
