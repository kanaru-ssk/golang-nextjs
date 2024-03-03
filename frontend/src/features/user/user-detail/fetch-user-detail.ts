"use server";

import { gql } from "@/__generated__";
import { getClient } from "@/libs/apollo-client";

export async function fetchUserDetail(userId: string) {
  const { data } = await getClient().query({
    query,
    variables: {
      input: userId,
    },
  });

  return { user: data.user };
}

const query = gql(`
  query findUser($input: ID!) {
    user(input: $input) {
      id
      name
    }
  }
`);
