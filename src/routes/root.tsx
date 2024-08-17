import ButtonLink from "../components/button-link/button-link";

function Root() {
  return (
    <>
      <ButtonLink to={"/uncontrolled-components-form"}>
        Uncontrolled components form
      </ButtonLink>
      <ButtonLink to={"/react-hook-form"}> React hook form</ButtonLink>
    </>
  );
}

export default Root;
