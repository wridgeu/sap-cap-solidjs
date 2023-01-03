import { Component, For, Show } from "solid-js";
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
  const onClick = (event: Event) =>
    actions.toggleTodo((event.currentTarget as HTMLElement).dataset?.item!);

  return (
    <>
      <ui5-table>
        <Show
          when={todos[1]}
          fallback={
            <ui5-table-column slot="columns">Loading ...</ui5-table-column>
          }
        >
          <For each={Object.keys(todos[1])}>
            {(headerTitles) => (
              <ui5-table-column slot="columns" class={styles.tableHeader}>
                {headerTitles}
              </ui5-table-column>
            )}
          </For>
        </Show>
        <For each={todos} fallback={<ui5-table-row>Loading ...</ui5-table-row>}>
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
                <ui5-button attr:data-item={todoItem.ID} onClick={onClick}>
                  Toggle
                </ui5-button>
              </ui5-table-cell>
            </ui5-table-row>
          )}
        </For>
      </ui5-table>
    </>
  );
};
