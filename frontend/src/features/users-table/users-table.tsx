import type { ReactNode } from "react";
import { gql } from "@/__generated__";
import { getClient } from "@/libs/apollo-client";

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

  return (
    <table>
      <thead>
        <tr>
          <Th>id</Th>
          <Th>name</Th>
        </tr>
      </thead>
      <tbody>
        {data.users.map((user) => (
          <tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

type ThTdProps = {
  children: ReactNode;
};

function Th({ children }: ThTdProps) {
  return (
    <th className="min-w-48 border-2 border-neutral-400 px-4 py-2">
      {children}
    </th>
  );
}

function Td({ children }: ThTdProps) {
  return (
    <td className="min-w-40 border-2 border-neutral-400 px-4 py-2">
      {children}
    </td>
  );
}
