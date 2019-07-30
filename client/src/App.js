import React from "react";
import {Router} from "@reach/router";
import NavBar from "./NavBar";
import DrugList from "./DrugList";
import ChemistList from "./ChemistList";
// import Admin from "./Admin"
import "./App.css";
import search from "./searchicon.png";

 const chemistname = [
   {
     "chemist": "TheRoyalty",
     "location": "Thika_Arcade_Room_A1",
     "drug": "Paracetamol",
     "phone_number": "728445782",
     "working_hours": "8:00am to 8:00pm"
   },
   {
     "chemist": "Gathimaini",
     "location": "Thika-Tabi_HSE_Opp_Christina_Garden",
     "drug": "Diclophenac",
     "phone_number": "725893632",
     "working_hours": "8:00am to 8:00pm"
   },
   {
     "chemist": "Pharmasal",
     "location": "Thika-Chania_HSE_Room_C5",
     "drug": "Amodiaquin",
     "phone_number": "714897413",
     "working_hours": "8:00am to 8:00pm"
   },
   {
     "chemist": "Precious",
     "location": "Thika-Gakuyo_HSE_Room_G3",
     "drug": "Relvimid",
     "phone_number": "725831001",
     "working_hours": "8:00am to 8:00pm"
   },
   {
     "chemist": "ELIMED",
     "location": "Thika-Commerce_HSE_Room_C10",
     "drug": "Diabet RG",
     "phone_number": "784125962",
     "working_hours": "8:00am to 9:00pm"
   },
   {
     "chemist": "Tabibu",
     "location": "Daisy Plaza",
     "drug": "Flagil",
     "phone_number": "0748123795",
     "working_hours": "8:00am to 8:00pm"
   }
 ]

function App() {
  return (
    <div className = "topnav">
      <header>
        <NavBar/>
      </header>

      <main className = "searchbox">
        <input id = "input" type = "text" placeholder = "Search..."></input>
        <img src={search} alt="search" id ="searchicon" width="20" height="20" boader="0"/>
        <Router>
          <DrugList path = "/Drug" /> 
          <ChemistList path = "/Chemist" />
        </Router>
      </main>
    </div>
  )
}
export default App;
