import React from 'react'
import API from "../utils/api";
import {API_URL} from "../utils/env";
import { useParams } from 'react-router-dom';
import "../components/Bread/Bread.scss"
export default function PromotionsCard(props) {
    const [data, setData] = React.useState([])
    let { id } = useParams();
    const [currentLang,setLang]=React.useState(props.lang)
    console.log(props.lang)
    console.log(currentLang)
    if(props.lang!=currentLang)
    {
        setLang(props.lang)
            API.get(`/promotions?lang=${props.lang}`)
                .then(res => {
                    setData(res.data?.promotions?.data[id])
                    console.log(data)
                })
        
    }
    React.useEffect(() => {
        API.get(`/promotions?lang=${currentLang}` )
            .then(res => {
                setData(res.data?.promotions?.data[id])
            })
    }, [])
    console.log(data);
    return (
        <div>
            <div className="container">
            <div className="bread">
            <div className="bread__link">
                {props.lang==="ru"&&<a href="/ru/promotions">акции и события</a>}
                {props.lang==="en"&&<a href="/en/promotions">promo and events</a>}
                {props.lang==="kz"&&<a href="/kz/promotions">акциялар мен шаралар</a>}
                <span>/</span>
            </div>
        </div>
                <h1 className="Page_heading">{data.title}</h1>

                <div className="row">
                    <div className="promotions promocard">
                    <img src={API_URL+data.image} className="col-lg-12"/>
                    <div className="col-lg-12">
                    <p className="prom_date" Style="margin-top:48px">{new Date(data.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="col-lg-12">
                    <p className="promocard_text" Style="margin-top:13px">{data.description}</p>             
                    </div>
                              
                    </div>
                </div>
            </div>
        </div>
    )
}
