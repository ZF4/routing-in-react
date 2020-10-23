import React, {Component, Fragment } from 'react';
// import './styles.css'
// import App from './App';
import PeopleCard from './PeopleCard'

class People extends Component {
    constructor(props){
        super(props)
        this.state = {
            people: []
        }

    }
       
       componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/people/")
        .then(data => data.json())
        .then(data => this.setState({ people: data,}))
        .catch(err => console.log(err));
       }


        render(){
        return (
            <Fragment>
                {console.log("hello")}
                <div className="card">
                    <div className="container">
                    {this.state.people.map((person) => <PeopleCard person={person} key={person.id} />)}
                    </div>
                </div>
            </Fragment>
        )
    }}


    export default People;