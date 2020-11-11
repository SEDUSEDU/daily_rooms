import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contacts from './Componets/Contacts/contacts';

const App = (props) => {

  return (
    <BrowserRouter>
      <Contacts />
    </BrowserRouter>

  );
}

export default App;
