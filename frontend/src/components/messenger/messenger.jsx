import React from 'react';
import Conversation from '../conversations/conversation';
import Message from '../message/message';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';


export default function Messenger (props) {
    const user = props.currentUser;
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const scrollRef = useRef();
    const socket = io();
    const [value, setValue] = useState(0);


    useEffect(() => {
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
                console.log("use effect ran")
                const res =  await axios.get(`/api/conversations/${user.id}`);
                setConversations([...res.data]);
            } catch(err) {
            };
        };
        getConversations();
    },[value]);

        
    useEffect(() => {
        setMessages([]);
        const getMessages = async () => {
            try {
                console.log(currentChat._id)
                await axios.get(`/api/messages/${currentChat?._id}`)
                .then(res => setMessages(res.data))
                console.log(messages);
            } catch(err) {
                console.log("error is " + err)
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

        // socket.emit("sendMessage", {
        //     senderId: user.id,
        //     receiverId,
        //     text: newMessage
        // })
        try {
            const res = await axios.post(`/api/messages`, message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch(err){
            console.log(err);
        }
    };


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth", block:"center" });
    }, [messages]);

    const handlePage = (num) => {
        props.history.push(`/pages/${num}`)
    }

    const handleChat = (id) => {
        let convo = {
            senderId: props.currentUserId,
            receiverId: id
        }
        props.createConvo(convo)
        const changeVal = () => setValue(value + 1);
        changeVal();
        console.log(value);
    }


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
                            <div className='friendHandle'>
                                <h1 className='friendHandleh1'>
                                    {props.allUsers.filter(m => m._id === (currentChat.members.find(m =>  m !== user.id)))[0].handle.charAt(0).toUpperCase() + props.allUsers.filter(m => m._id === (currentChat.members.find(m =>  m !== user.id)))[0].handle.slice(1)}
                                </h1>
                                
                            </div>
                        } 

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
                    <div className='friend-wrapper'>
                <div className='friends-bar-title'>My Friends:</div>
                {props.allUsers.map((user,i) => {
                    // debugger
                    if(props.currentUserFriends.includes(user._id) && user._id !== props.currentUserId){
                        // debugger
                        return(
                            <div  key={i} className='friend-live-item'>
                                <div className='friend-info'>
                                    <img className='friend-profile-photo' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/637057ab-e96d-4cef-8e18-fe67f4bfb343/de7am4n-8729f211-870d-4475-b8b7-fe525854e8f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYzNzA1N2FiLWU5NmQtNGNlZi04ZTE4LWZlNjdmNGJmYjM0M1wvZGU3YW00bi04NzI5ZjIxMS04NzBkLTQ0NzUtYjhiNy1mZTUyNTg1NGU4ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ukD5SFWZwoj_ZoPDuieCTdFaiN0vOehbQ9-mq3z-ycQ'></img>
                                    <div className='friend-name' onClick={() => handlePage(i)}>{user.handle.charAt(0).toUpperCase() + user.handle.slice(1)}</div>
                                
                                </div>
                                <div className="friend-buttons-live">
                                    <button className='friend-page-button'  onClick={() => handleChat(user._id)}>Create Conversation</button>
                                </div>                 
                            </div>
                        )
                    }
                })}
            </div>
                </div>
                
            </div>
        </div>
    );
}

