import React, { useState } from 'react'

const List = ({task}) => {

    const [tasks, setTasks] = useState(task);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  const newTaskHandler = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTaskHandler = () => {
    if (newTask === "") {
      alert("Complete todos los campos");
    } else {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const completeTask = (taskToComplete) => {
    if (!completedTasks.includes(taskToComplete)) {
      setCompletedTasks([...completedTasks, taskToComplete]);
    }
  };
  return (
    <div>
      <h1>Lista de tareas</h1>
      {tasks.length === 0 ? (
        <h3>Ingrese una nueva tarea</h3>
      ) : (
        <ol>
          {tasks.map((item, index) => (
            <div key={index}>
              <li
                style={
                  completedTasks.includes(item)
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                {item}
              </li>
              <button onClick={() => deleteTask(item)}>Eliminar tarea</button>
              <button onClick={() => completeTask(item)}>Completada</button>
            </div>
          ))}
        </ol>
      )}

      <input onChange={newTaskHandler} value={newTask} />
      <button onClick={addNewTaskHandler}>Agregar nueva tarea</button>
    </div>
  )
}

export default List
