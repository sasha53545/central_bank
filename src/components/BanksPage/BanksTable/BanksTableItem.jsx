import React from "react";

function BanksTableItem(props) {
    return (
        <tr>
            <th scope="row">{props.indexEl}</th>
            <td>{props.name}</td>
            <td>{props.bik}</td>
            <td>{props.kor}</td>
            <td>{props.address}</td>
        </tr>
    );
}

export default BanksTableItem;