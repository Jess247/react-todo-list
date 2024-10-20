import '../styles/Todo.css'
import Button from './Button';
import ListItem from "./ListItem";

function Todo() {
    return(
        <div className='todo-container'>
            <Button btnText="Add Task"/>
            <ul className="todo">
                <ListItem task="Sample Task 1 :)"/>
                <ListItem task="Sample Task 1 :)"/>
                <ListItem task="Sample Task 1 :)"/>
            </ul>
        </div>
    )
}

export default Todo