import React from 'react'
import Bread from '../components/Bread/Bread'
import API from "../utils/api";
import {API_URL} from "../utils/env";

export default function Promotions() {
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
                <h1 className="Page_heading">акции и события</h1>

                <div className="row">
                    <div className="promotions">
                        {data.map((item, index) => (
                            <div className="prom">
                                <div className="prom_poster" style={{backgroundImage: `url(${API_URL}${item.image})`}}></div>
                                <div className="prom_info">
                                    <p className="prom_date">{new Date(item.created_at).toLocaleDateString()}</p>
                                    <h4 className="prom_title">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
