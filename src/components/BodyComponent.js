import React, { Component, ImageBackground } from 'react';

import DrawingComponent from "./DrawingComponent";
import WeeklyUpdateComponent from "./WeeklyUpdateComponent";
import WelcomeComponent from "./WelcomeComponent";
import { Card, CardImg, CardImgOverlay, CardTitle, Jumbotron, Button, Container } from 'reactstrap';


import banner from '../assets/images/background.PNG';
import me from '../assets/images/me.jpeg';


class BodyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null
        };
    }


    render() {

        return (
            <div className="container">
                <div className="row p-5">
                </div>
                <div className="row justify-content-md-center">
                    <div className="col justify-self-center">
                        <WelcomeComponent />
                    </div>
                </div>
                <div className="row p-5">
                </div>
                {/* <div className="row justify-content-md-center">
                    <div class="col col-lg-8">
                        <DrawingComponent />
                    </div>
                </div>

                <div className="row p-5">
                </div>
                <div className="row justify-content-md-center">
                    <div class="col col-lg-8">
                        <WeeklyUpdateComponent />
                    </div>
                </div>
                <div className="row p-5">

                </div> */}
            </div>
        );
    }
}

export default BodyComponent;