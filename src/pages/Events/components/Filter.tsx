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
        newData.map((item:any)=>{
            return item.cityName = item.cityName.substring(0,3)
        })
        const set = new Set()
        let result = newData.filter((item:any)=>!set.has(item.cityName)?set.add(item.cityName):false)

    const choose = (city:string) =>{
        let filterArea = newData.filter((item:any)=>{

            return item.cityName.indexOf(city) !== -1
        })
        setViewFilter(filterArea)
    }
    const compareNumbers = (a:number, b:number):any => {
        return a - b
    }

    const sort = () =>{
        data.map((item:any)=>{
            const stime = Date.parse(item.startTime)
        })

        // data.sort(compareNumbers(data.))
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
                    return (
                        <Button key={item.actId}
                                onClick={()=>{choose(item.cityName)}}>{item.cityName}</Button>
                    )
                })}
            </div>
            <p>時間排序</p>
            <Button>由近到遠</Button>

        </>
    )
}

export default Filter