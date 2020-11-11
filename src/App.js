import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Contacts from './Componets/Contacts/contacts';
import Contacts_admin from './Componets/Contacts_admin/Contacts_admin';
import Contacts_user from './Componets/Contacts_user/Contacts_user'

const App = (props) => {

  return (
    <BrowserRouter>
    <Route exact path="/">
      <Contacts />
      </Route> 
    <Route exact path="/admin" component={Contacts_admin}/>
          
      <Route exact path="/user" component={Contacts_user}/>
     
       
      
    </BrowserRouter>

  );
}

export default App;
