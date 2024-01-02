import { useState } from "react"
import Button from "./elements/Button"

const InputForm = (props) => {

    const [formData, setFormData] = useState({
        title: '',
        completed: false
    })

    const handleChange = (event) => {
        const title = event.target.value
        setFormData({
            ...formData,
            title
        })
    }

    const handleSubmmit = (event) => {
        event.preventDefault()
        if (event.target.title.value === '') {
            alert('Masukkan task terlebih dahulu')

        } else {
            props.setTasks([...props.tasks, formData])
            event.target.title.value = ''
        }

    }

    return (
        <div className="mt-5 w-full">
            <form onSubmit={handleSubmmit} className="space-x-5 w-full">
                <input type="text" name="title" onChange={handleChange} placeholder="Add Task" className="border-2 border-black font-semibold rounded-md h-9 px-3" />
                <Button type="submit" text="Add" />
            </form>
        </div>
    )
}

export default InputForm