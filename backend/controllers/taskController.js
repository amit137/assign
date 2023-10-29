const Task = require("../modals/task")


const addTask=async(req,res)=>{
    try{
     const newTask=new Task(req.body)
     await newTask.save()
     res.status(201).json(newTask)
    }
    catch(err){
        res.status(500).json(err)
    }

}

const getTasks=async(req,res)=>{
    try{
        const tasks=await Task.find()
        if(tasks){
            res.status(200).json(tasks)
        }
        else{
            res.status(404).json('No Tasks')
        }

    }
    catch(err){
        res.status(500).json(err)
    }
}

const getTask=async(req,res)=>{
   try{
      const task=await Task.findById(req.params.id)
      if(task){
        res.status(200).json(task)
      }
      else{
        res.status(404).json("No such task")
      }
   }
   catch(err){
    res.status(500).json(err)
   }
}

const editTask = async (req, res) => {
    try {
      const editedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
      if (editedTask) {
        res.status(200).json({ message: "Task edited Successfully", task: editedTask });
      } else {
        res.status(404).json('Task not found');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  



const statusTask = async (req, res) => {
  try {
    const statusUpdated = await Task.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (statusUpdated) {
      return res.status(200).json(statusUpdated);
    }
   
    return res.status(404).json("Task not found");
  } catch (err) {
   
    return res.status(500).json(err);
  }
};


const deleteTask=async(req,res)=>{
    try{
        const deletedTask=await Task.findByIdAndDelete(req.params.id)
        if(deletedTask){
          res.status(200).json(deletedTask)
        }
        else{
          res.status(404).json("No such task")
        }
     }
     catch(err){
      res.status(500).json(err)
     }
}

module.exports={addTask,getTasks,getTask,editTask,statusTask,deleteTask}