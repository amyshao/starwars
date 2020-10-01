import React from "react";
import "./App.css"
import JsonData from "./JsonData";
import {Link} from "react-router-dom";


class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            page: props.page
        }
    }

    render() {
        const { type, page } = this.state;
        return (
            <div>
                <JsonData type={type} page={page} key={type + page}/>
                <Link className="Movie-link" to={'/' + type }>Return to {type}</Link>
            </div>
        );
    }
}


export default InfoPage;
