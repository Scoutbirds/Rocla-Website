import React from 'react'
import {Link } from 'react-router-dom';
import './Procedures.css'
import '../Home'


var ProcedureTitle = "PDO Thread"
    var img = "procedurestabimg1"
    var ITitle1 = "PDO Thread";
    var Iinfo1 = "Polydioxanone is used for biomedical applications, particularly in cardiothoracic surgery " + 
    "because it is fully absorbed by hydrolysis within 4 to 6 months & doesn’t create any scar tissue. " + 
    "The foreign body stimulates collagen synthesis & the skin structure created will hold for another 12 to 15 months."


    var ITitle2 = "";
    var Iinfo2 = "PDO threads can be used pretty much for anywhere in the face with almost no risk and great results. " + 
    "We can use it for lip enhancement, nose contouring, eyebrow lift to decrease appearance of wrinkles. " + 
    "They especially great for jaw line contouring and neck lifting, which can sometimes be more challenging with " + 
    "toxins and fillers which are better for mid and upper face." +
    "With so many advantages and so little downtime and minimal risk its hard to say no!" +
    "This procedure is comfortable for most patients.";

    var ITitle3 = "";
    var Iinfo3 = "";

    var ITitle4 = "";
    var Iinfo4 = "";

export default function ProcedurePDO() {


  return (
        <div className = "procedurestab">

            <div className = "procedurenav">
                <Link to="/procedures/1">
                    <button>Injectibles</button>
                </Link>
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
