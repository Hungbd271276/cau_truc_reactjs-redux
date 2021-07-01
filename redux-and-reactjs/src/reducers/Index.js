import hobbyReducer from './Hoppy';
import { combineReducers } from 'redux';
import userReducer from './User';

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer;