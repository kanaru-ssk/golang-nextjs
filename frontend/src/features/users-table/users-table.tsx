import { getClient } from "@/libs/apollo-client";
import { gql } from "@apollo/client";
import type { ReactNode } from "react";

const query = gql`
  query findUsers {
    users {
      id
      name
    }
  }
`;

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
        {data.users.map((user: any) => (
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
  return <th className="border border-neutral-800 px-4 py-2">{children}</th>;
}

function Td({ children }: ThTdProps) {
  return <td className="border border-neutral-800 px-4 py-2">{children}</td>;
}
