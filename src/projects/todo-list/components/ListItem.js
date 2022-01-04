import React, { useState } from 'react';
import classNames from 'classnames';
import '../style.css';

function ListItem(props) {
  const [isTheItemSelected, setIsTheItemSelected] = useState(false);
  const [isTheItemCompleted, setIsTheItemCompleted] = useState(false);

  const { children } = props;

  // Select Task
  function selectTask(task) {
    setIsTheItemSelected(!isTheItemSelected);
  }

  // Complete Task
  function completeTask(task) {
    setIsTheItemCompleted(!isTheItemCompleted);
  }

  const listItemClass = classNames({
    listItem: true,
    selected: isTheItemSelected,
    completed: isTheItemCompleted,
  });

  return (
    <li
      className={listItemClass}
      onClick={selectTask}
      onDoubleClick={completeTask}
    >
      {children}
    </li>
  );
}

export default ListItem;
