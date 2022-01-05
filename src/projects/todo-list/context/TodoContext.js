import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  // Create Task
  const createTask = (taskInput) => {
    setTaskList([
      ...taskList,
      {
        task: taskInput,
        id: `task-${taskList.length}`,
        isCompleted: false,
        isSelected: false,
      },
    ]);
  };

  // Clean List
  const cleanList = () => {
    setTaskList([]);
  };

  // Clean Selected
  const cleanSelected = () => {
    const filteredSelectedTasks = taskList.filter((task) => {
      return !task.isSelected;
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
        cleanSelected,
        selectTask,
        completeTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
