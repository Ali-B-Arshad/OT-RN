import {combineReducers} from 'redux';
import userInformation from './userInformation';

//Whenever you make a new reducer add them here..

const appReducer = combineReducers({
  userInformation,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
