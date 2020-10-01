import React from "react";
import "./App.css"
import JsonData from "./JsonData";


class LinkPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOn: false,
            type: props.type,
            page: 'home'
        }
        this.toggleSort = this.toggleSort.bind(this);
    }

    toggleSort() {
        this.setState({sortOn: !this.state.sortOn});
    }

    render() {
        const { type, page, sortOn } = this.state;
        console.log(type + ': ' + page);
        return (
            <div>
                <button onClick={this.toggleSort}> SORT BY NAME </button>
                <JsonData sortOn={sortOn} type={type} page={page} key={type + page}/>
            </div>
        );
    }
}


export default LinkPage;

