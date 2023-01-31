import React, { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskType } from "./models/Task";

const App = () => {
  const title = "To do list";
  const taskToEdit: any = null;
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState(data);


  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault()
    let form=event.currentTarget;
    const newTask: TaskType= {done: false, id:tasks.length +1, title:form.title.value, description:form.description.value};
    const newTask.push()
    setShowModal(false)
  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    const newList: TaskType[] = tasks.filter( task => task.id !== taskId);
    setTasks(newList)
  };

  return (
    <div className="main">
      <Header title={title} />
      
     <TaskList tasks={tasks} deleteTask={deleteTask}/>


      <button
        className="add-task-btn"
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      <TaskFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
