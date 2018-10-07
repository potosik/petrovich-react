import React from 'react';

import logo_light from '../assets/img/logo_light.png';
import placeholder from '../assets/img/placeholders/placeholder.jpg';

const NavBar = () => (
    <div className="navbar navbar-expand-md navbar-dark">
        <div className="navbar-brand wmin-200">
            <a href="/" className="d-inline-block">
                <img src={logo_light} alt=""/>
            </a>
        </div>

        <div className="d-md-none">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
                <i className="icon-tree5"/>
            </button>

            <button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
                <i className="icon-paragraph-justify3"/>
            </button>
        </div>

        <div className="collapse navbar-collapse" id="navbar-mobile">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                        <i className="icon-paragraph-justify3"/>
                    </a>
                </li>
            </ul>

            <ul className="navbar-nav ml-md-auto">
                <li className="nav-item dropdown dropdown-user">
                    <a href="#" className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
                        <img src={placeholder} className="rounded-circle" alt=""/>
                        <span>Артем Потоцкий</span>
                    </a>

                    <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item">
                            <i className="icon-cog5"/> Сменить пароль
                        </a>

                        <a href="#" className="dropdown-item">
                            <i className="icon-switch2"/> Выход
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

export default NavBar;