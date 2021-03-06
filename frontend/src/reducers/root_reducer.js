import { combineReducers } from 'redux';
import session from './session_api_reducer';
import uiReducer from './ui_reducer';
import errorsReducer from "./errors_reducer";
import entities from './entities_reducer'

const RootReducer = combineReducers({
  entities,
  session,
  errors: errorsReducer,
  ui: uiReducer,
});

export default RootReducer;