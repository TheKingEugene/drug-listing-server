import React from "react";


function DrugForm ({drgN, drg, disc, manf, phone, resetFormState}){
    return(
        <div className ="adddrug" >
            <h1>ADD A DRUG</h1>
            <h2 id = "h2">Enter Drug Details</h2>

        <label name = "drgN"> Drug Number</label><input type = "text"
        name = "drgN" value = {drgN}
        />
                            <br/>
        <label name = "drg">Drug Name</label><input type = "text"
        name = "drg" value = {drg}
        />
                            <br/>
        <label name = "disc">Discription</label><input type = "text"
        name = "disc" value = {disc}
        />
                            <br/>
        <label name = "manf">Manufacturer</label><input type = "text"
        name = "manf" value = {manf}
        />
                            <br/>
        <label name = "phone">Price</label><input type = "text"/>
                            <br/>
        <button type="submit" id = "button1">SAVE</button>
         &nbsp;&nbsp;
        <button type = "reset" id = "button2" onClick = {resetFormState}>DISCARD</button>
        </div>

    )
}

export default DrugForm;