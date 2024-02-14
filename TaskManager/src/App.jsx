import { useState } from 'react'

import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {
  const createTask = (title,taskDesc)=>{ 
     console.log(title);
};
  return (
    <div className='App'>
        <TaskCreate onCreate={createTask} />
        <h1>Görevler</h1>
        <TaskList/>
    </div>
  )
}

export default App
