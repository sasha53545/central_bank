import React from "react";
import css from "./Content.module.css";
import CreateBank from "./CreateBank/CreateBank";
import DirectoryBanks from "./DirectoryBanks/DirectoryBanks";

function Content() {
    return (
        <div className={css.main_content}>
            <CreateBank/>
            <DirectoryBanks/>
        </div>
    );
}

export default Content;