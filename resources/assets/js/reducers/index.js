import {combineReducers} from 'redux';
import navigationReducer from './navigationReducer';

const allReducers = combineReducers({
    activePage: navigationReducer
});

export default allReducers