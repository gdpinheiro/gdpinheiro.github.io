import React, { useState } from 'react';
import './style.css';
import ListItem from './components/ListItem';

function TodoList() {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  // Handle input change
  function handleTaskInput({ target: { value } }) {
    setTaskInput(value);
  }

  // Create Task
  function createTask() {
    setTaskList([...taskList, taskInput]);
    setTaskInput('');
  }

  // Clean List
  function cleanList(button) {
    // let tasks = document.querySelectorAll('.listItem');
    // tasks.forEach((element) => {
    //   element.remove('li');
    // });
  }

  // Clean Selected
  function cleanSelected(button) {
    // let tasks = document.querySelectorAll('.completed');
    // tasks.forEach((element) => {
    //   element.remove('li');
    // });
  }

  return (
    <main>
      <h1>Minha Lista de Tarefas</h1>
      <h3 id='instruções'>
        Clique duas vezes em um item para marcá-lo como completo
      </h3>
      <input id='texto-tarefa' onChange={handleTaskInput} />
      <button id='criar-tarefa' onClick={createTask}>
        Criar Tarefa
      </button>
      <ol id='lista-tarefas'>
        {taskList.map((task) => (
          <ListItem key={task}>{task}</ListItem>
        ))}
      </ol>
      <button id='apaga-tudo'>Apagar Tudo</button>
      <button id='remover-finalizados'>Remover Finalizados</button>
    </main>
  );
}

export default TodoList;
