import React, {useState} from 'react';
import Routers from './Routers/index'
import {EventContext} from './Context/EventContext'
import 'antd/dist/antd.css'
import './App.scss';

function App() {
    const [data, setData] = useState([])
    const [viewFilter , setViewFilter] = useState([])

    return (
      <>
          <h2>Events</h2>
          <EventContext.Provider value={{data, setData,viewFilter , setViewFilter}}>
          <Routers />
          </EventContext.Provider>
      </>
  );
}

export default App;
