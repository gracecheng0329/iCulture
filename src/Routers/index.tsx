import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from '../pages/Events/index'
// import Details from '../pages/Details'

function Routers () {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Events/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routers