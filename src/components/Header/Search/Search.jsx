import React from "react";
import "./Search.scss";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
    return (
        <div className="l-search">
            <input type="text" placeholder="Search" />
            <SearchIcon className="l-search__icon" />
        </div>
    );
}

export default Search;
