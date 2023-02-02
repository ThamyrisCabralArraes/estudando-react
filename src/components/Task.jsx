import React from 'react';
import './Task.css';

const Task = ({ task, handleTaskId }) => {
  return (
    <div
      className='task-container'
      style={task.completed ? { borderLeft: '6px solid rgb(246, 255, 0)' } : {}}
    >
      <div
        className='task-tarefa'
        onClick={() => handleTaskId(task.id)}
      >
        {task.tarefa}
      </div>
      <div className='buttons-container'>
        <button className='button-x'>x</button>
      </div>
    </div>
  );
};

export default Task;
