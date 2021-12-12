import AddTask from "./components/AddTask";
import Header from "./components/Header";
import React from "react";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th, 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "School Meeting",
      day: "Feb 6th, 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 7th, 10:00am",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
};

// Class-based component example
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello!</h1>
//       </div>
//     );
//   }
// }

export default App;
