import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';


const feedback = (state = {}, action) => {
    console.log(action.payload);
    if (action.type === 'ADD_FEELING') {
        //whatever is returned will be saved in REDUX
        return {
            ...state,
            feeling: action.payload
        }
    }
    if (action.type === 'ADD_UNDERSTANDING') {
        //whatever is returned will be saved in REDUX
        return {
            ...state,
            understanding: action.payload
        }
    }
    if (action.type === 'ADD_SUPPORT') {
        //whatever is returned will be saved in REDUX
        return {
            ...state,
            support: action.payload
        }
    }
    if (action.type === 'ADD_COMMENTS') {
        //whatever is returned will be saved in REDUX
        return {
            ...state,
            comments: action.payload
        }
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
