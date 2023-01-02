import { ParentComponent, createContext, useContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";
import { m } from "vitest/dist/index-40ebba2b";

export type Todo = {
  ID: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  title: string;
  completed: boolean;
};

export type TodoContextValue = [
  todos: Todo[],
  actions: {
    setTodos: SetStoreFunction<Todo[]> | (() => void);
  }
];

const defaultState = {
  ID: "",
  createdAt: "",
  createdBy: "",
  modifiedAt: "",
  modifiedBy: "",
  title: "",
  completed: false,
};

/**
 * see:
 * - https://www.solidjs.com/tutorial/stores_context
 * - https://www.solidjs.com/tutorial/stores_nocontext
 * - https://www.solidjs.com/examples/context
 */
const TodoContext = createContext<TodoContextValue>([
  [defaultState],
  {
    setTodos: () => undefined,
  },
]);

export const TodoProvider: ParentComponent = (props) => {
  const [todos, setTodos] = createStore<Todo[]>([]);
  return (
    <TodoContext.Provider value={[todos, { setTodos }]}>
      {props.children}
    </TodoContext.Provider>
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
