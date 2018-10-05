import React from 'react';
import ReactDOM from 'react-dom';
/*
import './assets/css/bootstrap.css';
import './assets/css/bootstrap_limitless.css';
import './assets/css/layout.css';
import './assets/css/components.css';
import './assets/css/colors.css';
*/
import Application from './components/Application';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
