// FORM SUBMISSION

import React, { useState } from 'react';
import { addTask } from '../services/api';

const AddTask = ({ onAdd }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description) {
      await addTask(description);
      onAdd(description);
      setDescription('');
    }
  };

  return (
    <div className="add-task-container">
      <h2 className="add-task-title">Add New Task</h2>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          className="task-input"
        />
        <button type="submit" className="add-task-btn">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;