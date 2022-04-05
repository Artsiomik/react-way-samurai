import React from "react";
import s from "./Usertext.module.css";
import {Text} from "./Text/Userimage";

export const Usertext = () => {
    return (
        <div className={s.usertext}>
            <div className={s.username}>Artsiom Broslavsky</div>
            <Text/>
            {/*<p className={s.text}>City: Minsk</p>*/}
            {/*<p className={s.text}>Education: BNTU'12</p>*/}
            <a className={s.web} href="#">Web Site: https://github.com/Artsiomik</a>
        </div>
    )
}