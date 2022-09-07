import { Routes, Route } from "react-router-dom";

import React, { Component } from 'react';
import Home from '../components/HomeComponent';
import About from "../components/AboutComponent";
import Projects from "../components/ProjectsComponent";


export default class routerURL extends Component {
    render() {
        return (

            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/weeklyupdate' element={<Projects />} />
                <Route exact path='/about' element={<About />} />

            </Routes>

        );
    }
}