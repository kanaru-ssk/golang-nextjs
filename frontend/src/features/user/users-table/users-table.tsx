"use server";

import { gql } from "@/__generated__";
import { getClient } from "@/libs/apollo-client";
import { UsersTableUI } from "./users-table-ui";

const query = gql(`
  query findUsers {
    users {
      id
      name
    }
  }
`);

export async function UsersTable() {
  const { data } = await getClient().query({ query });

  return <UsersTableUI usersData={data.users} />;
}
