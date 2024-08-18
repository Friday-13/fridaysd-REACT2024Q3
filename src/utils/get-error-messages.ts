import { TFormErrorsState } from "./get-form-errors";

function getErrorMessages(
  errors: TFormErrorsState,
  fieldKey: string,
): Array<string> | undefined {
  if (!errors[fieldKey]) {
    return;
  }
  return errors[fieldKey];
}

export default getErrorMessages;
