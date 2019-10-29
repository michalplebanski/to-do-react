import React from 'react';

import '../styles/Task.css';

const Task = (props) => {
    return (
        <div className="task">
            <p><strong className="task-name">{props.item.name}</strong><span className="date">Start date: {props.item.startDate}</span> <span className="date">Finish date: {props.item.endDate}</span></p>
        </div>
    )
}

export default Task;