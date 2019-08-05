import React from "react";
import axios from "axios";
import ChemistForm from "./ChemistForm";
import ChemistTable from "./ChemistTable";

class ChemistAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bsn: "",
            chem: "",
            loc: "",
            phone: "",
            email:"",
            workhr: "",
            editing: false,
            tableLoading: false,
            tableError: false,
            ChemistStore: []
        }
        this.resetFormState = this.resetFormState.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.editChemist = this.editChemist.bind(this)
    }


    componentDidMount() {
        this.fetchchemChemist();
    }

    fetchchemChemist() {
        this.setState({
            tableLoading: true,
            tableError: false
        });

        axios.get("/api/Chemist/")
            .then(response => {
                this.setState({
                    ChemistStore: response.data,
                    tableLoading: false,
                    tableError: false
                });
            })
            .catch(error => {
                this.setState({
                    tableLoading: false,
                    tableError: true,
                    ChemistStore: []
                });
            })
    }

    resetFormState() {
        this.setState = {
            chem: "",
            loc: "",
            bsnN: "",
            phone: "",
            email: "",
            workhr: "",
            tableLoading: false,
            tableError: false
        }

    }
    //handleonchange
    handleOnChange(e) {
        e.preventDefault();
        let  name=e.target.name;
        this.setState({
            [name]:e.target.value
         

         

        })
    }

    editChemist(chemeq){
        const {
            business_number,
            chemist,
            location,
            phone_number,
            email,
            working_hours
        } = chemeq;
        return ()=>{
        this.setState({
            bsn: business_number,
            chem: chemist,
            loc: location,
            phone: phone_number,
            workhr: working_hours

        })}
        
    }

    render() {
        const {
            ChemistStore,
            tableLoading,
            tableError,
            chem,
            loc,
            bsnN,
            disc,
            phone,
            email,
            workhr

        } = this.state;
        return (
            <div className="table2">
                <ChemistForm
                    chem={chem}
                    loc={loc}
                    bsnN={bsnN}
                    disc={disc}
                    phone={phone}
                    email={email}
                    workhr={workhr}
                    resetFormState={this.resetFormState}
                    handleOnChange={this.handleOnChange}
                />


                <ChemistTable
                    ChemistStore={ChemistStore}
                    tableLoading={tableLoading}
                    tableError={tableError}
                    editChemist = {this.editChemist}
                />
            </div>
        );
    }




}
export default ChemistAdmin;