import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Contacts from './Componets/Contacts/contacts';
import Contacts_admin from './Componets/Contacts_admin/Contacts_admin';
import Contacts_user from './Componets/Contacts_user/Contacts_user'

const App = (props) => {

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Contacts state={props.state} setTextUser={props.setTextUser} />
      </Route>
      <Route exact path="/admin"><Contacts_admin state={props.state} setTextAdmin={props.setTextAdmin}/> </Route>

      <Route exact path="/user" ><Contacts_user state={props.state} /> </Route>



    </BrowserRouter>

  );
}

export default App;
