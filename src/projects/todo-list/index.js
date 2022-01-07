import React from 'react';
import './style.css';
import List from './components/List';
import TodoContextProvider from './context/TodoContext';

function TodoList() {
  return (
    <TodoContextProvider>
      <List />
    </TodoContextProvider>
  );
}

export default TodoList;
