import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './nav.css'


export default function nav() {
    return (
        <div className = "nav">
            <div className = "navHome">
                <Link to="/" className="home">
                    <div>Rocla</div>
                </Link>

            </div>
            <div className = "navButtons">
                {/* <Link to="/about" className="buttons">
                    <div>About</div>
                </Link> */}
                <NavLink to="/procedures" className="buttons" activeClassName = "active" exact = {true}>
                    <div>Procedures</div>
                </NavLink>
                <NavLink to="/contact" className="contact" activeClassName = "active" exact = {true}>
                    <div>Contact</div>
                </NavLink>
            </div>
        </div>
    )
}
