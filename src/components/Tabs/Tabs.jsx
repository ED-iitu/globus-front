import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "./Tabs.scss"
import {useLocation} from "react-router-dom";
import { API_URL } from './../../utils/env';
import load from './../../assets/load.svg'
import map from './../../assets/map.svg'
import API from "../../utils/api";

export default function Tabs(props) {
    const location = useLocation()
    const [slcTab, setTab] = useState()
    const [tabs, setTabs] = React.useState([])
    const [currentLang,setLang] = React.useState(props.lang)
   // console.log(props.lang)

    
    
    React.useEffect(() => {
        API.get(`/facilities/getByCategory?lang=${currentLang}`)
            .then(res => {
                setTab(res.data?.items[props.tab])
                setTabs(res.data?.items)
         
            })
    }, [])

    if(props.lang!=currentLang)
    {
        setLang(props.lang)
        API.get(`/facilities/getByCategory?lang=${props.lang}`)
        .then(res => {
            setTab(res.data?.items[props.tab])
            setTabs(res.data?.items)
           
                })
        
    }

    const getContent = (slug) => {
        return content[slug]
    }

    useEffect(() => {
        location.pathname === `/${currentLang}/store` ? setTab(tabs[0]) : setTab(tabs[1])
    }, [location])

    const handleTabs = (item) => {
        setTab(item)
        console.log(slcTab)

    }

    if(tabs.length > 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="tabs">
                        {props.showTabs && <div className="tabs__header">
                            {tabs.map((item, i) => (
                                <div className={`tab ${ slcTab? (item.id == slcTab.id ? 'active':''):'' }`} key={i} onClick={() => handleTabs(item)}>
                                    <span className="tab__title">{item.title}</span>
                                    <span className="count">{item.facility_count}</span>
                                </div>
                            ))}
                        </div>}
                        <div className="tabs__content">
                            {slcTab.facility.map((item, i) => (
                                // <div className="blocks-wrapper" key={i} style={{backgroundImage: `url(/static/media/${item.poster})`}}>
                                // <Link to={`${item.url}`} >{item.title}</Link>
                                <Link to={`/${currentLang}/store/${item.id}`}  className="blocks-wrapper" key={i}>
                                    <div className="block" style={{backgroundImage: `url(${API_URL}${item.logo})`}}>
                                        <div className="block__info">
                                            <span className="level">{item.floor} этаж</span>
                                            <p className="title">{item.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="tabs__footer">
                            <div className="btn" onClick={() => alert('Load more!')}>
                                <div className="icon" style={{backgroundImage: `url(${load})`}}></div>
                                <p>Загрузить еще</p>
                            </div>
                            <a href="/map">
                            <div className="btn green">
                                <div className="icon" style={{backgroundImage: `url(${map})`}}></div>
                                <p>карта трц</p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return [];
    }

}
