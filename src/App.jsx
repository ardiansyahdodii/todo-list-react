import { useState } from "react"
import InputForm from "./components/InputForm"
import TaskCard from "./components/TaskCard"

const App = () => {

  const [tasks, setTasks] = useState([])

  console.log(tasks)

  return (
    <div className="container flex flex-col justify-center items-center px-48 mx-auto bg-slate-300">
      <div className="text-3xl font-bold mt-10">
        ToDo-List App
      </div>
      <div>
        <InputForm tasks={tasks} setTasks={setTasks}/>
      </div>
      <div>
        {tasks.filter(task => task.completed).length} from {tasks.length} lists completed 
      </div>
      <div>
        ___________________________________________
      </div>
      <div className="w-full">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} tasks={tasks} setTasks={setTasks}/>
        ))}
      </div>
    </div>
  )
}

export default App