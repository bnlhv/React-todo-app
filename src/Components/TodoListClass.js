import React from 'react'
import TodoItem from './TodoItem'


// we need to grab the tasks from https://nztodo.herokuapp.com/api/task/?format=json
//save the tasks in the state
//iterate on tasks and place todoItem on every task


export default class TodoList extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    //here we need to init the todo arr from the rest server
    //we use async to use the await
    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        console.log(response);
        const tasks = await response.json();
        this.setState({
            tasks
        })
    }
    
    render() {
        return(
            <ul className="list-group">
                {
                    this.state.tasks.map((singleTask,index) => {
                        return <TodoItem task={singleTask} key={index}/>
                    })
                }
            </ul>
        );
    }
}
