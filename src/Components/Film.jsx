import React, {Component, Fragment } from 'react';
// import './styles.css'
// import App from './App';
import FilmCard from './FilmCard'

class Film extends Component {
    constructor(props){
        super(props)
        this.state = {
            films: []
        }

    }
       
       componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(data => data.json())
        .then(data => this.setState({ films: data,}))
        .catch(err => console.log(err));
       }


        render(){
        return (
            <Fragment>
                {console.log("hello")}
                <div className="card">
                    <div className="container">
                    {this.state.films.map((film) => <FilmCard film={film} key={film.id} />)}
                    </div>
                </div>
            </Fragment>
        )
    }}


    export default Film;