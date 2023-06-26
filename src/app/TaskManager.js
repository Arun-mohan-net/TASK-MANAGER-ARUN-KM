import { useState } from 'react';
import './style.css';
function Taskmanager(){
    const [tasks, setTasks] = useState ([]);
    const [inputvalue, setInputvalue] = useState("");
    function addTask(){
        if(inputvalue.length === 0){
            return;
        }
        setTasks([
            ...tasks,
            {
               content: inputvalue,
               iscomplete: false,
               ifEditing: false
            }
        ]);
        setInputvalue("");
    }
    function deleteTask(taskIndex){
        tasks.splice(taskIndex,1)   
        setTasks([
            ...tasks
        ]    
        )
    }
    function markcompleted(taskIndex){
        tasks[taskIndex].iscomplete = !tasks[taskIndex].iscomplete;
        setTasks([
            ...tasks
        ])
    }
    function editTask(taskIndex){
        tasks[taskIndex].isEditing = true;
        setTasks(
            [...tasks]
        )
    }
    function updateValue(taskIndex, value){
        tasks[taskIndex].content = value;
        setTasks(
            [...tasks]
        )

    }
    function saveTask(taskIndex){
        tasks[taskIndex].isEditing = false;
        setTasks(
            [...tasks]
        )

    }
    console.log('Array', tasks);
    return <div className='task-manager'>
        <h1>Task manager</h1>
        <div className='tasks'>
        
            {
                tasks.sort((a)=>a.iscomplete ? 1 : -1).map(
                    (task, index)=><div key={index}className='task'>
                        <input type="checkbox"checked={task.iscomplete} onChange={()=>markcompleted(index)}/>
                        {
                            task.isEditing ?
                            
                                <input value={task.content} onChange={(event)=>updateValue(index, event.target.value)}className='edit.input'/>:
                                

                            
                                <span className='content'>
                                    
                           
                        {
                            task.iscomplete ?
                            <del>{task.content}</del>:
                           task.content
                        }
                         </span>

                        
                            
                        }
                        {
                            task.isEditing ?
                            <button onClick={()=>saveTask(index)}className='save'>save</button>:
                            <button onClick={()=>editTask(index)}className='Edit'>Edit</button>
                        }
                        <button onClick={()=>deleteTask(index)}className='delete'>Delete</button>

                        </div>
                )
            }

</div>
        
        <div className='add task container'>
            <input value={inputvalue} onChange={(event)=>setInputvalue(event.target.value)}placeholder='enter a task'/>
            <button onClick={addTask}>addTask</button>
        </div>
    </div>
  }
  export default Taskmanager;