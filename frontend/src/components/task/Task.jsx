import "./task.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SquareIcon from '@mui/icons-material/Square';
import axios from "axios";
import { useEffect, useState } from "react";
import { useTask } from "../../context/TaskContext";

const Task = ({taskId, task, desc, status }) => {

  const { state, dispatch } = useTask();

  const handleDelete=async()=>{
      try{
      await axios.delete(`http://localhost:8000/api/tasks/${taskId}`)
      dispatch({ type: "DELETE_TASK", payload: taskId });
      } 
      catch(err){
        console.log(err)
      }   
  }
 
  const handleStatus = async () => {
    try { 
      const response = await axios.put(`http://localhost:8000/api/tasks/${taskId}/status`, {
        status: !status,
      });
      dispatch({
        type: "UPDATE_STATUS",
        payload: { taskId, newStatus: response.data.status },
      });
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="task">
       <div className="status">
        {" "}
        {status ? (
          <CheckBoxIcon onClick={handleStatus} className="icon" style={{ color: "white",background:"teal" }} />
        ) : (
          <SquareIcon onClick={handleStatus} className="icon" style={{background:"tomato"}} />
        )}
      </div>
      <div className="content">
        {" "}
        <h4> {task}</h4>
        <p>{desc}</p>
      </div>
     
      <div className="clicks">
        {/* <EditIcon style={{ color: "green",margin:"5px"}} /> */}
        <DeleteIcon onClick={handleDelete} style={{ color: "red",margin:"5px"}} />
      </div>
    </div>
  );
};

export default Task;
