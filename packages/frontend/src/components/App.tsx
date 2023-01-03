import { Component, onMount } from "solid-js";

import { Table } from "./Table";

import styles from "./App.module.css";
import { setTodos } from "../stores/todo";

/**
 * - Initial Data Load (onMount?)
 * https://codesandbox.io/s/solidjs-data-fetching-p159hb?from-embed=&file=/src/main.tsx:544-558
 * - Deletion of Rows
 * - Insertion of new Rows
 * https://www.solidjs.com/tutorial/stores_createstore
 */

export const App: Component = () => {
  onMount(async () => {
    // could be replaced, see #1
    const { value: response } = await (
      await fetch(`http://localhost:4004/todo/Todos`)
    ).json();
    setTodos(response);
  });

  return (
    <div class={styles.App}>
      <header>
        <h1>Todo App</h1>
      </header>
      <Table />
    </div>
  );
};
