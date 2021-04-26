import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const asd = (axios.post("https://cors-everywhere-me.herokuapp.com/http://54.237.55.50:5000/Classify", {
//   "name" : "asd",
//   "job" : "qwe"
// }).then(res => res.data));

const asd = (axios.post("https://reqres.in/api/users", {
  "name" : "asd",
  "job" : "qwe"
}).then(res => res.data));

console.log(asd);


reportWebVitals();