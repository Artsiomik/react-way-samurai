import React from "react";
import '../CSS/Main.css';
import {SideBar} from "./SideBar";
import {Profile} from "./Profile";

export const Main = () => {
    return (
        <main className="main">
            <SideBar/>
            <Profile/>
        </main>
    )
}