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
            <div className="container">
                <Navbar color="light" variant="light" light>
                    <Nav className="ml-auto">
                        <NavbarBrand href="/">Projects</NavbarBrand>
                        <NavbarBrand href="/">About Me</NavbarBrand>
                        {/* <div className="input-group">
                            <input type="search" className="form-control rounded" placeholder="Search"
                                aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" className="btn btn-outline-secondary">search</button>
                        </div> */}
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;