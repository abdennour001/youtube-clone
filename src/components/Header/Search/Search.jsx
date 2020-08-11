import React, { useState, useEffect } from "react";
import "./Search.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Search() {
    const [query, setQuery] = useState("");
    let queryUrl = useQuery();

    useEffect(() => {
        setQuery(queryUrl.get("query") ? queryUrl.get("query") : "");
    }, []);

    return (
        <div className="l-search">
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <Link
                to={`/search?query=${ query ? query.replace(" ", "+") : ""}`}
                style={{ display: "flex" }}
            >
                <SearchIcon className="l-search__icon" />
            </Link>
        </div>
    );
}

export default Search;
