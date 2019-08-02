import React from "react";

function ChemistForm(){
    return(
        <div className ="addchemist" >
            <h1>ADD A CHEMIST</h1>
            <h2 id = "h2">Enter Chemist Details</h2>
        <label> Chemist Name</label><input type = "text"/>
                            <br/>
        <label> Location</label><input type = "text"/>
                            <br/>
        <label> Business Number</label><input type = "text"/>
                            <br/>
        <label> Discription</label><input type = "text"/>
                            <br/>
        <label> Phone Number</label><input type = "text"/>
                            <br/>
        <label> E-Mail</label><input type = "text"/>
                            <br/>
        <label> Working Hours</label><input type = "text"/>
                <br/>
        <button id = "button1">SAVE</button>
         &nbsp;&nbsp;
        <button id = "button2">DISCARD</button>
        </div>
        
    );
    
}
export default ChemistForm;