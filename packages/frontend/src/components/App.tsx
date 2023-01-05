import { Component, onMount } from "solid-js";
import { setTodos } from "../stores/todo";

import { Table } from "./Table";
import { NewItem } from "./NewItem";

import styles from "./App.module.css";
import { getTodos } from "../api/TodoApiWrapper";

export const App: Component = () => {
  onMount(async () => {
    try {
      setTodos(await getTodos());
    } catch (error) {
      // create error modal
      console.error(error);
    }
  });

  return (
    <div class={styles.App}>
      <header>
        <h1>Todo Demo</h1>
      </header>
      <NewItem />
      <Table />
    </div>
  );
};
