import React from "react";
import axios from "axios";
import DrugForm from "./DrugForm";
import DrugTable from "./DrugTable";


class DrugAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Drug: "",
            Price: "",
            Manufacturer: "",
            Description: "",
            Drug_Number: "",
            editting: false,
            tableLoading: false,
            tableError: false,
            DrugStore: []


        }
        this.resetFormState = this.resetFormState.bind(this)
    }

    componentDidMount() {
        this.fetchdrgDrug();
    }

    fetchdrgDrug() {
        this.setState({
            tableLoading: true,
            tableError: false
        });

        axios.get("/api/drug/")
            .then(response => {
                this.setState({
                    DrugStore: response.data,
                    tableLoading: false,
                    tableError: false
                });
            })

            .catch(error => {
                this.setState({
                    tableLoading: false,
                    tableError: true,
                    DrugStore: []
                });
            })
    }

    resetFormState() {
        this.setState = {
            drgN: "",
            drg: "",
            disc: "",
            manf: "",
            phone: "",
            tableLoading: false,
            tableError: false
        }
    }

    render() {
        const {
            DrugStore,
            tableError,
            tableLoading,
            drgN,
            drg,
            disc,
            manf,
            phone

        } = this.state;
    

        return(
            <div>
             <DrugForm
                drgN = {drgN}
                drg = {drg}
                disc = {disc}
                manf = {manf}
                phone = {phone}
                 resetFormState = {this.resetFormState}
              /> 

              <DrugTable
                DrugStore = {DrugStore}
                tableLoading = {tableLoading}
                tableError = {tableError}
              />
            </div>
        );

    }
        

}

export default DrugAdmin;