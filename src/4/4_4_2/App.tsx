import { useState, useMemo } from 'react';
import { initialTodos, createTodo, getVisibleTodos, Todo } from './todos';

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState('');

  const visibleTodos = useMemo(() => {
    return getVisibleTodos(todos, showActive);
  }, [todos, showActive]);

  function handleAddClick() {
    if (!text.trim()) return;
    setTodos([...todos, createTodo(text)]);
    setText('');
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>

      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAddClick}>Add</button>
      </div>

      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}