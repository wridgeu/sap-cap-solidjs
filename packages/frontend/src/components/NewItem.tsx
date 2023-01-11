import "@ui5/webcomponents/dist/Toast";
import "@ui5/webcomponents/dist/Input";

import { Component, JSX } from "solid-js";
import { actions } from "../stores/todo";

export const NewItem: Component = () => {
  let input: JSX.IntrinsicElements["ui5-input"] | undefined;
  let toast: JSX.IntrinsicElements["ui5-toast"] | undefined;

  const addTodo = async () => {
    if (!input || !toast) return;
    actions.addTodo(input.value!);
    input.value = "";
    input.focus();
    toast.show();
  };
  return (
    <div>
      {/* https://github.com/solidjs-community/solid-primitives/tree/main/packages/i18n */}
      <ui5-input
        ref={input!} // https://www.typescriptlang.org/docs/handbook/jsx.html
        show-clear-icon
        placeholder="Beschreibung"
        // onChange={addTodo}
      ></ui5-input>
      <ui5-button onClick={addTodo}>Add</ui5-button>
      <ui5-toast ref={toast!}>Item has been added!</ui5-toast>
    </div>
  );
};
