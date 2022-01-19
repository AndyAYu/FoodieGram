import React from 'react'
import img2 from '../../assets/images/user2.jpg';
// import { format } from "timeago.js";

export default function message({ message, own }) {
    return (
        <div className={own? "message own" : "message"}>
            <div className="messageTop">
                <img src={img2} alt="" className="messageImg" />
                <p className='message-text'>{message.text}</p>
            </div>
            <div className="messageBottom">
                {(message.createdAt)}
            </div>
        </div>
    )
}
