import { Component, ErrorBoundary, For, Show } from "solid-js";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Badge";
import "@ui5/webcomponents-icons/dist/accept";
import "@ui5/webcomponents-icons/dist/pending";

import styles from "./Table.module.css";
import { type Todo, todos, actions } from "../stores/todo";

export const Table: Component = () => {
  const onToggle = (event: Event) =>
    actions.toggleTodo((event.currentTarget as HTMLElement).dataset?.item!);
  const onDelete = async (event: Event) => {
    actions
      .removeTodo((event.currentTarget as HTMLElement).dataset?.item!)
      .catch((err) => console.error(err));
  };

  return (
    <div class={styles.tableContainer}>
      <ui5-table sticky-column-header="true">
        <Show when={todos[1]}>
          <For each={Object.keys(todos[1])}>
            {(headerTitles) => (
              <ui5-table-column slot="columns" class={styles.tableHeader}>
                {headerTitles}
              </ui5-table-column>
            )}
          </For>
        </Show>
        <For each={todos}>
          {(todoItem: Todo) => (
            <ui5-table-row>
              <ui5-table-cell>{todoItem.ID}</ui5-table-cell>
              <ui5-table-cell>
                {todoItem.createdAt &&
                  new Date(todoItem.createdAt).toLocaleDateString()}
              </ui5-table-cell>
              <ui5-table-cell>{todoItem.createdBy}</ui5-table-cell>
              <ui5-table-cell>
                {todoItem.modifiedAt &&
                  new Date(todoItem.modifiedAt).toLocaleDateString()}
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
              <ui5-table-cell>
                <ui5-button attr:data-item={todoItem.ID} onClick={onToggle}>
                  Toggle
                </ui5-button>
                <ui5-button attr:data-item={todoItem.ID} onClick={onDelete}>
                  Delete
                </ui5-button>
              </ui5-table-cell>
            </ui5-table-row>
          )}
        </For>
      </ui5-table>
    </div>
  );
};
