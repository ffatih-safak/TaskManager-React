import React from 'react'
import TaskShow from './TaskShow'
export default function TaskList({tasks,onDelete,onUpdate}) { 
    debugger;
  return (
    <div className='task-list'> 
        {tasks.map((task,index)=>{ 
            return <TaskShow key={index} task={task} onDelete={onDelete} onUpdate ={onUpdate}/>
        })}
    </div>
  )
}
