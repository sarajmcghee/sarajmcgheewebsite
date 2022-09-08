import { Routes, Route } from "react-router-dom";

import React, { Component } from 'react';
import Home from '../components/HomeComponent';
import Portfolio from "../components/PortfolioComponent";
import Services from "../components/ServicesComponent";
import Contact from "../components/ContactComponent";
import About from "../components/AboutComponent";

export default class routerURL extends Component {
    render() {
        return (

            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/portfolio' element={<Portfolio />} />
                <Route exact path='/services' element={<Services />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/about' element={<About />} />

            </Routes>

        );
    }
}