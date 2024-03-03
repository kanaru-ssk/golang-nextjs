"use client";

import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";
import { addUserAction } from "./add-user-action";
import { UsersContext } from "../users-context/users-context";

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
  }, [state]);

  return {
    errors: state.errors,
    dispatch,
  };
}
