import React from "react";
import css from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <navbar className={css.main_navbar}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="/directoryBanks">Центральный Банк</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/directoryBanks">Справочник банков<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/createBank">Создать банк</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </navbar>
    );
}

export default Navbar;