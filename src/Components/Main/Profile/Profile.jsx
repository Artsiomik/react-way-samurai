import React from "react";
import './Profile.css';
import {InfoUser} from "./InfoUser/InfoUser";
import {Myposts} from "./Myposts/Myposts";

export const Profile = () => {
    return (
        <section className="content">
            <InfoUser/>
            <Myposts/>
        </section>
    )
}