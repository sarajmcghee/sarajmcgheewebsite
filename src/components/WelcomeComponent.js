import React, { Component } from 'react';
import { Jumbotron, Container, Media } from 'reactstrap';

import me from '../assets/images/me.jpeg';
import Closeup from '../assets/images/Closeup.png';

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
                <div class="jumbotron jumbotron-billboard">
                    <div class="img"></div>
                    <div class="container" >
                        < div className="row">
                            <div className="col  col-md-8 col-lg-8 align-self-center">
                                <h1 className="display-3 text-dark  jumbo_text">Welcome.</h1>
                                <p className="lead text-dark">My name is Sara McGhee, I'm a software engineer based in Chattanooga, Tennesee, USA  </p>
                                <p className="bottomlead text-dark">I'm passionate about cutting-edge innovations and interfaces that have a simple but intuative user experience.</p>
                            </div>
                            <div class="col alight-self-center">
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