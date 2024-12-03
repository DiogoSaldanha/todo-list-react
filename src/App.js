import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (description) => {
    setTasks([...tasks, { description, completed: false }]);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">To-Do List</h1>
      </header>
      <main>
        <AddTask onAdd={handleAddTask} />
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
};

export default App;