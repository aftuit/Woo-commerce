import React from 'react';
import {Link} from "react-router-dom"
const CommerceCard = (props) => {
    return (
        <div className="commerce-card">
            <div className="commerce-card-head">
               <img src={props.img} alt="error" className="card-img d-block w-100" />      
               {props.children}           
            </div>
            <div className="commerce-card-body">
                <h1>{props.title}</h1>
                <p>{props.info}</p>
                <Link to="/" className="link-blue text-decoration-none">{props.link}</Link>
            </div>
        </div>
    );
};

export default CommerceCard;