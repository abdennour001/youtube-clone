import React from "react";
import "./NavLeft.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleMenu } from "../../../redux/actions/menuActions";

function NavLeft({ isOpened, toggleMenu }) {

    const toggleSidebar = e => {
        toggleMenu();
    };

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

const mapStateToProps = state => ({
    isOpened: state.menu.isOpened
});

export default connect(mapStateToProps, { toggleMenu })(NavLeft);
