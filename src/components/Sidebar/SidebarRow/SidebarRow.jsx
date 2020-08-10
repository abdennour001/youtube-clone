import React from "react";
import "./SidebarRow.scss";

function SidebarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebar_row ${selected ? " selected" : null}`}>
            <Icon className="sidebar_row__icon" />
            <h3 className="sidebar_row__title">{title}</h3>
        </div>
    );
}

export default SidebarRow;
