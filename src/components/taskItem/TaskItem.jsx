/* eslint-disable react/prop-types */
const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="mt-2 " >
      <div className="flex justify-center">
      <button
        className=" bg-green-500 text-white px-2 py-1 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700"
        onClick={() => onToggleComplete(task.id)}
      >
        {task.completed ? 'Desmarcar' : 'Completar'}
      </button>
      <button
        className="ml-2 bg-red-500 text-white px-2 py-1 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700"
        onClick={() => onDelete(task.id)}
      >
        Eliminar
      </button>
      </div>
      
      <div className="flex flex-col" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span className="mt-2 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700">{task.name}</span>
      </div>
      
    </div>
  );
};

export default TaskItem;