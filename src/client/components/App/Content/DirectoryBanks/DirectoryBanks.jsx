import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import css from "./DirectoryBanks.module.css";
import ListItem from "./List/ListItem/ListItem";
import serverDataArray from "../../../../../server/ArrayWithTableItems";
import {NavLink} from "react-router-dom";

let elementsTable = serverDataArray.map(element =>
    <ListItem indexEl={element.indexEl} name={element.name} bik={element.bik} kor={element.kor}
              address={element.address}/>);

function DirectoryBanks(props) {
    return (
        <div className={css.table_wrapper}>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"><NavLink className="nav-link" to="/directoryBanks/sortByName">Название
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
        </div>
    );
}

export default DirectoryBanks;