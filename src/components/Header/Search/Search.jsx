import React, { useState } from "react";
import "./Search.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Search() {
    const [query, setQuery] = useState("");

    return (
        <div className="l-search">
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <Link to={`/search/${query}`} style={{ display: "flex" }}>
                <SearchIcon className="l-search__icon" />
            </Link>
        </div>
    );
}

export default Search;
