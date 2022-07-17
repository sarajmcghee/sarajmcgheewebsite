import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import lion from '../assets/images/lion.png'
import parrot from '../assets/images/parrot.jpg'


class DrawingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNavbar: null
        };
    }


    render() {

        return (
            <UncontrolledCarousel color = "dark" variant="dark"
                items={[
                    {
                        altText: 'Slide 1',
                        key: 1,
                        src: lion
                    },
                    {
                        altText: 'Slide 2',
                        key: 2,
                        src: lion
                    },
                    {
                        altText: 'Slide 3',
                        key: 3,
                        src: parrot
                    }
                ]}
            />
        );
    }
}

export default DrawingComponent;