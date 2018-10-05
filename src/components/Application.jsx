import React from 'react';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

import View_1 from "./View-1";
import View_2 from "./View-2";

const Application = () => (
    <BrowserRouter>
        <div>
            <NavBar/>
            <Header/>

            <div class="page-content pt-0">
                <Route exact={true} path="/" component={View_1}/>
                <Route path="/view" component={View_2}/>
            </div>

            <Footer/>
        </div>
    </BrowserRouter>
);

export default Application;