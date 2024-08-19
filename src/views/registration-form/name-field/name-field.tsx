import { forwardRef, LegacyRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const FIELDNAME = "name";

type TInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function NameField(
  props: UseFormRegisterReturn,
  ref?: LegacyRef<HTMLInputElement>,
) {
  return (
    <>
      <label htmlFor={FIELDNAME}>Name</label>
      <input type="text" id={FIELDNAME} ref={ref} {...props} />
    </>
  );
}

export const NameFieldWithRef = forwardRef(NameField);
