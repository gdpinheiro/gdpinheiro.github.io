import React from 'react';
import './style.css';
import TodoList from './components/TodoList';
import TodoContextProvider from './context/TodoContext';

function TodoListIndex() {
  return (
    <TodoContextProvider>
      <TodoList />
    </TodoContextProvider>
  );
}

export default TodoListIndex;
