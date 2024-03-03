"use client";

import { Todo } from "@/__generated__/graphql";
import { createContext, useState, type ReactNode } from "react";

type ContextValue = {
  todos: Todo[];
  setTodos: (user: Todo[]) => void;
};

export const TodosContext = createContext({} as ContextValue);

type TodosContextProviderProps = {
  todosData: Todo[];
  children: ReactNode;
};

export function TodosContextProvider({
  todosData,
  children,
}: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(todosData);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
