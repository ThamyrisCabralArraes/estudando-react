import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      tarefa: 'Estudar programaçao',
      completed: false,
    },
  ]);

  const handleTaskId = (taskId) => {
    const newId = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTask(newId);
  };

  const handleTaskAdd = (taskTarefa) => {
    const newTask = [...tasks, { tarefa: taskTarefa, id: uuidv4(), completed: false }];
    setTask(newTask);
  };

  return (
    <div className='container'>
      <AddTask handleTaskAdd={handleTaskAdd} />
      <Tasks
        tasks={tasks}
        handleTaskId={handleTaskId}
      />
    </div>
  );
};

export default App;
