import React from "react";
import "./NavLeft.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

function NavLeft() {
    return (
        <div className="l-left_nav">
            <IconButton className="l-left_nav__icon">
                <MenuIcon />
            </IconButton>
            <img
                className="l-left_nav__logo"
                src="https://www.vectorlogo.zone/logos/youtube/youtube-ar21.svg"
                alt=""
            />
        </div>
    );
}

export default NavLeft;
