"use client";

import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const { loading, error, data } = useQuery(query);

  if (loading || !data || error) return null;

  return (
    <ul>
      {data.todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}

const query = gql(`
  query findTodos($input: TodosInput!) {
    todos(input: $input) {
      id
      text
      done
    }
  }
`);
