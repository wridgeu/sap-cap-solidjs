import { Component } from "solid-js";
import "@ui5/webcomponents/dist/Input";
import { actions } from "../stores/todo";
import { addTodo as addTodoApi } from "../api/TodoApiWrapper";

export const NewItem: Component = () => {
  let input: HTMLInputElement | undefined;

  const addTodo = async () => {
    if (!input) return;
    try {
      const response = await addTodoApi(input.value); //→ move to store
      actions.addTodo(response);
      input.value = "";
      input.focus();
    } catch (error) {
      console.error(error);
      // create error modal
    }
  };
  return (
    <span>
      {/* https://github.com/solidjs-community/solid-primitives/tree/main/packages/i18n */}
      <ui5-input
        ref={input!}
        show-clear-icon
        placeholder="Beschreibung"
        // onChange={addTodo}
      ></ui5-input>
      <ui5-button onClick={addTodo}>Add</ui5-button>
    </span>
  );
};
