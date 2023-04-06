import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider0 from "../../assets/slide-00.jpg";
import slider1 from "../../assets/slide-01.jpg";
import slider2 from "../../assets/slide-02.jpg";
import slider3 from "../../assets/slide-03.jpg";
import slider4 from "../../assets/slide-04.jpg";
import slider5 from "../../assets/slide-05.jpg";

const SilderPage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((sliderIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  const images = [
    slider0,
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer">
        <FaArrowRight onClick={onClick} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer">
        <FaArrowLeft onClick={onClick} />
      </div>
    );
  };

  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings} >

        {
          images.map(image => <div >
            <img src={image} alt="" />
          </div>
          )
        }
      </Slider>

    </div>
  );
};

export default SilderPage;