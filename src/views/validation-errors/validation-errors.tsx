import { TFormErrorsState } from "@utils/get-form-errors";

function ValidationErrors(props: {
  errors: TFormErrorsState;
  fieldKey: string;
}) {
  if (!props.errors[props.fieldKey]) {
    return <p></p>;
  }
  return (
    <p>
      {props.errors[props.fieldKey].map((err, index) => (
        <li key={index}>{err}</li>
      ))}
    </p>
  );
}

export default ValidationErrors;
