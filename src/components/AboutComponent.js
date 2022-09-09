import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import DrawingComponent from './DrawingComponent';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null
        };
    }

    render() {

        return (
            <div className="container">
                <div className="row">

                </div>
                <div className="row">
                    <div className="col">
                        <Card>
                            <CardHeader className="bg-dark text-white"><h3>Facts At a Glance</h3></CardHeader>
                            <CardBody>
                                <dl className="row text-black blockquote">
                                <dd className="col-12 text-dark">When starting this daunting task of how to introduce myself I was given these sets of instrucitons:</dd>
                                <dd className="col-12 text-dark">Consider the context of the introduction</dd>
                                <dd className="col-12 text-dark">Use positive body language</dd>
                                <dd className="col-12 text-dark">Give a little information about who you are</dd>
                                <dd className="col-12 text-dark">Ask questions</dd>
                                
                                    {/* <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2016</dd>
                                <dt className="col-6">No. of Campsites in 2019</dt>
                                <dd className="col-6">563</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">4388</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">42</dd> */}
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row p-5">
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-8">
                        <DrawingComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card>
                            <CardHeader className="bg-dark text-white"><h3>Professional Experience</h3></CardHeader>
                            <CardBody>
                                <dl className="row text-black blockquote">
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>
                                <dd className="col-12 text-dark">I'm Sara McGhee, and I design websites for small buisnesses.  While I'm currently based in Chattanooga, Tennessee, I help build websites for businesses all over the world.</dd>

                                    {/* <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2016</dd>
                                <dt className="col-6">No. of Campsites in 2019</dt>
                                <dd className="col-6">563</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">4388</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">42</dd> */}
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row p-5">
                </div>

                <div className="row">
                    <div className="col">
                        <Card className="bg-dark">
                            <CardBody>
                                <blockquote className="blockquote">
                                    <p className="mb-0">“If you can’t make something self-evident, you at least need to make it self-explanatory.”</p>
                                    <footer className="blockquote-footer">Steve Krug{' '}
                                        <cite title="Source Title"> Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability, 2013</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row p-5">
                </div>
                <div className="row">
                    <div className="col">
                        <Card className="bg-dark">
                            <CardBody>
                                <blockquote className="blockquote">
                                    <p className="mb-0">“Sooner or later the Narrative will come for each of us.”</p>
                                    <footer className="blockquote-footer">John Scalzi{' '}
                                        <cite title="Source Title"> Redshirts, 2012</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row p-5">
                </div>
            </div>

        );
    }
}

export default About;