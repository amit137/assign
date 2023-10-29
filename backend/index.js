const express=require('express')
const app=express()
// const dotenv=process
const port=8000 
const db=require('../backend/db/config')
const taskRoutes=require('../backend/routes/taskRoute')
const cors=require('cors')

db()

app.use(express.json())
app.use(cors())
app.use('/api/tasks',taskRoutes)


app.listen(port,()=>{
    console.log(`Server listening at port ${port}`)
})