import React from "react";
import "./SidebarRow.scss";
import { connect } from "react-redux";

function SidebarRow({ selected, Icon, title, isOpened }) {
    return (
        <div className={`sidebar_row${isOpened ? "" : "-hidden"} ${selected ? " selected" : null}`}>
            <Icon className={`sidebar_row__icon${isOpened ? "" : "-hidden"}`} />
            <h3 className={`sidebar_row__title${isOpened ? "" : "-hidden"}`}>
                {title}
            </h3>
        </div>
    );
}

export default connect(state => ({ isOpened: state.menu.isOpened }))(
    SidebarRow
);
