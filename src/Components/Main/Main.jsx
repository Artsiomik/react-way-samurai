import React from "react";
import './Main.css';
import {SideBar} from "./Sidebar/SideBar";
import {Profile} from "./Profile/Profile";

export const Main = () => {
    return (
        <main className="main">
            <SideBar/>
            <Profile/>
        </main>
    )
}