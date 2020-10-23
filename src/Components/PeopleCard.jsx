import React from 'react';
import {Link} from 'react-router-dom';


const PersonCard = props => {
    return (
        <div className="card bg-secondary m-2" style={{ width: "25rem" }}>
            <div className="card-body">
                <h2 className="card-title">{props.person.name}</h2>
                <p className="card-text">{props.person.age}</p>
                <Link to={'/Film/:id'}>
                    <button className="btn btn-sm btn-dark">See Raw Data</button>
                </Link>
            </div>
        </div>
    )
}

export default PersonCard