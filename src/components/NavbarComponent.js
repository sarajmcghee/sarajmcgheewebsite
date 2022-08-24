import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Nav from 'reactstrap/lib/Nav';

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
                        <NavbarBrand >Sara McGhee</NavbarBrand>
                    </Nav>
                    <Nav className="ml-auto fs-5">
                        <NavbarBrand href="/">Projects</NavbarBrand>
                        <NavbarBrand href="/">About</NavbarBrand>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;