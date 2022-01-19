import React from 'react'

export default function message({ own }) {
    return (
        <div className={own? "message own" : "message"}>
            <div className="messageTop">
                <img src="" alt="" className="messageImg" />
                <p className='message-text'>Hello this is a message HeleHello this is a messageHello this is a messageHello this is a message</p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    )
}
