const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  description:{type:String,required:true},
  status:{type:Boolean,default:false} //false means not completed
},{timestamps:true});

const Task=mongoose.model('task',TaskSchema)

module.exports=Task
