import React from 'react'
import Tabs from '../components/Tabs/Tabs'
import Bread from '../components/Bread/Bread'
import API from '../utils/api';

export default function Store(props) {
    
    return (
        <div>
            
            <div className="container">
                <Bread />
                <h1 className="Page_heading">Фуд-Корты</h1>
            </div>
            <Tabs tab={props.tab} showTabs={false} />
            
        </div>
    )
}
