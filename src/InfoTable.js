import React from "react";
import "./App.css"
import {Link} from "react-router-dom";
import JsonData from "./MovieList";


const ColItem = (props) => {
    let name = props.name;
    let value = props.value;
    console.log(value);
    if (name === 'characters' || name === 'planets' || name === 'starships' || name === 'vehicles' || name === 'species') {
        return ( // get name from http link
            <td className={"Table-col"}>
                {Object.keys(value).map((item) => (
                    <JsonData type={"getTitle"} http_link={value[item]} key={item}/>
             ))}
            </td>
        );
    } else {
        return (
            <td className={"Table-col"}> {value} </td>
        );
    }
}


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

