import React from "react";
import css from "./CreateBank.module.css";

function CreateBank() {
    return (
        <div className={css.form_wrapper}>
            <form className={css.form}>
                <div className="form-group row ">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">БИК: </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="БИК"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Название: </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Название"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Корсчет: </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Кор. счет"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Адрес: </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Адрес"/>
                    </div>
                </div>
                <div className={css.buttons}>
                    <button type="submit" className="btn btn-primary button_1">Создать</button>
                    <button type="submit" className="btn btn-primary button_2">Отмена</button>
                </div>
            </form>
        </div>
    );
}

export default CreateBank;