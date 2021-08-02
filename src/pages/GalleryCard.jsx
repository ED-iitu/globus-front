import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import Bread from '../components/Bread/Bread'
import {API_URL} from "../utils/env";
import API from "../utils/api";
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useParams } from 'react-router-dom';
export default function GalleryCard(){ 
    const [data, setData] = React.useState([]);
    const [datas, setDatas] = React.useState([]);
    let { ids } = useParams();
    console.log(`/gallery/${ids}`)
    React.useEffect(() => {
        API.get(`/gallery/${ids}` )
            .then(res => {
                setData(res.data?.data[0].images)
                setDatas(res.data?.data[0])
            })
    }, [])
    //console.log()
    return (
    
    <Gallery>
         <div className="container">
        <Bread />
             <h1 className="Page_heading">{datas.title}</h1>
             <p className="prom_date" Style="margin-top:48px">{new Date(datas.date).toLocaleDateString()}</p>
             <div className=" galimg">
                    <div className="row">
                    {data.map((item, index) => (
                <Item
                    original={API_URL+item}
                    thumbnail={API_URL+item}
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => (
                    <img className="col-lg-4 col-12" Style="margin-bottom:30px;"ref={ref} onClick={open} src={API_URL+item} />
                    )}
                    </Item>))}
            </div>
        </div>
    </div>
    </Gallery>
  )
        }