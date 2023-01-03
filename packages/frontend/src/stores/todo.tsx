import { createStore } from "solid-js/store";

export type Todo = {
  ID?: string;
  createdAt?: string;
  createdBy?: string;
  modifiedAt?: string;
  modifiedBy?: string;
  title: string;
  completed: boolean;
};

export const [todos, setTodos] = createStore<Todo[]>([
  {
    title: "",
    completed: false,
  },
]);

export const actions = {
  toggleTodo(id: string) {
    setTodos(
      (todo) => todo.ID === id,
      "completed",
      (completed) => !completed
    );
  },
  addTodo(title: string) {
    setTodos([...todos, { title, completed: false }]);
  },
};
