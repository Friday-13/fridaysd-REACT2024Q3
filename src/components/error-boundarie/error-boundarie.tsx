import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();
  isRouteErrorResponse(error);
  return (
    <>
      <h1>No, I Am Your Father.</h1>
    </>
  );
}

export default ErrorBoundary;
