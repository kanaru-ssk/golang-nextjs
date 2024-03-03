"use client";

import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";
import { UsersContext } from "../users-context/users-context";
import { addUserAction } from "./add-user-action";

export function useAddUserForm() {
  const [state, dispatch] = useFormState(addUserAction, {});
  const { users, setUsers } = useContext(UsersContext);
  useEffect(() => {
    if (
      state.result?.user &&
      !users.some((user) => user.id === state.result?.user?.id)
    ) {
      setUsers([...users, state.result.user]);
    }
  }, [users, setUsers, state]);

  return {
    errors: state.errors,
    dispatch,
  };
}
