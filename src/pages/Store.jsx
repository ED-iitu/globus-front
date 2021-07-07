import React from 'react'
import Tabs from '../components/Tabs/Tabs'
import Bread from '../components/Bread/Bread'
import API from './../utils/api';

export default function Store({tab}) {
    const [facilities, setFacilities] = React.useState([])
    console.log(process.env.BASE_URL);
    React.useEffect(() => {
        API.get(`/facilities`)
            .then(res => {
                setFacilities(res.data?.facilities?.data)
            })
    }, [])


    return (
        <div>
            <div className="container">
                <Bread />
                <h1 className="Page_heading">Магазины</h1>
            </div>
            {facilities && <Tabs tab={facilities} showTabs={false} />}
            
        </div>
    )
}
