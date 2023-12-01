/* eslint-disable react/prop-types */
// TaskForm.js
import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      onAddTask({ id: Date.now(), name: newTask, completed: false });
      setNewTask("");
    }
  };

  return (
    <div className="">
      <form
        className="flex justify-center items-center gap-5"
        onSubmit={handleFormSubmit}
      >
        <input
          className="p-2 border border-gray-300 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700"
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleInputChange}
          id="nuevaTarea"
          name="nuevaTarea"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-green-700 dark:shadow-purple-700" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
