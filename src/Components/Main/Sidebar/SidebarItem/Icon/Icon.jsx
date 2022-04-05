import React from "react";
import Profile from '../../../../Images/Profile1.png';

import s from './Icon.module.css'

export const Icon = () => {
    return (
        <>
            <img className={s.icon} src={Profile} alt=""/>
        </>
    )
}