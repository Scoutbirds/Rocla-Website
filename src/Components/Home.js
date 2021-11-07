import React, { useState } from 'react';
import './home.css'
import {Link} from 'react-router-dom';
import './mika-baumeister-unsplash.jpg'


export default function Home() {

    const [count, setCount] = useState(0);

    var aboutUs = "Thank you for visiting Rocla Asthetics. Here you will find everything you need to reach your beauty and wellness goals without the downtime and pain from surgery." + 
    " We focus on natural results that enhance your beauty. Also, to give you a more unique, refreshed and youthful appearance." +
    " Our belief that we are all beautiful in our own unique way is what guides our practice to Perfecting natural beauty!"


    function gotToContact()
    {
        setCount(count + 1)
        
    }


    return (
        <div>
            <div className = "picture">
                <div className = "rocla">
                    Rocla
                    <div className = "rocla sub">
                        Medical Services & Aesthetics
                    </div>
                </div>

                <div class="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,
                        31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className = "about">
                <div className = "aboutBox">
                    <div className = "aboutTitle">
                        Welcome To Rocla
                    </div>
                    <div className = "aboutInfoBox">
                        <div className = "aboutInfo">
                            {aboutUs}
                        </div>
                        {/* <div className ="aboutPicture">
                        </div> */}
                    </div>
                    <Link to="/contact">
                        <button onClick = {gotToContact} className = "aboutButton"><span>More</span></button>
                    </Link>
                </div>
            </div>


            <div className = "procedures">
                <div class="custom-shape-divider-top-1636307013">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className = "proceduresBox">
                    <div className = "proceduresTitle">Popular Procedures</div>
                    <div className = "proceduresList">
                        <div className = "procedureContainer">
                            <div className = "procedureImg">
                                Injectables
                            </div>
                            <div className = "procedure">
                                Plump, and smooth your facial skin with high quality injectables like Botox, 
                                Dysport, Restylane, Juveaderm and Sculptra. These can be used separate or in combination for best results!
                            </div>
                            <Link to="/procedures">
                                <button onClick = {gotToContact} className = "procedureButton"><span>Learn More</span></button>
                            </Link>
                        </div>
                        <div className = "procedureContainer">
                            <div className = "procedureImg skinTight">
                                Skin Tightening
                            </div>
                            <div className = "procedure">
                                Tighten up your neck, chin, inner thighs, brow etc. 
                                Our technology, Profound, Morpheus8 and our mighty Accutite!
                            </div>
                            <Link to="/procedures">
                                <button onClick = {gotToContact} className = "procedureButton"><span>Learn More</span></button>
                            </Link>
                        </div>
                        <div className = "procedureContainer">
                            <div className = "procedureImg">
                                PDO Threads
                            </div>
                            <div className = "procedure">
                                Contour, build and lift! PDO threads are a great way to build collagen, 
                                lift and contour your face without surgery and minimal downtime!
                            </div>
                            <Link to="/procedures">
                                <button onClick = {gotToContact} className = "procedureButton"><span>Learn More</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "surgeon"></div>
        </div>
    )
}
