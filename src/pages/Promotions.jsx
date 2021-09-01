import React from 'react'
import Bread from '../components/Bread/Bread'
import API from "../utils/api";
import {API_URL} from "../utils/env";
import {Link} from 'react-router-dom'
export default function Promotions(props) {
    const [data, setData] = React.useState([]);
    const [currentLang,setLang]=React.useState(props.lang)
    console.log(props.lang)
    console.log(currentLang)
    if(props.lang!=currentLang)
    {
        setLang(props.lang)
            API.get(`/promotions?lang=${props.lang}`)
                .then(res => {
                    setData(res.data?.promotions?.data || [])
                })
        
    }

    React.useEffect(() => {
        API.get(`/promotions?lang=${currentLang}`)
            .then(res => {
                setData(res.data?.promotions?.data || [])
            })
    }, []);

    return (
        <div>
            <div className="container">

                <Bread lang={props.lang}/>
                {props.lang==="ru"&&<h1 className="Page_heading">акции и события</h1>}
                {props.lang==="en"&&<h1 className="Page_heading">promo and events</h1>}
                {props.lang==="kz"&&<h1 className="Page_heading">акциялар мен шаралар</h1>}
                <div className="row">
                    <div className="promotions">
                        {data.map((item, index) => (
                            <Link to={`/${currentLang}/promotions/${index}`}   className="prom">
                                <div className="prom_poster container" Style="background-color:white">
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
