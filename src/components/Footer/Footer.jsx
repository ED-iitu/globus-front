import React from 'react'
import {Link} from 'react-router-dom'
import Icon from "./../../assets/footer-tel.svg"
import "./Footer.scss"

export default function Footer() {
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
                            <Link to="/">Преимущества</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/">Акции и мероприятия</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/">Фуд-корты</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/">Кинотеатр</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/">Интерактивная карта</Link>
                        </li>
                    </ul>
                    <div className="info">
                        <div className="social">
                            <a href="#" className="social__item fb"></a>
                            <a href="#" className="social__item ins"></a>
                            <a href="#" className="social__item vk"></a>
                        </div>
                        <div className="tel">
                            <img src={Icon} alt="" />
                            <p>+7 727 356 15 15</p>
                        </div>
                        <div className="info-block">
                            <p>050000, Казахстан <br /> Алматы, ул. Абая, 108b</p>
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