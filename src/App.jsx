import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDetails from './components/TaskDetails';

import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Header from './components/Header';

const App = () => {
  const [tasks, setTask] = useState([]);

  // [
  //   {
  //     id: 1,
  //     tarefa: 'Estudar programaçao',
  //     completed: false,
  //   },
  // ]
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

  const handleRemoveTask = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTask(newTask);
  };

  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <AddTask handleTaskAdd={handleTaskAdd} />
                <Tasks
                  tasks={tasks}
                  handleTaskId={handleTaskId}
                  handleRemoveTask={handleRemoveTask}
                  exact
                />
              </>
            }
          />
          <Route
            path='/:taskTitle'
            element={<TaskDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
