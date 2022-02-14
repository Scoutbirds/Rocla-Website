import React from 'react';
import {Link} from 'react-router-dom';
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
                <Link to="/procedures/1" className="buttons">
                    <div>Procedures</div>
                </Link>
                <Link to="/contact" className="contact">
                    <div>Contact</div>
                </Link>
            </div>
        </div>
    )
}
