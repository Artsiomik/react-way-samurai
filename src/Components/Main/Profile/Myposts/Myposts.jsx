import React from "react";
import s from './Myposts.module.css';
import {Textarea} from "./Textarea/Textarea";
import {Button} from "./Button/Button";
import {Message} from "./Message/Message";

export const Myposts = () => {
    return (
        <div className={s.myposts}>
            <div className={s.title}>My posts</div>
            <Textarea/>
            <Button/>
            <div className={s.mypostsout}>
                <Message/>
                {/*<div className={s.messages}>*/}
                {/*    <img className={s.round} src={Avatar} alt=""/>*/}
                {/*    <div className={s.arrow}></div>*/}
                {/*    <div className={s.tx}>It's our new program! Hey!</div>*/}
                {/*</div>*/}
                {/*<div className={s.messages}>*/}
                {/*    <img className={s.round} src={Avatar} alt=""/>*/}
                {/*    <div className={s.arrow}></div>*/}
                {/*    <div className={s.tx}>Life is good! And live well!</div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}