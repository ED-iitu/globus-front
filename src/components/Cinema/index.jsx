import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Cinema.scss"

export default function Cinema() {
    
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
