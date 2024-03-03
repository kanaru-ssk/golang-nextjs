"use server";

import { gql } from "@/__generated__";
import { getClient } from "@/libs/apollo-client";
import { notFound } from "next/navigation";

export async function fetchUserDetail(userId: number) {
  const { data, error } = await getClient().query({
    query,
    variables: {
      input: userId,
    },
  });
  if (!data || error) return notFound();

  return { user: data.user };
}

const query = gql(`
  query findUser($input: Int!) {
    user(input: $input) {
      id
      name
    }
  }
`);
