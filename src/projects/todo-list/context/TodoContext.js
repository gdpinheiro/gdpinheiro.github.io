import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  // Create Task
  const createTask = (taskInput) => {
    setTaskList([
      ...taskList,
      {
        task: taskInput,
        id: uuidv4(),
        isCompleted: false,
        isSelected: false,
      },
    ]);
  };

  // Clean List
  const cleanList = () => {
    setTaskList([]);
  };

  // Clean Completed
  const cleanCompleted = () => {
    const filteredSelectedTasks = taskList.filter((task) => {
      return !task.isCompleted;
    });
    setTaskList([]);
    setTaskList([...filteredSelectedTasks]);
  };

  // Select Task
  function selectTask({ id }) {
    const resetSelectedTasks = taskList.map((task) => {
      task.isSelected = false;
      return task;
    });
    const selectedTasksArray = resetSelectedTasks.map((task) => {
      if (task.id === id) {
        task.isSelected = !task.isSelected;
      }
      return task;
    });
    setTaskList([...selectedTasksArray]);
  }

  // Complete Task
  function completeTask({ id }) {
    const completedTaskArray = taskList.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTaskList([...completedTaskArray]);
  }

  return (
    <TodoContext.Provider
      value={{
        taskList,
        createTask,
        cleanList,
        cleanCompleted,
        selectTask,
        completeTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
