import React from "react";
import "./App.css"


const InfoTable = (props) => {
    let data = props.items;
    return(
        <div>
            <table className={"InfoTable"}>
                <tbody >
                    {Object.keys(data).map((row) => (
                        <tr key={row} className={"Table-row"}>
                            <td className={"Table-col-title"}> {row + ':'} </td>
                            <td className={"Table-col"}> {data[row]} </td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )

}

export { InfoTable };

