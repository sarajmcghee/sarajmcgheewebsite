import React, { Component } from 'react';
import { Media } from 'reactstrap';


import Closeup from '../assets/images/Closeup.png';
import DrawingComponent from './DrawingComponent';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null
        };
    }


    render() {

        return (

            <div>
                <div className="jumbotron jumbotron-billboard">
                    <div className="img"></div>
                    <div className="container" >
                        < div className="row">

                            <div className="col jumbotron col-md-8 col-lg-8 align-self-center">
                                <h1 className=" text-dark  jumbo_text">Welcome.</h1>
                                <p className="lead text-dark">My name is Sara McGhee, I'm a software engineer based in Chattanooga, Tennesee, USA  </p>
                                <p className="bottomlead text-dark">I'm passionate about cutting-edge innovations and interfaces that have a simple but intuative user experience.</p>
                            </div>

                            <div className="col alight-self-center">
                                <Media object src={Closeup} alt='closeup' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default WelcomeComponent;