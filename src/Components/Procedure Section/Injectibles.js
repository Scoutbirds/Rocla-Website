import React from 'react'
import {Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import './Procedures.css'



    var ProcedureTitle = "Injectible"
    var img = "procedurestabimg"
    var ITitle1 = "Botox, Dysport and Xeomin";
    var Iinfo1 = "These are both a type of botulinum toxin that is used to prevent, "+ 
    "treat and maintain a smoother and healthier looking skin, by relaxing " +
    "those muscles that cause our worry lines, frown lines, crows feet and smokers’ line. ";


    var ITitle2 = "Sculptra Aesthetic";
    var Iinfo2 = "Sculptra Aesthetic is an FDA-approved injectable that helps gradually " +
    "replace lost collagen—the most common protein in the body that is used to form a framework to support cell and tissue—for results that can last more than two years. *";

    var ITitle3 = "Juvederm";
    var Iinfo3 = "Modified (Hyaluronic acid) is the main ingredient behind JUVÉDERM ® . " + 
    "Getting treated with JUVÉDERM ® helps add volume to different areas of the " +
    "face without surgery while also temporarily restoring the volume loss beneath the surface which we loose with aging.";


    var ITitle4 = "Restylane";
    var Iinfo4 = "Restylane is an HA filler (hyaluronic acid) used to restore volume loss due to aging. " +
    "There are many types of Restylane filler which vary in consistency, and flexibility. " + 
    "Your medical aesthetic practitioner will recommend which is best suitable for you upon a thorough consultation.";

export default function Injectibles() {
  return (
        <div className = "procedurestab">

            <div className = "procedurenav">
                <NavLink to="/procedures/1" activeClassName = "procedureactive" exact = {true}>
                    <button>Injectibles</button>
                </NavLink>
                <Link to="/procedures/2">
                    <button >PDO</button>
                </Link>
                <Link to="/procedures/3">
                    <button >Facial and Peels</button>
                </Link>
            </div>

            <div className = "procedurestabType">{ProcedureTitle}</div>

            <div></div>
            <div className = "procedurestabcontainer">
                <div className = "procedurestabcontainer2">
                    <div className = "procedurestabtitle">{ITitle1}</div>
                    <p className = "procedurestabinfo">
                        {Iinfo1}
                    </p>
                    <div className = "procedurestabcontainer2 full">
                    <div className = "procedurestabtitle">{ITitle2}</div>
                    <div className = "procedurestabinfo">
                        {Iinfo2}
                    </div>
                </div>
                </div>
                <div className = {img}></div>
            </div>
            <div className = "procedurestabfloat">
                <div className = "procedurestabcontainer">
                    <div className = "procedurestabcontainer2 full">
                        <div className = "procedurestabtitle">{ITitle3}</div>
                        <div className = "procedurestabinfo">
                            {Iinfo3}
                        </div>
                    </div>
                </div>
                <div className = "procedurestabcontainer">
                    <div className = "procedurestabcontainer2 full">
                        <div className = "procedurestabtitle">{ITitle4}</div>
                        <div className = "procedurestabinfo">
                            {Iinfo4}
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}
