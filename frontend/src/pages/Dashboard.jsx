import './dashboard.css'
import TaskForm from '../components/taskForm/TaskForm'
import TaskList from '../components/taskList/TaskList'
import { TaskProvider } from "../context/TaskContext"
const Dashboard = () => {
  return (
    <TaskProvider>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  )
}

export default Dashboard