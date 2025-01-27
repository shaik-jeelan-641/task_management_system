import Task from "../models/Task.js"

export const AddTask = async (res , req) => {
    try {
        const {title , description , status , priority, dueDate , assignedTo, createdAt} = req.body;
        const newTask = new Task({
            title ,
            description ,
            status ,
            priority ,
            dueDate ,
            assignedTo ,
            createdAt ,
        })

        const saveTask = await newTask.save()
        res.status(201).json(saveTask)
    }catch(error){
        res.status(500).json({message : error.message})
    }
}

export const getTasks = async (res , req) => {
   try{
     const existingTasks = await Task.find().populate('assignedTo').populate('createdAt')
     res.status(201).json(existingTasks)
   } catch(error){
    res.status(500).json({message : error.message})
   }
}

export const getTasksByID = async (res, req) => {
    try{
        const existTask = Task.findById(req.params.id).populate('assignedTo').populate('createdAt')
        res.status(201).json(existTask)
    }catch(error){
        res.status(500).json({message : error.message})
    }
} 


export const updateTask  = async (res , req) => {
    try{
        const {title , description , status , priority, dueDate , assignedTo,} = req.body
        const updateTask = await Task.findByIdAndUpdate(req.params.id , {
            title ,
            description ,
            status ,
            priority ,
            dueDate ,
            assignedTo ,
            updatedAt: Date.now() ,
        },
        {new : true})
        if(!updateTask){
            return res.status(404).json({message : "Task not found" })
        }
        res.status(200).json(updateTask)
    }catch(error){
        res.status(500).json({message : error.message})
    }
}

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}