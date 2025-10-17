import { useState } from 'react';
export function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [isEditing, setIsEditing] = useState({});
    const addTodo = () => {
        if (input.trim() === '') return;
        const newTodo = {
            id: Date.now(),
            text: input.trim()
        }
        setTodos([...todos, newTodo])
        setInput('');
    }
    
    const deleteTodo = (todoToDelete) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
        setTodos(updatedTodos);
    }

    const editTodo = (todoToEdit) => {  }

    return (
        <div >
            <h1>Todo App</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter todo item'
            />

            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <>
                        <li key={todo.id}>{todo.text}</li>
                        <button
                            onClick={() => deleteTodo(todo)}
                        >
                            X
                        </button>
                        <button onClick={() => editTodo(todo)}>
                            Edit
                        </button>
                    </>
                ))}
            </ul>
        </div>
    );
}