import React from 'react';

import '../styles/ListOfTasks.css';
import Task from './Task';

const ListOfTasks = (props) => {
    
    const list = props.taskList.map(item => <Task key={item.id} item={item} />)

    return (
        <>
            <div className="task-list">{list}</div>
        </>
    )
}

export default ListOfTasks;