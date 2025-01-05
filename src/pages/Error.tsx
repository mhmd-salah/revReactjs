import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div>Error</div>
      {error instanceof Response ? (
        <p>{error.statusText || "operation failed"}</p>
      ) : (
        <p>{(error?.data as string) || "An unknown error occurred"}</p>
      )}
    </>
  );
};

export default Error;
