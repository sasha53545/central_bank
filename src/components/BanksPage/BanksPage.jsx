import React from "react";
import css from "./BanksPage.css";
import BanksTable from "./BanksTable/BanksTable";

class BanksPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            banks: []
        }
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