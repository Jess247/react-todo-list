import { MdDeleteForever } from "react-icons/md"
import { MdEdit } from "react-icons/md"
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function ListItem(props) {
    return(
        <li>
            <span><MdCheckBoxOutlineBlank /></span>
            {props.task}
            <div className="icons">
                <MdDeleteForever/>
                <MdEdit />
            </div>
        </li>
    )
}

export default ListItem