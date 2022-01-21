import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import img2 from '../../assets/images/user2.jpg';

export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const friendId = conversation.members.find(m => m !== currentUser.id)
        const getUser = async () => {
            try{
                const res = await axios.get(`/api/users?userId=${friendId}`)
                setUser(res.data);
            } catch(err){
                console.log(err);
            };
        };
        getUser();
    },[currentUser, conversation]);

    return (
        <div className='conversation'>
            <img src={img2} alt="" className="conversationImg" />
            <span className="conversationName">{"Jason"}</span>
        </div>
    )
}
