"use client";

import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import { UserCard } from "../user-card/user-card";

type Props = {
  userId: number;
};

export function UserInfo({ userId }: Props) {
  const { loading, error, data } = useQuery(query, {
    variables: { input: { id: userId } },
  });

  if (loading || !data || error) return null;

  return <UserCard id={data.user.id} name={data.user.name} />;
}

const query = gql(`
  query findUser($input: UserInput!) {
    user(input: $input) {
      id
      name
    }
  }
`);
