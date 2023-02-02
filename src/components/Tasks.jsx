import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskId, handleRemoveTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskId={handleTaskId}
          handleRemoveTask={handleRemoveTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
