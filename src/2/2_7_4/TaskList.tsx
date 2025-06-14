import { useState } from 'react';
import { Todo } from './App';

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: {
  todos: Todo[];
  onChangeTodo: (nextTodo: Todo) => void;
  onDeleteTodo: (todoId: number) => void;
}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({
  todo,
  onChange,
  onDelete,
}: {
  todo: Todo;
  onChange: (nextTodo: Todo) => void;
  onDelete: (todoId: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange({ ...todo, title: e.target.value });
  }

  function handleDoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange({ ...todo, done: e.target.checked });
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  function handleDelete() {
    onDelete(todo.id);
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleDoneChange}
      />
      {isEditing ? (
        <>
          <input value={todo.title} onChange={handleTitleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todo.title}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}
