import React, { useState } from 'react'
import Routers from './Routers/index'
import NavBar from "./components/NavBar";
import { EventContext } from './Context/EventContext'
import 'antd/dist/antd.css'
import './App.scss'
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  const [data, setData] = useState([])
  const [viewFilter, setViewFilter] = useState([])
    const [like, setLike] = useState(false);
    const [fav, setFav] = useState([]);
    const [likeList, setLikeList] = useState([])


  return (
    <>
        <Router>
          <EventContext.Provider
            value={{
                data, setData, viewFilter, setViewFilter,like, setLike,fav, setFav,likeList, setLikeList
            }}
          >
              <NavBar/>
            <Routers />
          </EventContext.Provider>
        </Router>
    </>
  )
}

export default App
