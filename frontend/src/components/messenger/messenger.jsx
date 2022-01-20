import React from 'react';
import Conversation from '../conversations/conversation';
import Message from '../message/message';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import io from 'socket.io-client';


export default function Messenger (props) {
    const user = props.currentUser;
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const scrollRef = useRef();
    const socket = io();


    useEffect(() => {
        socket.off();
        socket.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        })
    },[])

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages(prev => [...prev, arrivalMessage]);
    },[arrivalMessage, currentChat]);


    useEffect(() => {
        socket.emit("addUser", user.id);
        socket.on("getUsers", users=> {
            console.log(users)
        })
    }, [user]);

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
        
    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`/api/messages/${currentChat?._id}`)
                setMessages(res.data)
            } catch(err) {
                console.log(err)
            }
        };
        getMessages();
    },[currentChat])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user.id,
            text: newMessage,
            conversationId: currentChat._id
        };

        const receiverId = currentChat.members.find(member => member !== user.id)

        socket.emit("sendMessage", {
            senderId: user.id,
            receiverId,
            text: newMessage
        })
        try {
            const res = await axios.post(`api/messages`, message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch(err){
            console.log(err);
        }
    };


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth", block:"center" });
    }, [messages]);

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <h2>Conversations</h2>
                    {
                        conversations.map((convo, idx) => (
                            convo ? 
                            <div key={idx} onClick={() => setCurrentChat(convo)}>
                                <Conversation  currentUser={user} conversation={convo} />
                            </div>
                            :
                            null
                        ))
                    }
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ? 
                    
                    <div className="chatBoxTop">
                        {
                            messages.map((message, idx) => ( 
                                <div key={idx} ref={scrollRef}>
                                    <Message message={message} own={message.sender === user.id}/>
                                </div>
                            ))
                        }
                    </div> 
                     : <span className='noConversationText'>Open a Conversation to start a chat!</span>
                    }
                    <div className="chatBoxBottom">
                        <textarea 
                        className="chat-message-input" 
                        placeholder='write something...'
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                        ></textarea>
                        <button className='chatSubmitBtn' onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <h2>Friends</h2>
                </div>
            </div>
        </div>
    );
}

