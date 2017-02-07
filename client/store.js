import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//import data
import comments fom './data/comments';
import posts fom './data/posts';

//create an object for the default data
const defaultState = {
  posts,
  comments
};

export default const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
