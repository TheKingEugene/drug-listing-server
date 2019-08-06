import React from "react";
import axios from "axios";
import ChemistForm from "./ChemistForm";
import ChemistTable from "./ChemistTable";

class ChemistAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bsnN: "",
            chem: "",
            loc: "",
            phone: "",
            email:"",
            workhr: "",
            editing: false,
            tableLoading: false,
            tableError: false,
            ChemistStore: [],
            deleteSuccess: false //addDelete
        }
        this.resetFormState = this.resetFormState.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.editChemist = this.editChemist.bind(this)
        this.deleteChemist = this.deleteChemist.bind(this) //addDelete
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
            e_mail,
            working_hours
        } = chemeq;
        return ()=>{
        this.setState({
            bsnN: business_number,
            chem: chemist,
            loc: location,
            phone: phone_number,
            email: e_mail,
            workhr: working_hours

        })}
        
    }

    //Deleting Chemists
    deleteChemist(chemeq, ChemistStore){
        return ()=>{
            const{business_number, chemist} = chemeq;

            if (window.confirm (`You really want to delete '${chemist}'?`)){
                axios
                .delete (`/api/chemists/${business_number}`)
                .then(response =>{
                    const index = ChemistStore.findIndex(c=>c.business_number === business_number);
                    //My primary key can not auto increment. How do I do (slice.bla! bla! bla!)
                    this.setState({
                        ChemistStore: [
                            ...ChemistStore.slice(0, index),
                            ...ChemistStore.slice(index + 1)
                        ],
                        deleteSuccess: true,
                        tableError: false
                    });
                })
                .catch(error =>{
                    this.setState ({
                        deleteSuccess: false,
                        tableError: true
                    });
                });
            }
         }
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
            workhr,
            deleteSuccess //addDelete
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
                    deleteChemist = {this.deleteChemist} //addDelete
                    deleteSuccess = {deleteSuccess}
                />
            </div>
        );
    }




}
export default ChemistAdmin;