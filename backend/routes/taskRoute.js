const router=require('express').Router()

const {addTask,getTasks,getTask,editTask,statusTask,deleteTask}=require('../controllers/taskController')

router.post('/',addTask)
router.get('/',getTasks)
router.get('/:id',getTask)
router.put('/:id',editTask)
router.put('/:id/status',statusTask)
router.delete('/:id',deleteTask)




module.exports=router