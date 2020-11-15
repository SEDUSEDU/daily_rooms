import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Contacts_container from './Componets/Contacts/contacts_conteiner';
import Contacts_admin_conteiner from './Componets/Contacts_admin/Contacts_admin_conteiner';
import Contacts_user from './Componets/Contacts_user/Contacts_user'

const App = (props) => {

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Contacts_container store={props.store} />
      </Route>
      <Route exact path="/admin"><Contacts_admin_conteiner store={props.store} /> </Route>

      <Route exact path="/user" ><Contacts_user state={props.store.getState()} /> </Route>

    </BrowserRouter>

  );
}

export default App;
