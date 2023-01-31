import React from "react";
import { TaskType } from "../models/Task";
import { Task } from "./Task";



type TaskListProps = {
    tasks: TaskType[];
    deleteTask: (TaskId: number) => void;
};


export const TaskList = ({tasks, deleteTask}: TaskListProps) => {
    return (
            <div className="list-container">
                {tasks.map((item) => (
                    <Task key={item.id} task={item} deleteTask={deleteTask}/>
                ))}                
            </div>
    )
}

