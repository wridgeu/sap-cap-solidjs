import { useSearchParams } from "@solidjs/router";
import { Component, Match, Switch, createResource } from "solid-js";
import { getTodo } from "../api/TodoApiWrapper";
// https://github.com/solidjs/solid-router#useparams
export const Show: Component = () => {
  const [params] = useSearchParams<{ id: string }>();
  const [todo] = createResource(() => params.id, getTodo);

  return (
    <>
      <span>{todo.loading && "Loading..."}</span>
      <Switch>
        <Match when={!todo.loading}>{todo().ID}</Match>
      </Switch>
    </>
  );
};
