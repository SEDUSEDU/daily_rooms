import React from "react";
import c from "./chat.module.css";

const Chat = (props) => {
  const getChat = props.state.messeges[0].map((value, index) => {
      return (
      <div key={value+index}>
        <div className={c.messge_admin} key={value}>{props.state.messeges[0][index]}</div>
        <div className={c.messge_user} key={index}>{props.state.messeges[1][index]}</div>
      </div>
      
  );
    } ) 
  
  return <div className={c.box_chat_middle}>{getChat}</div>;
};

export default Chat;
