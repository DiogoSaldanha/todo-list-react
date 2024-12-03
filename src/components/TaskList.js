import React, { useState, useEffect } from "react";
import { getTasks, deleteTask, markTaskAsCompleted } from '../services/api';

const TaskList = () => {
    const [ tasks, setTasks ] = useState([]);

    //Fetch tasks on component mount
    useEffect(() => {
        const fetchTasks = async () => {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        };
        fetchTasks();
    }, []);


    const handleDelete = async (index) => {
        await deleteTask(index);
        setTasks(tasks.filter((task, i) => i !== index));
    };

    const handleComplete = async (index) => {
        await markTaskAsCompleted(index);
        setTasks(tasks.map((task, i) => i === index ? { ...task, completed: true } : task));
    };

    return (
        <div className="task-list-container">
          <h2 className="task-list-title">Task List</h2>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <span className="task-description">{task.description}</span>
                <div className="task-actions">
                  <button onClick={() => handleComplete(index)} className="complete-btn">
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
    );
};

export default TaskList;