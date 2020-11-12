import React from "react";
import c from "./contacts.module.css";
import Nav from "../Nav/nav";
import Form from "../Form/form";
import Footer from "../Footer/footer";
import Chat from "../Chat/chat";

const Contacts = (props) => {
  const textUser = React.createRef();

  const setTextUser = () => {
    props.setTextUser(textUser.current.value);
  };

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
      {/*<Form />*/}
      <section className={c.section_mini}>
        <img
          className={c.section_mini_img}
          src="images/mini_contacts.jpg"
          alt="img"
        />
      </section>
      <div className={c.box_chat}>
        <div className={c.box_chat_top}>
          <div className={c.title}>Отправьте нам сообщение</div>
          <button className={c.btn_close}>x</button>
        </div>
      <Chat state={props.state} />
        <div className={c.box_chat_bottom}>
          <textarea
            ref={textUser}
            className={c.chat_message}
            placeholder="Введите сообщение..."
          ></textarea>
          <button onClick={setTextUser} className={c.btn_enter}>
            ^
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
