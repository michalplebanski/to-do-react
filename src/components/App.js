import React, { Component } from 'react';

import ListOfTasks from './ListOfTasks';
import AddTask from './AddTask';
import '../styles/App.css';

class App extends Component {

    state = {
        taskList: [
            {
                id: 1,
                name: 'Do an application',
                startDate: '12-09-2019',
                endDate: '19-05-2020',
                important: false,
                active: true,
            },
            {
                id: 2,
                name: 'Do something',
                startDate: '15-05-2014',
                endDate: '03-09-2020',
                important: false,
                active: true,
            },
            {
                id: 3,
                name: 'Go to bed',
                startDate: '01-05-2019',
                endDate: '31-12-2020',
                important: false,
                active: true,
            },
            {
                id: 4,
                name: 'Go to school',
                startDate: '11-09-2019',
                endDate: '23-09-20222',
                important: false,
                active: true,
            },
        ]
    }

    render() {
        return (
            <>
                <AddTask />
                <hr />
                <ListOfTasks taskList={this.state.taskList} />
            </>
        )
    }
}

export default App;