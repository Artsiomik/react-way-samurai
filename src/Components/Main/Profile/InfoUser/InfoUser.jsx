import Im from "../../../Images/IMG_3192.JPG";
import React from "react";
import s from './InfoUser.module.css';

export const InfoUser = () => {
    return (
        <div className={s.infouser}>
            <div className={s.userimage}>
                <img src={Im} alt=""/>
            </div>
            <div className={s.useritems}>
                <div className={s.username}>Artsiom Broslavsky</div>
                <p className={s.text}>Date of Birth: October, 15</p>
                <p className={s.text}>City: Minsk</p>
                <p className={s.text}>Education: BNTU'12</p>
                <a className={s.web} href="#">Web Site: https://github.com/Artsiomik</a>
            </div>
        </div>

    )
}