import React from 'react'

import miniso from './../assets/miniso.png'
import map from './../assets/map.svg'


export default function StoreCard() {
    return (
        <div className="store-card">
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card__top">
                            {/* <img src={miniso} alt="ICON" /> */}
                            <div className="card__poster" style={{backgroundImage: `url(${miniso})`}}></div>
                            <div className="card__info">
                                <span className="card__bread"><a href="/">Главная</a> / <a href="/store">магазины</a></span>
                                <h3 className="card__title">miniso</h3>
                                <span className="card__subtitle">1 этаж</span>
                                <span className="card__subtitle">10:00-22:00</span>
                            </div>
                        </div>
                        <div className="btn green" onClick={() => alert('Show MAP!')}>
                            <div className="icon" style={{backgroundImage: `url(${map})`}}></div>
                            <p>карта трц</p>
                        </div>
                        <p className="card__text">Mauris odio egestas at nunc non. Tincidunt vitae scelerisque sapien, est lacus. Sodales amet vivamus consectetur sollicitudin arcu. Ac faucibus in interdum volutpat nunc cursus risus. Dignissim erat laoreet tempus, id enim, massa. Nisl cras molestie pellentesque nisl vitae posuere sed. Nisl vitae, varius integer sed vel urna. Adipiscing tempus tellus, dolor, purus. Libero cursus nibh purus quam blandit porttitor ipsum sit.</p>
                        <div className="btn-wrapper">
                            <div className="btn green" onClick={() => alert('Show MAP!')}>
                                <div className="icon" style={{backgroundImage: `url(${map})`}}></div>
                                <p>на сайт бренда</p>
                            </div>
                            <div className="btn green only" onClick={() => alert('Show MAP!')}>
                                <div className="icon " style={{backgroundImage: `url(${map})`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
