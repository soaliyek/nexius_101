import "../styles/taskCard.css"

function TaskCard({id, title, category, budget}){
    return (
        <div className="nx-task-card">
            <h3 className="nx-task-card-id">{id}</h3>
            <div className="nx-task-card-details">
                <p>Title: {title}</p>
                <p>Category: {category}</p>
                <p>GHC {budget}</p>
            </div>
        </div>
    );
}

export default TaskCard;