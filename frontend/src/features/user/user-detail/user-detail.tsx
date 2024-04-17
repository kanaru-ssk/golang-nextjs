"use client";

import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";

type Props = {
  userId: number;
};

export function UserDetail({ userId }: Props) {
  const { loading, error, data } = useQuery(query, {
    variables: { input: { id: userId } },
  });

  if (loading || !data || error) return null;

  return (
    <dl>
      <dt>userId</dt>
      <dd>{data.user.id}</dd>
      <dt>userName</dt>
      <dd>{data.user.name}</dd>
    </dl>
  );
}

const query = gql(`
  query findUser($input: UserInput!) {
    user(input: $input) {
      id
      name
    }
  }
`);
