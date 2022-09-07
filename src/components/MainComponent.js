import React, { Component } from 'react';

import Home from './HomeComponent';
import About from "./components/WeeklyUpdateComponent";
import WeeklyUpdateComponent from "./components/WeeklyUpdateComponent";


import { Routers, Route, Redirect, Router } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {




        return (
            <div>

                <Routers>
                <Route path='/home' element={<Home />} />
                    <Route exact path='/weeklyupdate' element={<WeeklyUpdateComponent />} />
                    <Route exact path='/about' element={<About />} />
                    <Redirect to= '/home'/>
                    
                </Routers>

            </div>
        );
    }
}

export default Main;