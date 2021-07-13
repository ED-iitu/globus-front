import React from 'react'
import map from './../assets/map.svg'
import API from "../utils/api";
import { API_URL } from '../utils/env';
import {Link} from 'react-router-dom'

import { useParams } from 'react-router-dom';


export default function StoreCard() {
    const [facility, setFacility] = React.useState([])
    let { slug } = useParams();

    React.useEffect(() => {
        API.get(`/facility?id=` + slug)
            .then(res => {
                setFacility(res.data?.facility)
            })
    }, [])


    return (
        <div className="store-card">
            <div className="container">
                <div className="row">
                
                    <div className="card col-lg-6">
                        <div className="card__top">
                            {/* <img src={miniso} alt="ICON" /> */}
                            <div className="card__poster" style={{backgroundImage: `url(${API_URL}${facility.logo})`}}></div>

                            <div className="card__info">
                                <span className="card__bread"><a href="/">Главная</a> / <a href="/store">магазины</a></span>
                                <h3 className="card__title">{facility.name}</h3>
                                <span className="card__subtitle">{facility.floor} этаж</span>
                                <span className="card__subtitle">{facility.work_time}</span>
                            </div>
                        </div>
                        <Link to="/map" className="btn green" >
                            <div className="icon" style={{backgroundImage: `url(${map})`}}></div>
                            <p>карта трц</p>
                        </Link>
                        <p className="card__text">{facility.description}</p>
                        <div className="btn-wrapper">
                            <div className="btn green" onClick={() => alert('Show MAP!')}>
                                <div className="icon" style={{backgroundImage: `url(${map})`}}></div>
                                <p>на сайт бренда</p>
                            </div>
                            <div className="btn green only" onClick={() => alert('Show MAP!')}>
                                <div className="icon " style={{backgroundImage: `url(${map})`}}></div>
                            </div>
                        </div>
                    </div>
                   {/*} <div className="col-lg-6 card_image">
                        <img src={`${API_URL}${facility.image}`} alt="" /> </div>*/}
               
             
                    
                
                </div>
            </div>
        </div>
    )
}
