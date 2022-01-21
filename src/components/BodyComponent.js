import React, { Component } from 'react';
import Link from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import lion from '../assets/images/lion.png'


class BodyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null
        };
    }


    render() {

        return (


                <Card>
                    <CardImg top src={lion} alt="lion" className="body_image" />
                     {/* <a style={{ display: "table-cell" }} rel="noreferrer" href="https://www.linkedin.com/in/sara-mcghee/" target="_blank" > <img class="body_image" src={lion} alt="loading..." /></a> */}

                </Card>


                       
                

        );
    }
}

export default BodyComponent;