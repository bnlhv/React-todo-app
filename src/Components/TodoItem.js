import React from 'react'

export default function TodoItem({task}) {
    return (
        <li className="list-group-item">
            <h5>{task.id}) {task.title}</h5>
        </li>
    )
}
