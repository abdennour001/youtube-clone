import React, { useState, useEffect } from "react";
import "./Search.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useLocation, useHistory } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Search() {
    const [query, setQuery] = useState("");
    let queryUrl = useQuery();
    let history = useHistory();

    useEffect(() => {
        setQuery(queryUrl.get("query") ? queryUrl.get("query") : "");
    }, []);

    return (
        <form
            className="l-search"
            onSubmit={e => {
                e.preventDefault();
                history.push(
                    `/search?query=${query ? query.replace(" ", "+") : ""}`
                );
            }}
        >
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <SearchIcon
                onClick={e => {
                    e.preventDefault();
                    history.push(
                        `/search?query=${query ? query.replace(" ", "+") : ""}`
                    );
                }}
                className="l-search__icon"
            />
        </form>
    );
}

export default Search;
