import { useState, useEffect } from "react";
import TaskList from "../../components/taskList/TaskList";
import TaskForm from "../../components/taskForm/TaskForm";
import { Navbar } from "./../../components/navbar/Navbar";
import Carrousel from "../../components/carrousel/Carrousel";
import { Footer } from "./../../components/footer/Footer";
import Temporizador from "../../components/temporizador/Temporizador";

const Lista = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Recuperar la lista de tareas desde localStorage al cargar la página
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // Actualizar el estado solo si hay tareas almacenadas
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []); // Este efecto se ejecuta solo una vez al cargar la página

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    // Guardar la lista de tareas en localStorage cada vez que cambie
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Este efecto se ejecuta cada vez que cambia el estado de tasks

  return (
    <>
      <Navbar />
      <Carrousel />
      <div className="text-center pb-60 h-auto pt-2 font-roboto bg-gradient-to-bl from-white via-slate-50 to-green-600 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-50 dark:to-purple-700">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 px-4">
            <Temporizador />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold">
                Lista de Tareas
              </h1>
              <div className="flex flex-col md:items-center md:justify-center">
                <TaskForm onAddTask={handleAddTask} />
              </div>
              <div className="flex md:items-center md:justify-center">
                <TaskList
                  tasks={tasks}
                  onToggleComplete={handleToggleComplete}
                  onDelete={handleDeleteTask}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lista;
