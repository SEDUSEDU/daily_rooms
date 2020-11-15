import React from "react";
import c from "./Contacts_user.module.css";
import Nav from "../Nav/nav";
import Form from "../Form/form";
const Contacts_user = (props) => {
  return (
    <div className={c.contacts}>
      <Nav />
      <Form />
    </div>
  );
};

export default Contacts_user;
