
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'



const App = () => {



  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState ([
        
    {
        id:1,
        text: 'Work',
        day: 'Feb 5th at 8am', 
        reminder: true,
    },
    {
        id:2,
        text: 'Doctors Appt',
        day: 'Feb 5th at 2:30pm', 
        reminder: true,
    },
    {
        id:3,
        text: 'Lambda School',
        day: 'Feb 5th at 9:30pm', 
        reminder: false,
    },
])



// Delete Task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))}



// Toggle Reminder 
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? 
  { ...task, reminder: !task.reminder } : task 
  )
  )
}

// Adding the Task 
const addTask =(task) => {
  const id = Math.floor(Math.random() * 10000) + 1
    
  const newTask = { id, ...task }

  setTasks([...tasks, newTask])

}





  return (
    <div className="container">

      <Header onAdd={() => setShowAddTask(!showAddTask)} 
              showAdd={showAddTask}/> 

      {showAddTask && <AddTask onAdd={addTask}/>}  

      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} /> 
      ) : ( 'Great Job! You completed all the tasks today!!!')} 
    </div>
  );
}



export default App;



