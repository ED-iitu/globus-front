import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "./Tabs.scss"
import {
  useLocation
} from "react-router-dom";
import { API_URL } from './../../utils/env';

import miniso from './../../assets/miniso.png'
import serebr from './../../assets/serebr.png'
import lcw from './../../assets/lcw.png'
import huawei from './../../assets/huawei.png'
import valav from './../../assets/valav.png'
import locc from './../../assets/locc.png'
import load from './../../assets/load.svg'
import map from './../../assets/map.svg'
import API from "../../utils/api";

export default function Tabs(props) {
    const location = useLocation()
    const [slcTab, setTab] = useState()
    console.log(props.tab)
    const [tabs, setTabs] = React.useState([])
    React.useEffect(() => {
        API.get(`/facilities/getByCategory`)
            .then(res => {
                setTab(res.data?.items[props.tab])
                setTabs(res.data?.items)
            })
    }, [])
    console.log(slcTab)
    const content = {
        stores: [
            {
                title: 'Miniso',
                slug: 'miniso',
                poster: miniso,
                level: 1
            },{
                title: 'Serebroff',
                slug: 'serebroff',
                poster: serebr,
                level: 1
            },{
                title: 'LC Waikiki',
                slug: 'lcwikiki',
                poster: lcw,
                level: 1
            },{
                title: 'Huawei',
                slug: 'huawei',
                poster: huawei,
                level: 1
            },{
                title: 'MilaVitsa',
                slug: 'milavitsa',
                poster: valav,
                level: 1
            },{
                title: 'L’occitane',
                slug: 'loccitane',
                poster: locc,
                level: 1
            }
        ],
        food: [
            {
                title: 'Huawei',
                slug: 'huawei',
                poster: huawei,
                level: 1
            },{
                title: 'Serebroff',
                slug: 'serebroff',
                poster: serebr,
                level: 1
            },{
                title: 'LC Waikiki',
                slug: 'lcwikiki',
                poster: lcw,
                level: 1
            },{
                title: 'L’occitane',
                slug: 'loccitane',
                poster: locc,
                level: 1
            }
        ],
        services: [
            {
                title: 'Miniso',
                slug: 'miniso',
                poster: miniso,
                level: 1
            },{
                title: 'Serebroff',
                slug: 'serebroff',
                poster: serebr,
                level: 1
            },{
                title: 'LC Waikiki',
                slug: 'lcwikiki',
                poster: lcw,
                level: 1
            }
        ],
        fun: [
            {
                title: 'Serebroff',
                slug: 'serebroff',
                poster: serebr,
                level: 1
            },{
                title: 'LC Waikiki',
                slug: 'lcwikiki',
                poster: lcw,
                level: 1
            },{
                title: 'Huawei',
                slug: 'huawei',
                poster: huawei,
                level: 1
            },{
                title: 'Miniso',
                slug: 'miniso',
                poster: miniso,
                level: 1
            },{
                title: 'L’occitane',
                slug: 'loccitane',
                poster: locc,
                level: 1
            }
        ],
    }

    const getContent = (slug) => {
        return content[slug]
    }

    useEffect(() => {
        location.pathname === "/store" ? setTab(tabs[0]) : setTab(tabs[1])
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
                                <Link to={`/store/${item.id}`}  className="blocks-wrapper" key={i}>
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
