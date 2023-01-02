import { Component, mergeProps, For, Show } from "solid-js";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/Badge";
import "@ui5/webcomponents-icons/dist/accept";
import "@ui5/webcomponents-icons/dist/pending";

import styles from "./Table.module.css";
import { Todo } from "../stores/todo.store";

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

export const Table: Component<{ todos: Todo[]; colHeaders: string[] }> = (
  props
) => {
  const mergedProps = mergeProps({ todos: [], colHeaders: [] }, props);
  return (
    <>
      <ui5-table>
        <For
          each={Object.keys(mergedProps.colHeaders)}
          fallback={
            <ui5-table-column slot="columns">No data ...</ui5-table-column>
          }
        >
          {(headerTitles) => (
            <ui5-table-column slot="columns" class={styles.tableHeader}>
              {headerTitles}
            </ui5-table-column>
          )}
        </For>
        <For
          each={mergedProps.todos}
          fallback={<ui5-table-row>No data ...</ui5-table-row>}
        >
          {(todoItem: Todo) => (
            <ui5-table-row>
              <ui5-table-cell>{todoItem.ID}</ui5-table-cell>
              <ui5-table-cell>
                {new Date(todoItem.createdAt).toLocaleDateString()}
              </ui5-table-cell>
              <ui5-table-cell>{todoItem.createdBy}</ui5-table-cell>
              <ui5-table-cell>
                {new Date(todoItem.modifiedAt).toLocaleDateString()}
              </ui5-table-cell>
              <ui5-table-cell>{todoItem.modifiedBy}</ui5-table-cell>
              <ui5-table-cell>{todoItem.title}</ui5-table-cell>
              <ui5-table-cell>
                <Show
                  when={todoItem.completed}
                  fallback={
                    <ui5-badge color-scheme="2">
                      <ui5-icon name="pending" slot="icon"></ui5-icon>open
                    </ui5-badge>
                  }
                >
                  <ui5-badge color-scheme="8">
                    <ui5-icon name="accept" slot="icon"></ui5-icon>done
                  </ui5-badge>
                </Show>
              </ui5-table-cell>
            </ui5-table-row>
          )}
        </For>
      </ui5-table>
    </>
  );
};
