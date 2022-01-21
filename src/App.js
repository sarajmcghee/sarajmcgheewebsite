import React, { Component } from 'react';
import Navigation from './components/NavbarComponent';
import Footer from "./components/FooterComponent";
import BodyComponent from "./components/BodyComponent";
// import logo from './assets/gif/Logo.gif'
import lion from './assets/images/lion.png'
import './App.css';

class App extends Component {

    render() {

        return (
            <div className="App">
                
                <Navigation/>
                {/* <a style={{display: "table-cell"}} rel="noreferrer" href="https://www.linkedin.com/in/sara-mcghee/" target= "_blank" > <img class="selectableImg" src={lion} alt="loading..." /></a> */}
                {/* <img src={logo} alt="loading..." /> */}
                <div className="container">
                <div className="row">
                <div className="m-auto">
                <BodyComponent/>
                </div>
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;