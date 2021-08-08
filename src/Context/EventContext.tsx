import { createContext,useContext  } from 'react';

type Event = {
    data:object[]
    setData:(data3: any) => void
}

export const EventContext = createContext<Event>({
    data: [],
    setData:() => {},
})


export const useEventContext = () => useContext(EventContext)