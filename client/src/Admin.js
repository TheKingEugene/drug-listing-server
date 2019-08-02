import React from "react";
import ChemistAdmin from "./ChemistAdmin"
import axios from "axios";
import {Link} from "@reach/router"

function Admin(){
    return (
        <div className = "Admin">
            <h1>This is the Administrator's Page!</h1>
            <h2>Click on a button to navigate appropriately...</h2>
            <Link to="/ChemistAdmin"> 
            <button id = "modchem" >MODIFY CHEMIST</button>
            </Link>
                        <br/>
                        <br/>
            <Link to= "/DrugAdmin">
            <button id = "moddrug" href = "DrugAdmin">MODIFY DRUG</button>
            </Link>
            
            
        </div>
    );
}

export default Admin;