import React from 'react'
import API from "../utils/api";
import Bread from '../components/Bread/Bread'
import {API_URL} from "../utils/env";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import "../components/Bread/Bread.scss"


export default function Gallery(props) {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        API.get(`/gallery/list?lang`)
            .then(res => {
                setData(res.data?.data)
            })
    }, [])
    console.log(data)
    return (
        <div>
            <div className="container">

                <Bread lang={props.lang}/>
                {props.lang!=="en"&&<h1 className="Page_heading">Галерея</h1>}
                {props.lang==="en"&&<h1 className="Page_heading">Gallery</h1>}
                <div className="row">
                    <div className="promotions">
                        {data.map((item, index) => (
                            <Link to={`/${props.lang}/gallery/${item.id}`}   className="prom">
                                <div className="prom_poster" Style="background-color:white;overflow:hidden;">
                                    <img src={API_URL+item.image} class="col-lg-12" alt="" />
                                </div>
                                <div className="prom_info">
                                    <p className="prom_date">{new Date(item.date).toLocaleDateString()}</p>
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
