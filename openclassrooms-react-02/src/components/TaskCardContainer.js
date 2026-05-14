import { taskList } from "../data/tasks";
import TaskCard from "./TaskCard";
import "../styles/taskCardContainer.css"

function TaskCardConatiner(){
    return (
        <div className="nx-task-card-container">
            {taskList.map((task)=>(
                <TaskCard key={task.id} id={task.id} title={task.title} category={task.category} budget={task.budget} />
            ))}
        </div>
    );
}

export default TaskCardConatiner;