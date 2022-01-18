import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Footer = () => (
    <footer className="footer">
        <Navbar color="light" variant="light" light>
            <NavbarBrand style={{display: "table-cell"}} href="https://www.linkedin.com/in/sara-mcghee/" target= "_blank">Linkdin</NavbarBrand>
        </Navbar>
    </footer>
);

export default Footer;