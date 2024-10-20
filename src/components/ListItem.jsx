import { MdDeleteForever } from "react-icons/md"
import { MdEdit } from "react-icons/md"
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function ListItem(props) {
    return(
        <li className="todo-item">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank size={25}/>
                {props.task}
            </div>
            <div className="icons">
                <MdDeleteForever size={20}/>
                <MdEdit size={20} />
            </div>
        </li>
    )
}

export default ListItem