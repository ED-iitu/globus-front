import React from 'react'
import map from './../assets/map.svg'
import web from './../assets/website.svg'
import inst from './../assets/Exclude.svg'
import API from "../utils/api";
import { API_URL } from '../utils/env';
import {Link} from 'react-router-dom'

import { useParams } from 'react-router-dom';


export default function StoreCard(props) {
    const [facility, setFacility] = React.useState([])
    let { slug } = useParams();
    
    React.useEffect(() => {
        API.get(`/facility?lang=${props.lang}&id=` + slug)
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
                            {props.lang==="ru"&&<span className="card__bread"><a href="/ru">Главная</a> /<a href="/ru/store">магазины</a> </span>}
                            {props.lang==="en"&&<span className="card__bread"><a href="/en">Main page</a> /<a href="/en/store">Shops</a> </span>}
                            {props.lang==="kz"&&<span className="card__bread"><a href="/kz">Негізгі бет</a> /<a href="/kz/store">Дүкендер</a> </span>}
                               
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
                            <a href={facility.web_url} className="btn green"Style="flex-basis:auto" >
                                <div className="icon"  style={{backgroundImage: `url(${web})`}}></div>
                                <p>на сайт бренда</p>
                            </a>
                            <a className="btn green only" Style="margin-left:10px" >
                                <div className="icon " style={{backgroundImage: `url(${inst})`}}></div>
                            </a>
                        </div>
                    </div>
                   {/*} <div className="col-lg-6 card_image">
                        <img src={`${API_URL}${facility.image}`} alt="" /> </div>*/}
               
             
                    
                
                </div>
            </div>
        </div>
    )
}
