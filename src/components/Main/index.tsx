import Heading from "../Heading";

export default function Main({
  title,
  pargraph,
}: {
  title: string;
  pargraph: string;
}) {
  return (
    <>
      <h1>{title}</h1>
      <p>{pargraph}</p>
      <Heading title="this heading components ">
        <span>🦋</span>
      </Heading>
    </>
  );
}
