import { Component, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import Table from "./Table";

import styles from "./App.module.css";

/**
 * - Initial Data Load (onMount?)
 * https://codesandbox.io/s/solidjs-data-fetching-p159hb?from-embed=&file=/src/main.tsx:544-558
 * https://www.solidjs.com/tutorial/async_resources
 *  - Keys in Table
 * - Deletion of Rows
 * - Insertion of new Rows
 * https://www.solidjs.com/tutorial/stores_createstore
 */

const App: Component = () => {
  const [todos, setTodos] = createStore([]);
  // const addTodo = (text) => {
  //   // setTodos([...todos, { text, completed: false }]);
  // };
  // const toggleTodo = (id) => {
  //   // setTodos(
  //   //   (todo) => todo.id === id,
  //   //   "completed",
  //   //   (completed) => !completed
  //   // );
  // };
  onMount(async () => {
    const { value: response } = await (
      await fetch(`http://localhost:4004/todo/Todos`)
    ).json();
    setTodos(response);
    console.log(response);
  });
  return (
    <div class={styles.App}>
      <header>
        <h1>Todo App</h1>
      </header>
      <Table colHeaders={todos[1]} todos={todos} />
    </div>
  );
};

export default App;
