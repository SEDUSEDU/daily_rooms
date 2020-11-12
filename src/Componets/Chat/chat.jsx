import React from "react";
import c from "./chat.module.css";

const Chat = (props) => {
  return (
      <div className={c.box_chat_middle}>{props.state.messeges[1][0]}</div>
  );
};

export default Chat;
