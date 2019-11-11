import React from "react";
import css from "./BanksTableItem.module.css"

function BanksTableItem(props) {
    return (
        <tr>
            <th scope="row">{}</th>
            <td>{props.bik}</td>
            <td>{props.name}</td>
            <td>{props.kor}</td>
            <td>{props.address}</td>
        </tr>
    );
}

export default BanksTableItem;