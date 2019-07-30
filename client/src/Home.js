import React from "react";
import projlogo from "./projlogo.jpeg"

function Home () {
    return (
        <div className = "homediv">
            <img src= {projlogo} alt="projlogo" id ="projlogo" width = "100" height = "100" border = "0"/>
            <h2>WELCOME TO DRUG LISTINGS!</h2>
            <h3> 
                You can search for a drug by its name or by the name of a Chemist.
                Click on a tab to navigate appropriately. 
            </h3>
        </div>
    );
}


export default Home;