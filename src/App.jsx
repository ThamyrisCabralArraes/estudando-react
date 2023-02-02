import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      tarefa: 'Estudar programaçao',
      completed: true,
    },
    {
      id: 2,
      tarefa: 'Dar cenoura a Luffy',
      completed: false,
    },
  ]);

  const handleTaskAdd = (taskTarefa) => {
    const newTask = [...tasks, { tarefa: taskTarefa, id: 3, completed: false }];
    setTask(newTask);
  };
  return (
    <div className='container'>
      <AddTask handleTaskAdd={handleTaskAdd} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
