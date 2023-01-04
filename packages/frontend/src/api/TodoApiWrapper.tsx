import { type Todo } from "../stores/todo";

const API_ROOT = `/todo/Todos`;

export const updateTodo = async (
  id: string,
  { title, completed }: Partial<Todo>
): Promise<Todo> => {
  return send({
    method: "PATCH",
    url: `${API_ROOT}/${id}`,
    payload: { title, completed },
    useAuth: true,
  });
};

export const getTodos = async (): Promise<Todo[]> => {
  return send({ method: "GET", url: API_ROOT });
};

export const removeTodo = async (id: string): Promise<Response> => {
  return send({
    method: "DELETE",
    url: `${API_ROOT}/${id}`,
    useAuth: true,
  });
};

export const addTodo = async (title: string): Promise<Todo> => {
  return send({
    method: "POST",
    url: API_ROOT,
    payload: { title: title },
    useAuth: true,
  });
};

// Would be interesting to use: https://sap.github.io/cloud-sdk/docs/js/features/odata/generate-client
// so one could make a fully typed client-api for all the requests incl. all of ODatas params/options (count ...)
async function send({
  method,
  url,
  payload,
  resKey,
  useAuth,
}: {
  method: string;
  url: string;
  payload?: object;
  resKey?: string | number;
  useAuth?: boolean;
}): Promise<any> {
  const headers: HeadersInit = {};
  const options: RequestInit = { method, headers };

  if (payload !== undefined) {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(payload);
  }

  if (useAuth) headers["Authorization"] = "Basic YWxpY2U6dGVzdA==";

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return resKey ? json[resKey] : json;
  } catch (err) {
    // if (err && err.response && err.response.status === 401) {
    //   actions.logout();
    // }
    return err;
  }
}
