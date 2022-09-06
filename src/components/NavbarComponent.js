import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Nav from 'reactstrap/lib/Nav';
import WeeklyUpdateComponent from "./WeeklyUpdateComponent";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null
        };
    }


    render() {

        return (
            <div>
                <Navbar color="light" variant="light" light>
                    <Nav className="mr-auto">
                        <NavbarBrand  href="/">Sara McGhee</NavbarBrand>
                    </Nav>
                    <Nav className="ml-auto fs-5">
                        <NavbarBrand href="/weeklyupdate">Projects</NavbarBrand>
                        <NavbarBrand href="/about">About</NavbarBrand>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;