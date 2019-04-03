import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bunty from './Bunty';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('id01'));
//ReactDOM.render(<Bunty />,document.getElementById('id02'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
