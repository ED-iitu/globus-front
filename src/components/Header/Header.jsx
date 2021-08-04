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
  console.log(location.pathname);
    React.useEffect(() => {
        API.get(`/contact/info`)
            .then(res => {
                setData(res.data?.info)
                console.log(contacts);
            })
    }, []);
    
    const [isMenuActive, setMenu] = useState(false)
    const [menuItem, setMenuItem] = useState()
    const menu = [
        {
            title: "ГЛАВНАЯ",
            url: '/',
        },{
            title: "О НАС",
            url: '/about',
        },{
            title: "КАРТА ТРЦ",
            type: 'absolute',
            url: '/map',
        },{
            title: "МАГАЗИНЫ",
            url: '/store',
        },{
            title: "АКЦИИ",
            url: '/promotions',
        },{
            title: "ФУД-КОРТЫ",
            url: '/food-cort',
        },{
            title: "АРЕНДАТОРАМ",
            url: '/tenants'
        },{
            title: "КОНТАКТЫ",
            url: '/contacts'
        },{
            title: "ФОТОГАЛЕРЕЯ",
            url: '/gallery'
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
            url: '/en/map',
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
                        <a href="tel:+77273561515">{contacts.phone}</a>
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
                        <a href="#" className="lang__item">KZ</a>
                        <a href="#" className="lang__item active">RU</a>
                        <a href="#" className="lang__item">EN</a>
                    </div>
                    <div className="logo"></div>
                </div>
            </div>
            <nav className="nav-menu">
                <div className="container">
                    <div className="row">
                        <ul className={`menu ${isMenuActive?'show':''}`}>
                            {menu.map((item, i) => (
                                <li className={`menu__item ${item.url === location.pathname? 'active':''}`} key={i}>
                                    {item.type == "absolute" ? <a href="/map">{item.title}</a> :<Link to={`${item.url}`} >{item.title}</Link>}
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