import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
    return (
        <div className="l-search">
            <input type="text" placeholder="Search" />
            <SearchIcon />
        </div>
    );
}

export default Search;
