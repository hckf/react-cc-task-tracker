import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          onDelete={onDelete}
          onToggle={onToggle}
          task={task}
        />
      ))}
    </div>
  );
};

export default Tasks;
