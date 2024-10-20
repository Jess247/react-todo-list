import '../styles/Todo.css'
import Button from './Button';
import Input from './Input';
import ListItem from "./ListItem";

function Todo() {
    return(
        <div className='todo-container'>
            <div className="input">
                <Button btnText="Add Task"/>
                <Input/>
            </div>
            <ul className="todo">
                <ListItem task="Sample Task 1 :)"/>
                <ListItem task="Sample Task 1 :)"/>
                <ListItem task="Sample Task 1 :)"/>
            </ul>
        </div>
    )
}

export default Todo