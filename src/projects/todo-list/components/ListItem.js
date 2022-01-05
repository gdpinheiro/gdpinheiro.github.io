import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import '../style.css';
import { TodoContext } from '../context/TodoContext';

function ListItem(props) {
  const [currentTask, setCurrentTask] = useState({});

  const { taskList, selectTask, completeTask } = useContext(TodoContext);

  const { children, id } = props;

  useEffect(() => {
    return () => {
      taskList.map((task) => {
        if (task.id === id) {
          setCurrentTask(task);
        }
        return task;
      });
    };
  }, [id, taskList]);

  const listItemClass = classNames({
    listItem: true,
    selected: currentTask.isSelected,
    completed: currentTask.isCompleted,
  });

  return (
    <li
      className={listItemClass}
      onClick={({ target }) => selectTask(target)}
      onDoubleClick={({ target }) => completeTask(target)}
      id={id}
    >
      {children}
    </li>
  );
}

export default ListItem;
