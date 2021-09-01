import React from 'react'
import "./styles.scss"
import API from "../../utils/api";
import { API_URL } from './../../utils/env';
import {Link} from 'react-router-dom'
export default function PromoEvents(props) {
    
    const [data, setData] = React.useState([]);
    const [firstdata,setfirstdata]=React.useState();
    const [currentLang,setLang]=React.useState(props.lang)
   // console.log(props.lang)
    //console.log(currentLang)
    if(props.lang!=currentLang)
    {
        console.log(currentLang)
        console.log(props.lang)
        setLang(props.lang)
        API.get(`/promotions?lang=${props.lang}`)
        .then(res => {
            setData(res.data?.promotions?.data || [])
            handleTabs(res.data?.promotions?.data[0].image)
        })
        
    }
    React.useEffect(() => {
        API.get(`/promotions?lang=${currentLang}`)
            .then(res => {
                setData(res.data?.promotions?.data || [])
                handleTabs(res.data?.promotions?.data[0].image)
            })
    }, []);
    const handleTabs = (item) => {
        setfirstdata(item)
    }
    

    return (
        <div className="promo-events">
            <div className="container">
               {props.lang==="ru"&&<div className="row">
                    <h1 className="heading">акции и события</h1>

                    <div className="boxes">
                        <Link to="/Promotions/0" className="main-box container" Style="backgorund:#8DC100">
                        <img class="col-lg-12" alt="" src={API_URL+firstdata} />
                        </Link>
                        <div className="wrapper">
                        {data.map((item,index)=>(
                            index!=0&&
                            <Link to={`/promotions/${index}`} className="box container" Style="backgorund:#8DC100">
                            <img class="col-lg-12" alt="" src={API_URL+item.image}/>
                            </Link>
                         ))}
                        </div>
                    </div>

                    <div className="more">
                        <a href="/promotions">Перейти в <b>акции и события</b></a>
                    </div>
                </div>}
                {props.lang==="kz"&&<div className="row">
                    <h1 className="heading">акциялар мен шаралар</h1>

                    <div className="boxes">
                        <Link to="/kz/promotions/0" className="main-box container" Style="backgorund:#8DC100">
                        <img class="col-lg-12" alt="" src={API_URL+firstdata} />
                        </Link>
                        <div className="wrapper">
                        {data.map((item,index)=>(
                            index!=0&&
                            <Link to={`/kz/promotions/${index}`} className="box container" Style="backgorund:#8DC100">
                            <img class="col-lg-12" alt="" src={API_URL+item.image}/>
                            </Link>
                         ))}
                        </div>
                    </div>

                    <div className="more">
                        <a href="/kz/promotions"><b>Акциялар мен шараларды</b> қарау</a>
                    </div>
                </div>}
                {props.lang==="en"&&<div className="row">
                    <h1 className="heading">Promo and Events</h1>

                    <div className="boxes">
                        <Link to="/en/promotions/0" className="main-box container" Style="backgorund:#8DC100">
                        <img class="col-lg-12" alt="" src={API_URL+firstdata} />
                        </Link>
                        <div className="wrapper">
                        {data.map((item,index)=>(
                            index!=0&&
                            <Link to={`/en/promotions/${index}`} className="box container" Style="backgorund:#8DC100">
                            <img class="col-lg-12" alt="" src={API_URL+item.image}/>
                            </Link>
                         ))}
                        </div>
                    </div>

                    <div className="more">
                        <a href="/en/promotions">See all <b>promo and events</b></a>
                    </div>
                </div>}
            </div>
        </div>
    )
}
