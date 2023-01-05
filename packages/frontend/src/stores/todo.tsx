import { createStore } from "solid-js/store";
import { addTodo, removeTodo, updateTodo } from "../api/TodoApiWrapper";

export type Todo = {
  ID?: string;
  createdAt?: string;
  createdBy?: string;
  modifiedAt?: string;
  modifiedBy?: string;
  title: string;
  completed: boolean;
};

export const [todos, setTodos] = createStore<Todo[]>([]);

export const actions = {
  async toggleTodo(id: string): Promise<void> {
    const todo = todos.find((todo) => todo.ID === id);

    if (!todo) return;

    try {
      await updateTodo(todo.ID!, { completed: !todo.completed });
      setTodos(
        (todo) => todo.ID === id,
        "completed",
        (completed) => !completed
      );
    } catch (error) {
      console.error(error);
    }
  },
  async addTodo(title: string): Promise<void> {
    try {
      const response = await addTodo(title);
      setTodos([...todos, response]);
    } catch (error) {
      console.error(error);
    }
  },
  // addTodo(title: string, completed = false) {
  //   setTodos([...todos, { title, completed }]);
  // }, → explore overloading in ts
  async removeTodo(id: string): Promise<void> {
    try {
      await removeTodo(id);
      setTodos([...todos.filter((todo) => todo.ID !== id)]);
    } catch (error) {
      console.error(error);
    }
  },
};
