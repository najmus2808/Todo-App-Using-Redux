import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  return (
    <>
      <h1>Todo App using Redux</h1>
      <TodoForm />
      <Todo />
    </>
  );
}

export default TodoList;
