import React from 'react';
import {NavLink} from "react-router-dom";

const SideBarGroupItem = ({item}) => (
    <li className={'nav-item'}>
        <NavLink
            exact={item.exact}
            to={item.path}
            className="nav-link"
            activeClassName="active">
            {item.title}
        </NavLink>
    </li>
);

export default SideBarGroupItem;