import { type Todo } from "../stores/todo";

export const getTodos = async (): Promise<{ value: Todo[] }> => {
  return (await fetch(`http://localhost:4004/todo/Todos`)).json();
};
