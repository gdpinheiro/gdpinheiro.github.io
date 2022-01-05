import React, { useContext, useState } from 'react';
import '../style.css';
import ListItem from '../components/ListItem';
import { TodoContext } from '../context/TodoContext';

function TodoList() {
  const [taskInput, setTaskInput] = useState('');

  const { taskList, createTask, cleanList, cleanSelected } =
    useContext(TodoContext);

  // Handle input change
  const handleTaskInput = ({ target: { value } }) => {
    setTaskInput(value);
  };

  // Handle create task button
  const HandleCreateTaskButton = () => {
    createTask(taskInput);
    setTaskInput('');
  };

  return (
    <main>
      <h1>Minha Lista de Tarefas</h1>
      <h3 id='instruções'>
        Clique duas vezes em um item para marcá-lo como completo
      </h3>
      <input id='texto-tarefa' value={taskInput} onChange={handleTaskInput} />
      <button id='criar-tarefa' onClick={HandleCreateTaskButton}>
        Criar Tarefa
      </button>
      <ol id='lista-tarefas'>
        {taskList.map(({ task, isCompleted }, index) => (
          <ListItem key={`task-${index}`} id={`task-${index}`}>
            {task}
          </ListItem>
        ))}
      </ol>
      <button id='apaga-tudo' onClick={cleanList}>
        Apagar Tudo
      </button>
      <button id='remover-finalizados' onClick={cleanSelected}>
        Remover Finalizados
      </button>
    </main>
  );
}

export default TodoList;
