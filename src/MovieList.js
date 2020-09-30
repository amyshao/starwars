import React from "react";
import "./App.css"
import { Link } from "react-router-dom";
import {InfoTable} from "./InfoTable";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            type: props.type
        };
        // bind method to class
        this.fetchJson = this.fetchJson.bind(this);
    }

    componentDidMount() {
        let http_link = "https://swapi.py4e.com/api/films/";
        this.fetchJson(http_link);
    }

    fetchJson(link) {
        fetch(link)
            .then(result => result.json()) // return json
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
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
        const { error, isLoaded, items, type} = this.state;
        if (error) {
            return <div> Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else if (type === "home") {
            console.log(type);
            return ( // render each film as a button
                <div>
                    <ul>
                        {items.map((item, index) => (
                            <Link className="Movie-link" to={"/" + index}> {item.title} </Link>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return ( // render a specific film's info
                <div>
                    <InfoTable items={this.state.items[type]}/>
                    <Link className="Movie-link" to={"/"}>Return to Films</Link>
                </div>
            );
        }
    }
}

export default MovieList;
