import { Component } from "solid-js";
import "@ui5/webcomponents/dist/Input";
import { actions } from "../stores/todo";

export const NewItem: Component = () => {
  let input: HTMLInputElement | undefined;

  const addTodo = async () => {
    if (!input) return;
    actions.addTodo(input.value);
    input.value = "";
    input.focus();
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
