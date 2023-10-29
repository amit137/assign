import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  tasks: [],
};

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_TASKS":
      return { tasks: action.payload };
    case "ADD_TASK":
      return { tasks: [action.payload, ...state.tasks] };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
      case "UPDATE_STATUS":
        const updatedTasks = state.tasks.map((task) => {
          if (task._id === action.payload.taskId) {
            return { ...task, status: action.payload.newStatus };
          }
          return task;
        });
        return { tasks: updatedTasks };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};
