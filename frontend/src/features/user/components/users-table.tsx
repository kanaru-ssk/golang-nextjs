import type { ReactNode } from "react";
import { getUsers } from "../libs/get-users";

export async function UsersTable() {
  const users = await getUsers();

  if (!users || users.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <Th>id</Th>
          <Th>name</Th>
          <Th>email</Th>
          <Th>age</Th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.age}</Td>
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
