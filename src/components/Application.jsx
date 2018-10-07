import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import NavBar from './NavBar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Application = () => (
    <BrowserRouter>
        <div>
            <NavBar/>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default Application;