import { useParams } from "@solidjs/router";
import { Component, createResource } from "solid-js";
import { getTodo } from "../api/TodoApiWrapper";
// https://github.com/solidjs/solid-router#useparams
export const Show: Component = () => {
  const params = useParams();
  console.log(params);
  const [todoData, { refetch }] = createResource(() => params.id, getTodo);

  if (todoData.loading) <>"Loading..."</>;
  if (!todoData.loading && !todoData()) refetch();
  return <>{todoData()?.title}</>;
};
