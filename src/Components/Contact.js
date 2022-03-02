import React from 'react'
import './Contact.css'
import { GrLocation } from 'react-icons/gr';
import { IoCallOutline } from 'react-icons/io5';

export default function Contact() {

    return (
        <div className = "contactPage">
            <div className = "contactBody">
                <div className= "contactInside">
                    <div className = "visit">Visit our Location</div>

                    
                    <div className = "map">
                        <iframe title="location" width="1200" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" 
                        src="https://maps.google.com/maps?width=862&amp;height=585&amp;hl=en&amp;q=FIU%20Miami+(Locations)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                    <div className = "addressContainer">
                        <div className="icon"><GrLocation size={60} /></div>
                        <div className = "address">
                            <div className = "addressTitle">ROCLA Miami</div>
                            <div className = "addressInfo">
                                11200 SW 8th St, 
                                <br/>
                                Miami, FL 33199
                            </div>
                        </div>
                        <div className="icon"><IoCallOutline size={60} /></div>
                        <div className = "address">
                            <div className = "addressTitle">Phone Number</div>
                            <div className = "addressInfo">
                                +1 (123) 456-7891
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className = "messageBlock">
                <form className = "messageContainer">
                    <div className = "messageContact">Contact Us</div>
                    <div className = "messageTitle">Name</div>
                    <input type = "text" id = "name" placeholder="Your name.."/>
                    <div className = "messageTitle">E-mail</div>
                    <input type = "email" id = "e-mail" placeholder="example@gmail.com"/>
                    <div className = "messageTitle">Message</div>
                    <textarea type = "text" id = "message" placeholder="Message"/>
                </form>
            </div>
        </div>

    )
}
