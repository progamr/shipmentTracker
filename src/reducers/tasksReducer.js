import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function tasksReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      return action.tasks;
    case types.UPDATE_TASK_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.task.id),
        Object.assign({}, action.task)
      ];
    default:
      return state;
  }
}
