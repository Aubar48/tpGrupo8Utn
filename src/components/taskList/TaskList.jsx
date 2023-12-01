/* eslint-disable react/prop-types */
import TaskItem from './../taskItem/TaskItem';
const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center ">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          
        />
      ))}
    </div>
  );
};

export default TaskList;
