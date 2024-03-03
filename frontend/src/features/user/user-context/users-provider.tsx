"use server";

import { gql } from "@/__generated__";
import { getClient } from "@/libs/apollo-client";
import { UserContextProvider } from "./users-context";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export async function UsersProvider({ children }: Props) {
  const { data } = await getClient().query({ query });

  return (
    <UserContextProvider usersData={data.users}>{children}</UserContextProvider>
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
