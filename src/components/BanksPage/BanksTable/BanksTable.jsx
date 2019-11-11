import React from "react";
import {NavLink} from "react-router-dom";
import BanksTableItem from "./BanksTableItem";
import css from "./BanksTable.module.css"

class BanksTable extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            banks: []
        };

        this.getData = this.getData.bind(this);

        this.getData();
    }

    getData() {
        for (let i = 0, len = localStorage.length; i < len; ++i) {
           this.state.banks.push(localStorage.getItem(localStorage.key(i)));
        }
    }

    render() {

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
                {this.state.banks.map(item => (
                    <tr>
                        <th scope="row">#</th>
                        <td>{item.bik}</td>
                        <td>{item.name}</td>
                        <td>{item.kor}</td>
                        <td>{item.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default BanksTable;