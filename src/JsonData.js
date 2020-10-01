import React from "react";
import "./App.css"
import { Link } from "react-router-dom";
import {InfoTable} from "./InfoTable";


class JsonData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            type: props.type,
            page: props.page,
            http_link: props.http_link
        };
        // bind method to class
        this.fetchJson = this.fetchJson.bind(this);
    }

    componentDidMount() {
        this.fetchJson(this.state.http_link);
    }

    // load json from http call into items
    fetchJson(link) {
        console.log(link);
        fetch(link)
            .then(result => result.json()) // return json
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        // get title uses fetch to return a single object
                        items: (this.state.type === "getTitle") ? result : result.results
                    });
                    console.log(result);
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items, type, page} = this.state;
        if (error) {
            return <div> Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (page === 'home') { // render each film as a link for router
            console.log(items);
            return (
                <div>
                    <ul>
                        {items.map((item, index) => (
                            <Link className="Movie-link" to={'/' + type + '/' + index}>
                                {item.title || item.name}
                            </Link>
                        ))}
                    </ul>
                </div>
            );
        } else if (type === "getTitle") { // only render title from given http link
            return (
                <div>{items.name}</div>
            )
        } else { // render a specific film's info
            return (
                <div>
                    <InfoTable items={this.state.items[page]}/>
                    <Link className="Movie-link" to={'/' + type }>Return to {type}</Link>
                </div>
            );
        }
    }
}


export default JsonData;
