// src/TodoList.js
import React, { useState } from 'react';

 // Import the CSS file
 import './App.css'

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">
            <h1 className="title">To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        {task}
                        <button onClick={() => deleteTask(index)} className="delete-button">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
