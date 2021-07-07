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

export default function Tabs(props) {
    const location = useLocation()
    const [slcTab, setTab] = useState()
    const tabs = [{
        id: "001",
        title: "МАГАЗИНЫ",
        slug: 'stores',
        count: 44
    },{
        id: "002",
        title: "ЕДА",
        slug: 'food',
        count: 10
    },{
        id: "003",
        title: "УСЛУГИ",
        slug: 'services',
        count: 21
    },{
        id: "004",
        title: "РАЗВЛЕЧЕНИЯ",
        slug: 'fun',
        count: 2
    },]

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
    }


    return (
        <div className="container">
            <div className="row">
                <div className="tabs">
                    {props.showTabs && <div className="tabs__header">
                        {tabs.map((item, i) => (
                            <div className={`tab ${ slcTab? (item.id == slcTab.id ? 'active':''):'' }`} key={i} onClick={() => handleTabs(item)}>
                                <span className="tab__title">{item.title}</span>
                                <span className="count">{item.count}</span>
                            </div>
                        ))}
                    </div>}
                    <div className="tabs__content">
                        {props.tab.map((item, i) => (
                            // <div className="blocks-wrapper" key={i} style={{backgroundImage: `url(/static/media/${item.poster})`}}>
                            // <Link to={`${item.url}`} >{item.title}</Link>
                            <Link to={`/store/${item.category_id}`}  className="blocks-wrapper" key={i}>
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
                        <div className="btn green" onClick={() => alert('Show MAP!')}>
                            <div className="icon" style={{backgroundImage: `url(${map})`}}></div>
                            <p>карта трц</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
