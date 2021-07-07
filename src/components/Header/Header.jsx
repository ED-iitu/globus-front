import React, {useState ,useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Icon from "./../../assets/icon.svg"
import "./Header.scss"

function Header({props}) {
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
                        <p>+7 727 356 15 15</p>
                    </div>
                    <div className="social">
                        <a href="#" className="social__icon fb"></a>
                        <a href="#" className="social__icon ins"></a>
                        <a href="#" className="social__icon vk"></a>
                    </div>
                    <div className="block location">
                        <div className="icon aim"></div>
                        <p>Абая, 108в</p>
                    </div>
                    <div className="block time-interval">
                        <div className="icon clock"></div>
                        <p>10:00 - 22:00</p>
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