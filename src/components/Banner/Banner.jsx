import React from 'react'
import Slider from 'infinite-react-carousel';
import "./Banner.scss"
import banner from './../../assets/banner1.jpg'

export default function Banner() {
    const settings =  {
        centerMode: true,
        className: 'wrapper',
        centerPadding: 10,
        arrows: false,
        arrowsBlock: false,
        dots: true
    };
    return (
        <div className="Banner">
            <Slider { ...settings }>
                <div className="img">
                    <img src={banner} alt="" />
                </div>
                <div className="img">
                    <img src={banner} alt="" />
                </div>
                <div className="img">
                    <img src={banner} alt="" />
                </div>
                <div className="img">
                    <img src={banner} alt="" />
                </div>
            </Slider>
        </div>
    )
}
