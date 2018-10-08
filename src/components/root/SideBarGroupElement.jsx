import React from 'react';
import SideBarGroupItem from "./SideBarGroupItem";

const SideBarGroupElement = ({element, match}) => {
    const isActiveElement = match.url.startsWith(element.path);
    const activeClass = isActiveElement ? 'nav-item-open' : '';
    const activeStyle = isActiveElement ? {'display': 'block'} : {};

    return (
        <li className={'nav-item nav-item-submenu ' + activeClass}>
            <a href="#" className="nav-link">
                <i className={element.iconClass}/>
                <span>{element.title}</span>
            </a>

            <ul className="nav nav-group-sub" style={activeStyle} data-submenu-title={element.title}>
                {
                    element.routes.map(route => (
                        <SideBarGroupItem key={route.path} item={route}/>
                    ))
                }
            </ul>
        </li>
    );
}

export default SideBarGroupElement;