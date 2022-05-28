import React from 'react'
import classes from "./Message.module.css";

export type MessageDataProps = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message({avatar, name, message, time}: MessageDataProps) {

    return (
        <>
            <div className={classes.message}>
                <img src={avatar} alt="No AVA"/>
                <div className={classes.d10}></div>
                <div className={classes.bodyMessage}>
                    <div className={classes.someName}>{name}</div>
                    <div className={classes.post}>{message}</div>
                    <div className={classes.time}>{time}</div>
                </div>
            </div>
        </>
    )
}

export default Message
