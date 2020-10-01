import React from "react";
import "./App.css"
import {Link} from "react-router-dom";
import JsonData from "./JsonData";


// create column item
const ColItem = (props) => {
    let name = props.name;
    let value = props.value;
    console.log(value);

    if (name === 'characters' || name === 'planets' || name === 'starships' || name === 'vehicles' ||
        name === 'species' || name === 'films') {
        return ( // get name from http link
            <td className={"Table-col"}>
                {Object.keys(value).map((item) => (
                    <JsonData type={"getTitle"} http_link={value[item]} key={item}/>
             ))}
            </td>
        );
    } else if (name === 'homeworld') {
        return ( // homeworld field is not an array
            <td className={"Table-col"}>
                <JsonData type={"getTitle"} http_link={value} key={name}/>
            </td>
        );
    } else { // field is not an http link
        return (
            <td className={"Table-col"}> {value} </td>
        );
    }
}


// create info table
const InfoTable = (props) => {
    let data = props.items;
    return(
        <div className={"InfoTable-container"}>
            <table className={"InfoTable"}>
                <tbody >
                    {Object.keys(data).map((row) => (
                        <tr key={row} className={"Table-row"}>
                            <td className={"Table-col-title"} valign={"top"}> {row + ':'} </td>
                            <ColItem name={row} value={data[row]}/>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )

}


export { InfoTable , ColItem};

