import React from "react";
import "./sidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h3>channel name</h3>
        <p>last Msg</p>
        <small>timestamp</small>{" "}
      </div>
    </div>
  );
}

export default SidebarChat;
