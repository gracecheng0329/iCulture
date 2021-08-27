import React,{ useEffect } from 'react'
import { Button, Card } from 'antd'
import { HeartTwoTone } from '@ant-design/icons';
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { useEventContext } from '../../../Context/EventContext'

function EventItem (props: any) {
  const { item } = props
  const { actName, address, startTime, endTime, imageUrl, actId } = item
  const {like, setLike,fav, setFav} =useEventContext()
    const addFavor = () =>{
        let favEvent:any = []
        if(localStorage.getItem('favEvent'))
            favEvent = JSON.parse(localStorage.getItem('favEvent') || '{}')
        if(favEvent.map((item:any)=> item.actId).indexOf(actId) > -1) {
            favEvent = favEvent.filter((item:any)=>{
                return item.actId !== actId
            })
        } else {
            const obj = {
                actId,
                actName,
                address,
                startTime,
                endTime,
                imageUrl
            }
            favEvent.unshift(obj)
        }
        localStorage.setItem('favEvent', JSON.stringify(favEvent))
        setLike(!like)
    }

    useEffect(() => {
        const getFav = () => {
            const newFav:any = JSON.parse(localStorage.getItem('favEvent') || '[]')
            setFav(newFav)
        }
        getFav()
    }, [like])


  return (
    <>
        {fav?.some((item:any)=>item.actId===actId) ?
        (<Card
          hoverable
          style={{ width: 350, margin: '1rem' }}
          cover={
            <img
              alt='example'
              src={`https://cloud.culture.tw${imageUrl}`}
              className='img'
            />
          }
        >
          <HeartTwoTone className='icon' onClick={addFavor} twoToneColor="#eb2f96"/>
          <p className='title'>{actName}</p>
          <p>{address}</p>
          <p><Moment format='YYYY/MM/DD'>{startTime}</Moment>~
          <Moment format='YYYY/MM/DD'>{endTime}</Moment></p>
            <Button><Link to={`details/${actId}`}> 查看詳細</Link></Button>
        </Card> ):   (<Card
                hoverable
                style={{ width: 350, margin: '1rem' }}
                cover={
                    <img
                        alt='example'
                        src={`https://cloud.culture.tw${imageUrl}`}
                        className='img'
                    />
                }
            >
                <HeartTwoTone className='icon' onClick={addFavor} twoToneColor="lightgrey" />
                <p className='title'>{actName}</p>
                <p>{address}</p>
                <p><Moment format='YYYY/MM/DD'>{startTime}</Moment>~
                    <Moment format='YYYY/MM/DD'>{endTime}</Moment></p>
                <Button><Link to={`details/${actId}`}> 查看詳細</Link></Button>
            </Card> )

        }
    </>
  )
}

export default EventItem
