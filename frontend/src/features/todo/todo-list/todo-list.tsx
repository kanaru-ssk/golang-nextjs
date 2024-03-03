"use client";

import { useContext } from "react";
import { TodosContext } from "../todos-context/todos-context";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}
