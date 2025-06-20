export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

let nextId = 0;
let calls = 0;

export function getVisibleTodos(todos: Todo[], showActive: boolean): Todo[] {
  console.log(`getVisibleTodos() was called ${++calls} times`);
  const activeTodos = todos.filter(todo => !todo.completed);
  return showActive ? activeTodos : todos;
}

export function createTodo(text: string, completed = false): Todo {
  return {
    id: nextId++,
    text,
    completed,
  };
}

export const initialTodos: Todo[] = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];