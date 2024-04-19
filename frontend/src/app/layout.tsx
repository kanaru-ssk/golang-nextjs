import { Header } from "@/components/elements/header";
import { ApolloProvider } from "@/libs/apollo-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "golang-nextjs",
  description: "Generated by create next app",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
