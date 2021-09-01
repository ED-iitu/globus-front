import React from 'react'
import Tabs from '../components/Tabs/Tabs'
import Bread from '../components/Bread/Bread'
import API from '../utils/api';

export default function Store(props) {
    console.log(props.lang)
    return (
        <div>
            
            <div className="container">
            <Bread lang={props.lang}/>
                {props.lang==="ru"&&<h1 className="Page_heading">Фуд-Корты</h1>}
                {props.lang==="en"&&<h1 className="Page_heading">Food-Courts</h1>}
                {props.lang==="kz"&&<h1 className="Page_heading">Мейрамханалар</h1>}
            </div>
            <Tabs tab={props.tab} showTabs={false} lang={props.lang} />
            
        </div>
    )
}
