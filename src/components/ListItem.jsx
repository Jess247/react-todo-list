import { MdDeleteForever } from "react-icons/md"
import { MdEdit } from "react-icons/md"
import { MdCheckBoxOutlineBlank } from "react-icons/md"
import { IoMdCheckboxOutline } from "react-icons/io"
import {  useState } from "react"

function ListItem(props) {

    const [isChecked, setIsChecked] = useState(false)


 
    return(
        <li className="todo-item" style={{textDecoration: isChecked ? "line-through": "none"}}>
            <div className="checkbox">
                {isChecked ? <IoMdCheckboxOutline size={20} onClick={() => setIsChecked(!isChecked)}/> : <MdCheckBoxOutlineBlank size={20} onClick={() => setIsChecked(!isChecked)}/>}
                {props.task}
            </div>
            <div className="icons">
                <MdDeleteForever size={20} onClick={() => props.handleDelete(props.id)}/>
                <MdEdit size={20} />
            </div>
        </li>
    )
}

export default ListItem