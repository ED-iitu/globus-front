import React, {useState ,useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Icon from "./../../assets/icon.svg"
import "./Header.scss"
import API from "../../utils/api";
import { API_URL } from './../../utils/env';
import { useLocation } from 'react-router-dom'
function Header({props}) {
    const [contacts, setData] = React.useState([]);
    const location = useLocation();
    const [currentLang, setcurrentlang] = useState(location.pathname.split(/\//)[1])
    const [loc,setlocation]= useState('/'+location.pathname.split(/\//)[2]);
    console.log(location.pathname.split(/\//)[1])
    console.log(location.pathname.split(/\//)[2])
  var CurrentLang="ru";
    console.log(loc)
    if(currentLang=="")
    {
       setcurrentlang("ru")
    }
    if(loc=="/undefined")
    {
        setlocation("/")
    }
    React.useEffect(() => {
        API.get(`/contact/info?lang=${currentLang}`)
            .then(res => {
                setData(res.data?.info)
               // console.log(contacts);
            })
    }, []);
    console.log(currentLang)
    const [isMenuActive, setMenu] = useState(false)
    const [menuItem, setMenuItem] = useState()
    const menu = [
        {
            title: "ГЛАВНАЯ",
            url: '/ru/',
        },{
            title: "О НАС",
            url: '/ru/about',
        },{
            title: "КАРТА ТРЦ",
            type: 'absolute',
            url: '/map',
        },{
            title: "МАГАЗИНЫ",
            url: '/ru/store',
        },{
            title: "АКЦИИ",
            url: '/ru/promotions',
        },{
            title: "ФУД-КОРТЫ",
            url: '/ru/food-cort',
        },{
            title: "АРЕНДАТОРАМ",
            url: '/ru/tenants'
        },{
            title: "КОНТАКТЫ",
            url: '/ru/contacts'
        },{
            title: "ФОТОГАЛЕРЕЯ",
            url: '/ru/gallery'
        }
    ]
    const menu_kz = [
        {
            title: "Негізгі бет",
            url: '/kz/',
        },{
            title: "Біз туралы",
            url: '/kz/about',
        },{
            title: "Карта Трц",
            type: 'absolute',
            url: '/map',
        },{
            title: "Дүкендер",
            url: '/kz/store',
        },{
            title: "Акциялар",
            url: '/kz/promotions',
        },{
            title: "Мейрамханалар",
            url: '/kz/food-cort',
        },{
            title: "Жалгерлерге",
            url: '/kz/tenants'
        },{
            title: "Контакттар",
            url: '/kz/contacts'
        },{
            title: "Галерея",
            url: '/kz/gallery'
        }
    ]
    const menu_en = [
        {
            title: "Main page",
            url: '/en/',
        },{
            title: "About Us",
            url: '/en/about',
        },{
            title: "Map",
            type: 'absolute',
            url: '/map',
        },{
            title: "Boutiques",
            url: '/en/store',
        },{
            title: "Promo",
            url: '/en/promotions',
        },{
            title: "Food Courts",
            url: '/en/food-cort',
        },{
            title: "For Tenants",
            url: '/en/tenants'
        },{
            title: "Contact Us",
            url: '/en/contacts'
        },{
            title: "Gallery",
            url: '/en/gallery'
        }
    ]
    useEffect(() => {
        setMenu(false)
        setMenuItem(location.pathname)

    },[location.pathname])

    const handleBurger = () => {
        setMenu(!isMenuActive)
    }
    const changeLang=(lang)=>{
        setcurrentlang(lang);
        console.log(currentLang);
            API.get(`/contact/info?lang=${lang}`)
                .then(res => {
                    setData(res.data?.info)
                })
        
    }
    const changeLoc=(location)=>{
        if(location.split(/\//)[2]!=0)
        setlocation('/'+location.split(/\//)[2])
        else
        {
            setlocation("/")
        }
        console.log(location.split(/\//)[2])
        console.log(loc)
    }
    return (
        <header className="header">
            <div className="container">
                <div className="row top-header">
                    <button className={`burger ${isMenuActive? 'active':''}`} onClick={handleBurger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="tel">
                        <img src={Icon} alt="" />
                        <a href="tel:+77273561515">+7 (727) 356 15 15</a>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/pages/category/Shopping-Mall/%D0%A2%D0%A0%D0%A6-Globus-907269146129668/" className="social__icon fb"></a>
                        <a href="https://www.instagram.com/globus_trc/?hl=ru" className="social__icon ins"></a>
                       {/* <a href="#" className="social__icon vk"></a>*/}
                    </div>
                    <div className="block location">
                        <div className="icon aim"></div>
                        <p>{contacts.address}</p>
                    </div>
                    <div className="block time-interval">
                        <div className="icon clock"></div>
                        <p>{contacts.work_time}</p>
                    </div>
                    <div className="lang">
                        <Link to={`/kz${loc}`} className={`lang__item ${currentLang==="kz" ? 'active':''}`}><span onClick={()=>changeLang("kz")}>KZ</span></Link>
                        <Link to={`/ru${loc}`} className={`lang__item ${currentLang==="ru" ? 'active':''}`}><span onClick={()=>changeLang("ru")}>RU</span></Link>
                        <Link to={`/en${loc}`} className={`lang__item ${currentLang==="en" ? 'active':''}`}><span onClick={()=>changeLang("en")}>EN</span></Link>
                    </div>
                    <div className="logo"></div>
                </div>
            </div>
            <nav className="nav-menu">
                <div className="container">
                    <div className="row">
                        <ul className={`menu ${isMenuActive?'show':''}`}>
                            {currentLang==="ru"&& menu.map((item, i) => (
                                <li className={`menu__item ${item.url === location.pathname? 'active':''}`} key={i}>
                                    {item.type == "absolute" ? <a href="/map">{item.title}</a> :<Link to={`${item.url}`} ><span onClick={()=>changeLoc(item.url)}>{item.title}</span></Link>}
                                </li>
                            ))}{ currentLang==="en" && menu_en.map((item, i) => (
                                <li className={`menu__item ${item.url === location.pathname? 'active':''}`} key={i}>
                                    {item.type == "absolute" ? <a href="/map">{item.title}</a> :<Link to={`${item.url}`} ><span onClick={()=>changeLoc(item.url)}>{item.title}</span></Link>}
                                </li>
                            ))}{ currentLang==="kz" && menu_kz.map((item, i) => (
                                <li className={`menu__item ${item.url === location.pathname? 'active':''}`} key={i}>
                                    {item.type == "absolute" ? <a href="/map">{item.title}</a> :<Link to={`${item.url}`} ><span onClick={()=>changeLoc(item.url)}>{item.title}</span></Link>}
                                </li>
                            ))}
                            {currentLang===""&& menu.map((item, i) => (
                                <li className={`menu__item ${item.url === location.pathname? 'active':''}`} key={i}>
                                    {item.type == "absolute" ? <a href="/map">{item.title}</a> :<Link to={`${item.url}`} ><span onClick={()=>changeLoc(item.url)}>{item.title}</span></Link>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        // <div>
        //     <Link to='/' >Main</Link>
        //     <Link to='/about' >About</Link>
        // </div>
    )
}


export default withRouter(Header);