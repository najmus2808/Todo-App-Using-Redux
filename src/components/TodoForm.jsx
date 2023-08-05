import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/todoSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    const todo = {
      id: Date.now(),
      text: input,
    };
    dispatch(addTodoAction(todo));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
        name="text"
        className="todo-input"
        ref={inputRef}
      />
      <button type="submit" className="todo-button">
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
