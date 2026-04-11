import { validateTitle,validatePriority,Validate} from "./validator.js"
let tasks=[]
function addTask(title,priority,dueDate){
    if(!validateTitle()&&!validatePriority()&&!validateDueDate())
        return " Invalid Task"
        
tasks.push({title,priority,dueDate})
return true
}
function getAllTasks() {
    return tasks
    
}
function completeTask(taskId){
    for(let i in tasks){
    if(i==taskId)
        return "Task  Completed:"+taskId
}
    return "Task Not Found"
}
export {addTask,getAllTasks,completeTask}