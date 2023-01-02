import { Component, onMount } from "solid-js";

import { Table } from "./Table";
import { useTodos } from "../stores/todo.store";

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

export const App: Component = () => {
  const [todos, { setTodos }] = useTodos(); // how to type this?
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
