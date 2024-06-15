// // src/App.js
// import React, { useState } from 'react';
// import TaskInput from './TaskInput';
// import TaskList from './TaskList';
// import './App.css'; // Add some basic styling

// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   const updateTask = (index, newTask) => {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? newTask : task
//     );
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (index) => {
//     const filteredTasks = tasks.filter((_, i) => i !== index);
//     setTasks(filteredTasks);
//   };

//   return (
//     <div className="App">
//       <h1>Itinerary Planner</h1>
//       <TaskInput addTask={addTask} />
//       <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
//     </div>
//   );
// };

// export default App;
// src/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText }]);
  };

  const updateTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Itinerary Planner</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const taskText = e.target.elements.task.value.trim();
          if (taskText) {
            addTask(taskText);
            e.target.elements.task.value = '';
          }
        }}
      >
        <input type="text" name="task" placeholder="Enter a new task" />
        <button type="submit" className="add-btn">Add Task</button>
      </form>
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
