
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Main from './components/Main';
import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(regular)
fontawesome.library.add(solid)
fontawesome.library.add(brands)


const store = createStore(
    allReducers    
);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('main')
);