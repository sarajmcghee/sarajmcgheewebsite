import React, { Component } from 'react';
import Navigation from './components/NavbarComponent';
import Footer from "./components/FooterComponent";
import BodyComponent from "./components/BodyComponent";



import './App.css';

class App extends Component {

    render() {

        return (
            <div className="App" >
                <Navigation />
                <BodyComponent />
                <Footer />
            </div>
        );
    }
}

export default App;