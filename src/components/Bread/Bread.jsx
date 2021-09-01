import React, {useState} from 'react'
import "./Bread.scss"

export default function Bread(props) {
    return (
        <div className="bread">
            <div className="bread__link">
                {props.lang==="ru"&&<a href="/ru">главная</a>}
                {props.lang==="en"&&<a href="/en">main page</a>}
                {props.lang==="kz"&&<a href="/kz">Негізгі бет</a>}
                <span>/</span>
            </div>
        </div>
    )
}
