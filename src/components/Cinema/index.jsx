import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Cinema.scss"
import kino from "../../utils/kino";
import axios from 'axios';
export default function Cinema() {
    const [cinemas, setData] = React.useState([]);
    var config = {
        headers: {'authority': 'kino.kz',
        'pragma' : 'no-cache' ,
        'cache-control': 'no-cache',
        'accept': '*/*' ,
        'sec-fetch-site': 'same-origin' ,
        'sec-fetch-mode': 'cors' ,
        'sec-fetch-dest': 'empty' ,
        'referer': 'https://kino.kz/cinemas' ,
        'accept-language': 'en-US,en;q=0.9' 
        //'cookie: _ga=GA1.2.263691977.1627916051; _gid=GA1.2.1232347940.1627916051; _ym_uid=1627916051462045989; _ym_d=1627916051; _ym_isad=2; __gads=ID=9b828edcf72432b6-22d5459a92c800d7:T=1627916052:S=ALNI_MYhZpdxoyfMmRFqkXB_ko3mKaThTg'
    }
    };
    React.useEffect(() => {
       axios.get(`https://kino.kz/api/cinema/sessions?cinemaId=119&date=2021-08-02`,config)
            .then(res => {
                setData(res.data)
                
            })
    }, []);
    console.log(cinemas)
    
    const responsive = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 20
          },
          mobile: {
            breakpoint: { max: 464, min: 350 },
            items: 1,
            partialVisibilityGutter: '20px'
          }
      };
    
    React.useEffect(() => {
        // if(window.innerWidth < 786) {
        //     settings.slidesToShow = 1
        // }
    }, [])

    const list = [{
            title:"Сумерки. Сага. Часть 1",
            poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
        },{
            title:"Сумерки. Сага. Часть 2",
            poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
        },{
            title:"Сумерки. Сага. Часть 3",
            poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
        },{
            title:"Сумерки. Сага. Часть 4",
            poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
        },{
            title:"Сумерки. Сага. Часть 5",
            poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
    },]
    return (
        <div className="cinema">
            <div className="container">
                <div className="row">
                    <h1 className="heading">кинотеатр kinopark 4</h1>

                </div>
                <div className="carousel-wrapper">
                    <Carousel responsive={responsive} itemClass="block">
                        {list.map((item, i) => (
                            <div key={i}>
                                <div className="cinema__block">
                                    <div className="bg" style={{backgroundImage: `url(${item.poster})`}}></div>
                                    <div className="info-block">
                                        <p className="title">{item.title}</p>
                                        <button className="btn">Смотреть расписание</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
