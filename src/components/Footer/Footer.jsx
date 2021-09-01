import React from 'react'
import {Link} from 'react-router-dom'
import Icon from "./../../assets/footer-tel.svg"
import "./Footer.scss"
import API from "../../utils/api";
export default function Footer(props) {
    const [contacts, setData] = React.useState([]);
    const [currentLang,setLang]=React.useState(props.lang)
    if(props.lang!=currentLang)
    {
        setLang(props.lang)
        API.get(`/contact/info?lang=${props.lang}`)
            .then(res => {
                setData(res.data?.info)
                
            })
    }
    React.useEffect(() => {
        API.get(`/contact/info?lang=${props.lang}`)
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
                        <p>{contacts.phone}</p>
                    </div>
                    {props.lang ==="ru" &&<ul className="links">
                        <li className="links__item">
                            <Link to="/ru/about">Преимущества</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/ru/promotions">Акции и мероприятия</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/ru/food-cort">Фуд-корты</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/ru#cinema">Кинотеатр</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/map">Интерактивная карта</Link>
                        </li>
                    </ul>}
                    {props.lang ==="en" &&<ul className="links">
                        <li className="links__item">
                            <Link to="/en/about">Feauters</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/en/promotions">Promo and Events</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/en/food-cort">Food Courts</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/en#cinema">Cinema</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/map">Interactive map</Link>
                        </li>
                    </ul>}
                    {props.lang ==="kz" &&<ul className="links">
                        <li className="links__item">
                            <Link to="/kz/about">Ерекшеліктер</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/kz/promotions">Шаралар</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/kz/food-cort">Мейрамханалар</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/kz#cinema">Кинотеатр</Link>
                        </li>
                        <li className="links__item">
                            <Link to="/map">Карта</Link>
                        </li>
                    </ul>}
                    <div className="info">
                        <div className="social">
                        <a href="https://www.facebook.com/pages/category/Shopping-Mall/%D0%A2%D0%A0%D0%A6-Globus-907269146129668/" className="social__item fb"></a>
                        <a href="https://www.instagram.com/globus_trc/?hl=ru" className="social__item ins"></a>
                           {/* <a href="" className="social__item vk"></a> */}
                        </div>
                        <div className="tel">
                            <img src={Icon} alt="" />
                            <p>{contacts.phone}</p>
                        </div>
                        <div className="info-block">
                            {props.lang !=="en"&&<p>050000, Казахстан <br /> Алматы, {contacts.address}</p>}
                            {props.lang ==="en"&&<p>050000, Kazakhstan <br /> Almaty, {contacts.address}</p>}
                        </div>
                        <div className="info-block">
                        {props.lang ==="ru"&& <p>2021, Globus <br /> Все права защищены</p>}
                        {props.lang ==="en"&& <p>2021, Globus <br /> All rights reserved</p>}
                        {props.lang ==="kz"&& <p>2021, Globus <br /> Барлық құқықтар сақталған</p>}
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