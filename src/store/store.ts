import {createStore} from 'redux';
import catsReducer from './reducers/catsReducer';
const store = createStore(catsReducer);

export default store;
