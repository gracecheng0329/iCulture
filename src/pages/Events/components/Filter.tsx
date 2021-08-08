import React, {useState} from 'react'
import { Button , Input} from 'antd';
import {useEventContext} from "../../../Context/EventContext";

const { Search } = Input;

function Filter () {
    const [viewFilter , setViewFilter] = useState<number>(0)
    const {data} = useEventContext()

    let newData = [...data]
    newData.map((item:any)=>{
        return item.cityName = item.cityName.substring(0,3)
    })
    const set = new Set()
    const result = newData.filter((item:any)=>!set.has(item.cityName)?set.add(item.cityName):false)
    const choose = (city:string) =>{
        newData.map((item:any)=>{
            if (item.cityName === city) setViewFilter(1)
        })
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
                {result.map((item:any)=>{
                    // @ts-ignore
                    return (<Button>{item.cityName}</Button>)
                })}
            </div>

        </>
    )
}

export default Filter