import React from 'react';
import ConversationContainer from '../conversations/conversation_container';
import Message from '../message/message';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentMedical } from '@fortawesome/free-solid-svg-icons';


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
    const [loading, setLoading] = useState(false);


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
                await axios.get(`/api/messages/${currentChat?._id}`)
                .then(res => setMessages(res.data))
            } catch(err) {
                console.log("error is " + err)
            }
        };
        getMessages();
    },[currentChat])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
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
            const res = await axios.post(`/api/messages`, message);
            setMessages([...messages, res.data]);
            setNewMessage("");
            setLoading(false);
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
        
        let convos = [];
        conversations.forEach(conversation => {
            if (!conversation.members.includes(id)) {
                convos.push(conversation);
            }
        })
        // debugger
        if (convos.length === conversations.length) {
            props.createConvo(convo)
            const changeVal = () => setValue(value + 1);
            changeVal();
        } else{
            console.log("conversation already exists")
        }
        
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
                                <ConversationContainer  currentUser={user} conversation={convo} />
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

                            messages.length > 0 ?
                            
                            messages.map((message, idx) => ( 
                                <div key={idx} ref={scrollRef}>
                                    <Message message={message} own={message.sender === user.id} sender={message.sender} allUsers={props.allUsers}/>
                                </div>
                            )):
                            <div>
                               No messages, send one below!
                            </div>
                        }

                        {
                            loading?
                            <div className='spinner'>
                                <h4>Sending...</h4>
                            </div>
                            :
                            null
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
                <div className='friends-bar-title'>My Friends</div>
                {props.allUsers.map((user,i) => {
                    // debugger
                    if(props.currentUserFriends.includes(user._id) && user._id !== props.currentUserId){
                        // debugger
                        return(
                            <div  key={i} className='friend-live-item'>
                                <div className='friend-info'>
                                    <img className='friend-profile-photo' src={user.avatar}></img>
                                    <div className='friend-name-live' onClick={() => handlePage(i)}>{user.handle.charAt(0).toUpperCase() + user.handle.slice(1)}</div>
                                    <button className='friend-page-messenger'  onClick={() => handleChat(user._id)}><FontAwesomeIcon icon={faCommentMedical}/></button>
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

