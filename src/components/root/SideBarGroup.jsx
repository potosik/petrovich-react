import React from 'react';
import SideBarGroupElement from "./SideBarGroupElement";

const SideBarGroup = ({navGroup, match}) => (
    <>
        <li className="nav-item-header mt-0">
            <div className="text-uppercase font-size-xs line-height-xs">{navGroup.title}</div>
        </li>

        {
            navGroup.elements.map(element => (
                <SideBarGroupElement key={element.path} element={element} match={match}/>
            ))
        }
    </>
);

export default SideBarGroup;