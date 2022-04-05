import React from "react";
import s from "./Message.module.css";
import {Avatar} from "./Avatar/Avatar";
import {Arrow} from "./Arrow/Arrow";
import {Text} from "./Text/Text";

export const Message = () => {
    return (
        <div className={s.messages}>
            <Avatar/>
            <Arrow/>
            <Text/>
        </div>
    )
}