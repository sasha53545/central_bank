import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import BanksTableItem from "./BanksTableItem";
import serverDataArray from "../../../server/ArrayWithTableItems";

let elementsTable = serverDataArray.map(element =>
    <BanksTableItem indexEl={element.indexEl} name={element.name} bik={element.bik} kor={element.kor}
                    address={element.address}/>);

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

let serverDataArraySort = serverDataArray.sort(compare);

let sortElementsTable = serverDataArraySort.map(element =>
    <BanksTableItem indexEl={element.indexEl} name={element.name} bik={element.bik} kor={element.kor}
                    address={element.address}/>);

function Table(props) {
    return (
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"><NavLink className="nav-link" to="/directoryBanks/listSortName">Название
                        банка</NavLink></th>
                    <th scope="col"><NavLink className="nav-link" to="/directoryBanks/sortByBIK">БИК</NavLink></th>
                    <th scope="col"><NavLink className="nav-link" to="/directoryBanks/sortByKor">Корсчет</NavLink></th>
                    <th scope="col"><NavLink className="nav-link" to="/directoryBanks/sortByAddress">Адрес</NavLink>
                    </th>
                </tr>
                </thead>
                <tbody>
                    {elementsTable}
                </tbody>
            </table>
    );
}

export default Table;