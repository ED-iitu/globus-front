import React from 'react'
import "./styles.scss"
import API from "../../utils/api";
import { API_URL } from './../../utils/env';
import {Link} from 'react-router-dom'
export default function PromoEvents() {
    
    const [data, setData] = React.useState([]);
    const [firstdata,setfirstdata]=React.useState();
    React.useEffect(() => {
        API.get(`/promotions`)
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
                <div className="row">
                    <h1 className="heading">акции и события</h1>

                    <div className="boxes">
                        <Link to="/Promotions/0" className="main-box" Style="backgorund:#8DC100">
                        <img class="col-lg-12" alt="" src={API_URL+firstdata} />
                        </Link>
                        <div className="wrapper">
                        {data.map((item,index)=>(
                            index!=0&&
                            <Link to={`/promotions/${index}`} className="box" Style="backgorund:#8DC100">
                            <img class="col-lg-12" alt="" src={API_URL+item.image}/>
                            </Link>
                         ))}
                        </div>
                    </div>

                    <div className="more">
                        <a href="/Promotions">Перейти в <b>акции и события</b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
