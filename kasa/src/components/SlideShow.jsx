import ArrowLeft from '../assets/arrow_left.png';
import ArrowRight from '../assets/arrow_right.png';
import '../styles/SlideShow.scss';


import React, { useState } from 'react';

const ImageSlider = ({ images = [] }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider">
            <div className='slider-button'>
                <img className="slider-img" src={ArrowLeft} alt='preview button' onClick={prevImage} />
                <img className="slider-img" src={ArrowRight} alt='next button' onClick={nextImage} />
            </div>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-pic" />
        </div>
    );
};

export default ImageSlider;
