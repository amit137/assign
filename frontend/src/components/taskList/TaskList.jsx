import { useEffect, useState } from "react";
import "./tasklist.css";
import axios from "axios";
import Task from "../task/Task";
import { useTask } from "../../context/TaskContext"

const TaskList = () => {

  const { state,dispatch } = useTask();
  useEffect(
    () => {


      const fetchTasks = async () => {
        try {
          const res = await axios.get("http://localhost:8000/api/tasks/");
          dispatch({ type: "INITIAL_TASKS", payload: res.data });
        } catch (err) {
          console.log(err);
        }
      };

      fetchTasks();
    },
    [dispatch]
  );
  return (
    <div className="taskList">
      {state.tasks.map((task)=>(
       <Task  key={task._id} taskId={task._id} task={task.task} desc={task.description} status={task.status} />
      ))}
    </div>
  );
};

export default TaskList;
