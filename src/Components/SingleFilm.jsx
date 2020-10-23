import React, {Component, Fragment } from 'react';
import Film from './Film'
// import './styles.css'
// import App from './App';
// import FilmCard from './FilmCard'
import {Link} from 'react-router-dom'

class SingleFilm extends Component {
    constructor(props){
        super(props)
        this.state = {
            films: {}
        }

    }
       
       componentDidMount(){
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
        .then(data => data.json())
        .then(data => this.setState({ films: data,}))
        .catch(err => console.log(err));
       }


        render(){
        return (
            <Fragment>
            <div className="card bg-secondary mb-3 cards">
                <div className="card-body">
                    <h5 className="card-title text">{this.state.films.title}</h5>
                    <p className="card-text text">{this.state.films.description}</p>
                    <Link to={`./Film/${this.state.films.id}`}>
                        <button className="btn btn-dark">Click for raw data</button>
                    </Link>
                </div>
            </div>
            </Fragment>
        )
    }}


    export default SingleFilm;