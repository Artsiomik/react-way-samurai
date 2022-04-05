import React from 'react';
import logo from '../Images/Logo1.png';
import '../CSS/Header.css';

export const Header = () => {
    return (
        <header className="header">
            <a href="" className="header__logo"><img src={logo} alt="logo"/></a>
            <div className="logo__text">the World</div>
            <div className="title">My First App</div>
        </header>
    )
}
