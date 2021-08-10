import React, {useEffect, useState} from 'react'
import { Button , Input, Space} from 'antd';
import {useEventContext} from "../../../Context/EventContext";
import {getEventDetails} from "../../../Service/EventService";

const { Search } = Input;


function Filter () {
    const { data, setViewFilter } = useEventContext()
    const [sortType , setSortType ] = useState<boolean>(true)

    let newData = [...data]
        newData.map((item:any)=>{
            return item.cityName = item.cityName.substring(0,3)
        })
    const set = new Set()
    let result = newData.filter((item:any)=>!set.has(item.cityName)?set.add(item.cityName):false)
    result.sort((a:any, b:any) => a.cityName.localeCompare(b.cityName))

    const choose = (city:string) =>{
        let filterArea = newData.filter((item:any)=>{

            return item.cityName.indexOf(city) !== -1
        })
        setViewFilter(filterArea)
    }



    useEffect(()=>{
        const sortItems = () => {
            if (sortType) {
                newData.sort(function (a: any, b: any) {
                    // @ts-ignore
                    return new Date(a.endTime) - new Date(b.endTime)
                })
                setViewFilter(newData)
            } else {
                newData.sort(function (a: any, b: any) {
                    // @ts-ignore
                    return new Date(b.endTime) - new Date(a.endTime)
                })
                setViewFilter(newData)
            }
        }
        sortItems()
    },[sortType])


    const onSearch = (value:string) => {
        const newItems = data.filter((item:any) => {
            return item.actName.includes(value)
        })
        setViewFilter(newItems)
    };


    return (
        <>
            <div className="search">
                <Search
                    placeholder="找活動"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />

            </div>

            <div className="container">
                <p>地區</p>
                <Space size='small' wrap>
                <Button onClick={()=>{getEventDetails().then((item:any)=>{
                    setViewFilter(item)
                })}}>全部</Button>
                {result?.map((item:any,index:number)=>{
                    return (
                        <Button key={item.actId}
                                onClick={()=>{choose(item.cityName)}}>{item.cityName}</Button>
                    )
                })}
                </Space>
            </div>
            <div className="search">

            <p>時間排序</p>
            <Button onClick={()=>{setSortType(!sortType)}}>截止日期排序</Button>
            </div>

        </>
    )
}

export default Filter