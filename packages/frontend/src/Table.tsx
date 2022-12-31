import { Component, mergeProps, For } from "solid-js";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";

import styles from "./Table.module.css";

// rudimentary
type todo = {
  ID: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  title: string;
  completed: boolean;
};

// https://stackoverflow.com/a/72239265/10323879
// https://bobbyhadz.com/blog/react-property-does-not-exist-on-type-jsx-intrinsicelements
// declare module "solid-js" {
//   namespace JSX {
//     interface IntrinsicElements {
//       "ui5-table": JSX.IntrinsicElements["table"];
//       "ui5-table-column": JSX.IntrinsicElements["th"];
//       "ui5-table-row": JSX.IntrinsicElements["tr"];
//       "ui5-table-cell": JSX.IntrinsicElements["td"];
//     }
//   }
// }

const Table: Component = (props) => {
  const merged = mergeProps({ todos: [], colHeaders: [] }, props);
  console.log(merged.colHeaders);
  return (
    <div>
      <ui5-table>
        <For
          each={Object.keys(merged.colHeaders)}
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
          each={merged.todos}
          fallback={<ui5-table-row>No data ...</ui5-table-row>}
        >
          {(todoItem: todo) => (
            <ui5-table-row>
              <ui5-table-cell>{todoItem.ID}</ui5-table-cell>
              <ui5-table-cell>{todoItem.createdAt}</ui5-table-cell>
              <ui5-table-cell>{todoItem.createdBy}</ui5-table-cell>
              <ui5-table-cell>{todoItem.modifiedAt}</ui5-table-cell>
              <ui5-table-cell>{todoItem.modifiedBy}</ui5-table-cell>
              <ui5-table-cell>{todoItem.title}</ui5-table-cell>
              <ui5-table-cell>{todoItem.completed}</ui5-table-cell>
            </ui5-table-row>
          )}
        </For>
      </ui5-table>
    </div>
  );
};

export default Table;
