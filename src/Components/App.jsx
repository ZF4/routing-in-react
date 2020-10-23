import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import Film from './Film';
import SingleFilm from './SingleFilm';
import People from './People'
import SinglePerson from './SinglePerson'

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/Film"><button>View Films</button></Link>
                    <Link to="/People"><button>View People</button></Link>
                    <Switch>
                      <Route exact path="/" component=""/>
                      <Route exact path="/Film" component={Film}/>
                      <Route exact path="/Film/:id" component={SingleFilm}/>
                      <Route exact path="/People" component={People}/>
                      <Route exact path="/People/:id" component={SinglePerson}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;


