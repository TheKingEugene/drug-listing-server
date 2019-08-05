import React from "react";
import { defaultCoreCipherList } from "constants";

function ChemistTable({
    ChemistStore, tableLoading, tableError, editChemist
}){
    return(
        <div>
            <table className = "table">
                <thead>
                    <tr>
                        <th>Business_Number</th>

                        <th>Chemist</th>
                            
                        <th>Location</th>
                            
                        <th>Phone Number</th>

                        <th>E-Mail</th>

                        <th>Working Hours</th>
                    </tr>
                </thead>
                <tbody>
                    {ChemistStore.map((chemeq, index)=>{
                        const{business_number, chemist, location, phone_number, email, working_hours}= chemeq
                        return(
                            
                            <tr key ={business_number}>
                                <td>{business_number}</td>
                                <td>{chemist}</td>
                                <td>{location}</td>
                                <td>{phone_number}</td>
                                <td>{email}</td>
                                <td>{working_hours}</td>


                                <td className="span">
                                    <span id = "edit" onClick = {editChemist(chemeq)}>Edit</span>
                                    
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

export default ChemistTable;