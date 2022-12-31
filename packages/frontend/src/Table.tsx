import { Component, mergeProps, For } from "solid-js";

// rudimentary
type todo = {
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  completed: boolean;
};

const Table: Component = (props) => {
  const merged = mergeProps({ todos: [], colHeaders: [] }, props);
  console.log(merged.colHeaders);
  return (
    <table>
      <tbody>
        <tr>
          <For
            each={Object.keys(merged.colHeaders)}
            fallback={
              <tr>
                <td>No data ...</td>
              </tr>
            }
          >
            {(headerTitles) => <th>{headerTitles}</th>}
          </For>
        </tr>
        <For
          each={merged.todos}
          fallback={
            <tr>
              <td>No data ...</td>
            </tr>
          }
        >
          {(todoItem: todo) => (
            <tr>
              <td>{todoItem.createdAt}</td>
              <td>{todoItem.createdBy}</td>
              <td>{todoItem.modifiedAt}</td>
              <td>{todoItem.modifiedBy}</td>
              <td>{todoItem.completed}</td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
};

export default Table;
