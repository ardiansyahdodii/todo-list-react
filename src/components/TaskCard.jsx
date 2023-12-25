import Button from "./elements/Button"

const TaskCard = (props) => {

    const removeTask = (title) => {
        const newTasks = props.tasks.filter((task) => task.title !== title)
        props.setTasks(newTasks)
    }

    const changeCompleted = (title) => {
        const newTasks = props.tasks.map((task) => {
            if (task.title === title) {
                task.completed = !task.completed
            }
            return task
        })
        props.setTasks(newTasks)
    }

    return (
        <div className="flex justify-between w-full border-2 border-black rounded-md p-2 mt-3">
            <div className="flex justify-center items-center space-x-3">
                <div className={`flex justify-center items-center w-10 h-10 rounded-md font-bold cursor-pointer border-2 border-black  ${props.task.completed ? "bg-green-700" : ""} `} onClick={() => changeCompleted(props.task.title)}>
                    {props.task.completed ? "✓" : ""}
                </div>
                <div className={`${props.task.completed ? "line-through" : ""} text-lg font-semibold`}>
                    {props.task.title}
                </div>
            </div>
            <div className="flex justify-center items-center bg-slate-200">
                <Button type="button" onClick={() => removeTask(props.task.title)} text="X" />
            </div>
        </div>
    )
}

export default TaskCard