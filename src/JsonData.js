import React from "react";
import "./App.css"
import {InfoTable} from "./InfoTable";
import {InfoList} from "./InfoList";


// for http calls
let film_http = "https://swapi.py4e.com/api/films";
let char_http = "https://swapi.py4e.com/api/people";


class JsonData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            type: props.type, // movie or character
            page: props.page, // either home (link list) or index of a movie/character item
            http_link: props.http_link || ((props.type === 'Movies') ? film_http : char_http)
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
            return <div> Loading... </div>;
        } else if (page === 'home') { // render list of links
            return <div><InfoList items={items} type={type} sortOn={this.props.sortOn}/></div>
        } else if (type === "getTitle") { // only render title from given http link
            return <div> {items.name} </div>
        } else { // render a specific film's info as a table
            return <div><InfoTable items={items[page]}/></div>
        }
    }
}


export default JsonData;
