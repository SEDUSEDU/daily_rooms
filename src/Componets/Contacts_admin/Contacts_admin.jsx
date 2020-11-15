import React from "react";
import c from "./Contacts_admin.module.css";
import Nav from "../Nav/nav";
import Chat from "../Chat/chat";

const Contacts_admin = (props) => {
  console.log(props);
  return (
    <div className={c.contacts}>
      <Nav />
      <section className={c.section_big}>
        <img
          className={c.section_big_img}
          src="images/big_contacts.jpg"
          alt="img"
        />
        <h3>Контакты</h3>
      </section>

      <div className={c.box_chat}>
        <div className={c.box_chat_top}>
          <div className={c.title}>Отправьте нам сообщение</div>
          <button className={c.btn_close}>x</button>
        </div>
        <Chat state={props.state} />
        <div className={c.box_chat_bottom}>
          <textarea
            ref={props.textAdmin}
            type="text"
            className={c.chat_message}
            placeholder="Введите сообщение..."
          ></textarea>
          <button onClick={props.setTextAdmin} className={c.btn_enter}>
            ^
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts_admin;
