import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WhatsOnYourMind = ({ woym }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <h1 className="font-bold text-2xl px-10 py-6">What's on your mind?</h1>
            <Slider {...settings} className="px-10">
                {woym.map((i) => (
                    <div key={i.id} className="p-2">
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${i?.imageId}`} 
                             alt="image" 
                             width="150px" 
                             height="150px" 
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default WhatsOnYourMind;
