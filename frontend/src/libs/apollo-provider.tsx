"use client";

import {
  ApolloClient,
  ApolloProvider as ApolloProviderOrigin,
  InMemoryCache,
} from "@apollo/client";
import type { ReactNode } from "react";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri:
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.host}/query`
      : "",
});

type Props = {
  children: ReactNode;
};

export function ApolloProvider({ children }: Props) {
  return (
    <ApolloProviderOrigin client={apolloClient}>
      {children}
    </ApolloProviderOrigin>
  );
}
