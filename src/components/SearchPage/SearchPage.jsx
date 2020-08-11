import React from "react";
import "./SearchPage.css";
import TuneOutLined from "@material-ui/icons/TuneOutlined";

function SearchPage() {
    return (
        <div className="l-search_page">
            <div className="l-search_page__l-filter">
                <TuneOutLined className="l-search_page__icon" />
                <h3>filter</h3>
            </div>

            <hr />
        </div>
    );
}

export default SearchPage;
