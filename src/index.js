import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap_limitless.min.css';
import './assets/css/layout.min.css';
import './assets/css/components.min.css';
import './assets/css/colors.min.css';
import './assets/css/icons/icomoon/styles.css';
import './assets/css/custom.min.css';

import './assets/js/theme-app';

import Application from './views/root/Application';
import store from "./store";

ReactDOM.render(<Application store={store} />, document.getElementById('root'));
