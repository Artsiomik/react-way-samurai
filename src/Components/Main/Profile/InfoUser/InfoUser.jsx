import React from "react";
import {Userimage} from "./Userimage/Userimage";
import s from './InfoUser.module.css';
import {Usertext} from "./Usertext/Userimage";

export const InfoUser = () => {
    return (
        <div className={s.infouser}>
            <Userimage/>
            <Usertext/>
        </div>

    )
}