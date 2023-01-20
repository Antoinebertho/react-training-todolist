import React from "react";
import { TaskType } from "../models/Task";
import { Task } from "./Task";



type TaskListProps = {
    tasks: TaskType[];
};


export const TaskList = ({tasks}: TaskListProps) => {
    return (
        <div>
            <div className="list-container"></div>
            {tasks.map((task)=>(<Task task={task} />
            ))}
        </div>
    )
}

