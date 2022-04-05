import React from "react";
import s from "./Message.module.css";
import Avatar from "../../../../Images/IMG_3192.JPG";

export const Message = () => {
    return (
        <div className={s.messages}>
            <img className={s.round} src={Avatar} alt=""/>
            <div className={s.arrow}></div>
            <div className={s.tx}>Hey, why nobody love me?</div>
        </div>
    )
}