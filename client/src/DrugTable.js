import React from "react";
import { defaultCoreCipherList } from "constants";

function DrugTable({
    DrugStore, tableLoading, tableError
}){
    return(
        <div>
            <table className = "drgtable">
                <thead>
                    <tr>
                        <th>Drug Number</th>

                        <th>Drug Name</th>
                            
                        <th>Description</th>
                            
                        <th>Manufacturer</th>

                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {DrugStore.map((drugeq, index)=>{
                        console.log(drugeq);
                        const{drug_number, drug, description, manufacturer, price}= drugeq
                
                        return(
                            <tr key ={drug_number}>
                                <td>{drug_number}</td>
                                <td>{drug}</td>
                                <td>{description}</td>
                                <td>{manufacturer}</td>
                                <td>{price}</td>


                                <td className="span">
                                    <span id = "edit">Edit</span>
                                    
                                    <span id = "delete">Delete</span>
                                </td>

                            </tr>
                        )

                    })}
                </tbody>
            

            </table>
        </div>
        

        

    );
}

export default DrugTable;