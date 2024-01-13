import type { ReactNode } from "react";
import { getUsers } from "@/libs/get-users";

export async function UserTable() {
  const users = await getUsers();

  if (!users) return null;

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

type ThProps = {
  children: ReactNode;
};

function Th({ children }: ThProps) {
  return <th className="border border-neutral-800 px-4 py-2">{children}</th>;
}

type TdProps = {
  children: ReactNode;
};

function Td({ children }: TdProps) {
  return <td className="border border-neutral-800 px-4 py-2">{children}</td>;
}
