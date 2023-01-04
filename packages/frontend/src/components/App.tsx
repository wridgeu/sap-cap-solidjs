import { Component, onMount } from "solid-js";
import { setTodos } from "../stores/todo";

import { Table } from "./Table";
import { NewItem } from "./NewItem";

import styles from "./App.module.css";
import { getTodos } from "../api/TodoApiWrapper";

export const App: Component = () => {
  onMount(async () => {
    try {
      const { value: response } = await getTodos();
      setTodos(response);
    } catch (error) {
      console.error(error);
      // create error modal
    }
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
