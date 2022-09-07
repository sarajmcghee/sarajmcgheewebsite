import React, { Component } from 'react';


import WelcomeComponent from "./WelcomeComponent";




class Home extends Component {
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

export default Home;