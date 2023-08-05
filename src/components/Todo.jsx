import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { completeTodoAction, removeTodoAction } from "../redux/todoSlice";

const Todo = () => {
  const { todoList } = useSelector((state) => state.todoStore);
  const dispatch = useDispatch();

  return todoList.map((todo) => (
    <div className={todo?.isCompleted ? "todo-row complete" : "todo-row"} key={todo?.id}>
      <div className="icons">
        {todo?.isCompleted ? (
          <AiFillCheckCircle
            onClick={() => {
              dispatch(completeTodoAction(todo?.id));
            }}
            className="completed-icon"
          />
        ) : (
          <AiOutlineCheckCircle
            onClick={() => {
              dispatch(completeTodoAction(todo?.id));
            }}
            className="complete-icon"
          />
        )}
      </div>
      <div className="text">{todo?.text}</div>
      <div className="icons">
        <BsFillTrashFill
          onClick={() => {
            dispatch(removeTodoAction(todo?.id));
          }}
          className="delete-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;

