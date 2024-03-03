"use server";

import { gql } from "@/__generated__";
import { getClient } from "@/libs/apollo-client";
import type { ReactNode } from "react";
import { UsersContextProvider } from "./users-context";

type Props = {
  children: ReactNode;
};

export async function UsersProvider({ children }: Props) {
  const { data } = await getClient().query({ query });

  return (
    <UsersContextProvider usersData={data.users}>
      {children}
    </UsersContextProvider>
  );
}

const query = gql(`
  query findUsers {
    users {
      id
      name
    }
  }
`);
