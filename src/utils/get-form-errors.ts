import { ValidationError } from "yup";

export type TFormErrorsState = { [key: string]: [string] };

function getFormErrors(error: ValidationError) {
  const errors: TFormErrorsState = {};
  error.inner.forEach((er) => {
    const key = er.path;
    const value = er.message;
    if (errors[key!]) {
      errors[key!].push(value);
    } else {
      errors[key!] = [value];
    }
    console.log(`${key}: ${value}`);
  });
  return errors;
}

export default getFormErrors;
