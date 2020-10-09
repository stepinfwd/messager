import React from "react";
import { RateReviewOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "./sidebar.css";
import "./SidebarChat.js";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        {/* <Avatar /> */}
        <div className="sidebar__input">
          <SearchIcon />
          <input type="" placeholder="search" />
        </div>
        <IconButton variant="outlined" className="sidebar__inputButton">
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
