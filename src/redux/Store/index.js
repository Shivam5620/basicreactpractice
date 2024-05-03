// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postReducer from '../reducer/reducer';

const rootReducer = combineReducers({
  posts: postReducer,
  // Add other reducers if necessary
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
