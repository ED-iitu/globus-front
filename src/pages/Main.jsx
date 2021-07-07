import React from 'react'
import Banner from './../components/Banner/Banner'
import PromoEvents from './../components/PromoEvents'
import Cinema from './../components/Cinema'
import Tabs from './../components/Tabs/Tabs'

import "./../styles/pages/main-page.scss"

export default function Main() {
    return (
        <div>
            <Banner />
            <div className="info">
                <div className="info_block">
                    <h2 className="info_title">адрес</h2>
                    <div className="icon adress"></div>
                    <p className="info_text">г. Алматы, пр. Абая, 52В <br /> уг. ул. Ауэзова</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">ВРЕМЯ РАБОТЫ</h2>
                    <div className="icon time"></div>
                    <p className="info_text">Ежедневно без выходных <br /> с 10:00 до 22:00</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">карта молла</h2>
                    <div className="icon map"></div>
                    <p className="info_text">Интерактивная карта молла <a href="/map">Смотреть карту</a></p>
                </div>
            </div>
            <PromoEvents />
            <Cinema />
            <Tabs tab={[]} showTabs={true} />

            <div className="inter-map">
                <div className="container">
                    <div className="row">
                        <div className="left">
                            <h1 className="heading">интерактивная <br /> карта</h1>
                            <a href="#" className="link-to-map">перейти в интерактивную карту</a>
                        </div>
                        <div className="right">
                            <p className="text">В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта освещают чрезвычайно интересные</p>
                            <p className="text">Мы вынуждены отталкиваться от того, что социально-экономическое.</p>
                            <a href="#" className="link-to-map mobile">перейти в интерактивную карту</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
