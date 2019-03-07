import {combineReducers} from 'redux';
import tasks from './tasksReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  tasks,
  ajaxCallsInProgress
});

export default rootReducer;
