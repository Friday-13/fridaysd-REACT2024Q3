function Error(props: { code: string; message: string }) {
  return (
    <div>
      <h2>Error {props.code}</h2>
      <section>
        <span>{props.message}</span>
      </section>
    </div>
  );
}

export default Error;
