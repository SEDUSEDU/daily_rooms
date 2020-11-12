import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe, setTextUser, setTextAdmin } from './Redux/state'

let rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} setTextUser={setTextUser} setTextAdmin={setTextAdmin} />
    </React.StrictMode>,
    document.getElementById('root')
  );

}
rerender()
subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
