import React from "react";
import css from "./Navbar.module.css";

function Navbar() {
    return (
        <navbar id={css.mainNavbar}>
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
                <a className="navbar-brand" href="#">Центральный Банк</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/directoryBanks">Справочник банков<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/createBank">Создать банк</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </navbar>
    );
}

export default Navbar;