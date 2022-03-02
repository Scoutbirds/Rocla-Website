import React from 'react';
import './home.css'
import {Link } from 'react-router-dom';


export default function Home() {

    var aboutUs = "Thank you for visiting Rocla Asthetics. Here you will find everything you need to reach your beauty and wellness goals without the downtime and pain from surgery." + 
    " We focus on natural results that enhance your beauty. Also, to give you a more unique, refreshed and youthful appearance." +
    " Our belief that we are all beautiful in our own unique way is what guides our practice to Perfecting natural beauty!"

    return (
        <div>
            <div className = "picture">
                <div className = "rocla">
                    ROCLA
                    <div className = "rocla sub">
                        Medical Services & Aesthetics
                    </div>
                </div>

                {/* <div class="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,
                        31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div> */}
                <div class="custom-shape-divider-bottom-1644016115">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
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
                        <button className = "aboutButton"><span>More</span></button>
                    </Link>
                </div>
            </div>


            <div className='treatment'>
                Our Treatments
                <p>
                    ROCLA Medical Services and Aesthetics
                    <br></br>
                    is proud to offer exceptional treatment experiences in:
                </p>
            </div>
            <div className='medicalsvg'/>

                    
            <div className='grid_div'>

                <div className='grid_Container'>
                    <div className='grid_item'>
                        <div className='thecard'>
                            <div className='thefront'>
                                Injectables
                            </div>
                            <div className='theback'>
                                <div className = 'insideback'>
                                    Prevent and diminish fine lines 
                                    and wrinkles with top brand neurotoxin Botox and Dysport.
                                </div>
                                <Link to="/procedures/1">
                                    <button  className = "procedureButton"><span>Learn More</span></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='grid_item'>
                        <div className='thecard'>
                            <div className='thefront'>PDO</div>
                            <div className='theback'>
                                <div className = 'insideback'>
                                    Great way to build collagen, 
                                    lift and contour your face without surgery and minimal downtime!
                                </div>
                                <Link to="/procedures/2">
                                        <button  className = "procedureButton"><span>Learn More</span></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='grid_item'>
                        <div className='thecard'>

                            <div className='thefront'>
                                <p>Facials and Peels</p>
                            </div>

                            <div className='theback'>
                            <div className = 'insideback'>
                                Skin care treatment and packages to treat 
                                skin conditions like: acne, fine lines and wrinkles.
                            </div>
                                <Link to="/procedures/3">
                                        <button  className = "procedureButton"><span>Learn More</span></button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='grid_item'>
                        <div className='thecard'>
                            <div className='thefront'>hi</div>
                            <div className='theback'>hello</div>
                        </div>
                    </div>

                </div>
            </div>


            {/* <div className = "procedures">
                <div class="custom-shape-divider-top-1636307013">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className = "proceduresBox">
                    <div className = "proceduresTitle">Procedures</div>
                    <div className = "proceduresList">
                        <div className = "procedureContainer">
                            <div className = "procedureImg">
                                Injectables
                            </div>
                            <Link to="/procedures/1">
                                <button  className = "procedureButton"><span>Learn More</span></button>
                            </Link>
                        </div>
                        <div className = "procedureContainer">
                            <div className = "procedureImg PDO">
                                PDO Threads
                            </div>

                            <Link to="/procedures/2">
                                <button  className = "procedureButton" ><span>Learn More</span></button>
                            </Link>
                        </div>
                        <div className = "procedureContainer">
                            <div className = "procedureImg skinTight">
                                Facials and Peels
                            </div>
                            <Link to="/procedures/3">
                                <button  className = "procedureButton"><span>Learn More</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
