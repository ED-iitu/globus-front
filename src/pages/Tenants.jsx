import React from 'react'

export default function Tenants() {
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
                    <div className="article">
                        <h3 className="article_title">ТРЦ “Globus”</h3>
                        <p className="article_text">Торговый центр имеет общую площадь более 26 000 квадратных метров и считается одним из крупнейших в столице Казахстана. </p>
                        <p className="article_text">Ежедневно ТРЦ «Глобус» посещают тысячи гостей, что обеспечивает огромный поток покупателей в бутики и магазины центра. Если Вас интересует аренда бутиков в Алматы– это отличный вариант для прибыльной работы и процветания вашего бизнеса.</p>
                    </div>
                    <div className="article">
                        <h3 className="article_title">бЦ “стандарт”</h3>
                        <p className="article_text">Торговый центр имеет общую площадь более 26 000 квадратных метров и считается одним из крупнейших в столице Казахстана. </p>
                        <p className="article_text">Ежедневно ТРЦ «Глобус» посещают тысячи гостей, что обеспечивает огромный поток покупателей в бутики и магазины центра. Если Вас интересует аренда бутиков в Алматы– это отличный вариант для прибыльной работы и процветания вашего бизнеса.</p>
                    </div>
                </div>
                <form className="form">
                    <input type="text" placeholder="Ваше имя"/> <br />
                    <input type="text" placeholder="Номер телефона"/> <br />
                    <button className="submit-btn">Отправить</button>
                    <div className="tenants-bg"></div>
                </form>
            </div>
        </div>
    )
}
