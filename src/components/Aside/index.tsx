interface IProps {
  title: string;
  age: number;
  login: string;
}
const Aside = (props: IProps) => {
  const { title, age, login } = props;
  return (
    <>
      <h1>
        {title} and the age is : {age} and login is : {login}
      </h1>
    </>
  );
};
export default Aside;
