import React from "react";
import {NavLink} from "react-router-dom";
import css from "./BanksTable.module.css"
import Clock from "./Clock";


class BanksTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            banks: [],
        };

        this.sortBanks = this.sortBanks.bind(this);
    }

    sortBanks() {
        this.state.banks.sort();
    }

    componentDidMount() {
        const getData = JSON.parse(localStorage.getItem("banks")) || [];
        this.setState({banks: getData});
    }

    render() {
        return (
            <div>
                <Clock/>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><NavLink className="nav-link" to="/directoryBanks/listSortName"
                                                 onClick={this.sortBanks}>Название
                            банка</NavLink></th>
                        <th scope="col"><NavLink className="nav-link" to="/directoryBanks/sortByBIK">БИК</NavLink></th>
                        <th scope="col"><NavLink className="nav-link" to="/directoryBanks/sortByKor">Корсчет</NavLink>
                        </th>
                        <th scope="col"><NavLink className="nav-link" to="/directoryBanks/sortByAddress">Адрес</NavLink>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.banks.map(item => (
                        <tr>
                            <th scope="row"></th>
                            <td>{item.bik}</td>
                            <td>{item.name}</td>
                            <td>{item.kor}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button>Удалить банк</button>
            </div>
        );
    }
}

export default BanksTable;