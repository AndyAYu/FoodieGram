import React from 'react';
import Conversation from '../conversations/conversation';
import Message from '../message/message';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Messenger (props) {
    const user = props.currentUser;
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            try{
                const res =  await axios.get(`/api/conversations/${user.id}`);
                setConversations(res.data);
            } catch(err) {
            };
        };
        getConversations();
    },[user.id]);
        
    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <h2>menu</h2>
                    <input  placeholder='Search for friends' className='chatMenuInput' />
                    {
                        conversations.map((convo, idx) => (
                            <Conversation key={idx} currentUser={user} conversation={convo} />
                        ))
                    }
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message own={true}/>
                        <Message own={true}/>
                        
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chat-message-input" placeholder='write something...'></textarea>
                        <button className='chatSubmitBtn'>Send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <h2>online</h2>
                </div>
            </div>
        </div>
    );
}

