import React from 'react'
import { useEventContext } from '../Context/EventContext'
import { useParams } from 'react-router-dom'

interface ParamTypes {
  actId: string | undefined
}
function Details() {
  const { data } = useEventContext()
  const { actId } = useParams<ParamTypes>()

  const newData: any = data.filter((item: any) => {
    return item.actId == actId
  })
  return (
    <>
      {newData?.map((item: any) => {
        return (
          <>
            <div key={item.actId}>
            <h2 className='heading'>{item.actName}</h2>

            <div className='wrap'>
              <img
                alt='example'
                src={`https://cloud.culture.tw${item.imageUrl}`}
                loading='lazy'
                className='detailImg'
              />
              <p>時間 : {item.cycle} </p>
              <p>地點 : {item.address} </p>
              <p>
                活動網址 :
                <a href={item.website} target='_blank' rel='noreferrer'>
                  {item.actName}
                </a>
              </p>
              <p>簡介：</p>
              <p>{item.description}</p>
            </div>
            </div>
          </>
        )
      })}
    </>
  )
}
export default Details
