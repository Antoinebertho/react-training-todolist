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
  // const taskToEdit: any = null;
  const [taskToEdit, setTaskToEdit] = useState<TaskType | null >(null);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState(data);


  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();

    if (taskToEditId != null)  {
      const tmpTask = tasks.find((task) => taskToEditId === task.id);
      if (tmpTask) {
        tmpTask.title = event.target.title.value;
        tmpTask.description = event.target.description.value;
      }
      setTaskToEdit(null);
      console.log(taskToEditId)
    } else {
      const newTask: TaskType = {
        done: false,
        id: tasks[tasks.length - 1].id + 1,
        title: event.target.title.value,
        description: event.target.description.value,
      };
      setTasks([...tasks, newTask])
    }
    setShowModal(false)
  };

  const editTask = (taskId: number) => {
    const task = tasks.find((task) => taskId === task.id);
    if(task != null) {
      setTaskToEdit(task);
      setShowModal(true);
    }
  };

  const deleteTask = (taskId: number) => {
    const newList: TaskType[] = tasks.filter( task => task.id !== taskId);
    setTasks(newList)
  };

  return (
    <div className="main">
      <Header title={title} />
      
     <TaskList tasks={tasks} deleteTask={deleteTask} editTask = {editTask}/>

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
