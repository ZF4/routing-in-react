import React, {Component, Fragment } from 'react';
import Film from './Film'
// import './styles.css'
// import App from './App';
// import FilmCard from './FilmCard'
import {Link} from 'react-router-dom'

class SinglePerson extends Component {
    constructor(props){
        super(props)
        this.state = {
            people: {}
        }

    }
       
       componentDidMount(){
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
        .then(data => data.json())
        .then(data => this.setState({ people: data,}))
        .catch(err => console.log(err));
       }


        render(){
        return (
            <Fragment>
            <div className="card bg-secondary mb-3 cards">
                <div className="card-body">
                    <h5 className="card-title text">{this.state.person.title}</h5>
                    <p className="card-text text">{this.state.person.description}</p>
                    <Link to={`./Film/${this.state.person.url}`}>
                        <button className="btn btn-dark">Click for more!</button>
                    </Link>
                </div>
            </div>
            </Fragment>
        )
    }}


    export default SinglePerson;