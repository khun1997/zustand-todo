import { useState, FormEvent } from "react";
import useStore from "../store/store";

const TodoLists = () => {
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const delTodo = useStore((state) => state.delTodo);

  const [todoText, setTodoText] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleAddTodo = () => {
    let tempTodo = {
      id: Math.random(),
      name: todoText,
      completed: false,
    };
    setTodoText("");
    addTodo(tempTodo);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h1>Todo lists</h1>
        <div>
          <input
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <p>
                {todo.name}
                <button type="submit" onClick={() => delTodo(todo.id)}>
                  Del
                </button>
              </p>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default TodoLists;
