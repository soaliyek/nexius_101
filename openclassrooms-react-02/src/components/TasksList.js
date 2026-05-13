import React from "react";
import { taskList } from "../data/tasks";
import TaskProp from "./TaskProp";

function TasksList(){
    return (
        <React.Fragment>
            {/* List All Tasks */}
            <h3>List of All</h3>
            <ul>
                {taskList.map((task)=>(
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>

            {/* List Filter >= 100 */}
            <h3>{'Tasks with budget >= 100'}</h3>
            <ul>
                {taskList.map((task)=>(
                    task.budget >= 100 && <li key={task.id}>{task.title}</li>
                ))}
            </ul>

            {/* Using the Task Prop */}
            <h3>Task Details</h3>
            <ul>
                {taskList.map((task)=>(
                    <li key={task.id}>
                        <TaskProp name="Title" value={task.title} />
                        <TaskProp name="Budget" value={task.budget} />
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}

export default TasksList;