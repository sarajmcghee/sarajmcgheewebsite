import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Navigation extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     selectedNavbar: null
        // };
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {

        return (
            <div>
                <Navbar className="navbar-custom" sticky="top" expand="md" color="light" variant="light" light>
                    <Nav className="mr-auto">
                        <NavbarBrand href="/">Sara McGhee</NavbarBrand>
                    </Nav>

                    <Nav className="ml-auto fs-5">
                    
                        <NavbarToggler onClick={this.toggleNav} className="navbar-light" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <NavbarBrand href="/weeklyupdate">Projects</NavbarBrand>
                            <NavbarBrand href="/about">About</NavbarBrand>
                        </Collapse>
                    </Nav>
                </Navbar>
                {/* <Navbar color="light" variant="light" light>
                     <Nav className="mr-auto">
                         <NavbarBrand  href="/">Sara McGhee</NavbarBrand>
                     </Nav>
                     <Nav className="ml-auto fs-5">
                         <NavbarBrand href="/weeklyupdate">Projects</NavbarBrand>
                         <NavbarBrand href="/about">About</NavbarBrand>
                     </Nav>
                 </Navbar> */}
            </div>
        );
    }
}

export default Navigation;