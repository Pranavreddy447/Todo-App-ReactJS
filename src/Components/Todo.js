import React from 'react';
import './Todo.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div className="buttons">
                <div className="complete" onClick={() => completeTodo(index)}>Complete</div>
                <div className="incomplete" onClick={() => removeTodo(index)}>x</div>
            </div>
        </div>
    );
}

export default Todo;