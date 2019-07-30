import React from "react";
import Chemist from "./Chemist";
import axios from "axios";
import search from "./searchicon.png";

class ChemistList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thechemist: [],
            filteredChemists: [],
            searchString: "",
            loading: false,
            error: false
        }

        this.searchChemists = this.searchChemists.bind(this);
    }

    componentDidMount() {
        this.fetchchemistlist();
    }

    fetchchemistlist() {
        this.setState({
            loading: true,
            error: false
        })
        axios.get("/api/Chemist/")
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

    searchChemists(e) {
        const searchString = e.target.value;
        const { thechemist } = this.state;

        this.setState({
            searchString,
            filteredChemists: thechemist.filter(c => {
                return c.chemist.toLowerCase().indexOf(searchString.toLowerCase()) > -1
            }),
        });
    }

    render() {
        const { thechemist, searchString, filteredChemists } = this.state;
        const chemists = searchString === "" ? thechemist : filteredChemists;

        return (
            <div className = "searchbox">
                <input id="input" type="text" placeholder="Search..." autoComplete="off" onChange={this.searchChemists} />
                <div className="thechemist">
                    {chemists.map(queen => (
                        <Chemist key={queen.business_number} thechemist={queen} />

                    ))}
                </div>
            </div>
        )
    }


}

export default ChemistList;