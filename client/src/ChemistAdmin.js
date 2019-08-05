import React from "react";
import axios from "axios";
import ChemistForm from "./ChemistForm";
import ChemistTable from "./ChemistTable";

class ChemistAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Business_Number:"",
            chemist: "",
            Location:"",
            Phone_Number:"",
            E_Mail:"",
            Working_Hours:"",
            editing: false,
            tableLoading: false,
            tableError: false,
            ChemistStore: []
        }
        this.resetFormState = this.resetFormState.bind(this)
    } 


    componentDidMount(){
        this.fetchchemChemist();
    }

    fetchchemChemist(){
        this.setState({
            tableLoading: true,
            tableError: false
        });

        axios.get("/api/Chemist/")
        .then(response=>{
            this.setState({
                ChemistStore: response.data,
                tableLoading: false,
                tableError: false
            });
        })
        .catch(error=>{
            this.setState({
                tableLoading: false,
                tableError: true,
                ChemistStore:[]
            });
        })
    }

    resetFormState(){
        this.setState = {
            chem:"",
            loc:"",
            bsnN:"",
            disc:"",
            phone:"",
            email:"",
            workhr:"",
            tableLoading: false,
            tableError:false
        }

    }

    render(){
        const{
            ChemistStore,
            tableLoading ,
            tableError,
            chem,
            loc,
            bsnN,
            disc,
            phone,
            email,
            workhr

        } =  this.state;
        return(
            <div className = "table2">
                <ChemistForm
                chem = {chem}
                loc = {loc}
                bsnN = {bsnN}
                disc = {disc}
                phone = {phone}
                email = {email}
                workhr = {workhr}
                resetFormState = {this.resetFormState}
                />


                <ChemistTable
                    ChemistStore = {ChemistStore}
                    tableLoading = {tableLoading}
                    tableError = {tableError}
                />
            </div>
        );
    }


           
           
}
export default ChemistAdmin;