import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import NavBar from '../../components/root/NavBar';
import Header from '../../components/root/Header';
import Content from '../../components/root/Content';
import Footer from '../../components/root/Footer';

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