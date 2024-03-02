import type { ReactNode } from "react";

type FieldWrapperProps = {
  label?: string;
  children: ReactNode;
  description?: string;
  errors?: string[] | undefined;
};

export const FieldWrapper = ({
  label,
  children,
  description,
  errors,
}: FieldWrapperProps) => {
  return (
    <div>
      <label className="block">
        {label}
        <div className="mt-1">{children}</div>
      </label>
      <p>{description}</p>
      <div role="alert" aria-label="error">
        {errors?.map((error) => (
          <p key={error} className="text-sm font-semibold text-red-500">
            {error}
          </p>
        ))}
      </div>
    </div>
  );
};
