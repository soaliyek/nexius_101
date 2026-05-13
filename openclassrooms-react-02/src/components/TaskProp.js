
function TaskProp(props) {
    return (
        <div className="task-prop">
            <span className="task-prop-name">{props.name}: </span>
            <span className="task-prop-value">{props.value}</span>
        </div>
    );
}

export default TaskProp;