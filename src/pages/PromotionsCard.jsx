import React from 'react'
import API from "../utils/api";
import {API_URL} from "../utils/env";
import { useParams } from 'react-router-dom';
import "../components/Bread/Bread.scss"
export default function PromotionsCard() {
    const [data, setData] = React.useState([])
    let { id } = useParams();

    React.useEffect(() => {
        API.get(`/promotions` )
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
                <a href="/promotions">Акции и события</a>
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
