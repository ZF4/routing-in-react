import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
// import Film from "./Film"
// import './styles.css'
// import App from './App';


const FilmCard =(props)=> {
    return (
        <Fragment>
            <div className="card bg-secondary mb-3 cards " style={{ width: "25rem" }}>
                <div className="card-body">
                    <h5 className="card-title text">{props.film.title}</h5>
                    <p className="card-text text">{props.film.description}</p>
                    <Link to={`/Film/:id`}>
                        <button className="btn btn-dark">Click for raw data</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}


export default FilmCard;