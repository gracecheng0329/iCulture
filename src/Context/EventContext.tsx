import { createContext, useContext } from 'react'

type Event = {
  data: any[]
  setData: (c: any) => void
  viewFilter: any[]
  setViewFilter: (c: any) => void
  like:boolean
  setLike: (c: any) => void
  fav: any[]
  setFav: (c: any) => void
  likeList: any[]
  setLikeList: (c: any) => void
}

export const EventContext = createContext<Event>({
  data: [],
  setData: () => {/**/},
  viewFilter: [],
  setViewFilter: () => {/**/},
  like:false,
  setLike: () => {/**/},
  fav: [],
  setFav:() => {/**/},
  likeList: [],
  setLikeList:() => {/**/},
  // data: {},
  // setData: {} || undefined,
  // viewFilter: {
  //   eventDetails: [] || undefined
  // },
  // setViewFilter: {} || undefined,
})

export const useEventContext = () => useContext(EventContext)
