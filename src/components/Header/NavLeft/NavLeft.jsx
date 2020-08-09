import React from "react";
import "./NavLeft.css";
import MenuIcon from "@material-ui/icons/Menu";

function NavLeft() {
    return (
        <div className="l-left_nav">
            <MenuIcon className="l-left_nav__icon" />
            <img
                src="https://www.vectorlogo.zone/logos/youtube/youtube-ar21.svg"
                alt=""
            />
        </div>
    );
}

export default NavLeft;
