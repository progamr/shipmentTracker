import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tasks from './Tasks.component';
import * as tasksActions from './../../actions/tasksActions';

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(tasksActions, dispatch)
  };
};

class TasksWrapper extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false
    };

    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleFailed = this.handleFailed.bind(this);

  }

  componentDidMount() {
    this.setState({loading: true});
    this.props.actions.loadTasks().then((res) => {
      let tasks = [];
      let id = 1;
      res.data.tasks.map(task => {
        task.id = id;
        tasks.push(task);
        id++;
      });
      this.props.actions.loadTasksSuccess(tasks);
      // console.log('tasks loaded');
      this.setState({loading: false});

    }).catch(error => {
      //console.log(error);
    });

  }

  handleCompleted(id) {
    const tasks = [...this.props.tasks];
    let task = tasks.find(t => t.id === id);
    // console.log('to be completed', task);
    let newTask = {
      ...task,
      status: 'completed'
    };
    // newTask.status = 'completed';
    this.props.actions.updateTaskSuccess(newTask);
  }

  handleFailed(id) {
    let task = this.props.tasks.find(t => t.id === id);
    // console.log('to be failed', task);
    task.status = 'failed';
    this.props.actions.updateTaskSuccess(task);
  }

  render() {
    if(this.state.loading === true) {
      return (
        <div>
          <span>loading tasks...</span>
        </div>
      );
    } else {
      return (
          <Tasks tasks={this.props.tasks} handleCompleted={this.handleCompleted} handleFailed={this.handleFailed}/>
      );
    }
  }

}

TasksWrapper.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object
};

export const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(TasksWrapper);
