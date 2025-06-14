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
  // Сохраняем id задачи, которая сейчас редактируется
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task
            todo={todo}
            isEditing={editingId === todo.id}
            onEdit={() => setEditingId(todo.id)}
            onSave={() => setEditingId(null)}
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
  isEditing,
  onEdit,
  onSave,
  onChange,
  onDelete,
}: {
  todo: Todo;
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onChange: (nextTodo: Todo) => void;
  onDelete: (todoId: number) => void;
}) {
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({ ...todo, title: e.target.value });
          }}
        />
        <button onClick={onSave}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={onEdit}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
