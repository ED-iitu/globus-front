import React from 'react'
import {Link} from 'react-router-dom'
import Icon from "./../../assets/footer-tel.svg"
import "./Footer.scss"
import API from "../../utils/api";
export default function Footer() {
    const [contacts, setData] = React.useState([]);
    React.useEffect(() => {
        API.get(`/contact/info`)
            .then(res => {
                setData(res.data?.info)
                
            })
    }, []);

    return (
        <footer className="footer">
            <div className="bg-block"></div>
            <div className="container d-flex">
                <div className="left-logo">
                    <div className="img"></div>
                </div>
                <div className="footer__content">
                    <div className="mob-tel">
                        <img src={Icon} alt="" />
                        <p>+7 727 356 15 15</p>
                    </div>
                    <ul className="links">
                        <li className="links__item">
                            <Link to="/about">Преимущества</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/promotions">Акции и мероприятия</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/food-cort">Фуд-корты</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/">Кинотеатр</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/map">Интерактивная карта</Link>
                        </li>
                    </ul>
                    <div className="info">
                        <div className="social">
                        <a href="https://www.facebook.com/pages/category/Shopping-Mall/%D0%A2%D0%A0%D0%A6-Globus-907269146129668/" className="social__item fb"></a>
                        <a href="https://www.instagram.com/globus_trc/?hl=ru" className="social__item ins"></a>
                            <a href="" className="social__item vk"></a>
                        </div>
                        <div className="tel">
                            <img src={Icon} alt="" />
                            <p>{contacts.phone}</p>
                        </div>
                        <div className="info-block">
                            <p>050000, Казахстан <br /> Алматы, {contacts.address}</p>
                        </div>
                        <div className="info-block">
                            <p>2021, Globus <br /> Все права защищены</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
/*
Преимущества
Акции и мероприятия
Фуд-корты
Кинотеатр
Интерактивная карта
*/