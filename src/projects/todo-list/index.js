import React from 'react';
import './style.css';

function index() {
  return (
    <div>
      <header>Minha Lista de Tarefas</header>
      <p id='funcionamento'>
        Clique duas vezes em um item para marcá-lo como completo
      </p>
      <input id='texto-tarefa' />
      <button id='criar-tarefa'>Criar Tarefa</button>
      <ol id='lista-tarefas'></ol>
      <button id='apaga-tudo'>Apagar Tudo</button>
      <button id='remover-finalizados'>Remover Finalizados</button>
    </div>
  );
}

export default index;
