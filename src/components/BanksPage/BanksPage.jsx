import React from "react";
import css from "./BanksPage.css";
import BanksTable from "./BanksTable/BanksTable";

class BanksPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css.banks_page_wrapper}>
                <BanksTable/>
            </div>
        );
    }
}

export default BanksPage;