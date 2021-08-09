import { createContext,useContext  } from 'react';

type Event = {
    data:object[]
    setData:(c: any) => void
    viewFilter:object[]
    setViewFilter:(c: any) => void
}

export const EventContext = createContext<Event>({
    data: [],
    setData:() => {},
    viewFilter: [],
    setViewFilter:() => {},
})


export const useEventContext = () => useContext(EventContext)