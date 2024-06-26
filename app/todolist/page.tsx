"use client"
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-grow p-2 border rounded-l"
            placeholder="Enter a to-do"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-600 text-white p-2 rounded-r"
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-200 p-2 mb-2 rounded">
              <span>{todo.text}</span>
              <button onClick={() => handleDeleteTodo(todo.id)} className="bg-blue-600 text-white p-2 rounded">
                {/* Only the trash bin icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M6 18l12-12"></path>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
