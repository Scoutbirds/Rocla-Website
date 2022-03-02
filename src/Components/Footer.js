import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import { IoCallOutline } from 'react-icons/io5';


export default function Footer() {
    return (
        <div className = "footer">
            <div className = "footercontainer">
                <div className = "roclabox">
                    <div className = "roclaTitle">
                        ROCLA
                    </div>
                    <div className = "roclaInfo">
                        We focus on natural results that enhance your beauty.
                    </div>
                </div>
                <div className = "box">
                    <div className = "title">
                        Menu
                    </div>
                    <div>
                    <Link to="/procedures/1" className = "footerbutton">
                        <div>Procedures</div>
                    </Link>
                    <Link to="/contact" className = "footerbutton">
                        <div>Contact</div>
                    </Link>
                    </div>
                </div>

                <div className = "box">
                    <div className = "title">
                        Contact Us
                    </div>
                    <div className = "roclaInfo">
                        <p>< MdOutlineEmail className = "footer-email" size={20}/>rocla.medicalaesthetics@gmail.com</p>
                        <p>< IoCallOutline className = "footer-email" size={20}/>+1 (123) 456-7891</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
