import React from 'react'
import { useEventContext } from "../Context/EventContext";
import { Space } from "antd";
import EventItem from './Events/components/EventItem'

function Fav () {
    const { fav } =useEventContext()

    return (
        <>
            <h2 className='heading'>我的最愛</h2>
            <div className='container'>
                <Space size='middle' wrap>
                    {fav?.map((item:any)=> <EventItem item={item} key={item.actId}/> )}
                </Space>
            </div>

        </>
    )
}

export default Fav