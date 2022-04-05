import Im from "../../../Images/IMG_3192.JPG";
import React from "react";
import './InfoUser.css';

export const InfoUser = () => {
    return (
        <div className="content__infouser">
            <div className="info__userimage">
                <img src={Im} alt=""/>
            </div>
            <div className="info__useritems">
                <div className="username">Artsiom Broslavsky</div>
                <p>Date of Birth: October, 15</p>
                <p>City: Minsk</p>
                <p>Education: BNTU'12</p>
                <a className="web" href="#">Web Site: https://github.com/Artsiomik</a>
            </div>
        </div>

    )
}