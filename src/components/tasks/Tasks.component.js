import React, {PropTypes} from 'react';
import Task from './Task.component';

const Tasks = ({tasks, handleCompleted, handleFailed}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Courrier</th>
        <th>Driver Name</th>
        <th>Task status</th>
        <th>Task Description</th>
        <th>Task start date</th>
        <th>Task finished date</th>
        <th>Driver comment</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {tasks.map(task =>
        <Task key={task.id} task={task} handleCompleted={handleCompleted} handleFailed={handleFailed} />
      )}
      </tbody>
    </table>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  handleFailed: PropTypes.func.isRequired
};

export default Tasks;
