import React from "react";
import { actionCreatortextAdmin } from "../../Redux/Reduser_add-message";
import Contacts_admin from "./Contacts_admin";

const Contacts_admin_conteiner = (props) => {
  const textAdmin = React.createRef();
  const setTextAdmin = () => {
    props.store.dispatch(actionCreatortextAdmin(textAdmin.current.value));
  };

  return (
    <div>
      <Contacts_admin
        state={props.store.getState()}
        textAdmin={textAdmin}
        setTextAdmin={setTextAdmin}
      />
    </div>
  );
};

export default Contacts_admin_conteiner;
