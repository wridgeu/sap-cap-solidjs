/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { TodoProvider } from "./stores/todo.store";
import { App } from "./components/App";

render(
  () => (
    <TodoProvider>
      <App />
    </TodoProvider>
  ),
  document.getElementById("root") as HTMLElement
);
