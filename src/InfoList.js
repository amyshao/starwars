import React from "react";
import "./App.css"
import {Link} from "react-router-dom";


const InfoList = (props) => {
    const {items, type, sortOn} = props;

    // note links use the array index of the movie or character, do this before sorting
    let linkList = ( // get list of links
        <ul id={'linkList'}>
            {items.map((item, index) => (
                <Link className="Movie-link" to={'/' + type + '/' + index}>
                    {item.title || item.name}
                </Link>
            ))}
        </ul>
    );
    if (sortOn) { // sort the list of links lexicographically
        linkList.props.children.sort((a,b) => (a.props.children > b.props.children) ? 1 : -1);
    }
    return <div> {linkList} </div>
}


export { InfoList };
