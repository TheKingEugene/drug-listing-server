import React from "react";
import Chemist from "./Chemist";

function ChemistList ({chemdetails}) {
    return(
        <div className = "chemdetails">
            {chemdetails.map(king =>(
                <Chemist chemdetails = {king}/>

            ))}

        </div>

    )
}

export default ChemistList;