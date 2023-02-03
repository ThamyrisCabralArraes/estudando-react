import React from 'react';
import './Task.css';
import { useNavigate } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';

const Task = ({ task, handleTaskId, handleRemoveTask }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate('/taskTitle');
  };

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
        <div>
          <button
            className='button-x'
            onClick={handleTaskDetailsClick}
          >
            <BsInfoCircle />
          </button>
        </div>
        <div>
          <button
            className='button-x'
            onClick={() => handleRemoveTask(task.id)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
