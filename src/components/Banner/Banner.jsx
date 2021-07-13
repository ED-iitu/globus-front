import React from 'react'
import Slider from 'infinite-react-carousel';
import "./Banner.scss"
import API from "../../utils/api";
import banner from './../../assets/banner1.jpg'
import { API_URL } from './../../utils/env';

export default function Banner() {
    const [slides, setData] = React.useState([]);

    React.useEffect(() => {
        API.get(`/banners`)
            .then(res => {
                setData(res.data?.banners || [])
            })
    }, []);

    const settings =  {
        centerMode: true,
        className: 'wrapper',
        centerPadding: 10,
        arrows: false,
        arrowsBlock: false,
        dots: true
    };

    if (slides.length > 0) {
        return (
            <div className="Banner">
                <Slider { ...settings }>
                    {slides.map((item, index) => (
                        <div className="img" data-index={index} key={index}>
                            <img src={API_URL + item.url} alt=""/>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    } else {
        return (
            <div className="Banner">
                <Slider { ...settings }>
                    <div className="img">
                        <img src={banner} alt=""/>
                    </div>
                </Slider>
            </div>
        )
    }

}
