import React from "react";
import "./App.css"
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className={"Nav"}>
                <Link className={"Nav-links"} to={"/Movies"}> Movies </Link>
                <Link className={"Nav-links"} to={"/Characters"}> Characters </Link>
            </div>
        );
    }
}

export default Nav;