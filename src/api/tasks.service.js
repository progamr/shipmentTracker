import axios from 'axios';

class TasksService {
  static getAllTasks() {
    return axios.get('https://api.myjson.com/bins/b9ix6');
  }

  static saveTask() {

  }
}

export default TasksService;
