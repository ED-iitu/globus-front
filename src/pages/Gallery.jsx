import React from 'react'
import API from "../utils/api";
import Bread from '../components/Bread/Bread'
import {API_URL} from "../utils/env";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import "../components/Bread/Bread.scss"
export default function Gallery() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        API.get(`/promotions`)
            .then(res => {
                setData(res.data?.promotions?.data || [])
            })
    }, []);

    return (
        <div>
            <div className="container">

                <Bread />
                <h1 className="Page_heading">Галерея</h1>

                <div className="row">
                    <div className="promotions">
                        {data.map((item, index) => (
                            <Link to={`/promotions/${index}`}   className="prom">
                                <div className="prom_poster" Style="background-color:white">
                                    <img src={API_URL+item.image} class="col-lg-12" alt="" />
                                </div>
                                <div className="prom_info">
                                    <p className="prom_date">{new Date(item.created_at).toLocaleDateString()}</p>
                                    <h4 className="prom_title">{item.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
