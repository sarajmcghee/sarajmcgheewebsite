import React, { Component, ImageBackground } from 'react';

import DrawingComponent from "./DrawingComponent";
import WeeklyUpdateComponent from "./WeeklyUpdateComponent";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


import banner from '../assets/images/background.PNG' ;
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
                    <div style={{
                        backgroundImage: { banner }
                    }}>
                        <Card>
                            <CardImg width="100%" src={me} alt="me" />
                            <CardImgOverlay>
                                <CardTitle>Sara McGhee</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div class="col col-lg-8">
                        <DrawingComponent />
                    </div>
                </div>
                <div className="row p-4">

                </div>
                <div className="row justify-content-md-center">
                    <div class="col col-lg-8">
                        <WeeklyUpdateComponent />
                    </div>
                </div>
                <div className="row p-5">

                </div>
            </div>
        );
    }
}

export default BodyComponent;