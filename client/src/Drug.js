import React from "react";

function Drug({thedrug}) {
    const {drug, description} = thedrug;
    return (
       <div>
           <h1>{drug}</h1>
           <p>{description}</p>
       </div>
    )  
}

export default Drug;