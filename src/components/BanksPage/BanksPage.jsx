import React from "react";
import css from "./BanksPage.css";
import BanksTableItem from "./BanksTable/BanksTableItem";
import serverDataArray from "../../server/ArrayWithTableItems";
import Table from "./BanksTable/BanksTable";

let elementsTable = serverDataArray.map(element =>
    <BanksTableItem indexEl={element.indexEl} name={element.name} bik={element.bik} kor={element.kor}
                    address={element.address}/>);

let sortElementsTable = elementsTable.sort();

class BanksPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            banks: []
        }
    }

    render() {
        return (
            <div className={css.table_wrapper}>
                <Table/>
            </div>
        );
    }
}

export default BanksPage;