import React from "react";

function Chemist ({chemdetails}){
    const {Chemist, Location} = chemdetails;
    return(
        <div>
            <h1>{Chemist}</h1>
            <p>{Location}</p>
        </div>
    )
}

export default Chemist;