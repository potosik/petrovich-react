import React from 'react';
import {Route} from 'react-router';
import SideBar from './SideBar';
import View_1 from './View-1';
import View_2 from './View-2';

const Content = () => {
    return (
        <div className="page-content pt-0">
            <SideBar/>

            <div className="content-wrapper">
                <div className="content">
                    <Route exact={true} path="/" component={View_1}/>
                    <Route path="/view" component={View_2}/>
                </div>
            </div>
        </div>
    );
};

export default Content;