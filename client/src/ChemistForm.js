import React from "react";

function ChemistForm({chem, loc, bsnN, phone, email, workhr, resetFormState, handleOnChange}){
    return(
        <div className ="addchemist" >
            <h1>ADD CHEMIST</h1>
            <h2 id = "h2">Enter Chemist Details</h2>
        <label name = "chem"> Chemist Name</label><input type = "text"
        name = "chem" value = {chem} onChange = {handleOnChange}
        />
                            <br/>
        <label name = "loc"> Location</label><input type = "text"
        name = "loc"  value = {loc} onChange = {handleOnChange}
        />
                            <br/>
        <label name = "bsnN"> Business Number</label><input type = "text"
        name ="bsnN" value = {bsnN} onChange = {handleOnChange}
        />
                            <br/>
        <label name = "phone"> Phone Number</label><input type = "text"
        name = "phone" value = {phone} onChange = {handleOnChange}
        />
                            <br/>
        <label name = "email"> E-Mail</label><input type = "text"
        name = "email" value = {email} onChange = {handleOnChange}
        />
                            <br/>
        <label name = "workhr"> Working Hours</label><input type = "text"
        name = "workh" value = {workhr} onChange = {handleOnChange}
        />
                <br/>
        <button type="submit" id = "button1">SAVE</button>
         &nbsp;&nbsp;
        <button type = "reset" id = "button2" onClick = {resetFormState}>DISCARD</button>
        </div>
        
    );
    
}
export default ChemistForm;