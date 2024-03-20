"use client";

import { Link } from "@/components/elements";
import { useContext, type ReactNode } from "react";
import { UsersContext } from "../users-context/users-context";

export function UsersTable() {
  const { users } = useContext(UsersContext);

  return (
    <table>
      <tbody>
        {users.map((user) => (
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
