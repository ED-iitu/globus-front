import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Cinema.scss"
import kino from "../../utils/kino";
import axios from 'axios';
import API from "../../utils/api";
export default function Cinema(props) {
    const [cinemas, setData] = React.useState([]);
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzcC5raW5vcGFyayIsInN1YiI6Imdsb2J1cy5wcm9kIiwibmFtZSI6ImFmaXNoYS50ZXN0In0.vOHcPMJqiKrAo95PFyfv3LF3lvwaZqmfaGmKSmC7rvI";

    React.useEffect(() => {
        axios.get(`https://afisha.api.kinopark.kz/api/movie/today?date_from=&date_to=&sort=seance.start_time&cinema=03edce61-39b8-427c-9aa8-48296a37f227&dial_timeout=5s&request_timeout=5s&retries=0`,
        {headers: {
            'Authorization': `Bearer ${token}`
          }})
            .then(res => {
                setData(res.data?.data)
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
            title:"Тайна Сен-Тропе",
            poster: "https://cdn.kino.kz/movies/Myst_re___Saint-Tropez/p599x300.jpg"
        },{
            title:"Круиз по Джунглям",
            poster: "https://cdn.kino.kz/movies/Jungle_Cruise/p599x300.jpg"
        },{
            title:"Космический джем",
            poster: "https://cdn.kino.kz/movies/Space_Jam__A_New_Legacy/p599x300.jpg"
        },{
            title:"Чёрная вдова",
            poster: "https://cdn.kino.kz/movies/Black_Widow/p599x300.jpg"
        },{
            title:"Проклятье пиковой дамы",
            poster: "https://cdn.kino.kz/movies/Queen_of_Spades/p599x300.jpg"
    },]
    return (
        <div className="cinema">
           {props.lang==="ru"&& <div className="container">
                <div className="row">
                    <h1 className="heading">кинотеатр kinopark 4</h1>

                </div>
                <div className="carousel-wrapper">
                    <Carousel responsive={responsive} itemClass="block">
                        {cinemas.map((item, i) => (
                            <div key={i}>
                                <div className="cinema__block">
                                    <div className="bg" style={{backgroundImage: `url(${item.images.vertical})`}}></div>
                                    <div className="info-block">
                                        <p className="title">{item.name}</p>
                                        <a href="https://kino.kz/cinema/82" className="btn">Смотреть расписание</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>}
            {props.lang==="en"&& <div className="container">
                <div className="row">
                    <h1 className="heading">Cinema kinopark 4</h1>

                </div>
                <div className="carousel-wrapper">
                    <Carousel responsive={responsive} itemClass="block">
                        {cinemas.map((item, i) => (
                            <div key={i}>
                                <div className="cinema__block">
                                    <div className="bg" style={{backgroundImage: `url(${item.images.vertical})`}}></div>
                                    <div className="info-block">
                                        <p className="title">{item.name}</p>
                                        <a href="https://kino.kz/cinema/82" className="btn">Watch the schedule</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>}
            {props.lang==="kz"&& <div className="container">
                <div className="row">
                    <h1 className="heading">кинотеатр kinopark 4</h1>

                </div>
                <div className="carousel-wrapper">
                    <Carousel responsive={responsive} itemClass="block">
                        {cinemas.map((item, i) => (
                            <div key={i}>
                                <div className="cinema__block">
                                    <div className="bg" style={{backgroundImage: `url(${item.images.vertical})`}}></div>
                                    <div className="info-block">
                                        <p className="title">{item.name}</p>
                                        <a href="https://kino.kz/cinema/82" className="btn">Кестені қараңыз</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>}
        </div>
    )
}
