import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counters from './components/counters';
import "bootstrap/dist/css/bootstrap.css";

// ReactDOM.render(<Counters />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
