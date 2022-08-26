import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import MahasiswaReducer from './MahasiswaReducer';

const rootReducer = combineReducers({
  MahasiswaReducer,
  form,
});

export default rootReducer;
