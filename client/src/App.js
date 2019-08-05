import React from "react";
import {Router} from "@reach/router";
import NavBar from "./NavBar";
import Home from "./Home";
import DrugList from "./DrugList";
import ChemistList from "./ChemistList";
import ChemistAdmin from "./ChemistAdmin";
import DrugAdmin from "./DrugAdmin";
import Admin from "./Admin"
import "./App.css";


function App() {
  return (
    <div className = "topnav">
      <header>
        <NavBar/>
      </header>

      <main className = "body">
        <Router>
          <Home path = "/home" />
          <DrugList path = "/Drug" /> 
          <ChemistList path = "/Chemist" />
          <Admin path = "/Admin"/>
          <ChemistAdmin path = "/ChemistAdmin"/>
          <DrugAdmin path = "/DrugAdmin"/>
        </Router>
      </main>
    </div>
  )
}
export default App;
