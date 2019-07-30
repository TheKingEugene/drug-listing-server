import React from "react";
import Drug from "./Drug";
import axios from "axios";
import search from "./searchicon.png";
import NoMatches from "./NoMatches";


class DrugList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            thedrug:[],
            filteredDrugs: [],
            searchString: "",
            loading: false,
            error: false,
        }
        this.searchDrugs = this.searchDrugs.bind(this);
    }

    componentDidMount(){
        this.fetchdruglist();
    }

    fetchdruglist(){
        this.setState({
            loading: true, 
            error: false
        })
        axios.get("/api/Drug/")
            .then(response =>(
                this.setState({
                     thedrug: response.data, 
                     loading: false, 
                     error: false
        
                 })
             ))

            .catch(error =>{
                this.setState({
                    thedrug: [], 
                    loading: false,
                    error: true
               })
            })

    }

    searchDrugs(e) {
        const searchString = e.target.value;
        const { thedrug } = this.state;

        this.setState({
            searchString,
            filteredDrugs: thedrug.filter(d => {
                return d.drug.toLowerCase().indexOf(searchString.toLowerCase()) > -1
            }),
        });
    }

    renderDrugs() {
        const {thedrug, searchString, filteredDrugs} = this.state;
        const drugs = searchString === "" ? thedrug : filteredDrugs;

        if (searchString !== "" && filteredDrugs.length === 0){
            return <NoMatches/>
        }

        return drugs.map(king =>(
            <Drug key = {king.Drug_Number} thedrug = {king} />
        ))
    }

    render() {
        return (
            <div className = "searchbox">
                <input id="input" type="text" placeholder="Search..." autoComplete="off" onChange={this.searchDrugs} />
                <div className = "thedrug">
                    {this.renderDrugs()}
                </div>
            </div>    
        
        )
    }
}


export default DrugList;