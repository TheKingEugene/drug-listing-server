import React from "react";
import { defaultCoreCipherList } from "constants";

function ChemistTable({
    ChemistStore, tableLoading, tableError, editChemist, deleteChemist, deleteSuccess
}){ //addDelete
    if (tableLoading){
        return <p>Loading Chemists...</p>;
    }

    return(
        //addDelete
        <div>
            {deleteSuccess && (
                <p>Record deleted sucessfully</p>
            )}

            {tableError &&(
                <p>Sorry, there occured a server error. Please retry</p>
            )}

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
                    {ChemistStore.map((chemeq)=>{
                        const{business_number, chemist, location, phone_number, e_mail, working_hours}= chemeq
                        console.log(chemeq);
                        return(
                            
                            <tr key ={business_number}>
                                <td>{business_number}</td>
                                <td>{chemist}</td>
                                <td>{location}</td>
                                <td>{phone_number}</td>
                                <td>{e_mail}</td>
                                <td>{working_hours}</td>


                                <td className="span">
                                    <span id = "edit" onClick = {editChemist(chemeq)}>Edit</span>
                                    
                                    <span id = "delete" onClick = {deleteChemist(chemeq, ChemistStore)}>Delete</span>
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