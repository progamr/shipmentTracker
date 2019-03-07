import * as types from './actionTypes';
import CourseApi from './../api/mockCourseApi';
import TasksService from './../api/tasks.service';
import {beginAjaxCall, ajaxCallError} from './../actions/ajaxStatusActions';

export function loadTasksSuccess(tasks) {
  return {type: types.LOAD_TASKS_SUCCESS, tasks};
}
export function updateTaskSuccess(task) {
  return {type: types.UPDATE_TASK_SUCCESS, task};
}

// Tasks thunks
export function loadTasks() {
  // Role: handle a promise and dispatch an action when the promise is resolved
  return function (dispatch) {
    //dispatch(beginAjaxCall());
    return TasksService.getAllTasks();/*
    .then(tasks => {
      //dispatch(loadTasksSuccess(tasks));
    }).catch(err => {
      throw(err);
    });*/
  };
}

export function saveTask(task) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return TasksService.saveTask(task).then(savedTask => {
      dispatch(updateTaskSuccess(savedTask));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
