import "@ui5/webcomponents/dist/Button";

import { Component, lazy, onMount } from "solid-js";
import { setTodos } from "../stores/todo";

import styles from "./App.module.css";
import { getTodos } from "../api/TodoApiWrapper";
import { Routes, Route, A } from "@solidjs/router";

// Map named exports to default export for consumption via solids lazy
// see also: https://github.com/JLarky/solidjs-lazily / https://www.npmjs.com/package/solidjs-lazily
const List = lazy(() =>
  import("../pages/List").then((module) => ({ default: module.List }))
);
const Add = lazy(() =>
  import("../pages/Add").then((module) => ({ default: module.Add }))
);
const Show = lazy(() =>
  import("../pages/Show").then((module) => ({ default: module.Show }))
);

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
    <>
      <header class={styles.header}>
        <h1>Todo Demo</h1>
        <nav>
          <ui5-button>
            <A href="/todos/add">Add Todo Item</A>
          </ui5-button>
          <ui5-button>
            <A href="/todos/list">Show Todos</A>
          </ui5-button>
          <ui5-button>
            <A href="/todos/?id=14436e33-7588-44ca-bc42-e5f403d9d854">
              Show Todo
            </A>
          </ui5-button>
        </nav>
      </header>
      <div style="text-align: center; margin-top: 25px">
        <Routes>
          <Route path="/todos/add" component={Add}></Route>
          <Route path="/todos/list" component={List}></Route>
          <Route path="/todos/" component={Show} />
        </Routes>
      </div>
    </>
  );
};
