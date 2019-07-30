import React from "react";
import Chemist from "./Chemist";
import axios from "axios";

class ChemistList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thechemist: [],
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.fetchchemistlist();
    }

    fetchchemistlist() {
        this.setState({
            loading: true,
            error: false
        })
        axios.get("http://localhost:9000/api/Chemist/")
            .then(response => (
                this.setState({
                    thechemist: response.data,
                    loading: false,
                    error: false
                })
            ))
            .catch(error => {
                this.setState({
                    thechemist: [],
                    loading: false,
                    error: true
                })
            })

    }
    render(){
            const { thechemist } = this.state;
            return (
                <div className="thechemist">
                    {thechemist.map(queen => (
                        <Chemist thechemist={queen} />

                    ))}
                </div>
            )
        }
    

}

export default ChemistList;