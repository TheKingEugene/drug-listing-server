import React from "react";
import Drug from "./Drug";


function DrugList ({thedrug}) {
    return (
        <div className = "thedrug">
            {thedrug.map(king =>(
                <Drug thedrug = {king}/>
            ))}
        </div>
    )
}

export default DrugList;