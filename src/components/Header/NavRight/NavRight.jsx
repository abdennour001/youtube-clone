import React from "react";
import "./NavRight.css";
import VideoCall from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function NavRight() {
    return (
        <div className="l-right_nav">
            <VideoCall className="l-right_nav__icon" />
            <AppsIcon className="l-right_nav__icon" />
            <NotificationsIcon className="l-right_nav__icon" />
            <Avatar 
                alt="abdennour"
                src="https://yt3.ggpht.com/a-/AOh14Gj_hM5F5a3E6M457YSf7EShO747F7LOvYj2I43G=s88-c-k-c0xffffffff-no-rj-mo"
            />
        </div>
    );
}

export default NavRight;
