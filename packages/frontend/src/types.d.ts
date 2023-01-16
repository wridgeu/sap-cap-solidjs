// import "solid-js"; //thanks to: https://github.com/solidjs/solid/issues/616#issuecomment-904193450
import { JSX } from "solid-js";

// https://stackoverflow.com/a/72239265/10323879
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any; // catch-all string indexer ~ https://www.typescriptlang.org/docs/handbook/jsx.html#intrinsic-elements
    }
    // interface IntrinsicElements {
    //   "ui5-table": HTMLAttributes<HTMLElement>;
    //   "ui5-table-column": HTMLAttributes<HTMLElement>;
    //   "ui5-table-row": HTMLAttributes<HTMLElement>;
    //   "ui5-table-cell": HTMLAttributes<HTMLElement>;
    //   "ui5-badge": HTMLAttributes<HTMLElement>;
    //   "ui5-button": HTMLAttributes<HTMLElement>;
    //   "ui5-toast": UI5Toast;
    //   "ui5-input": UI5Input;
    //   "ui5-icon": HTMLAttributes<HTMLElement> & { name: string; slot: string };
    // }
  }
}

// interface UI5Toast extends HTMLElement {
//   show(): void;
// }

// // type UI5Toast = Partial<JSX.HTMLAttributes<UI5Toast>> & { show?(): void };
// type UI5Input = Partial<JSX.CustomAttributes<UI5Input>> &
//   Partial<HTMLInputElement>;
// type UI5Input = JSX.IntrinsicElements["input"] & JSX.CustomAttributes<HTMLInputElement>
