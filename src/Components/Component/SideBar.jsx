import React from "react";
import Profile from '../Images/Profile1.png';
import Messages from '../Images/messages1.jpg';
import News from '../Images/news1.jpg';
import Music from '../Images/music1.jpg';
import Settings from '../Images/settings1.jpg';
import '../CSS/SideBar.css'

export const SideBar = () => {
  return (
      <aside className="sidebar">
        <nav className="sidebar__menu">
          <ul className="sidebar__list">
            <li>
              <img className="abgreyd" src={Profile} alt=""/>
              <a href="#" className="sidebar__link">Profile</a>
            </li>
            <li>
              <img className="abgreyd" src={Messages} alt=""/>
              <a href="#" className="sidebar__link">Messages</a>
            </li>
            <li>
              <img className="abgreyd" src={News} alt=""/>
              <a href="#" className="sidebar__link">News</a>
            </li>
            <li>
              <img className="abgreyd" src={Music} alt=""/>
              <a href="#" className="sidebar__link">Music</a>
            </li>
            <li>
              <img className="abgreyd" src={Settings} alt=""/>
              <a href="#" className="sidebar__link set">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
  )
}