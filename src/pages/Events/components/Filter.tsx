import React, {useEffect, useState} from 'react'
// @ts-ignore
import { Button , Input} from 'antd';
import {useEventContext} from "../../../Context/EventContext";
import {getEventDetails} from "../../../Service/EventService";

const { Search } = Input;

function Filter () {
    const { data, setData , viewFilter , setViewFilter } = useEventContext()

    // buttons display
    let newData = [...data]
    // useEffect(()=>{
        newData.map((item:any)=>{
            return item.cityName = item.cityName.substring(0,3)
        })
        const set = new Set()
        let result = newData.filter((item:any)=>!set.has(item.cityName)?set.add(item.cityName):false)
        // setViewFilter(result)
    // },[])

    const choose = (city:string) =>{
        console.log('newData',newData)
        let filterArea = viewFilter.filter((item:any)=>{

            return item.cityName.indexOf(city) !== -1
        })
        setViewFilter(filterArea)
    }

    const onSearch = (value:string) => console.log(value);

    return (
        <>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
            <div className="container">
                <Button onClick={()=>{getEventDetails().then((item:any)=>{
                    setViewFilter(item)
                })}}>全部</Button>
                {result?.map((item:any,index:number)=>{
                    return (<Button key={item.actId} onClick={()=>{choose(item.cityName)}}>{item.cityName}</Button>)
                })}
            </div>

        </>
    )
}

export default Filter