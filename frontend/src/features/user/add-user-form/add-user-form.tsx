"use client";

import { useFormState } from "react-dom";
import { FieldWrapper, InputField, SubmitButton } from "@/components/form";
import { addUserAction } from "./add-user-action";
import { useContext, useEffect } from "react";
import { UserContext } from "../store/use-users";

export function AddUserForm() {
  const [state, dispatch] = useFormState(addUserAction, {});
  const { users, setUsers } = useContext(UserContext);
  useEffect(() => {
    if (
      state.result?.user &&
      !users.some((user) => user.id === state.result?.user?.id)
    ) {
      setUsers([...users, state.result.user]);
    }
  }, [state]);

  return (
    <form action={dispatch} className="space-y-4">
      <FieldWrapper label="name" errors={state.errors?.name}>
        <InputField name="name" type="text" required />
      </FieldWrapper>
      <SubmitButton>add</SubmitButton>
    </form>
  );
}
