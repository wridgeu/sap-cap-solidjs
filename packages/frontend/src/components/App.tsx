import { Component, onMount } from "solid-js";
import { setTodos } from "../stores/todo";

import { Table } from "./Table";
import { NewItem } from "./NewItem";

import styles from "./App.module.css";
import { getTodos } from "../api/TodoApiWrapper";

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
    const { value: response } = await getTodos();
    setTodos(response);
  });

  return (
    <div class={styles.App}>
      <header>
        <h1>Todo App</h1>
      </header>
      <NewItem />
      <Table />
    </div>
  );
};
