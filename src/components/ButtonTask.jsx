import React from 'react';
import './ButtonTask.css';

const ButtonTask = ({ children, onClick }) => {
  return (
    <div className='containar-button'>
      <button
        onClick={onClick}
        className='button-add-task'
      >
        {children}
      </button>
    </div>
  );
};
export default ButtonTask;
