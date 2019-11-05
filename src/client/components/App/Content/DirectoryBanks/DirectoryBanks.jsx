import React from "react";
import css from "./DirectoryBanks.module.css";
import TableItem from "./Table/TableItem/TableItem";
import serverDataArray from "../../../../../server/ArrayWithTableItems";
import Table from "./Table/Table";

let elementsTable = serverDataArray.map(element =>
    <TableItem indexEl={element.indexEl} name={element.name} bik={element.bik} kor={element.kor}
               address={element.address}/>);

let sortElementsTable = elementsTable.sort();

function DirectoryBanks(props) {
    return (
        <div className={css.table_wrapper}>
            <Table/>
        </div>
    );
}

export default DirectoryBanks;