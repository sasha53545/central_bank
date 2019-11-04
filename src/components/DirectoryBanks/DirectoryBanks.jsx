import React from "react";
import css from "./DirectoryBanks.module.css";

function DirectoryBanks(props) {
    return (
        <header id={css.mainContent}>
            <div className={css.tableWrapper}>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название банка</th>
                        <th scope="col">БИК</th>
                        <th scope="col">Корсчет</th>
                        <th scope="col">Адрес</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{props.name}</td>
                        <td>{props.bik}</td>
                        <td>{props.kor}</td>
                        <td>{props.address}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </header>
    );
}

export default DirectoryBanks;