import React from "react";
import { TaskType } from "../models/Task";
import { Task } from "./Task";



type TaskListProps = {
    tasks: TaskType[];
    deleteTask: (TaskId: number) => void;
    editTask: (TaskId: number) => void;
};


export const TaskList = ({tasks, deleteTask, editTask}: TaskListProps) => {
    return (
            <div className="list-container">
                {tasks.map((item) => (
                    <Task key={item.id} task={item} deleteTask={deleteTask} editTask = {editTask}/>
                ))}                
            </div>
    )
}

