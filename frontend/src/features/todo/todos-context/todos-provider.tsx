"use server";

import { gql } from "@/__generated__";
import { getClient } from "@/libs/apollo-client";
import type { ReactNode } from "react";
import { TodosContextProvider } from "./todos-context";

type Props = {
  userId: number;
  children: ReactNode;
};

export async function TodosProvider({ userId, children }: Props) {
  const { data } = await getClient().query({
    query,
    variables: {
      input: userId,
    },
  });

  return (
    <TodosContextProvider todosData={data.todos}>
      {children}
    </TodosContextProvider>
  );
}

const query = gql(`
  query findTodos($input: Int!) {
    todos(input: $input) {
      id
      text
      done
    }
  }
`);
