const asyncWrapper = require('../middlewares/asyncWrapper');
const {createCustomError} = require('../errors/customErrors');
const Task = require('../models/taskModels');

const getAllTasks = asyncWrapper( 
    async (req,res)=>{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }
)



const createTask = asyncWrapper( async (req,res)=>{
    
        const task = await Task.create(req.body);
        res.status(201).json({
            task
        })
})

const getTask = asyncWrapper( async (req,res, next)=>{
    
        const {id: taskId} = req.params;      
        const task = await Task.findOne({_id: taskId});
        if(!task){
            return next(createCustomError('Resource Not Found'));
        }
        res.status(200).json({task});
    
})

const updateTask = asyncWrapper( async (req,res,next)=>{
    
        const {id: taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskId},req.body,{
            new: true,
            runValidators: true
        });
        if(!task){
            return next(createCustomError('Resource Not Found'));
        }
        res.status(200).json({task});
    
})

const deleteTask = asyncWrapper( async (req,res,next)=>{
    
        const {id: taskId} = req.params;
        const task = await Task.findOneAndDelete({_id: taskId});
        if(!task){
            return next(createCustomError('Resource Not Found'));
        }
        res.status(200).send("Successfully deleted");
    
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}