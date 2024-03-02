"use client";

import { User } from "@/__generated__/graphql";
import { useState, createContext, type ReactNode } from "react";

type ContextValue = {
  users: User[];
  setUsers: (user: User[]) => void;
};

export const UserContext = createContext({} as ContextValue);

type UserContextProviderProps = {
  children: ReactNode;
};

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
