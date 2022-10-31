import React from 'react'
import Banner from './../components/Banner/Banner'
import PromoEvents from './../components/PromoEvents'
import Cinema from './../components/Cinema'
import Tabs from './../components/Tabs/Tabs'
import API from './../utils/api';
import "./../styles/pages/main-page.scss"

export default function Main(props) {
    const [data, setData] = React.useState([])
    const [currentLang,setLang]=React.useState(props.lang)
    if(props.lang!=currentLang)
    {
        setLang(props.lang)
        API.get(`/additional?lang=${props.lang}`)
            .then(res => {
                setData(res.data?.data)
            })
    }
    React.useEffect(() => {
        API.get(`/additional?lang=${currentLang}`)
            .then(res => {
                setData(res.data?.data)
            })
    }, [])
    return (
        
        <div>
            <Banner />
            { props.lang==="ru"&&<div className="info">
            <div className="info_block">
                    <h2 className="info_title">адрес</h2>
                    <div className="icon adress"></div>
                    <p className="info_text">г. Алматы, пр. Абая, 109В <br /> уг. ул. Ауэзова</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">ВРЕМЯ РАБОТЫ</h2>
                    <div className="icon time"></div>
                    <p className="info_text">Ежедневно без выходных <br /> с 10:00 до 22:00</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">карта молла</h2>
                    <div className="icon map"></div>
                    <p className="info_text">Интерактивная карта молла <br /><a href="/map">Смотреть карту</a></p>
                </div>
            </div>}
            { props.lang==="en"&&<div className="info">
            <div className="info_block">
                    <h2 className="info_title">Adress</h2>
                    <div className="icon adress"></div>
                    <p className="info_text">Almaty,Abay Avenue,109V <br /> corner Auezov street</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">Work time</h2>
                    <div className="icon time"></div>
                    <p className="info_text">Every day without days off <br /> from 10:00 to 22:00</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">Mall map </h2>
                    <div className="icon map"></div>
                    <p className="info_text">Mall's interactive map<br/><a href="/map">see the map</a></p>
                </div>
            </div>}
            { props.lang==="kz"&&<div className="info">
            <div className="info_block">
                    <h2 className="info_title">Мекенжай</h2>
                    <div className="icon adress"></div>
                    <p className="info_text">Алматы,Абай данғылы,109В <br /> Әуезов көшесінің бұрышы</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">Жұмыс уақыты</h2>
                    <div className="icon time"></div>
                    <p className="info_text">Демалыссыз күн сайын <br /> сағат 10.00 -ден 22.00 -ге дейін</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">Карта ТРЦ</h2>
                    <div className="icon map"></div>
                    <p className="info_text">Ойын-сауық орталығының картасы<a href="/map">Картаны көру</a></p>
                </div>
            </div>}
            <PromoEvents lang={props.lang} />
            <Cinema lang={props.lang} />
            <Tabs tab={props.tab} showTabs={true} lang={props.lang} />

                <div className="inter-map">
                    <div className="container">
                        <div className="row">
                           {props.lang==="ru"&& <div className="left">
                                <h1 className="heading">интерактивная <br /> карта</h1>
                                <a href="/map" className="link-to-map">перейти в интерактивную карту</a>
                            </div>}
                            {props.lang==="en"&& <div className="left">
                                <h1 className="heading">interactive <br /> map</h1>
                                <a href="/map" className="link-to-map">see the map</a>
                            </div>}
                            {props.lang==="kz"&& <div className="left">
                                <h1 className="heading">интерактивті <br /> карта</h1>
                                <a href="/map" className="link-to-map">интерактивті картаны қарау</a>
                            </div>}
                            {props.lang==="ru"&&<div className="right">
                            {data.map((item, i) => (
                        <p className="text">{item.description}</p>
                    ))}

                                <a href="/map" className="link-to-map mobile">перейти в интерактивную карту</a>
                            </div>}
                            {props.lang==="en"&&<div className="right">
                            {data.map((item, i) => (
                        <p className="text">{item.description}</p>
                    ))}

                                <a href="/map" className="link-to-map mobile">see the map</a>
                            </div>}
                            {props.lang==="kz"&&<div className="right">
                            {data.map((item, i) => (
                        <p className="text">{item.description}</p>
                    ))}
                                <div className='inter-map'>
                                    <a href="/map" className="link-to-map mobile"> интерактивті картаны қарау</a>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        )


}
