import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Partie propre à REDUX
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// j'importe le StoriesReducer sous le nom de reducer
import reducer from './reducers/Stories';

// je crée un store en partant du reducer
const store = createStore(reducer);

// Je wrap mon App avec le Provider, comme ça tous les components pourront avoir accès au store si j'ai bien tout compris
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
