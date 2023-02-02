import React, { useState } from 'react';
import './AddTask.css';
import ButtonTask from './ButtonTask';

const AddTask = ({ handleTaskAdd }) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleTaskAddClick = () => {
    handleTaskAdd(inputData);
    setInputData('');
  };

  return (
    <div className='container-add-task'>
      <input
        className='input-add-task'
        value={inputData}
        onChange={handleInputChange}
        type='text'
      />
      <ButtonTask onClick={handleTaskAddClick}>Adicionar</ButtonTask>
    </div>
  );
};

export default AddTask;
