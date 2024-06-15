// // src/TaskList.js
// import React, { useState } from 'react';

// const TaskList = ({ tasks, updateTask, deleteTask }) => {
//   const [isEditing, setIsEditing] = useState(null);
//   const [currentTask, setCurrentTask] = useState('');

//   const handleEditClick = (index, task) => {
//     setIsEditing(index);
//     setCurrentTask(task);
//   };

//   const handleUpdateClick = (index) => {
//     updateTask(index, currentTask);
//     setIsEditing(null);
//   };

//   return (
//     <ul>
//       {tasks.map((task, index) => (
//         <li key={index} className='button-container'>
//             <div className="text-container">{task.text}</div>
//           {isEditing === index ? (
//             <>
//               <input
//                 type="text"
//                 value={currentTask}
//                 onChange={(e) => setCurrentTask(e.target.value)}
//               />
//               <button onClick={() => handleUpdateClick(index)} className="update-btn">Update</button>
//             </>
//           ) : (
//             <>
//               {task}
//               <button onClick={() => handleEditClick(index)} className="edit-btn">Edit</button>
//             </>
//           )}
//           <button onClick={() => deleteTask(index)} className="delete-btn">Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;
import React, { useState } from 'react';
import './App.css';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  const handleEditClick = (index, taskText) => {
    setEditingTaskIndex(index);
    setEditingTaskText(taskText);
  };

  const handleUpdateTask = (index) => {
    updateTask(index, editingTaskText);
    setEditingTaskIndex(null);
    setEditingTaskText('');
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {editingTaskIndex === index ? (
            <input
              type="text"
              value={editingTaskText}
              onChange={(e) => setEditingTaskText(e.target.value)}
              onBlur={() => handleUpdateTask(index)}
              autoFocus
            />
          ) : (
            <div className="text-container">{task.text}</div>
          )}
          <div className="button-container">
            {editingTaskIndex === index ? (
              <button onClick={() => handleUpdateTask(index)} className="update-btn">
                Update
              </button>
            ) : (
              <>
                <button onClick={() => handleEditClick(index, task.text)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => deleteTask(index)} className="delete-btn">
                  Delete
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
