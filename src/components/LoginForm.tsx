/* eslint-disable react-refresh/only-export-components */
import { ChangeEvent, memo, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";

function LoginForm() {
  console.log("<LoginForm/>");
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target 
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  console.log("input change")
  return (
    <form className="flex flex-col gap-4 max-w-xl mx-auto">
      <Input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
      />
      <TextArea />
      <Button>Login</Button>
    </form>
  );
}
export default memo(LoginForm);
