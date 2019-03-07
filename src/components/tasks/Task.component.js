import React, {PropTypes} from 'react';

const TaskItem = ({task, handleCompleted, handleFailed}) => {
  return (
    <tr>
      <td>{task.courier}</td>
      <td>{task.driverName}</td>
      <td>{task.status}</td>
      <td>{task.description}</td>
      <td>{task.startedAt}</td>
      <td>{task.finishedAt}</td>
      <td>{task.driverComment}</td>
      {task.status ==='pending' &&
      <td width="180px">
        <button className="btn btn-success btn-block btn-sm" onClick={() => handleCompleted(task.id)}>completed</button>
        <button className="btn btn-danger btn-block btn-sm" onClick={() => handleFailed(task.id)}>failed</button>
      </td>
      }
    </tr>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  handleFailed: PropTypes.func.isRequired
};

export default TaskItem;
