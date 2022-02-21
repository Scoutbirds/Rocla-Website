import React from 'react'
import {Link } from 'react-router-dom';
import './Procedures.css'





        var ProcedureTitle = "Facial and Peels"
        var img = "procedurestabimg1"
        var ITitle1 = "Facial";
        var Iinfo1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
        "ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Sed augue lacus viverra vitae congue. " +
        "Elit eget gravida cum sociis. Blandit massa enim nec dui. Volutpat maecenas volutpat blandit aliquam etiam. Consequat " + 
        "semper viverra nam libero justo. Egestas dui id ornare arcu odio ut sem nulla pharetra. Arcu cursus euismod quis viverra nibh cras pulvinar. " +
        "Gravida neque convallis a cras semper auctor. In vitae turpis massa sed elementum tempus. " ;


        var ITitle2 = "";
        var Iinfo2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
        "ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Sed augue lacus viverra vitae congue. " +
        "Elit eget gravida cum sociis. Blandit massa enim nec dui. Volutpat maecenas volutpat blandit aliquam etiam. Consequat " + 
        "semper viverra nam libero justo. Egestas dui id ornare arcu odio ut sem nulla pharetra. Arcu cursus euismod quis viverra nibh cras pulvinar. " +
        "Gravida neque convallis a cras semper auctor. In vitae turpis massa sed elementum tempus. " ;

        var ITitle3 = "";
        var Iinfo3 = "";

        var ITitle4 = "";
        var Iinfo4 = "";

export default function FacialandPeels() {

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
