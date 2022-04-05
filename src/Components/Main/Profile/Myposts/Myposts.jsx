import Avatar from "../../../Images/IMG_3192.JPG";
import React from "react";
import './Myposts.css';

export const Myposts = () => {
  return (
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
  )
}