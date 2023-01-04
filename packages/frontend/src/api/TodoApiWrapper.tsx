import { type Todo } from "../stores/todo";

// add update/patch function
// pull out common functions

export const getTodos = async (): Promise<{ value: Todo[] }> => {
  return fetch(`/todo/Todos`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export const removeTodo = async (id: string): Promise<Response> => {
  return fetch(`/todo/Todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Basic YWxpY2U6dGVzdA==",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  });
};

export const addTodo = async (title: string): Promise<Todo> => {
  return fetch("/todo/Todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic YWxpY2U6dGVzdA==",
    },
    body: JSON.stringify({ title: title }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
