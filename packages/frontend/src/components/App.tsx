import { Component } from "solid-js";

import { Table } from "./Table";

import styles from "./App.module.css";

/**
 * - Initial Data Load (onMount?)
 * https://codesandbox.io/s/solidjs-data-fetching-p159hb?from-embed=&file=/src/main.tsx:544-558
 * - Deletion of Rows
 * - Insertion of new Rows
 * https://www.solidjs.com/tutorial/stores_createstore
 */

export const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>
        <h1>Todo App</h1>
      </header>
      <Table />
    </div>
  );
};
