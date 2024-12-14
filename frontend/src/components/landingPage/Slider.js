import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const slides = [
        {
            src: 'https://wallpapercave.com/wp/wp4110691.jpg',
            title: 'Welcome to HabitatT',
            tagline: 'Connecting Tenants or Clients and Property Owners'
        },
        {
            src: 'https://wallpapercave.com/uwp/uwp4209888.jpeg',
            title: 'Find Your Perfect Home',
            tagline: 'Explore the best properties in the market'
        },
        {
            src: 'https://wallpapercave.com/wp/wp4012680.jpg',
            title: 'Easy Communication',
            tagline: 'Seamless communication with property owners'
        },
        {
            src: 'https://wallpapercave.com/wp/wp4110681.jpg',
            title: 'Professional Management',
            tagline: 'Efficient and reliable property management'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: true,
    };

    return (
        <Slider {...settings} className="mt-3">
            {slides.map((slide, index) => (
                <div key={index} className="position-relative">
                    <img
                        className="img-fluid"
                        src={slide.src}
                        alt={`slide-${index}`}
                        style={{ height: 630, objectFit: 'cover', width: '100%' }}
                    />
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-4 py-2">
                        <h1 className="fw-bold">{slide.title}</h1>
                        <p className="fs-5">{slide.tagline}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
