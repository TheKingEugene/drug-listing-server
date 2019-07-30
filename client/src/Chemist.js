import React from "react";

function Chemist ({thechemist}){
    const {chemist, location} = thechemist;
    return(
        <div>
            <h1>{chemist}</h1>
            <p>{location}</p>
        </div>
    )
}

export default Chemist;