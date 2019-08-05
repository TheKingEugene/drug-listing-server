import React from "react";


function DrugForm ({drgN, drg, disc, manf, phone, resetFormState}){
    return(
        <div className ="adddrug" >
            <h1>ADD A DRUG</h1>
            <h2 id = "h2">Enter Drug Details</h2>

        <label name = "drgN"> Drug Number</label><input type = "text"/>
                            <br/>
        <label name = "drg">Drug Name</label><input type = "text"/>
                            <br/>
        <label name = "disc">Discription</label><input type = "text"/>
                            <br/>
        <label name = "manf">Manufacturer</label><input type = "text"/>
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