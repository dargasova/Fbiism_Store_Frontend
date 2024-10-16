import React, {useRef, useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const ImageCarousel = ({images}) => {
    const mainSlider = useRef(null);
    const thumbSlider = useRef(null);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(mainSlider.current);
        setNav2(thumbSlider.current);
    }, []);

    const mainSettings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        asNavFor: nav2,
        swipe: false,
        draggable: false,
    };

    const thumbSettings = {
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: Math.min(images.length, 5),
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: false,
        arrows: false,
        asNavFor: nav1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(images.length, 4),
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(images.length, 3),
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: Math.min(images.length, 2),
                },
            },
        ],
    };


    return (
        <div className="carousel-container">
            <Slider
                {...mainSettings}
                ref={mainSlider}
                className="main-slider"
            >
                {images.map((image, index) => (
                    <div key={index} className="main-slide">
                        <img
                            src={image.url}
                            alt={`Slide ${index + 1}`}
                            className="main-image"
                        />
                    </div>
                ))}
            </Slider>
            <Slider
                {...thumbSettings}
                ref={thumbSlider}
                className="thumb-slider"
            >
                {images.map((image, index) => (
                    <div key={index} className="thumb-slide">
                        <img
                            src={image.url}
                            alt={`Thumbnail ${index + 1}`}
                            className="thumb-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
