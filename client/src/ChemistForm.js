import React from "react";

function ChemistForm({chem, loc, bsnN, disc, phone, email, workhr, resetFormState}){
    return(
        <div className ="addchemist" >
            <h1>ADD A CHEMIST</h1>
            <h2 id = "h2">Enter Chemist Details</h2>
        <label name = "chem"> Chemist Name</label><input type = "text"
        name = "chem" value = {chem}
        />
                            <br/>
        <label name = "loc"> Location</label><input type = "text"
        name = "loc"  value = {loc}
        />
                            <br/>
        <label name = "bsnN"> Business Number</label><input type = "text"
        name ="bsnN" value = {bsnN}
        />
                            <br/>
        <label name = "disc"> Discription</label><input type = "text"
        name = "disc" value = {disc}
        />
                            <br/>
        <label name = "phone"> Phone Number</label><input type = "text"
        name = "phone" value = {phone}
        />
                            <br/>
        <label name = "email"> E-Mail</label><input type = "text"
        name = "email" value = {email}
        />
                            <br/>
        <label name = "workhr"> Working Hours</label><input type = "text"
        name = "workh" value = {workhr}
        />
                <br/>
        <button type="submit" id = "button1">SAVE</button>
         &nbsp;&nbsp;
        <button type = "reset" id = "button2" onClick = {resetFormState}>DISCARD</button>
        </div>
        
    );
    
}
export default ChemistForm;