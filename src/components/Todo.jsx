import { useState } from 'react';
import '../styles/Todo.css'
import Button from './Button';
import Input from './Input';
import ListItem from "./ListItem";

function Todo() {

    const [taskInput, setTaskInput] = useState("")
    const [tasks, setTasks] = useState([])

    const handleClick = () => {
        if(taskInput.trim()){
            setTasks([...tasks, taskInput])
            setTaskInput('')
        }
    }

    const handleChange = (e) => {
        setTaskInput(e.target.value)
        console.log(taskInput)
    }

    

    return(
        <div className='todo-container'>
            <div className="input">
                <Button btnText="Add Task" onClick={() => handleClick()}/>
                <Input onChange={(e) => handleChange(e)} text={taskInput}/>
            </div>
            {tasks.length > 0 && <ul className="todo">
                { tasks.map(task => <ListItem key={task[0]}task={task}/>)}
            </ul>}
        </div>
    )
}

export default Todo