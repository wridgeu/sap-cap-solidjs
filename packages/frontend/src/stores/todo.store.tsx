import { Component, JSX, createContext, useContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";

export type Todo = {
  ID: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  title: string;
  completed: boolean;
};

/**
 * see:
 * - https://www.solidjs.com/tutorial/stores_context
 * - https://www.solidjs.com/tutorial/stores_nocontext
 */
const TodoContext = createContext<(Todo[] | SetStoreFunction<Todo[]>)[]>();

export const TodoProvider: Component<{
  children: JSX.Element;
}> = (props) => {
  const [todos, setTodos] = createStore<Todo[]>([]);
  const store = [todos, setTodos];
  return (
    <TodoContext.Provider value={store}>{props.children}</TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);

// export const createTodoStore = () => {
//   const [todos, setTodos] = createStore([]);
//   // const addTodo = (text) => {
//   //   // setTodos([...todos, { text, completed: false }]);
//   // };
//   // const toggleTodo = (id) => {
//   //   // setTodos(
//   //   //   (todo) => todo.id === id,
//   //   //   "completed",
//   //   //   (completed) => !completed
//   //   // );
//   // };

//   return { todos, setTodos };
// };
