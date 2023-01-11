import "solid-js"; //thanks to: https://github.com/solidjs/solid/issues/616#issuecomment-904193450

// https://stackoverflow.com/a/72239265/10323879
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "ui5-table": HTMLAttributes<HTMLElement>; //JSX.IntrinsicElements["table"];
      "ui5-table-column": HTMLAttributes<HTMLElement>;
      "ui5-table-row": HTMLAttributes<HTMLElement>;
      "ui5-table-cell": HTMLAttributes<HTMLElement>;
      "ui5-badge": HTMLAttributes<HTMLElement>;
      "ui5-button": HTMLAttributes<HTMLElement>;
      "ui5-toast": HTMLAttributes<HTMLElement>;
      "ui5-input": HTMLAttributes<HTMLElement> & {
        "show-clear-icon"?: boolean;
        value?: string;
        placeholder?: string;
      };
      "ui5-icon": HTMLAttributes<HTMLElement> & { name: string; slot: string };
    }
  }
}
