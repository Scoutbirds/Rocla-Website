import React from 'react'
import './Procedures.css'


export default function Procedures() {

    return (
        <div className = "procedurestab">
            <div className = "procedurestabType">Injectibles</div>

            <div></div>
            <div className = "procedurestabcontainer">
                <div className = "procedurestabcontainer2">
                    <div className = "procedurestabtitle">Botox, Dysport and Xeomin</div>
                    <p className = "procedurestabinfo">
                    These are both a type of botulinum toxin that is used to prevent, 
                    treat and maintain a smoother and healthier looking skin, by relaxing 
                    those muscles that cause our worry lines, frown lines, crows feet and smokers’ line.
                    </p>
                </div>
                <div className = "procedurestabimg"></div>
            </div>
            <div className = "procedurestabcontainer">
                <div className = "procedurestabcontainer2 full">
                    <div className = "procedurestabtitle">Sculptra Aesthetic</div>
                    <div className = "procedurestabinfo">
                    Sculptra Aesthetic is an FDA-approved injectable that helps gradually 
                    replace lost collagen—the most common protein in the body that is used to form a framework to support cell and tissue—for results that can last more than two years. *
                    </div>
                </div>
            </div>
            <div className = "procedurestabfloat">
                <div className = "procedurestabcontainer">
                    <div className = "procedurestabcontainer2 full">
                        <div className = "procedurestabtitle">Juvederm</div>
                        <div className = "procedurestabinfo">
                            Modified (Hyaluronic acid) is the main ingredient behind JUVÉDERM ® . 
                            Getting treated with JUVÉDERM ® helps add volume to different areas of the 
                            face without surgery while also temporarily restoring the volume loss beneath the surface which we loose with aging.
                        </div>
                    </div>
                </div>
                <div className = "procedurestabcontainer">
                    <div className = "procedurestabcontainer2 full">
                        <div className = "procedurestabtitle">Restylane</div>
                        <div className = "procedurestabinfo">
                        Restylane is an HA filler (hyaluronic acid) used to restore volume loss due to aging. 
                        There are many types of Restylane filler which vary in consistency, and flexibility. Your medical aesthetic practitioner will recommend which is best suitable for you upon a thorough consultation.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
