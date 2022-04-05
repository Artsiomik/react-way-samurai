import React from "react";
// import Profile from '../../Images/Profile1.png';
import Messages from '../../Images/messages1.jpg';
import News from '../../Images/news1.jpg';
import Music from '../../Images/music1.jpg';
import Settings from '../../Images/settings1.jpg';
import s from './SideBar.module.css'
import {SideBarItem} from "./SidebarItem/SideBarItem";

export const SideBar = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.menu}>
                <ul className={s.list}>
                    <SideBarItem/>
                    {/*<li>*/}
                    {/*    <img className="abgreyd" src={Messages} alt=""/>*/}
                    {/*    <a href="#" className="sidebar__link">Messages</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <img className="abgreyd" src={News} alt=""/>*/}
                    {/*    <a href="#" className="sidebar__link">News</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <img className="abgreyd" src={Music} alt=""/>*/}
                    {/*    <a href="#" className="sidebar__link">Music</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <img className="abgreyd" src={Settings} alt=""/>*/}
                    {/*    <a href="#" className="sidebar__link">Settings</a>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </aside>
    )
}