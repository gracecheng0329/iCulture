import React from 'react'
import {Card} from 'antd'
import Moment from 'react-moment';
import {Link} from 'react-router-dom'

function EventItem (props:any) {
    const {item} = props
    const {actName,address,startTime,endTime,imageUrl} = item
    return (
        <>
            <Link to=''>
            <Card
                    hoverable
                    style={{ width: 350 , margin:'1rem'}}
                    cover={<img alt="example" src={`https://cloud.culture.tw${imageUrl}`} className='img'/>}
                 >
                <p className='title'>{actName}</p>
                <p>{address}</p>
                <Moment format="YYYY/MM/DD">
                {startTime}
                </Moment>~
                <Moment format="YYYY/MM/DD">
                    {endTime}
                </Moment>
            </Card>
            </Link>
        </>
    )
}

export default EventItem