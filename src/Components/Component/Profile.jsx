import React from "react";
import Im from '../Images/IMG_3192.JPG';
import Avatar from '../Images/IMG_3192.JPG';
import '../CSS/Profile.css';
export const Profile = () => {
    return (
        <section className="content">
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
            <div className="content__myposts">
                <div className="myposts__title">My posts</div>
                <div className="myposts__info">
                    <form action="">
                        <textarea name="text">your news...</textarea>
                    </form>
                </div>
                <div className="button">
                    <button>Send</button>
                </div>
                <div className="content__mypostsout">
                    <div className="messages">
                        <img className="round" src={Avatar} alt=""/>
                        <div className="arrow"></div>
                        <div className="tx">Hey, why nobody love me?</div>
                    </div>
                    <div className="messages">
                        <img className="round" src={Avatar} alt=""/>
                        <div className="arrow"></div>
                        <div className="tx">It's our new program! Hey!</div>
                    </div>
                    <div className="messages">
                        <img className="round" src={Avatar} alt=""/>
                        <div className="arrow"></div>
                        <div className="tx">Life is good! And live well!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}