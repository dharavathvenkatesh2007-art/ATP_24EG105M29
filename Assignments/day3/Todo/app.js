import { addTask,getAllTasks,completeTask} from "./task.js";
addTask("Eating","High","2024-12-12")
addTask("Sleep","Medium","2024-12-12")
console.log(getAllTasks())
/*
PS C:\Users\dhara\JavaScript\Assignments\day3\Todo> node .\app.js
[
  { title: 'Eating', priority: 'High', dueDate: '2024-12-12' },
  { title: 'Sleep', priority: 'Medium', dueDate: '2024-12-12' }
]
Task  Completed:1
Task Not Found
 */


