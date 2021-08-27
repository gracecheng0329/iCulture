import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Events from '../pages/Events/index'
import Details from '../pages/Details'
import Fav from '../pages/Fav'

function Routers() {
  return (
    <>
        <Switch>
          <Route path='/' exact>
            <Events />
          </Route>
          <Route path='/details/:actId'>
            <Details />
          </Route>
          <Route path='/fav' exact>
            <Fav />
          </Route>
        </Switch>
    </>
  )
}

export default Routers
