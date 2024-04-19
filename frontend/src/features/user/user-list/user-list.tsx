"use client";

import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { UserCard } from "../user-card/user-card";

export function UserList() {
  const { loading, error, data } = useQuery(query);

  if (loading || !data || error) return null;

  return (
    <ul>
      {data.users.map((user) => (
        <li
          key={user.id}
          className="border-b border-neutral-200 px-5 py-2 first:border-t"
        >
          <Link href={`/${user.id}`}>
            <UserCard {...user} />
          </Link>
        </li>
      ))}
    </ul>
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
