import React from 'react'
import img2 from '../../assets/images/user2.jpg';
import { format } from "timeago.js";

export default function message({ message, own, allUsers, sender}) {
    
    let userIndex = allUsers.findIndex(user => user._id === sender);
    let user = allUsers[userIndex];
    return (
        <div className={own? "message own" : "message"}>
            <div className="messageTop">
                <img src={user.avatar} alt="" className="messageImg" />
                <p className='message-text'>{message.text}</p>
            </div>
            <div className="messageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}
