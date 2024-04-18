"use client";

import { gql } from "@/__generated__";
import { Link } from "@/components/elements";
import { useQuery } from "@apollo/client";
import type { ReactNode } from "react";

export function UsersTable() {
  const { loading, error, data } = useQuery(query);

  if (loading || !data || error) return null;

  return (
    <table>
      <tbody>
        {data.users.map((user) => (
          <tr key={user.id}>
            <Td>
              <Link href={`/${user.id}`}>{user.name}</Link>
            </Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

type TdProps = {
  children: ReactNode;
};

function Td({ children }: TdProps) {
  return (
    <td className="min-w-56 border-y border-neutral-400 px-4 py-3">
      {children}
    </td>
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
