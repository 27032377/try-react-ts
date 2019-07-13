import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducers';

const store = createStore(todoApp, applyMiddleware(thunk));

export default store;