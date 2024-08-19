function ValidationErrors(props: { errors?: Array<string | undefined> }) {
  return (
    <div>
      {props.errors?.map((err, index) => {
        if (err) {
          return <li key={index}>{err}</li>;
        }
      })}
    </div>
  );
}

export default ValidationErrors;
