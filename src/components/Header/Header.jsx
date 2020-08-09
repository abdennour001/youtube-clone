import React from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import Search from "./Search";
import "./Header.css";

function Header() {
    return (
        <header className="l-header">
            <NavLeft />
            <Search />
            <NavRight />
        </header>
    );
}

export default Header;
