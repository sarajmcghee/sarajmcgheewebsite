import React from 'react';

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

import { BrowserRouter as Router } from "react-router-dom";

import Main from './components/HomeComponent';
import Navigation from './components/NavbarComponent';
import Footer from "./components/FooterComponent";
import RouterURL from "./router/RouterURL";
import TagManager from 'react-gtm-module';


import './App.css';


const App = () => {


    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size

        await loadFull(main);
    };
    // const tagManagerArgs = {
    //     gtmId: 'G-6SDWWLTNHZ'
    // };

    // TagManager.initialize(tagManagerArgs);
    
    const particlesLoaded = (container) => {
        console.log(container);
    };
    
    return (
        <div className="App" >

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        // image: "url('https://particles.js.org/images/background3.jpg')",
                        color: {

                            value: "#000000",

                        },

                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            grab: {
                                distance: 400,
                                lineLinked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 100,
                                duration: 2,
                                opacity: 1,
                                speed: 2
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#000000",

                        },
                        links: {
                            //   color: "#ffffff",
                            color: "#808080",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    backgroundMask: {
                        enable: true,
                        cover: {
                            color: {
                                value: {
                                    "r": 255,
                                    "g": 255,
                                    "b": 255
                                }
                            }
                        }
                    },
                    detectRetina: true,
                }}
            />



            <Router>
                <Navigation />
                    <RouterURL />
                <Footer />
            </Router>


        </div>
    );
};


export default App;