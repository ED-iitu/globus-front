import React from 'react'
import API from "../utils/api";
export default function Tenants() {
    const [renters, setData] = React.useState([]);

    React.useEffect(() => {
        API.get(`/renter/info`)
            .then(res => {
                setData(res.data?.data)
            })
    }, []);
    return (
        <div className="container tenants">
            <div className="row">
                <div className="Page_top">
                    <h1 className="Page_heading">арендаторам</h1>
                    <div className="call">
                        <a href="tel:+77273561515">+7 (727) 356 15 15</a>
                        <div className="icon tel"></div>
                    </div>
                </div>
                <div className="article-wrapper">
                    {renters.map((item,i)=>(
                         <div className="article">
                         <h3 className="article_title">{item.title}</h3>
                         <p className="article_text">{item.description}</p>
                     </div>
                    ))}
                </div>
                <form className="form">
                    <input type="text" placeholder="Ваше имя"/> <br />
                    <input type="text" placeholder="Номер телефона"/> <br />
                    <input type="text" placeholder="Ваша почта"/> <br />
                    <button className="submit-btn">Отправить</button>
                    <div className="tenants-bg"></div>
                </form>
            </div>
        </div>
    )
}
