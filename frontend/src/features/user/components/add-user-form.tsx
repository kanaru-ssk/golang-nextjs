"use client";

import { useFormState } from "react-dom";
import { FieldWrapper } from "@/components/form";
import { addUserAction } from "../libs/add-user-action";

export function AddUserForm() {
  const [errors, dispatch] = useFormState(addUserAction, undefined);

  return (
    <form action={dispatch} className="space-y-6">
      <FieldWrapper label="name">
        <input type="text" />
      </FieldWrapper>
    </form>
  );
}
