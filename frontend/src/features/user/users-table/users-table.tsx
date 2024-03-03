"use client";

import { useContext, type ReactNode } from "react";
import { UsersContext } from "../user-context/users-context";

export function UsersTable() {
  const { users } = useContext(UsersContext);

  return (
    <table>
      <thead>
        <tr>
          <Th>id</Th>
          <Th>name</Th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
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
    <th className="min-w-48 border-2 border-neutral-400 px-4 py-2 text-center">
      {children}
    </th>
  );
}

function Td({ children }: ThTdProps) {
  return (
    <td className="min-w-40 border-2 border-neutral-400 px-4 py-2 text-center">
      {children}
    </td>
  );
}
