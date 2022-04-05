import Avatar from "../../../Images/IMG_3192.JPG";
import React from "react";
import s from './Myposts.module.css';

export const Myposts = () => {
    return (
        <div className={s.myposts}>
            <div className={s.title}>My posts</div>
            <div>
                <textarea name="text">your news...</textarea>
            </div>
            <div className={s.button}>
                <button className={s.send}>Send</button>
            </div>
            <div className={s.mypostsout}>
                <div className={s.messages}>
                    <img className={s.round} src={Avatar} alt=""/>
                    <div className={s.arrow}></div>
                    <div className={s.tx}>Hey, why nobody love me?</div>
                </div>
                <div className={s.messages}>
                    <img className={s.round} src={Avatar} alt=""/>
                    <div className={s.arrow}></div>
                    <div className={s.tx}>It's our new program! Hey!</div>
                </div>
                <div className={s.messages}>
                    <img className={s.round} src={Avatar} alt=""/>
                    <div className={s.arrow}></div>
                    <div className={s.tx}>Life is good! And live well!</div>
                </div>
            </div>
        </div>
    )
}