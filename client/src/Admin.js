import React from "react";

function Admin(){
    return (
        <div className = "Admin">
            <h2>This page can only be used by the administrators for management purposes</h2>
            <h2>Click on a button to navigate appropriately</h2>
            <button id = "modchem">MODIFY CHEMIST</button>
                        <br/>
                        <br/>
            <button id = "moddrug">MODIFY DRUG</button>
        </div>
    );
}

export default Admin;