import React from "react";
import "./App.css"
import { Link } from "react-router-dom";


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            type: props.type
        };
    }

    componentDidMount() {
        fetch("https://swapi.py4e.com/api/films/")
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
                            <Link className="Movie-link" to={"/" + (index + 1)}> {item.title} </Link>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    {items[type].title}
                </div>
            );
        }
    }
}

export default MovieList;
