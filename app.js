const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000
const taskRouter = require('./routes/tasksRoutes')
const connectDB = require('./db/dataBase');
const pageNotfound = require('./middlewares/pageNotFound');
const errorHandlers = require('./middlewares/error-handlers');
require('dotenv').config();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks',[taskRouter,errorHandlers]);
app.use(pageNotfound);

// app.get('/api/v1/tasks') // get all tasks
// app.post('/api/v1/tasks') // create a task
// app.get('/api/v1/tasks/:id') // get a perticular task
// app.patch('/api/v1/tasks/:id') // update a perticular task
// app.delete('/api/v1/tasks/:id') // delete a perticular task

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(3000, (err)=>{
            if(err) throw err
            console.log(`Server is listening on port http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();