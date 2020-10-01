import React from "react";
import "./App.css"
import JsonData from "./JsonData";


class LinkPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: false,
            type: props.type,
            page: 'home'
        }
    }

    render() {
        const { type, page } = this.state;
        console.log(type + ': ' + page);
        return (
            <JsonData type={type} page={page} key={type + page}/>
        );
    }
}

export default LinkPage;

