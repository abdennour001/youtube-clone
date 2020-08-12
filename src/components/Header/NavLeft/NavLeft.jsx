import React from "react";
import "./NavLeft.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function NavLeft() {

    const toggleSidebar = (e) => {

    }

    return (
        <div className="l-left_nav">
            <IconButton className="l-left_nav__icon" onClick={toggleSidebar}>
                <MenuIcon />
            </IconButton>
            <Link to="/">
                <img
                    className="l-left_nav__logo"
                    src="https://www.vectorlogo.zone/logos/youtube/youtube-ar21.svg"
                    alt=""
                />
            </Link>
        </div>
    );
}

export default NavLeft;
