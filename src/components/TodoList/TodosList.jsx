export const TodosList = ({ todos, handleDelete, handleEditTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button type="button" onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
          <button type="button" onClick={() => handleEditTodo(todo)}>
            Change
          </button>
        </li>
      ))}
    </ul>
  );
};
