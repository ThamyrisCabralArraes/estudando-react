import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonTask from './ButtonTask';
import './TaskDetails.css';

const TaskDetails = () => {
  const navigate = useNavigate();
  const param = useParams();

  const handleGoBackButton = () => {
    navigate(-1);
  };

  return (
    <div className='container-button'>
      <div className='back-button'>
        <ButtonTask onClick={handleGoBackButton}>Voltar</ButtonTask>
      </div>
      <div className='task-detais-container'>
        <h2>{param.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas tenetur nulla laborum
          assumenda animi sapiente dicta, amet rerum voluptates modi id magni quaerat deleniti.
          Maxime quis reiciendis iusto totam!
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
