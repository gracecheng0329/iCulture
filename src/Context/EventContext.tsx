import { createContext, useContext } from 'react'

type Event = {
  data: any[]
  setData: (c: any) => void
  viewFilter: any[]
  setViewFilter: (c: any) => void
}

export const EventContext = createContext<Event>({
  data: [],
  setData: () => {/**/},
  viewFilter: [],
  setViewFilter: () => {/**/},
})

export const useEventContext = () => useContext(EventContext)
