import React, {useEffect, useState} from 'react'
import {getEventDetails} from '../../Service/EventService'
import {useEventContext} from '../../Context/EventContext'
import EventItem from "./components/EventItem";
import Filter from "./components/Filter";
import {Card} from "antd";
const { Meta } = Card;

function Events (){
    const {data,setData} = useEventContext()
    // const [data, setData] = useState([])

    useEffect(()=>{
        getEventDetails().then((item:any)=>{
            setData(item)
        })
    },[])


    return (
        <>
            <Filter/>
            <div className='container'>
            {data.map((item:any,index:number)=> {
                return (
                        <EventItem item={item} key={item.actId}/>
                )
                }
            )}
            </div>
        </>
    )
}
export default Events