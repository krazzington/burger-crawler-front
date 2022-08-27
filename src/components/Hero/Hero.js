import React from "react";
import "./Hero.scss";
import Slider from "react-slick";
import { Burgers } from "../Helper/Helper";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {Burgers.map((burger, index) => {
          return (
            <img
              key={index}
              className={`hero__burgerPics hero__burgerPics-${index}`}
              src={burger.burger}
              alt="burgers"
            ></img>
          );
        })}
      </Slider>
    </div>
  );
};
export default Hero;
