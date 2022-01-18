import React, { Component } from 'react';
import Navigation from './components/NavbarComponent';
import Footer from "./components/FooterComponent";
import './App.css';

class App extends Component {

    render() {

        return (
            <div className="App">
                <Navigation/>
                <Footer />
            </div>
        );
    }
}

export default App;