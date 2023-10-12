import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompletion,} from "../store/todoSlice";
import "./todo.css"
function Listitem(props) {
    var dispatch = useDispatch();
    return (
    <div className="col-md-4 offset-md-4 list_item">
        <div style={{ margin: "10px" }} className="list-group-item">
        <button style={{ float: "right" }} onClick={()=> dispatch(deleteTodo(props.todoitem.id))}>
            {/* <i className="fas fa-trash"></i> */}
            <i className="fa-regular fa-trash-can" style={{ color:"rgba(202, 207, 207, 0.73)" }}></i>
        </button>

        <input
            className="check_box"
            defaultChecked={props.todoitem.completed}
            style={{ float: "left", marginTop: "7px" }}
            type="checkbox"
            onChange={()=>{dispatch(toggleCompletion(props.todoitem.id))}}
        ></input>
        <h5
        style={
            props.todoitem.completed
            ?{ textDecoration: "line-through", marginLeft: "30px" }
            : { marginLeft: "30px" }
        }
        >{props.todoitem.title}</h5>
        </div>
    </div>
    );
}

export default Listitem;