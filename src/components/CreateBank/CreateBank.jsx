import React from "react";
import css from "./CreateBank.module.css";

function CreateBank() {
    return (
        <header id={css.mainContent} className={css.mainContent}>
            <form className={css.form}>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">БИК: </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Название: </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Кор. счет: </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Адрес: </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
            </form>
        </header>
    );
}

export default CreateBank;