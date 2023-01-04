import { createStore } from "solid-js/store";
import { removeTodo } from "../api/TodoApiWrapper";

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
      // add request
    );
  },
  addTodo(object: Todo) {
    setTodos([...todos, object]);
  },
  // addTodo(title: string, completed = false) {
  //   setTodos([...todos, { title, completed }]);
  // }, → explore overloading in ts
  async removeTodo(id: string) {
    try {
      const response = await removeTodo(id);
      if (!response.ok) {
        throw new Error(`Erroneous response: ${response.statusText}`);
      }
    } catch (error) {
      throw new Error("Fehler beim Fetch", { cause: error });
    }

    setTodos([...todos.filter((todo) => todo.ID !== id)]);
  },
};
