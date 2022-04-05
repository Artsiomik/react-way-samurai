import React from "react";
import Profile from '../../../Images/Profile1.png';

import s from './SideBarItem.module.css'

export const SideBarItem = () => {
    return (
        <li>
            <img className={s.abgreyd} src={Profile} alt=""/>
            <a href="#" className={s.link}>Profile</a>
        </li>

    )
}