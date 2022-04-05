import React from "react";
import avatar from '../../../../../Images/IMG_3192.JPG';
import s from './Avatar.module.css'

export const Avatar = () => {
    return (
        <>
            <img className={s.avatar} src={avatar} alt=""/>
        </>
    )
}