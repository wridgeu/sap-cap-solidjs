/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { TodoProvider } from "./stores/todo.store";
import { App } from "./components/App";

// https://stackoverflow.com/a/72239265/10323879
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "ui5-table": HTMLAttributes<HTMLElement>; //JSX.IntrinsicElements["table"];
      "ui5-table-column": HTMLAttributes<HTMLElement>;
      "ui5-table-row": HTMLAttributes<HTMLElement>;
      "ui5-table-cell": HTMLAttributes<HTMLElement>;
      "ui5-badge": HTMLAttributes<HTMLElement>;
      "ui5-icon": HTMLAttributes<HTMLElement> & { name: string; slot: string };
    }
  }
}

render(
  () => (
    <TodoProvider>
      <App />
    </TodoProvider>
  ),
  document.getElementById("root") as HTMLElement
);
