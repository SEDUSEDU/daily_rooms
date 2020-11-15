import React from "react";
import { actionCreatortextUser } from "../../Redux/Reduser_add-message";
import Contacts from "./contacts";

const Contacts_container = (props) => {
  const textUser = React.createRef();

  const setTextUser = () => {
    props.store.dispatch(actionCreatortextUser(textUser.current.value));
  };

  return (
    <div>
      <Contacts
        state={props.store.getState()}
        setTextUser={setTextUser}
        textUser={textUser}
      />
    </div>
  );
};

export default Contacts_container;
