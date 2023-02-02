import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskId }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskId={handleTaskId}
        />
      ))}
    </div>
  );
};

export default Tasks;
