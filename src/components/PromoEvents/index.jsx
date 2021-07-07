import React from 'react'
import "./styles.scss"

export default function PromoEvents() {
    return (
        <div className="promo-events">
            <div className="container">
                <div className="row">
                    <h1 className="heading">акции и события</h1>

                    <div className="boxes">
                        <div className="main-box"></div>
                        <div className="wrapper">
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                    </div>

                    <div className="more">
                        <a href="#">Перейти в <b>акции и события</b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
