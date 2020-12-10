import { createStore, combineReducers } from 'redux';
import { formReducer } from './Reducers'

const rootReducers = combineReducers({
  formReducer,
});

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;