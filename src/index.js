import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createEpicMiddleware} from 'redux-observable';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// j'importe le storiesReducer sous le nom de reducer
import reducer from './reducers/users-reducer';

import {rootEpic} from "./epics/users-epics";

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// je crée un store en partant du reducer
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);
// Je wrap mon App avec le Provider, comme ça tous les components pourront avoir accès au store si j'ai bien tout compris
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
