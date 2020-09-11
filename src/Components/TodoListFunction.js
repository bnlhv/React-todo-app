import React, {useState, useEffect} from 'react'
import TodoItem from './TodoItem'


//https://nztodo.herokuapp.com/api/task/?format=json


export default function TodoList() {
    
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response =>response.json())
        .then(tasks => setTasks(tasks));
    }, [])

    return (
        <>
            <ul className="list-group">
                {
                   tasks.map((singleTask) => {
                        return <TodoItem task={singleTask} key={singleTask.id}/>
                    })
                }
            </ul>
        </>
    )
}
