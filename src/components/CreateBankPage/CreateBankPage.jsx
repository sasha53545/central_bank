import React from "react";
import css from "./CreateBankPage.module.css";

class CreateBankPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bik: '',
            name: '',
            kor: '',
            address: ''
        };

        this.onChangeBik = this.onChangeBik.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeKor = this.onChangeKor.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
    }

    onChangeBik(event) {
        this.setState({bik: event.target.value});
    }

    onChangeName(event) {
        this.setState({name: event.target.value});
    }

    onChangeKor(event) {
        this.setState({kor: event.target.value});
    }

    onChangeAddress(event) {
        this.setState({address: event.target.value});
    }

    render() {
        return (
            <div className={css.form_wrapper}>
                <form className={css.form}>
                    <div className="form-group row ">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">БИК: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="БИК" value={this.state.bik} onChange={this.onChangeBik}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Название: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword3" placeholder="Название" value={this.state.name} onChange={this.onChangeName}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Корсчет: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="Кор. счет" value={this.state.kor} onChange={this.onChangeKor}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Адрес: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputPassword3" placeholder="Адрес" value={this.state.address} onChange={this.onChangeAddress}/>
                        </div>
                    </div>
                    <div className={css.buttons}>
                        <button type="submit" className="btn btn-primary button_1" value="Submit" onClick={() =>  this.setState({
                            banks: [...this.state.banks,
                                {
                                    name: 'new-name'
                                }]
                        })}>Создать</button>
                        <button type="submit" className="btn btn-primary button_2">Отмена</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateBankPage;