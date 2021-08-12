import React, { useEffect } from 'react'
import { getEventDetails } from '../../Service/EventService'
import { useEventContext } from '../../Context/EventContext'
import EventItem from './components/EventItem'
import Filter from './components/Filter'
import { Space } from 'antd'

function Events () {
  const { setData, viewFilter, setViewFilter } = useEventContext()

  useEffect(() => {
      getEventDetails().then((item: any) => {
          setData(item)
          setViewFilter(item)
      })
  }, [])

  return (
    <>
      <h2 className='heading'>節慶</h2>
      <Filter />
      <div className='container'>
        <Space size='middle' wrap>
          {viewFilter?.map((item: any) => {
            return <EventItem item={item} key={item.actId} />
          })}
        </Space>
      </div>
    </>
  )
}

export default Events
