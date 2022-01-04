import React from "react";
import { Parallax } from 'react-parallax';
import bg from './img/4L7C5828.png'
import Button from 'react-bootstrap/Button'

const ParallaxEffect = () => {
    return (
        <div className="position-relative">
            <Parallax
                bgImage={bg}
                bgImageAlt="Parallax background"
                strength={200} >
                <div className="object-cover w-100 text-center parallaxCaption position-absolute top-50 start-50 translate-middle">
                    <div>
                        Software fueling digital marketing
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Button variant="green" className="py-2 button_custom">Learn more</Button>
                    </div>
                </div>
                <div style={{ height: '400px' }} />
            </Parallax>
        </div>
    )
}

export default ParallaxEffect;