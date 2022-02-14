import React, {useState, useEffect} from 'react'
import './Procedures.css'
import './Home'
import {useParams} from "react-router-dom";

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

export default function Procedures() {

    const[procedure, setProcedure] = useState(0)

    let { id } = useParams();

    console.log(id)

    useEffect(()=>{
        choose(id)
    }, [])


    function choose({id}){
        if(id === 1){
            Injectible()
        }
        else if(id === 2){
            PDO()
        }

    }

    function Injectible(){
        setProcedure(1);

        ProcedureTitle = "Injectible"
        img = "procedurestabimg"
        ITitle1 = "Botox, Dysport and Xeomin";
        Iinfo1 = "These are both a type of botulinum toxin that is used to prevent, "+ 
        "treat and maintain a smoother and healthier looking skin, by relaxing " +
        "those muscles that cause our worry lines, frown lines, crows feet and smokers’ line. ";


        ITitle2 = "Sculptra Aesthetic";
        Iinfo2 = "Sculptra Aesthetic is an FDA-approved injectable that helps gradually " +
        "replace lost collagen—the most common protein in the body that is used to form a framework to support cell and tissue—for results that can last more than two years. *";

        ITitle3 = "Juvederm";
        Iinfo3 = "Modified (Hyaluronic acid) is the main ingredient behind JUVÉDERM ® . " + 
        "Getting treated with JUVÉDERM ® helps add volume to different areas of the " +
        "face without surgery while also temporarily restoring the volume loss beneath the surface which we loose with aging.";


        ITitle4 = "Restylane";
        Iinfo4 = "Restylane is an HA filler (hyaluronic acid) used to restore volume loss due to aging. " +
        "There are many types of Restylane filler which vary in consistency, and flexibility. " + 
        "Your medical aesthetic practitioner will recommend which is best suitable for you upon a thorough consultation.";

    }

    function PDO(){
        setProcedure(2);

        ProcedureTitle = "PDO Thread"
        img = "procedurestabimg1"
        ITitle1 = "PDO Thread";
        Iinfo1 = "Polydioxanone is used for biomedical applications, particularly in cardiothoracic surgery " + 
        "because it is fully absorbed by hydrolysis within 4 to 6 months & doesn’t create any scar tissue. " + 
        "The foreign body stimulates collagen synthesis & the skin structure created will hold for another 12 to 15 months."


        ITitle2 = "";
        Iinfo2 = "PDO threads can be used pretty much for anywhere in the face with almost no risk and great results. " + 
        "We can use it for lip enhancement, nose contouring, eyebrow lift to decrease appearance of wrinkles. " + 
        "They especially great for jaw line contouring and neck lifting, which can sometimes be more challenging with " + 
        "toxins and fillers which are better for mid and upper face." +
        "With so many advantages and so little downtime and minimal risk its hard to say no!" +
        "This procedure is comfortable for most patients.";

        ITitle3 = "";
        Iinfo3 = "";

        ITitle4 = "";
        Iinfo4 = "";

    }

    function peels(){
        setProcedure(3);
        ProcedureTitle = "Facial and Peels"
        img = "procedurestabimg1"
        ITitle1 = "Facial";
        Iinfo1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
        "ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Sed augue lacus viverra vitae congue. " +
        "Elit eget gravida cum sociis. Blandit massa enim nec dui. Volutpat maecenas volutpat blandit aliquam etiam. Consequat " + 
        "semper viverra nam libero justo. Egestas dui id ornare arcu odio ut sem nulla pharetra. Arcu cursus euismod quis viverra nibh cras pulvinar. " +
        "Gravida neque convallis a cras semper auctor. In vitae turpis massa sed elementum tempus. " ;


        ITitle2 = "";
        Iinfo2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
        "ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Sed augue lacus viverra vitae congue. " +
        "Elit eget gravida cum sociis. Blandit massa enim nec dui. Volutpat maecenas volutpat blandit aliquam etiam. Consequat " + 
        "semper viverra nam libero justo. Egestas dui id ornare arcu odio ut sem nulla pharetra. Arcu cursus euismod quis viverra nibh cras pulvinar. " +
        "Gravida neque convallis a cras semper auctor. In vitae turpis massa sed elementum tempus. " ;

        ITitle3 = "";
        Iinfo3 = "";

        ITitle4 = "";
        Iinfo4 = "";

    }


    return (
        <div className = "procedurestab">

            <div className = "procedurenav">
                <button onClick = {Injectible}>Injectibles</button>
                <button onClick = {PDO}>PDO</button>
                <button onClick = {peels}>Facial and Peels</button>

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
