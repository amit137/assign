import { useState } from "react";
import "./taskForm.css";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTask } from "../../context/TaskContext"


const TaskForm = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const { dispatch } = useTask();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
       const data={task,description:desc}
       const res=await axios.post('http://localhost:8000/api/tasks/',data)
       if(res.data){
        dispatch({ type: "ADD_TASK", payload: res.data });
          
        setDesc("")
        setTask("")

        // toast.success('Task added successfully'); 
      }
    }
    catch(err){
        console.log(err)
        toast.error('Error adding task'); 
    }
  };

  return (
    <div className="taskForm">
        <ToastContainer />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <textarea
          name="task"
          id="task"
          cols="10"
          rows="5"
          onChange={(e) => setTask(e.target.value)}
        ></textarea>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
