import React from "react";
import {Link} from "@reach/router";

function NavBar() {
    return (
        <div className = "Tabs">
            <Link to = "/home">Home</Link>
            <Link to = "/Drug">Drug</Link>
            <Link to = "/Chemist">Chemist</Link>
            <Link to = "/Admin">Admin</Link>
        </div>
    )
}

export default NavBar;