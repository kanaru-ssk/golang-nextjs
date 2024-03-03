"use client";

import { User } from "@/__generated__/graphql";
import { createContext, useState, type ReactNode } from "react";

type ContextValue = {
  users: User[];
  setUsers: (user: User[]) => void;
};

export const UsersContext = createContext({} as ContextValue);

type UsersContextProviderProps = {
  usersData: User[];
  children: ReactNode;
};

export function UserContextProvider({
  usersData,
  children,
}: UsersContextProviderProps) {
  const [users, setUsers] = useState<User[]>(usersData);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
