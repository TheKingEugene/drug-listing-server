import React from "react";
import Drug from "./Drug";
import axios from "axios";


class DrugList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            thedrug:[],
            loading: false,
            error: false,
        }
    }

    componentDidMount(){
        this.fetchdruglist();
    }

    fetchdruglist(){
        this.setState({
            loading: true, 
            error: false})
        axios.get("/api/drug/")
        .then(response =>(
            this.setState({
                thedrug: response.data, 
                loading: false, 
                error: false
        
            })
        ))

        .catch(error =>{
            this.setState({
                thedrug:[], 
                loading: false,
                error: true
            })
        })

    }
    render(){
        const{thedrug} = this.state;
        return (
        <div className = "thedrug">
            {thedrug.map(king =>(
                <Drug thedrug = {king}/>
            ))}
        </div>
    )}
}


export default DrugList;